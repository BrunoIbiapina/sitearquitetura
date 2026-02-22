"use client";

export function PaintDrips() {
  return (
    <div className="pointer-events-none fixed top-0 right-0 z-[1] hidden h-full w-24 lg:block">
      <svg
        className="h-full w-full"
        viewBox="0 0 96 900"
        preserveAspectRatio="xMaxYMin slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cyan drip */}
        <defs>
          <linearGradient id="cyan-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="magenta-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="yellow-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="green-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="orange-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glossy">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" />
          </filter>
          <filter id="highlight">
            <feSpecularLighting
              surfaceScale="3"
              specularConstant="1"
              specularExponent="20"
              result="specOut"
            >
              <fePointLight x="50" y="30" z="80" />
            </feSpecularLighting>
            <feComposite
              in="SourceGraphic"
              in2="specOut"
              operator="arithmetic"
              k1="0"
              k2="1"
              k3="0.3"
              k4="0"
            />
          </filter>
        </defs>

        {/* Paint can tops - subtle circles at the top */}
        <ellipse cx="30" cy="80" rx="18" ry="6" fill="#06b6d4" opacity="0.6" />
        <ellipse cx="60" cy="200" rx="16" ry="5" fill="#ec4899" opacity="0.5" />
        <ellipse
          cx="40"
          cy="340"
          rx="17"
          ry="5.5"
          fill="#f59e0b"
          opacity="0.55"
        />
        <ellipse cx="55" cy="480" rx="15" ry="5" fill="#22c55e" opacity="0.5" />
        <ellipse
          cx="35"
          cy="600"
          rx="16"
          ry="5"
          fill="#f97316"
          opacity="0.55"
        />

        {/* Cyan drip */}
        <path
          d="M 30 86 Q 28 120 26 180 Q 24 220 28 260 Q 30 290 27 320 Q 25 340 26 350 Q 27 360 26 370 C 24 380 22 385 24 388 C 26 392 28 388 27 380"
          fill="none"
          stroke="url(#cyan-grad)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Cyan glossy highlight */}
        <path
          d="M 28 100 Q 27 140 26 200 Q 25 240 27 270"
          fill="none"
          stroke="#67e8f9"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Magenta drip */}
        <path
          d="M 60 205 Q 58 240 62 300 Q 64 340 60 380 Q 58 420 61 460 Q 63 480 60 500 Q 58 510 59 516 C 57 524 55 528 57 530 C 59 533 61 528 60 522"
          fill="none"
          stroke="url(#magenta-grad)"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <path
          d="M 59 220 Q 58 260 60 310 Q 61 350 59 390"
          fill="none"
          stroke="#f9a8d4"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.45"
        />

        {/* Yellow drip */}
        <path
          d="M 40 345 Q 38 380 42 430 Q 44 470 40 510 Q 38 540 41 560 Q 43 575 40 590 C 38 598 36 602 38 604 C 40 607 42 602 41 596"
          fill="none"
          stroke="url(#yellow-grad)"
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        <path
          d="M 39 360 Q 38 400 40 440 Q 41 470 39 500"
          fill="none"
          stroke="#fde68a"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />

        {/* Green drip */}
        <path
          d="M 55 485 Q 53 520 57 570 Q 59 600 55 640 Q 53 660 56 680 Q 58 694 55 706 C 53 714 51 718 53 720 C 55 723 57 718 56 712"
          fill="none"
          stroke="url(#green-grad)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M 54 500 Q 53 540 55 580 Q 56 610 54 640"
          fill="none"
          stroke="#86efac"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.4"
        />

        {/* Orange drip */}
        <path
          d="M 35 605 Q 33 640 37 690 Q 39 730 35 770 Q 33 800 36 830 Q 38 845 35 858 C 33 866 31 870 33 872 C 35 875 37 870 36 864"
          fill="none"
          stroke="url(#orange-grad)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M 34 620 Q 33 660 35 700 Q 36 730 34 770"
          fill="none"
          stroke="#fed7aa"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />

        {/* Small splatter dots */}
        <circle cx="22" cy="392" r="2" fill="#06b6d4" opacity="0.5" />
        <circle cx="30" cy="396" r="1.2" fill="#06b6d4" opacity="0.35" />
        <circle cx="55" cy="534" r="1.8" fill="#ec4899" opacity="0.4" />
        <circle cx="63" cy="536" r="1" fill="#ec4899" opacity="0.3" />
        <circle cx="36" cy="608" r="2.2" fill="#f59e0b" opacity="0.45" />
        <circle cx="51" cy="724" r="1.5" fill="#22c55e" opacity="0.35" />
        <circle cx="31" cy="876" r="2" fill="#f97316" opacity="0.4" />
        <circle cx="39" cy="878" r="1" fill="#f97316" opacity="0.3" />
      </svg>
    </div>
  );
}
