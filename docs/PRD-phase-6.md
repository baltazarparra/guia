# PRD — Phase 6: Polish and Optimization

## Metadata

| Field  | Value      |
| ------ | ---------- |
| Date   | 2026-03-14 |
| Author | baltz      |
| Status | Draft      |

## Problem Statement

Phases 1–5 delivered a functionally complete landing page: 8 bilingual sections, scroll-driven notebook transitions, DOM text animations, real template links, and publication-ready copy. The page works.

However, no systematic quality pass has been done:

- **Mobile experience is untested under throttled conditions.** The 3D scene simplification (`useReducedComplexity`) exists but hasn't been verified under CPU 4x throttle on a 375px viewport. Touch scrolling, frame rate, and layout at iPhone SE/iPhone 14 widths haven't been validated.
- **Performance budget is unvalidated.** PLAN.md defines concrete thresholds (LCP < 2.5s, JS bundle < 300KB gzipped excluding 3D, frame rate 30fps+, TTI < 4s). The current build produces a main bundle of 114.77 KB gzipped and a 3D chunk of 236.91 KB gzipped — the main bundle is within budget, but total JS load and runtime metrics haven't been measured.
- **`prefers-reduced-motion` has gaps.** `SceneController` sets rotation but not position when reduced motion is active, leaving the notebook at `[0, 0, 0]` instead of a deliberate resting pose. `useSectionReveal` reads the media query once on mount and doesn't react to runtime changes.
- **WebGL error boundary renders `null`.** This is acceptable per user decision, but has not been verified to confirm that all content remains accessible when WebGL fails.
- **Cross-browser compatibility is unverified.** Safari WebGL quirks, Firefox GSAP behavior, and CSS rendering differences haven't been checked.
- **Visual consistency hasn't been audited.** Spacing, color token usage, typography hierarchy, and CTA alignment haven't been reviewed holistically across all sections.
- **Notebook transitions haven't been tuned.** The templates-to-closing transition involves a 0.65 radian jump in `rotation.y` (0.8 to 0.15). While `MathUtils.lerp(0.08)` smooths it, the perceptual result hasn't been reviewed.

Without this pass, the page ships with unknown performance characteristics, untested edge cases, and potential visual inconsistencies.

## Goals

- **Mobile-verified:** all 8 sections are readable, scrollable, and performant at 375px and 390px under CPU 4x throttle.
- **Performance budget met:** LCP < 2.5s, main JS bundle < 300KB gzipped, frame rate 30fps+ during scroll, TTI < 4s (all on simulated 4G).
- **Accessibility edge cases covered:** `prefers-reduced-motion` fully disables all animations (DOM and 3D), WebGL failure leaves the page fully functional.
- **Cross-browser confidence:** known Safari and Firefox issues identified and addressed via code review.
- **Visual polish:** spacing, colors, typography, and alignment are consistent across all sections.
- **Transitions refined:** notebook pose transitions feel subtle and intentional, with no jarring jumps.

## Non-Goals

- **Tier 2/3 notebook features:** no page-flip animation, no open/close morph, no content on 3D pages.
- **New components or sections:** no UI additions. This is a refinement phase.
- **Analytics or tracking:** no performance monitoring tools or error tracking services.
- **Real-device testing:** testing is done via Chrome DevTools simulation. Real iPhone/Safari testing is manual and out of scope for this phase.
- **2.5D fallback implementation:** if the 3D scene performs adequately on simulated mobile, the CSS-based fallback is deferred.
- **WebGL fallback UI:** the error boundary will continue to render `null` (page content works without the 3D element). This is acceptable for V1.
- **Bundle splitting or lazy loading changes:** the 3D chunk is already code-split via dynamic import. No further splitting unless the performance budget fails.

## Target Audience

- Mobile visitors (iPhone SE, iPhone 14 class) who need smooth scrolling and readable content.
- Visitors with `prefers-reduced-motion` enabled who need a fully static experience.
- Visitors on browsers without WebGL support who need all content accessible.
- Developers reviewing the codebase who need to understand performance decisions.

