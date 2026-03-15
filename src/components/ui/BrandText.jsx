/**
 * Renders "guia" with "ia" in bold for brand consistency.
 * Accepts strings like "Guia prático" or "guia" and outputs gu + <strong>ia</strong> + rest.
 *
 * @param {{ children: string, className?: string }} props
 */
export default function BrandText({ children, className = '' }) {
  const text = typeof children === 'string' ? children : ''
  const match = text.match(/^([Gg]u)(ia)(.*)$/)
  if (match) {
    const [, prefix, suffix, restText] = match
    return (
      <span className={className}>
        {prefix}
        <strong>{suffix}</strong>
        {restText}
      </span>
    )
  }
  return <span className={className}>{text}</span>
}
