"use client";

import { useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = "5511999999999"; // Substitua pelo número desejado
const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site e gostaria de solicitar um orçamento.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export function WhatsAppFAB() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pulseRef = useRef<HTMLButtonElement>(null);

  // Detecta mobile
  useEffect(() => {
    setIsMobile(window.innerWidth <= 600);
  }, []);

  // Tooltip aparece por 2s ao carregar no mobile
  useEffect(() => {
    if (isMobile) {
      setShowTooltip(true);
      const timer = setTimeout(() => setShowTooltip(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  // Bounce discreto a cada 10s
  useEffect(() => {
    const interval = setInterval(() => {
      if (pulseRef.current) {
        pulseRef.current.classList.add("animate-bounce-fab");
        setTimeout(() => {
          pulseRef.current?.classList.remove("animate-bounce-fab");
        }, 600);
      }
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: isMobile ? 24 : 20,
        right: isMobile ? 24 : 20,
        zIndex: 1000,
        pointerEvents: "none",
        WebkitTapHighlightColor: "transparent",
      }}
      className="whatsapp-fab-container"
    >
      <button
        ref={pulseRef}
        aria-label="Falar no WhatsApp"
        tabIndex={0}
        onClick={() => window.open(WHATSAPP_LINK, "_blank", "noopener")}
        onMouseEnter={() => !isMobile && setShowTooltip(true)}
        onMouseLeave={() => !isMobile && setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        className={
          `whatsapp-fab group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2` +
          (isMobile ? " whatsapp-fab-mobile" : " whatsapp-fab-desktop")
        }
        style={{ pointerEvents: "auto" }}
      >
        <span className="sr-only">Falar no WhatsApp</span>
        <svg
          width={isMobile ? 28 : 32}
          height={isMobile ? 28 : 32}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="16" cy="16" r="16" fill="#25D366" />
          <path
            d="M22.5 18.6c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z"
            fill="#fff"
          />
        </svg>
        {/* Pulse effect */}
        <span className="whatsapp-fab-pulse" aria-hidden="true" />
      </button>
      {/* Tooltip */}
      <div
        className={`whatsapp-fab-tooltip${
          showTooltip ? " whatsapp-fab-tooltip-visible" : ""
        }`}
        role="tooltip"
        aria-live="polite"
      >
        Fale comigo no WhatsApp
      </div>
      <style jsx>{`
        .whatsapp-fab {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #25d366;
          border: 2.5px solid #e9f7ef;
          box-shadow:
            0 4px 24px 0 rgba(0, 0, 0, 0.1),
            0 1.5px 6px 0 rgba(0, 0, 0, 0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          transition:
            box-shadow 0.18s,
            transform 0.18s;
          cursor: pointer;
          outline: none;
          position: relative;
        }
        .whatsapp-fab-mobile {
          width: 56px;
          height: 56px;
        }
        .whatsapp-fab-desktop {
          width: 64px;
          height: 64px;
        }
        .whatsapp-fab:hover,
        .whatsapp-fab:focus-visible {
          box-shadow:
            0 8px 32px 0 rgba(0, 0, 0, 0.16),
            0 2px 8px 0 rgba(0, 0, 0, 0.06);
          transform: scale(1.04);
        }
        .whatsapp-fab-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.18);
          transform: translate(-50%, -50%) scale(1);
          z-index: 0;
          animation: whatsapp-fab-pulse 2.2s infinite
            cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }
        @keyframes whatsapp-fab-pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.7;
          }
          60% {
            transform: translate(-50%, -50%) scale(1.18);
            opacity: 0.15;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.25);
            opacity: 0;
          }
        }
        .animate-bounce-fab {
          animation: whatsapp-fab-bounce 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes whatsapp-fab-bounce {
          0% {
            transform: scale(1);
          }
          20% {
            transform: scale(1.08, 0.96);
          }
          40% {
            transform: scale(0.96, 1.08);
          }
          60% {
            transform: scale(1.04, 0.98);
          }
          80% {
            transform: scale(0.98, 1.04);
          }
          100% {
            transform: scale(1);
          }
        }
        .whatsapp-fab-tooltip {
          position: absolute;
          right: 110%;
          top: 50%;
          transform: translateY(-50%) scale(0.98);
          background: #fff;
          color: #222;
          border-radius: 12px;
          border: 1.5px solid #e9e9e9;
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.07);
          padding: 10px 18px;
          font-size: 1rem;
          font-family: "Inter", "Segoe UI", Arial, sans-serif;
          font-weight: 500;
          opacity: 0;
          pointer-events: none;
          white-space: nowrap;
          transition:
            opacity 0.18s,
            transform 0.18s;
          z-index: 10;
        }
        .whatsapp-fab-tooltip-visible {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }
        @media (max-width: 600px) {
          .whatsapp-fab-tooltip {
            right: 120%;
            font-size: 0.98rem;
            padding: 9px 14px;
          }
        }
      `}</style>
    </div>
  );
}