## Proposed Solution

### 1. Mobile viewport testing (task 6.1)

Open Chrome DevTools with mobile viewport (375px, 390px) and CPU 4x throttle. Verify:

- All text is readable with no overflow or clipping
- Touch scrolling is smooth (no jank, no stuck states)
- 3D scene uses simplified settings (`dpr: 1`, no antialiasing, reduced light intensity)
- Template cards stack to a single column
- Language toggle is accessible and functional
- No horizontal scrollbar appears

Fix any issues found.

### 2. Bundle size validation (task 6.2)

Run `npm run build` and analyze output sizes.

Current baseline:

| Chunk                   | Raw       | Gzipped   |
| ----------------------- | --------- | --------- |
| `index.js` (main app)   | 335.17 KB | 114.77 KB |
| `NotebookScene.js` (3D) | 883.95 KB | 236.91 KB |
| `index.css`             | 17.98 KB  | 4.18 KB   |

Budget assessment:

- **Main JS (excluding 3D): 114.77 KB gzipped** — well within the 300KB threshold.
- **3D model file: N/A** — procedural geometry, no `.glb` file. The 500KB model budget does not apply.
- **3D code chunk: 236.91 KB gzipped** — this is Three.js/R3F library code, not a model file. It's already code-split and lazy-loaded. This is inherent to the R3F stack and within expectations.

If sizes have grown since Phase 5, investigate and address.

### 3. Runtime performance validation (task 6.3)

Use Chrome DevTools Performance tab with "Fast 3G" or "Slow 4G" network throttling and CPU 4x slowdown:

- **LCP:** measure on the hero section. Target < 2.5s. The hero text is DOM content and should paint before the 3D chunk loads.
- **Frame rate:** scroll through all sections and check for dropped frames. Target: stable 30fps+.
- **TTI:** time to interactive. Target < 4s. The main bundle (114 KB gzipped) loads first; the 3D chunk is lazy.

If metrics fail, identify bottlenecks and apply targeted optimizations.

### 4. 3D scene simplification if needed (task 6.4)

This is conditional — only execute if task 6.3 reveals performance issues.

Options, in order of impact:

1. **Reduce DPR further** on mobile (already `1`, no room)
2. **Disable directional light** on mobile (use ambient only)
3. **Reduce geometry** (fewer page planes, simpler cover)
4. **Skip 3D entirely on mobile** (check `shouldSimplify` and render nothing)

The current scene is already minimal (4 meshes, 2 lights, procedural geometry), so simplification may not be needed.

### 5. `prefers-reduced-motion` verification (task 6.5)

Enable `prefers-reduced-motion: reduce` in Chrome DevTools. Verify:

- **3D scene:** notebook is in a static pose with no scroll-driven animation. Current behavior: `SceneController` sets `rotation: [0.3, -0.1, 0]` but leaves position at default `[0, 0, 0]`. This is acceptable since the notebook is centered, but verify visually.
- **DOM animations:** `useSectionReveal` skips animation entirely (early return). Content renders at full opacity immediately. Verify all 8 sections are visible without scrolling to trigger them.
- **No motion anywhere:** confirm there's zero visual motion on the entire page.

Known improvement: `useSectionReveal` reads `prefersReducedMotion` once on mount. If the user toggles the OS setting while the page is open, animations won't retroactively disable. This is acceptable for V1 (page reload handles it).

### 6. WebGL error boundary verification (task 6.6)

Test by temporarily breaking the WebGL context (e.g., adding a `throw` inside the Canvas). Verify:

- Error boundary catches the error
- Fallback renders (`null` — no visual placeholder, which is the chosen behavior)
- All 8 sections remain readable
- All CTA links are clickable
- Language toggle works
- No console errors beyond the caught WebGL error

### 7. Cross-browser review (task 6.7)

Since real Safari/Firefox testing is out of scope, perform a code review for known cross-browser issues:

**Safari concerns:**

