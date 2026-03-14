import PageShell from './components/layout/PageShell'
import SectionContainer from './components/layout/SectionContainer'

export default function App() {
  return (
    <PageShell>
      <SectionContainer id="hero">
        <h1 className="text-4xl font-bold text-foreground">Proxy</h1>
        <p className="mt-4 text-muted">
          Um guia pratico para desenvolvimento com agentes de codigo.
        </p>
        <p className="mt-2 text-accent font-semibold">Accent color active.</p>
        <div className="mt-6 p-4 bg-surface rounded-lg">
          <p>Surface background token.</p>
        </div>
        <p className="mt-4 hidden md:block text-sm text-muted">
          Breakpoint test: visible only on md+ screens.
        </p>
      </SectionContainer>

      <SectionContainer id="test">
        <h2 className="text-2xl font-semibold text-foreground">Second Section</h2>
        <p className="mt-4 text-muted gap-content">
          Spacing rhythm verification — section padding and content gap.
        </p>
      </SectionContainer>
    </PageShell>
  )
}
