/** English catalogue style tokens → Tours message keys. Filter URLs stay English. */
const STYLE_KEYS: Record<string, string> = {
  Private: 'stylePrivate',
  Family: 'styleFamily',
  Luxury: 'styleLuxury',
  'Small Group': 'styleSmallGroup',
  Expedition: 'styleExpedition',
  Cultural: 'styleCultural',
  Trekking: 'styleTrekking',
  Hiking: 'styleHiking',
  Climbing: 'styleClimbing',
  Wildlife: 'styleWildlife',
  Birding: 'styleBirding',
  Photography: 'stylePhotography',
  Festival: 'styleFestival',
  Active: 'styleActive',
  Cycling: 'styleCycling',
  Running: 'styleRunning',
  'Slow Travel': 'styleSlowTravel',
}

export function styleMessageKey(token: string): string | undefined {
  return STYLE_KEYS[token]
}

/** Localize a single token, or return the English token if unknown. */
export function localizeStyleToken(
  token: string,
  t: (key: string) => string,
): string {
  const key = STYLE_KEYS[token]
  return key ? t(key) : token
}

/** Localize a full "Cultural · Luxury · Private" style string. */
export function localizeStyleString(
  style: string,
  t: (key: string) => string,
): string {
  return style
    .split('·')
    .map((s) => localizeStyleToken(s.trim(), t))
    .join(' · ')
}