- WebGL context creation: Safari uses WebKit's WebGL implementation which may have different default behavior. The error boundary handles failures gracefully.
- `ScrollTrigger`: GSAP ScrollTrigger has known Safari compatibility. Verify no iOS-specific scroll behavior issues in the GSAP configuration (e.g., `touchAction`, rubber-banding).
- CSS `position: fixed` with transforms: the fixed Canvas uses `fixed inset-0 z-0`. Safari historically has issues with fixed positioning inside transformed ancestors. Verify `PageShell` and parent elements don't apply CSS transforms.
- `matchMedia` for `prefers-reduced-motion`: fully supported in Safari 10.1+.

**Firefox concerns:**

- WebGL: generally well-supported.
- GSAP: generally well-supported.
- `matchMedia`: fully supported.
- CSS custom properties via `@theme`: Tailwind v4's `@theme` compiles to standard CSS custom properties, which Firefox supports.

Apply any preventive fixes identified.

### 8. Visual cleanup pass (task 6.8)

Review all 8 sections holistically:

- **Spacing:** consistent use of `py-section` / `py-section-lg` and `gap-content` tokens
- **Colors:** no hardcoded color values outside the design system (`background`, `foreground`, `muted`, `accent`, `surface`). Note: 3D model colors (`#2a2a2a`, `#f5f5f0`) are exempt since they're material properties, not UI colors.
- **Typography:** consistent heading sizes via `SectionHeading`, consistent body text via `CopyBlock`
- **Alignment:** CTA buttons centered where expected, template cards aligned in grid
- **Mobile vs desktop:** verify `md:` breakpoint behavior is consistent across sections

Fix any inconsistencies found.

### 9. Transition refinement (task 6.9)

Review notebook transitions by scrolling slowly through all sections:

- **hero → agents:** position `[0,0,0]` → `[0.5,0,0]`, rotation y `0` → `0.3`
- **agents → tools:** position x `0.5` → `0.3`, rotation y `0.3` → `0.5`
- **tools → plan:** position `[0.3,-0.2,0]` → `[-0.2,0,0]`, rotation y `0.5` → `-0.2` (largest y rotation delta: 0.7 radians)
- **plan → roadmap:** rotation y `-0.2` → `0.4` (0.6 radian delta)
- **templates → closing:** rotation y `0.8` → `0.15` (0.65 radian delta)

All transitions are smoothed by `MathUtils.lerp(0.08)`, which produces exponential easing. Verify that the larger deltas don't feel abrupt. If any transition feels jarring:

- Reduce the delta by adjusting the target pose in `notebookStates.js`
- Or increase the lerp factor (closer to 0.05 for slower, smoother transitions)

Also verify DOM fade-in animations (`useSectionReveal`) are consistent: same duration (0.6s), same easing (`power2.out`), same distance (30px slide-up).

## Technical Considerations

### Performance measurement methodology

Chrome DevTools Lighthouse and Performance tabs are the primary tools. Measurements should use:

- **Network:** "Slow 4G" (1.6 Mbps down, 750ms RTT)
- **CPU:** 4x slowdown
- **Viewport:** 375px width for mobile metrics
- **Mode:** Incognito (no extensions)

### No new dependencies

This phase involves only configuration tuning, visual adjustments, and verification. No npm packages are added.

### Existing code-splitting

The 3D scene is already lazy-loaded via React's `lazy()` and `Suspense`. The `NotebookScene` chunk loads asynchronously after the main bundle. This means:

- LCP should be fast (hero text renders from the main bundle)
- TTI should be fast (interactive before 3D loads)
- The 3D chunk size doesn't directly impact LCP or TTI

### Frame-rate independence

The current `lerp(0.08)` factor is frame-rate dependent — faster displays produce faster transitions. This is acceptable for V1 since the visual difference between 30fps and 60fps lerp is subtle, and the factor was tuned visually.

## Scope

### In scope

