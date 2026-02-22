<section id="preferencias-cookies"> ... </section>;
import BackButton from "@/components/BackButton";

export const metadata = {
  title: "Política de Privacidade | Arq. Adélia Ibiapina",
  description:
    "Entenda como coletamos, usamos e protegemos dados, e como funcionam as preferências de cookies neste site.",
};

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="privacy-page">
      <header className="privacy-hero">
        <BackButton label="Voltar ao site" />
        <div className="privacy-hero__inner">
          <p className="privacy-eyebrow">Documento</p>
          <h1 className="privacy-title">Política de Privacidade</h1>
          <p className="privacy-subtitle">
            Transparência sobre dados, cookies e preferências. Este texto é um
            modelo e pode ser ajustado conforme seu uso real e orientações
            jurídicas.
          </p>

          <div className="privacy-meta">
            <span className="privacy-badge">Versão: 1.0</span>
            <span className="privacy-badge">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </span>
          </div>
        </div>
      </header>

      <section className="privacy-content">
        <div className="privacy-grid">
          <aside className="privacy-toc" aria-label="Sumário">
            <h2 className="privacy-toc__title">Sumário</h2>
            <nav className="privacy-toc__nav">
              <a className="privacy-toc__link" href="#introducao">
                Introdução
              </a>
              <a className="privacy-toc__link" href="#dados-coletados">
                Quais dados coletamos
              </a>
              <a className="privacy-toc__link" href="#finalidades">
                Para que usamos
              </a>
              <a className="privacy-toc__link" href="#compartilhamento">
                Compartilhamento
              </a>
              <a className="privacy-toc__link" href="#cookies">
                Cookies
              </a>
              <a className="privacy-toc__link" href="#preferencias-cookies">
                Preferências de cookies
              </a>
              <a className="privacy-toc__link" href="#seus-direitos">
                Seus direitos
              </a>
              <a className="privacy-toc__link" href="#contato">
                Contato
              </a>
            </nav>
          </aside>

          <article className="privacy-article">
            <section id="introducao" className="privacy-section">
              <h2 className="privacy-h2">Introdução</h2>
              <p className="privacy-p">
                Esta Política explica como este site lida com informações e
                preferências de navegação. Nosso objetivo é oferecer uma
                experiência segura, elegante e transparente.
              </p>
            </section>

            <section id="dados-coletados" className="privacy-section">
              <h2 className="privacy-h2">Quais dados coletamos</h2>
              <ul className="privacy-list">
                <li>
                  <strong>Dados fornecidos por você:</strong> quando você entra
                  em contato (ex.: nome, e-mail, mensagem).
                </li>
                <li>
                  <strong>Dados técnicos:</strong> informações do
                  navegador/dispositivo (ex.: páginas acessadas, data/hora,
                  sistema).
                </li>
                <li>
                  <strong>Cookies:</strong> pequenos arquivos para lembrar
                  preferências e melhorar a experiência.
                </li>
              </ul>
              <p className="privacy-note">
                Importante: ajuste esta seção se você coleta dados adicionais
                (formulários, newsletter, WhatsApp, etc.).
              </p>
            </section>

            <section id="finalidades" className="privacy-section">
              <h2 className="privacy-h2">Para que usamos</h2>
              <ul className="privacy-list">
                <li>Responder solicitações e mensagens enviadas por você.</li>
                <li>Melhorar navegação, performance e conteúdo do site.</li>
                <li>Medir estatísticas de uso (por exemplo, via analytics).</li>
                <li>Garantir segurança e prevenir abuso.</li>
              </ul>
            </section>

            <section id="compartilhamento" className="privacy-section">
              <h2 className="privacy-h2">Compartilhamento</h2>
              <p className="privacy-p">
                Podemos usar serviços de terceiros para hospedar o site e medir
                audiência. Esses serviços podem processar dados técnicos
                necessários para operar o site. Não vendemos seus dados.
              </p>
            </section>

            <section id="cookies" className="privacy-section">
              <h2 className="privacy-h2">Cookies</h2>
              <p className="privacy-p">
                Cookies são pequenos arquivos armazenados no seu navegador para
                lembrar preferências e melhorar a experiência.
              </p>

              <div className="privacy-cards">
                <div className="privacy-card">
                  <h3 className="privacy-h3">Essenciais</h3>
                  <p className="privacy-p">
                    Necessários para o funcionamento básico do site (ex.:
                    lembrar sua escolha de consentimento).
                  </p>
                </div>
                <div className="privacy-card">
                  <h3 className="privacy-h3">Analíticos</h3>
                  <p className="privacy-p">
                    Ajudam a entender como o site é usado, para melhoria
                    contínua (ex.: métricas agregadas).
                  </p>
                </div>
                <div className="privacy-card">
                  <h3 className="privacy-h3">Marketing</h3>
                  <p className="privacy-p">
                    Podem ser usados para personalização e campanhas (se
                    aplicável). Ajuste conforme sua realidade.
                  </p>
                </div>
              </div>
            </section>

            {/* ID que o banner vai usar no link */}
            <section id="preferencias-cookies" className="privacy-section">
              <h2 className="privacy-h2">Preferências de cookies</h2>
              <p className="privacy-p">
                No momento, este site registra sua preferência de consentimento
                no seu navegador. Você pode alterar essa decisão a qualquer
                momento limpando o armazenamento do site no navegador.
              </p>

              <div className="privacy-callout">
                <h3 className="privacy-h3">Como “reabrir” o banner</h3>
                <ol className="privacy-steps">
                  <li>Abra o console do navegador (Inspecionar).</li>
                  <li>
                    Execute:{" "}
                    <code className="privacy-code">
                      localStorage.removeItem("cookie-consent")
                    </code>
                  </li>
                  <li>Recarregue a página.</li>
                </ol>
              </div>

              <p className="privacy-note">
                Se você desejar um painel completo de preferências (com toggles
                para analíticos/marketing), podemos implementar depois mantendo
                o mesmo design premium.
              </p>
            </section>

            <section id="seus-direitos" className="privacy-section">
              <h2 className="privacy-h2">Seus direitos</h2>
              <p className="privacy-p">
                Você pode solicitar informações, correções ou exclusão de dados
                fornecidos via contato, conforme aplicável.
              </p>
            </section>

            <section id="contato" className="privacy-section">
              <h2 className="privacy-h2">Contato</h2>
              <p className="privacy-p">
                Para dúvidas sobre privacidade, entre em contato pelo canal
                oficial do site.
              </p>
              <p className="privacy-note">
                Dica: aqui você pode colocar um e-mail (ex.:
                contato@seudominio.com) quando quiser.
              </p>
            </section>
          </article>
        </div>
      </section>

      {/* Estilos locais (sem criar arquivo extra) */}
      <style>{`
        .privacy-page{
          min-height: 100vh;
          background: radial-gradient(1200px 600px at 20% 0%, rgba(22,166,174,0.10), transparent 60%),
                      radial-gradient(900px 500px at 90% 20%, rgba(205,110,65,0.10), transparent 60%),
                      #0b0d0f;
          color: rgba(255,255,255,0.92);
        }
        .privacy-hero{
          padding: 72px 18px 34px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .privacy-hero__inner{
          width: min(1040px, 100%);
          margin: 0 auto;
        }
        .privacy-eyebrow{
          margin: 0 0 10px;
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
        }
        .privacy-title{
          margin: 0;
          font-size: clamp(28px, 4vw, 44px);
          line-height: 1.05;
          letter-spacing: -0.02em;
          font-weight: 700;
        }
        .privacy-subtitle{
          margin: 12px 0 0;
          max-width: 70ch;
          color: rgba(255,255,255,0.78);
          font-size: 15px;
          line-height: 1.6;
        }
        .privacy-meta{
          display:flex;
          flex-wrap:wrap;
          gap:10px;
          margin-top: 18px;
        }
        .privacy-badge{
          display:inline-flex;
          align-items:center;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.06);
          font-size: 13px;
          color: rgba(255,255,255,0.82);
        }
        .privacy-content{
          padding: 24px 18px 72px;
        }
        .privacy-grid{
          width: min(1040px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 22px;
        }
        .privacy-toc{
          position: sticky;
          top: 16px;
          align-self: start;
          border-radius: 18px;
          padding: 16px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(12,14,16,0.55);
          backdrop-filter: blur(12px);
        }
        .privacy-toc__title{
          margin: 0 0 10px;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.70);
        }
        .privacy-toc__nav{
          display:flex;
          flex-direction: column;
          gap: 10px;
        }
        .privacy-toc__link{
          color: rgba(255,255,255,0.78);
          text-decoration: none;
          border-left: 2px solid transparent;
          padding-left: 10px;
          transition: border-color 180ms ease, color 180ms ease, transform 180ms ease;
        }
        .privacy-toc__link:hover{
          color: rgba(255,255,255,0.92);
          border-color: rgba(22,166,174,0.55);
          transform: translateX(2px);
        }
        .privacy-article{
          border-radius: 18px;
          padding: 18px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(12,14,16,0.55);
          backdrop-filter: blur(12px);
        }
        .privacy-section{
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .privacy-section:last-child{
          border-bottom: 0;
        }
        .privacy-h2{
          margin: 0 0 10px;
          font-size: 18px;
          letter-spacing: -0.01em;
        }
        .privacy-h3{
          margin: 0 0 8px;
          font-size: 15px;
          letter-spacing: -0.01em;
        }
        .privacy-p{
          margin: 0 0 10px;
          color: rgba(255,255,255,0.78);
          line-height: 1.65;
          font-size: 14px;
        }
        .privacy-list{
          margin: 0;
          padding-left: 18px;
          display:flex;
          flex-direction: column;
          gap: 8px;
          color: rgba(255,255,255,0.78);
          line-height: 1.6;
          font-size: 14px;
        }
        .privacy-note{
          margin: 10px 0 0;
          color: rgba(255,255,255,0.62);
          font-size: 13px;
          line-height: 1.55;
        }
        .privacy-cards{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 12px;
        }
        .privacy-card{
          border-radius: 16px;
          padding: 14px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.05);
        }
        .privacy-callout{
          margin-top: 12px;
          border-radius: 16px;
          padding: 14px;
          border: 1px solid rgba(22,166,174,0.25);
          background: rgba(22,166,174,0.08);
        }
        .privacy-steps{
          margin: 0;
          padding-left: 18px;
          color: rgba(255,255,255,0.82);
          line-height: 1.6;
          font-size: 14px;
          display:flex;
          flex-direction: column;
          gap: 6px;
        }
        .privacy-code{
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size: 12.5px;
          padding: 2px 6px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(0,0,0,0.25);
          color: rgba(255,255,255,0.92);
        }

        .privacy-back{
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.86);
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.2px;
          transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
        }

        .privacy-back:hover{
          transform: translateY(-1px);
          background: rgba(255,255,255,0.10);
          border-color: rgba(255,255,255,0.22);
        }

        .privacy-back:focus-visible{
          outline: 3px solid rgba(22, 166, 174, 0.35);
          outline-offset: 3px;
        }

        @media (max-width: 920px){
          .privacy-grid{
            grid-template-columns: 1fr;
          }
          .privacy-toc{
            position: relative;
            top: 0;
          }
          .privacy-cards{
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
