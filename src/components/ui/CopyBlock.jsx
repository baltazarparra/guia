/**
 * @param {{ children: React.ReactNode, className?: string }} props
 */
export default function CopyBlock({ children, className = '' }) {
  return (
    <div className={`text-muted space-y-4 text-base leading-relaxed md:text-lg ${className}`}>
      {children}
    </div>
  )
}