- Mobile viewport testing (375px, 390px) under CPU 4x throttle
- Bundle size validation against PLAN.md performance budget
- Runtime performance measurement (LCP, frame rate, TTI)
- Conditional 3D scene simplification (only if 6.3 fails)
- `prefers-reduced-motion` end-to-end verification
- WebGL error boundary verification
- Cross-browser code review for Safari and Firefox known issues
- Visual consistency audit (spacing, colors, typography, alignment)
- Notebook transition smoothness review and tuning
- Fixes for any issues found during verification

### Out of scope

- Tier 2/3 notebook features
- New components, sections, or UI elements
- Analytics or performance monitoring tools
- Real-device or real-browser testing (Safari, Firefox)
- 2.5D fallback implementation
- WebGL fallback UI (stays `null`)
- Bundle restructuring or new code-splitting strategies
- SEO or OG tag updates (Phase 7)

## Risks and Mitigations

| Risk                                                                             | Severity | Mitigation                                                                                                                                             |
| -------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| LCP exceeds 2.5s under throttled conditions                                      | Medium   | 3D chunk is already lazy-loaded; hero text renders from main bundle (~115 KB gzipped). If still slow, defer non-critical CSS or inline critical styles |
| Frame rate drops below 30fps on mobile simulation                                | Medium   | Scene is already minimal (4 meshes, 2 lights). Further simplification options: disable directional light on mobile, reduce page plane count            |
| Safari-specific WebGL or CSS issues discovered post-launch                       | Medium   | Code review identifies preventive patterns. WebGL error boundary provides graceful fallback. Known Safari issues are documented for manual testing     |
| Transition tuning changes `notebookStates.js` values, affecting the overall feel | Low      | Changes are numeric value adjustments; easy to revert. Lerp factor provides consistent smoothing regardless of pose values                             |
| Visual cleanup changes affect layout, triggering ScrollTrigger desync            | Low      | `ScrollTrigger.refresh()` (from Phase 4) handles layout changes automatically                                                                          |
| DevTools simulation doesn't match real device behavior                           | Medium   | Accepted limitation for V1. Real-device testing deferred to post-launch manual QA                                                                      |

## Success Criteria

- [ ] Mobile viewport (375px) with CPU 4x throttle: all text readable, no overflow, smooth scroll
- [ ] Mobile viewport (390px) with CPU 4x throttle: same checks pass
- [ ] Main JS bundle (excluding 3D chunk) < 300KB gzipped
- [ ] LCP < 2.5s on simulated 4G (Chrome DevTools)
- [ ] Frame rate stable 30fps+ during scroll (Chrome DevTools Performance)
- [ ] TTI < 4s on simulated 4G
- [ ] `prefers-reduced-motion`: notebook static, no DOM animations, all content visible
- [ ] WebGL failure: error boundary catches, all sections readable, all CTAs work
- [ ] No known Safari/Firefox issues in codebase (verified via code review)
- [ ] Spacing, colors, typography consistent across all 8 sections
- [ ] Notebook transitions feel smooth and intentional (no jarring jumps)
- [ ] DOM fade-in animations are consistent across all sections
- [ ] `npm run check` passes (lint, format, typecheck, tests)
- [ ] `npm run build` succeeds with no bundle size regression

## Dependencies

- Phase 5 complete (all 5 tasks marked done): templates created, CTA links updated, copy finalized.
- Chrome DevTools available for performance measurement and simulation.
- All 3D scene components stable from Phase 3-4: `NotebookScene`, `SceneController`, `NotebookModel`, `SceneLights`, `WebGLErrorBoundary`, `useReducedComplexity`, `useNotebookState`, `useScrollProgress`, `useSectionReveal`.

## Open Questions

N/A — all decisions resolved:

- WebGL fallback: keep `null` (decided by user)
- Cross-browser testing: Chrome + code review for Safari/Firefox (decided by user)
- Bundle budget interpretation: main bundle (excluding 3D chunk) against the 300KB threshold; 3D model budget N/A for procedural geometry
- Scene simplification: conditional, only if runtime metrics fail
