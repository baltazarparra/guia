/**
 * Diamond-optimized light rig: key (above-right, white), fill warm (gold), rim cool (blue-silver).
 * Reference: highlights on crown, amber refraction, cool tones on pavilion.
 * @param {{ simplified?: boolean }} props
 */
export default function SceneLights({ simplified = false }) {
  return (
    <>
      <ambientLight intensity={simplified ? 0.4 : 0.25} />
      {/* Key light: above-right, white highlights on crown */}
      <directionalLight position={[4, 5, 3]} intensity={simplified ? 1 : 1.8} />
      {/* Fill warm: gold rim for amber refraction */}
      <directionalLight position={[-4, 2, -3]} intensity={simplified ? 0.3 : 0.9} color="#c9a84c" />
      {/* Rim cool: lower-left, blue-silver tones on pavilion */}
      {!simplified && <pointLight position={[-3, -2, 2]} intensity={0.35} color="#a0b8d0" />}
      {!simplified && <pointLight position={[0, -2, 4]} intensity={0.3} color="#f0ece2" />}
    </>
  )
}
