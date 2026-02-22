"use client";

export function BlueprintBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <svg
        className="h-full w-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Grid lines */}
        {Array.from({ length: 25 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={i * 36}
            x2="1200"
            y2={i * 36}
            stroke="#6B7280"
            strokeWidth="0.5"
          />
        ))}
        {Array.from({ length: 34 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={i * 36}
            y1="0"
            x2={i * 36}
            y2="900"
            stroke="#6B7280"
            strokeWidth="0.5"
          />
        ))}

        {/* Floor plan - Living Room */}
        <rect
          x="100"
          y="120"
          width="360"
          height="280"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="1.2"
        />
        <rect
          x="100"
          y="120"
          width="180"
          height="140"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="0.8"
          strokeDasharray="6 3"
        />
        <text
          x="190"
          y="195"
          fill="#94A3B8"
          fontSize="8"
          fontFamily="monospace"
          textAnchor="middle"
        >
          {"SALA DE ESTAR"}
        </text>
        <text
          x="370"
          y="270"
          fill="#94A3B8"
          fontSize="8"
          fontFamily="monospace"
          textAnchor="middle"
        >
          {"SALA DE JANTAR"}
        </text>

        {/* Kitchen */}
        <rect
          x="460"
          y="120"
          width="240"
          height="180"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="1.2"
        />
        <text
          x="580"
          y="215"
          fill="#94A3B8"
          fontSize="8"
          fontFamily="monospace"
          textAnchor="middle"
        >
          {"COZINHA"}
        </text>
        <line
          x1="460"
          y1="170"
          x2="560"
          y2="170"
          stroke="#94A3B8"
          strokeWidth="0.8"
        />
        <rect
          x="470"
          y="130"
          width="80"
          height="35"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="0.6"
          rx="2"
        />

        {/* Bedrooms */}
        <rect
          x="100"
          y="440"
          width="200"
          height="200"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="1.2"
        />
        <text
          x="200"
          y="545"
          fill="#94A3B8"
          fontSize="8"
          fontFamily="monospace"
          textAnchor="middle"
        >
          {"QUARTO 1"}
        </text>
        <rect
          x="340"
          y="440"
          width="200"
          height="200"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="1.2"
        />
        <text
          x="440"
          y="545"
          fill="#94A3B8"
          fontSize="8"
          fontFamily="monospace"
          textAnchor="middle"
        >
          {"QUARTO 2"}
        </text>

        {/* Bathroom */}
        <rect
          x="580"
          y="340"
          width="120"
          height="120"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="1.2"
        />
        <text
          x="640"
          y="405"
          fill="#94A3B8"
          fontSize="8"
          fontFamily="monospace"
          textAnchor="middle"
        >
          {"BANHEIRO"}
        </text>
        <circle
          cx="620"
          cy="380"
          r="15"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="0.6"
        />

        {/* Door arcs */}
        <path
          d="M 280 120 A 30 30 0 0 1 280 150"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="0.8"
        />
        <path
          d="M 100 440 A 30 30 0 0 0 130 440"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="0.8"
        />
        <path
          d="M 340 440 A 30 30 0 0 0 370 440"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="0.8"
        />
        <path
          d="M 580 340 A 25 25 0 0 1 580 365"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="0.8"
        />

        {/* Dimension lines */}
        <line
          x1="100"
          y1="100"
          x2="460"
          y2="100"
          stroke="#94A3B8"
          strokeWidth="0.5"
        />
        <line
          x1="100"
          y1="96"
          x2="100"
          y2="104"
          stroke="#94A3B8"
          strokeWidth="0.5"
        />
        <line
          x1="460"
          y1="96"
          x2="460"
          y2="104"
          stroke="#94A3B8"
          strokeWidth="0.5"
        />
        <text
          x="280"
          y="95"
          fill="#94A3B8"
          fontSize="6"
          fontFamily="monospace"
          textAnchor="middle"
        >
          {"7.20m"}
        </text>

        {/* Stairs indication */}
        <g transform="translate(750, 200)">
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={`stair-${i}`}
              x1="0"
              y1={i * 12}
              x2="60"
              y2={i * 12}
              stroke="#94A3B8"
              strokeWidth="0.6"
            />
          ))}
          <rect
            x="0"
            y="0"
            width="60"
            height="96"
            fill="none"
            stroke="#94A3B8"
            strokeWidth="0.8"
          />
          <line
            x1="30"
            y1="0"
            x2="30"
            y2="96"
            stroke="#94A3B8"
            strokeWidth="0.4"
            strokeDasharray="2 2"
          />
        </g>

        {/* Additional structural elements */}
        <rect
          x="750"
          y="400"
          width="180"
          height="240"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="1"
        />
        <text
          x="840"
          y="525"
          fill="#94A3B8"
          fontSize="8"
          fontFamily="monospace"
          textAnchor="middle"
        >
          {"GARAGEM"}
        </text>
        <rect
          x="760"
          y="410"
          width="70"
          height="100"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="0.4"
          strokeDasharray="4 2"
        />

        {/* Compass */}
        <g transform="translate(1050, 100)">
          <circle
            cx="0"
            cy="0"
            r="20"
            fill="none"
            stroke="#94A3B8"
            strokeWidth="0.8"
          />
          <line
            x1="0"
            y1="-18"
            x2="0"
            y2="18"
            stroke="#94A3B8"
            strokeWidth="0.6"
          />
          <line
            x1="-18"
            y1="0"
            x2="18"
            y2="0"
            stroke="#94A3B8"
            strokeWidth="0.6"
          />
          <text
            x="0"
            y="-24"
            fill="#94A3B8"
            fontSize="7"
            fontFamily="monospace"
            textAnchor="middle"
          >
            {"N"}
          </text>
        </g>
      </svg>
    </div>
  );
}
