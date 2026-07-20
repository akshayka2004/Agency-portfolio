/**
 * The T−0 wordmark in running text.
 *
 * Set in MuseoModerno to match the logo's geometric letterforms, so the company
 * name reads the same everywhere it appears in prose, headings and chrome.
 * Uses the real minus sign (U+2212) rather than a hyphen — it matches the mark.
 */
export default function Brand({ className = "" }: { className?: string }) {
  return <span className={`font-brand ${className}`}>T−0</span>;
}
