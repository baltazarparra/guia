# PRD Report — Phase 6: Polish and Optimization

## PRD Reference

| Field    | Value                 |
| -------- | --------------------- |
| PRD file | `docs/PRD-phase-6.md` |
| Date     | 2026-03-14            |
| Author   | baltz                 |

## Decisions Summary

| Decision                                                               | Justification                                                                                                                                                                                            |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Keep WebGL error boundary rendering `null` (no fallback UI)            | User preference. Page content is fully functional without the 3D element — progressive enhancement principle. Adding a CSS placeholder adds complexity with minimal value for V1                         |
| Test Chrome + code review for Safari/Firefox (no real browser testing) | Pragmatic for AI-assisted development. Chrome DevTools covers mobile simulation. Known Safari/Firefox issues can be identified via code review without real-browser access                               |
| Main JS bundle (excluding 3D chunk) is the metric for the 300KB budget | The 3D chunk (236.91 KB gzipped) is Three.js/R3F library code, not a model file. It's already lazy-loaded. The PLAN.md budget says "excluding 3D model" — procedural geometry means no model file exists |
| Scene simplification is conditional (only if 6.3 fails)                | Current scene is already minimal: 4 meshes, 2 lights, procedural geometry. Premature simplification adds complexity without evidence of need                                                             |
| Frame-rate-dependent lerp (0.08) is acceptable for V1                  | Visual difference between 30fps and 60fps lerp is subtle. Frame-rate-independent lerp adds complexity without measurable UX improvement                                                                  |
| `useSectionReveal` non-reactive reduced motion is acceptable for V1    | Reading `prefersReducedMotion` once on mount covers the vast majority of users. Runtime toggle requires page reload. Reactive listener adds complexity for a rare edge case                              |
| 3D material colors stay hardcoded (not from design tokens)             | Cover `#2a2a2a` and page `#f5f5f0` are material properties for the 3D object, not UI colors. Connecting them to CSS custom properties would require a bridge mechanism with no clear benefit             |

## Risk Assessment

| Risk                                                   | Severity | Mitigation                                                                                       | Status                  |
| ------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| LCP exceeds 2.5s under throttled conditions            | Medium   | 3D chunk already lazy-loaded; hero text renders from main bundle (~115 KB gzipped)               | Pending (verify in 6.3) |
| Frame rate drops below 30fps on mobile simulation      | Medium   | Scene is minimal (4 meshes, 2 lights); further options: disable directional light, reduce planes | Pending (verify in 6.3) |
| Safari-specific WebGL or CSS issues post-launch        | Medium   | Code review for known patterns; error boundary provides fallback; issues documented              | Mitigated               |
| Transition tuning changes overall feel                 | Low      | Numeric value adjustments; easy to revert; lerp provides consistent smoothing                    | Mitigated               |
| Visual cleanup triggers ScrollTrigger desync           | Low      | `ScrollTrigger.refresh()` from Phase 4 handles layout changes                                    | Mitigated               |
| DevTools simulation doesn't match real device behavior | Medium   | Accepted limitation for V1; real-device testing is manual post-launch QA                         | Accepted                |

## Generated Tasks

Tasks map directly to `IMPLEMENTATION-ROADMAP.md` Phase 6 (tasks 6.1–6.9):

- [ ] **6.1**: Mobile viewport testing — test at 375px and 390px with CPU 4x throttle, verify readability, scroll smoothness, 3D simplification, fix any issues
- [ ] **6.2**: Bundle size validation — run build, verify main JS < 300KB gzipped, assess 3D chunk size, identify optimization opportunities if over budget
- [ ] **6.3**: Runtime performance validation — measure LCP (< 2.5s), frame rate (30fps+), TTI (< 4s) on simulated 4G with CPU throttle
- [ ] **6.4**: 3D scene simplification — conditional on 6.3 results. Options: reduce lights, reduce geometry, skip 3D on mobile
- [ ] **6.5**: `prefers-reduced-motion` verification — enable in DevTools, verify static notebook, no DOM animations, all content visible
- [ ] **6.6**: WebGL error boundary verification — break WebGL, verify fallback (null), verify all content accessible
- [ ] **6.7**: Cross-browser code review — audit for Safari WebGL/CSS and Firefox compatibility issues, apply preventive fixes
- [ ] **6.8**: Visual cleanup pass — audit spacing, colors, typography, alignment across all sections
- [ ] **6.9**: Transition refinement — review notebook pose transitions, tune values in `notebookStates.js` if needed, verify DOM animation consistency

### Task Dependency Graph

```
6.1 (mobile testing) ─────────────────────────────────────────────┐
                                                                  │
6.2 (bundle size) ──┐                                             │
                    ├──> 6.4 (simplify 3D, conditional) ──────────┤
6.3 (runtime perf) ─┘                                            │
                                                                  ├──> quality gate
6.5 (reduced motion) ────────────────────────────────────────────┤
                                                                  │
6.6 (error boundary) ────────────────────────────────────────────┤
                                                                  │
6.7 (cross-browser) ─────────────────────────────────────────────┤
                                                                  │
6.8 (visual cleanup) ────────────────────────────────────────────┤
                                                                  │
6.9 (transitions) ───────────────────────────────────────────────┘
```

Parallelization opportunities:

- 6.1, 6.2, 6.5, 6.6, 6.7, 6.8, 6.9 can all start independently
- 6.3 depends on having a running dev server (trivial)
- 6.4 depends on 6.2 and 6.3 (only runs if performance budget fails)
- Most tasks are verification + targeted fixes, not sequential builds

## Implementation Readiness

| Criterion                      | Status | Notes                                                                                                                                        |
| ------------------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Scope clearly defined          | Yes    | 9 tasks covering mobile testing, performance budget, accessibility, cross-browser, visual polish, and transitions                            |
| Risks identified and mitigated | Yes    | 6 risks with concrete mitigations; 2 pending verification (LCP, frame rate), 1 accepted (real-device limitation)                             |
| Dependencies resolved          | Yes    | Phase 5 complete (5/5 tasks). All scene components, hooks, and content are stable. Chrome DevTools available                                 |
| Open questions answered        | Yes    | WebGL fallback, cross-browser strategy, budget interpretation, and simplification trigger all decided                                        |
| Success criteria are testable  | Yes    | 14 observable conditions: viewport tests, bundle sizes, Lighthouse metrics, reduced motion, error boundary, visual consistency, quality gate |

## Readiness Verdict

**Verdict:** Ready

**Justification:** Phase 5 completed all content work — templates, CTA links, and bilingual copy are finalized. Phase 6 is a verification and polish phase with no architectural changes. The codebase is stable: the 3D scene is minimal (4 meshes, procedural geometry, 2 lights), performance hooks (`useReducedComplexity`, `useSectionReveal`) handle edge cases, and the error boundary exists. The main JS bundle (114.77 KB gzipped) is well within the 300KB performance budget. Most tasks are verification + targeted fixes rather than new builds. The 3D scene simplification (6.4) is conditional and may not be needed given the scene's existing simplicity. All tooling (Chrome DevTools, Lighthouse) is available. Implementation can begin immediately.
