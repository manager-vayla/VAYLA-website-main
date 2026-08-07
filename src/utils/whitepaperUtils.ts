import { VAYLA_FACTS } from '@/lib/officialFacts';

/** The v3.8 PDF is the current official whitepaper source of truth. */
export async function getWhitepaperUrl(): Promise<string> {
  return VAYLA_FACTS.source.whitepaper;
}

export function getWhitepaperUrlSync(): string {
  return VAYLA_FACTS.source.whitepaper;
}
