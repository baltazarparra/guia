/**
 * @param {{ children: React.ReactNode }} props
 */
export default function PageShell({ children }) {
  return (
    <main className="min-h-screen">
      {children}
    </main>
  )
}
