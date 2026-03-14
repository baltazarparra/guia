import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../../App'

describe('smoke tests', () => {
  it('App renders without crashing', () => {
    render(<App />)
    expect(
      screen.getByText('Um guia prático para desenvolvimento com agentes de código.'),
    ).toBeInTheDocument()
  })

  it('renders all 8 section IDs', () => {
    const { container } = render(<App />)
    const expectedIds = [
      'hero',
      'agents',
      'tools',
      'plan',
      'roadmap',
      'execution',
      'templates',
      'closing',
    ]

    for (const id of expectedIds) {
      expect(container.querySelector(`#${id}`), `section #${id} missing`).not.toBeNull()
    }
  })

  it('language toggle renders PT and EN buttons', () => {
    render(<App />)
    expect(screen.getByText('PT')).toBeInTheDocument()
    expect(screen.getByText('EN')).toBeInTheDocument()
  })
})
