/**
 * @param {{ children: React.ReactNode, className?: string }} props
 */
export default function SectionHeading({ children, className = '' }) {
  return (
    <h2
      className={`text-accent mb-content text-3xl font-semibold tracking-wide md:text-4xl ${className}`}
    >
      {children}
    </h2>
  )
}
