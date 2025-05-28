export default function LogoPreloader() {
  return (
    <svg
      viewBox="0 0 400 100"
      className="w-full max-w-[300px] h-auto mx-auto"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="gradient-light" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="20%" stopColor="#470AD5FF" />
          <stop offset="40%" stopColor="#C11183FF" />
          <stop offset="100%" stopColor="#be143e" />
        </linearGradient>
        <linearGradient id="gradient-dark" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#facc15" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="44"
        fontFamily="'Pacifico', cursive"
        fill="url(#gradient-light)"
        stroke="url(#gradient-light)"
        strokeWidth={3}
        strokeDasharray={1500}
        strokeDashoffset={1500}
        style={{
          animation: `draw 4s ease forwards`,
          fillOpacity: 1,
        }}
      >
        VI.DEV
      </text>

      <style>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </svg>
  );
}
