/**
 * @param {{ id: string, children: React.ReactNode, className?: string }} props
 */
export default function SectionContainer({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`py-section md:py-section-lg max-w-3xl mx-auto px-6 ${className}`}
    >
      {children}
    </section>
  )
}
