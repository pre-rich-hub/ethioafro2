'use client'

import { useState, useEffect, useRef } from 'react'
import { MessageSquare, X, Send } from 'lucide-react'
import { contact } from '@/lib/constants/contact'
import { streamAssistantChat } from '@/features/support/api/assistant.api'

// Custom WhatsApp SVG Icon to look consistent and sharp
function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    )
}

type Message = {
    id: string
    sender: 'user' | 'bot'
    text: string
    timestamp: Date
}

const QUICK_QUESTIONS = [
    'What makes Lalibela worth a special trip?',
    'Tell me about the Omo Valley tours',
    'When should I actually travel to Ethiopia?',
    'How does the booking process work?',
]

export function FloatingSupport() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'welcome',
            sender: 'bot',
            text: 'Selam! I\'m the Simien Ethiopia Tours travel assistant. Ask me about any destination, tour or logistics question, and I\'ll help you shape a private itinerary.',
            timestamp: new Date(),
        },
    ])
    const [input, setInput] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [isStreaming, setIsStreaming] = useState(false)
    const chatEndRef = useRef<HTMLDivElement>(null)
    const sessionIdRef = useRef<string | null>(null)
    const activeBotMessageIdRef = useRef<string | null>(null)

    // Auto-scroll to bottom of messages
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, isTyping])

    // Convert contact whatsapp format to wa.me link
    const formattedWhatsapp = contact.whatsapp.replace(/[^0-9]/g, '')
    const whatsappUrl = `https://wa.me/${formattedWhatsapp}`

    const appendBotMessage = (text: string) => {
        setMessages((prev) => [...prev, {
            id: crypto.randomUUID(),
            sender: 'bot',
            text,
            timestamp: new Date(),
        }])
    }

    const finishStream = () => {
        activeBotMessageIdRef.current = null
        setIsTyping(false)
        setIsStreaming(false)
    }

    const handleSendMessage = (text: string) => {
        if (!text.trim() || isStreaming) return

        const userMessage: Message = {
            id: crypto.randomUUID(),
            sender: 'user',
            text,
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, userMessage])
        setInput('')
        setIsTyping(true)
        setIsStreaming(true)

        if (!sessionIdRef.current) sessionIdRef.current = crypto.randomUUID()

        void streamAssistantChat(text, sessionIdRef.current, {
            onMeta: (sessionId) => {
                sessionIdRef.current = sessionId
            },
            onDelta: (delta) => {
                if (activeBotMessageIdRef.current === null) {
                    const id = crypto.randomUUID()
                    activeBotMessageIdRef.current = id
                    setIsTyping(false)
                    setMessages((prev) => [...prev, {
                        id,
                        sender: 'bot',
                        text: delta,
                        timestamp: new Date(),
                    }])
                } else {
                    setMessages((prev) => prev.map((message) =>
                        message.id === activeBotMessageIdRef.current
                            ? { ...message, text: message.text + delta }
                            : message
                    ))
                }
            },
            onDone: (done) => {
                if (done.handoff.type !== 'none') {
                    appendBotMessage(
                        'I have reached a limit for now. For a personal tailor-made proposal, please use our Enquiry Form (/contact) or chat with us on WhatsApp.'
                    )
                }
                finishStream()
            },
            onError: (message) => {
                appendBotMessage(message)
                appendBotMessage('For immediate personal help, reach out to us on WhatsApp.')
                finishStream()
            },
        })
    }

    return (
        <>
            {/* Stacked floating action buttons at bottom-right */}
            <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
                {/* WhatsApp Float Button */}
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact us on WhatsApp"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-[#22c35e] group relative"
                >
                    <WhatsAppIcon className="h-6 w-6" />
                    <span className="absolute right-14 scale-0 rounded-sm bg-primary px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-all group-hover:scale-100 whitespace-nowrap shadow-md">
                        Chat on WhatsApp
                    </span>
                </a>

                {/* AI Assistant Chat Toggle Button */}
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label="Open AI Assistant"
                    className={`flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:scale-95 group relative cursor-pointer ${isOpen
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-accent text-accent-foreground hover:bg-accent/90'
                        }`}
                >
                    {isOpen ? (
                        <X className="h-5 w-5" />
                    ) : (
                        <MessageSquare className="h-6 w-6" />
                    )}
                    <span className="absolute right-16 scale-0 rounded-sm bg-primary px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-all group-hover:scale-100 whitespace-nowrap shadow-md">
                        Ask a Travel Designer
                    </span>
                </button>
            </div>

            {/* Chat Window Panel */}
            <div
                className={`fixed bottom-24 right-6 z-40 flex h-[525px] w-[350px] flex-col overflow-hidden rounded-sm border border-background/10 bg-secondary text-secondary-foreground shadow-2xl transition-all duration-500 origin-bottom-right sm:w-[400px] ${isOpen
                    ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                    : 'opacity-0 translate-y-6 scale-95 pointer-events-none'
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-background/10 px-5 py-4">
                    <div>
                        <h3 className="font-serif text-lg text-secondary-foreground">
                            Ask a Travel Designer
                        </h3>
                        <p className="mt-0.5 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.14em] text-secondary-foreground/60">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
                            Usually replies in minutes
                        </p>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        aria-label="Close Chat"
                        className="rounded-full p-1.5 text-secondary-foreground/60 transition-colors hover:bg-background/10 hover:text-secondary-foreground cursor-pointer"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                {/* Message Area */}
                <div className="custom-scrollbar flex-1 space-y-4 overflow-y-auto p-5">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex max-w-[85%] gap-2.5 ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
                                }`}
                        >
                            <div
                                className={`rounded-sm px-4 py-3 text-sm leading-relaxed ${msg.sender === 'user'
                                    ? 'bg-accent text-accent-foreground'
                                    : 'border border-background/10 bg-background/5 text-secondary-foreground/90'
                                    }`}
                            >
                                <p className="whitespace-pre-line">{msg.text}</p>
                            </div>
                        </div>
                    ))}

                    {/* Typing simulation */}
                    {isTyping && (
                        <div className="mr-auto flex max-w-[85%] items-center">
                            <div className="flex items-center gap-1 rounded-sm border border-background/10 bg-background/5 px-4 py-3.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-accent-light/70 animate-bounce duration-300"></span>
                                <span className="h-1.5 w-1.5 rounded-full bg-accent-light/70 animate-bounce [animation-delay:0.15s] duration-300"></span>
                                <span className="h-1.5 w-1.5 rounded-full bg-accent-light/70 animate-bounce [animation-delay:0.3s] duration-300"></span>
                            </div>
                        </div>
                    )}
                    <div ref={chatEndRef} />
                </div>

                {/* Quick Suggestion Chips */}
                <div className="flex gap-2 overflow-x-auto whitespace-nowrap border-t border-background/10 px-4 py-2.5 scrollbar-none">
                    {QUICK_QUESTIONS.map((q) => (
                        <button
                            key={q}
                            onClick={() => handleSendMessage(q)}
                            className="rounded-full border border-background/15 px-3 py-1.5 text-[10px] font-medium tracking-wide text-secondary-foreground/70 transition-all duration-200 hover:border-accent-light hover:text-accent-light cursor-pointer"
                        >
                            {q}
                        </button>
                    ))}
                </div>

                {/* Input area */}
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleSendMessage(input)
                    }}
                    className="flex items-center gap-2 border-t border-background/10 p-4"
                >
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        disabled={isStreaming}
                        placeholder="Ask a question about Ethiopia..."
                        className="flex-1 rounded-full border border-background/15 bg-transparent px-4 py-2.5 text-sm text-secondary-foreground placeholder:text-secondary-foreground/40 outline-none transition-all duration-200 focus:border-accent-light disabled:opacity-50"
                    />
                    <button
                        type="submit"
                        disabled={isStreaming || !input.trim()}
                        aria-label="Send message"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground transition-colors hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                        <Send className="h-4 w-4" />
                    </button>
                </form>
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 5px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.12);
                    border-radius: 99px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.22);
                }
            `}</style>
        </>
    )
}
