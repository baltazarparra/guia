# PRD Report — Diamond Replacement

## PRD Reference

| Field    | Value                           |
| -------- | ------------------------------- |
| PRD file | docs/PRD-diamond-replacement.md |
| Date     | 2026-03-15                      |
| Author   | baltz                           |

## Decisions Summary

| Decision                                                   | Justification                                                                                                                    |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Geometria: IcosahedronGeometry ou DodecahedronGeometry     | Referência exige facetas triangulares/trapezoidais bem definidas; octaedro (8 faces) insuficiente. Mais facetas = mais reflexos. |
| Material: meshPhysicalMaterial com attenuationColor quente | Criar refração âmbar/dourada conforme referência. attenuationColor (#c9a84c) + attenuationDistance finita.                       |
| Poses: transições sutis inicialmente                       | Manter consistência; ajustar rotações em diamondStates se necessário para explorar facetas.                                      |
| Nomenclatura: manter NotebookScene                         | Evitar quebrar PageShell e smoke test; renomear apenas modelo e estados.                                                         |
| Material simplificado em useReducedComplexity              | Desativar transmission em mobile/reduced-motion para performance.                                                                |

## Risk Assessment

| Risk                                                | Severity | Mitigation                                                                        | Status    |
| --------------------------------------------------- | -------- | --------------------------------------------------------------------------------- | --------- |
| Material transmission degrada performance em mobile | High     | Desativar transmission em useReducedComplexity; meshStandardMaterial simplificado | Mitigated |
| Efeito visual distante da referência                | Medium   | Iterar material e iluminação; shader customizado como fallback                    | Mitigated |
| Geometria procedural complexa                       | Medium   | Começar com icosaedro/dodecaedro; refinar depois                                  | Mitigated |
| Renomeação quebra imports                           | Low      | Busca global; npm run check após cada etapa                                       | Mitigated |
| Bloom destaca demais ou de menos                    | Low      | Ajustar luminanceThreshold e intensity                                            | Mitigated |

## Generated Tasks

- [ ] 1.1: Criar diamondStates.js
- [ ] 1.2: Criar useSceneState.js
- [ ] 1.3–1.5: Atualizar SceneController, remover notebook, smoke test
- [ ] 2.1–2.4: Criar DiamondModel (geometria, material, integração, simplified)
- [ ] 3.1–3.4: Ajustar SceneLights, Environment, Bloom, poses, prefers-reduced-motion
- [ ] 4.1–4.4: Validação, performance, documentação, quality gate

## Implementation Readiness

| Criterion                      | Status | Notes                                              |
| ------------------------------ | ------ | -------------------------------------------------- |
| Scope clearly defined          | Yes    | PRD in scope/out of scope explicit                 |
| Risks identified and mitigated | Yes    | All 5 risks have mitigations                       |
| Dependencies resolved          | Yes    | Geometria, material, poses, nomenclatura decididos |
| Open questions answered        | Yes    | Resolvidos no plano de implementação               |
| Success criteria are testable  | Yes    | 10 critérios verificáveis                          |

## Readiness Verdict

**Verdict:** Ready

**Justification:** Escopo claro, riscos mitigados, dependências resolvidas, open questions respondidas. O plano de implementação em 4 fases está definido e pode prosseguir.
