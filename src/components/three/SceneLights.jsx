/**
 * Diamond-optimized light rig: key (above-right, white), fill warm (gold), rim cool (blue-silver).
 * Reference: highlights on crown, amber refraction, cool tones on pavilion.
 * @param {{ simplified?: boolean }} props
 */
export default function SceneLights({ simplified = false }) {
  return (
    <>
      <ambientLight intensity={simplified ? 0.55 : 0.25} />
      {/* Key light: above-right, white highlights on crown */}
      <directionalLight position={[4, 5, 3]} intensity={simplified ? 1.25 : 1.8} />
      {/* Fill warm: amber rim for warm refraction */}
      <directionalLight position={[-4, 2, -3]} intensity={simplified ? 0.3 : 0.9} color="#c49664" />
      {/* Rim cool: lower-left, blue-teal tones on pavilion */}
      {!simplified && <pointLight position={[-3, -2, 2]} intensity={0.35} color="#78b4d2" />}
      {!simplified && <pointLight position={[0, -2, 4]} intensity={0.3} color="#ede8dc" />}
    </>
  )
}
