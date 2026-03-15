import { useRef, useState, useCallback } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import useSectionReveal from '../../hooks/useSectionReveal'
import SectionContainer from '../layout/SectionContainer'
import SectionHeading from '../ui/SectionHeading'
import CopyBlock from '../ui/CopyBlock'

/**
 * @param {{ filter: { id: string, label: string }, isActive: boolean, onClick: () => void }} props
 */
function FilterPill({ filter, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`focus:ring-accent/50 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 focus:ring-2 focus:outline-none ${
        isActive ? 'bg-accent text-background' : 'bg-surface text-muted hover:text-foreground'
      }`}
    >
      {filter.label}
    </button>
  )
}

/**
 * @param {{ model: import('../../content/pt').default['models']['items'][0], isExpanded: boolean, onToggle: () => void, index: number, isVisible: boolean }} props
 */
function ModelCard({ model, isExpanded, onToggle, index, isVisible }) {
  return (
    <div
      className={`bg-surface cursor-pointer rounded-lg border transition-all duration-300 ${
        isExpanded
          ? 'border-accent/40 shadow-[0_0_20px_rgba(201,168,76,0.08)]'
          : 'border-accent/10 hover:border-accent/30 hover:shadow-[0_0_15px_rgba(201,168,76,0.05)]'
      } ${isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'}`}
      style={{ transitionDelay: isVisible ? `${index * 50}ms` : '0ms' }}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onToggle()
        }
      }}
      role="button"
      tabIndex={isVisible ? 0 : -1}
      aria-expanded={isExpanded}
    >
      <div className="p-4 md:p-5">
        <div className="flex items-start justify-between gap-3">
          <p className="text-accent min-w-0 text-lg font-semibold">{model.name}</p>
          <span className="text-muted bg-background shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium">
            {model.costLabel}
          </span>
        </div>
        <p className="text-muted mt-2 text-sm leading-relaxed">{model.description}</p>
      </div>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="border-accent/10 border-t px-4 pt-4 pb-4 md:px-5 md:pb-5">
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs">
              <span className="text-muted">
                <span className="text-foreground font-medium">{model.pricing}</span>
              </span>
              <span className="text-muted">
                Contexto: <span className="text-foreground font-medium">{model.context}</span>
              </span>
            </div>

            <div className="mt-3">
              <div className="flex flex-wrap gap-1.5">
                {model.strengths.map((s) => (
                  <span
                    key={s}
                    className="bg-accent/10 text-accent rounded px-2 py-0.5 text-xs font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {model.availableIn.map((tool) => (
                <span key={tool} className="bg-background text-muted rounded px-2 py-0.5 text-xs">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ModelsSection() {
  const { t } = useLanguage()
  const revealRef = useRef(null)
  useSectionReveal(revealRef)

  const [activeFilter, setActiveFilter] = useState('all')
  const [expandedModel, setExpandedModel] = useState(/** @type {string | null} */ (null))

  const handleFilterChange = useCallback(
    /** @param {string} filterId */
    (filterId) => {
      setActiveFilter(filterId)
      setExpandedModel(null)
    },
    [],
  )

  const handleToggleModel = useCallback(
    /** @param {string} modelName */
    (modelName) => {
      setExpandedModel((prev) => (prev === modelName ? null : modelName))
    },
    [],
  )

  const filteredItems = t.models.items.filter(
    (item) => activeFilter === 'all' || item.family === activeFilter,
  )

  return (
    <SectionContainer id="models">
      <div ref={revealRef}>
        <SectionHeading>{t.models.title}</SectionHeading>
        <CopyBlock>
          <p>{t.models.body}</p>
        </CopyBlock>

        <div className="mt-10 flex flex-wrap gap-2">
          {t.models.filters.map((filter) => (
            <FilterPill
              key={filter.id}
              filter={filter}
              isActive={activeFilter === filter.id}
              onClick={() => handleFilterChange(filter.id)}
            />
          ))}
        </div>

        <div className="gap-content mt-6 grid md:grid-cols-2">
          {t.models.items.map((model, i) => {
            const isVisible = filteredItems.includes(model)
            const visibleIndex = filteredItems.indexOf(model)
            return (
              <ModelCard
                key={model.name}
                model={model}
                isExpanded={expandedModel === model.name}
                onToggle={() => handleToggleModel(model.name)}
                index={isVisible ? visibleIndex : i}
                isVisible={isVisible}
              />
            )
          })}
        </div>

        <p className="text-muted mt-8 text-sm">
          {t.models.lastUpdated} — {t.models.note}
        </p>
      </div>
    </SectionContainer>
  )
}
