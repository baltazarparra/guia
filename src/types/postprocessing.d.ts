declare module '@react-three/postprocessing' {
  import { ReactNode } from 'react'

  export function EffectComposer(props: { children?: ReactNode }): ReactNode
  export function Bloom(props: {
    luminanceThreshold?: number
    luminanceSmoothing?: number
    intensity?: number
    radius?: number
  }): ReactNode
}
