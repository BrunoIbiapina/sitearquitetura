"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem("cookie-consent");
      if (!consent) setVisible(true);
    }
  }, []);

  function acceptCookies() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  // Mantém o fluxo simples (sem lógica nova): "Somente essenciais" também salva e fecha
  function acceptEssentialsOnly() {
    localStorage.setItem("cookie-consent", "essential");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="cookie-wrap"
      role="dialog"
      aria-live="polite"
      aria-label="Cookies"
    >
      <div className="cookie-card">
        <div className="cookie-content">
          <div className="cookie-top">
            <h3 className="cookie-title">Cookies</h3>
          </div>

          <p className="cookie-text">
            Este site utiliza cookies para melhorar sua experiência. Ao
            continuar navegando, você concorda com nossa{" "}
            <a href="/politica-de-privacidade">Política de Privacidade</a>.
          </p>

          <div className="cookie-actions">
            <button
              className="btn btn-primary"
              type="button"
              onClick={acceptCookies}
            >
              Aceitar
            </button>

            <button
              className="btn btn-outline"
              type="button"
              onClick={acceptEssentialsOnly}
            >
              Somente essenciais
            </button>

            {/* Sem criar painel de preferências (seria lógica nova).
                Mantemos um CTA útil e elegante apontando para a política. */}
            <a
              className="cookie-link"
              href="/politica-de-privacidade#preferencias-cookies"
            >
              Preferências
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
