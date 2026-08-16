/* Design: Laboratório Editorial — preto profundo, âmbar PeptiX, composição assimétrica, tipografia condensada e movimento silencioso. */
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronRight, Dna, FlaskConical, Menu, MessageCircle, Microscope, Orbit, ShieldCheck, Sparkles, X } from "lucide-react";

const logo = "/manus-storage/peptix-logo_12648b6c.png";
const heroVisual = "/manus-storage/peptix-hero-molecular_640b4b33.png";
const dnaVisual = "/manus-storage/peptix-dna-section_ca443b1e.png";
const peptideVisual = "/manus-storage/peptix-peptide-education_88c8c053.png";
const whatsappNumber = "5511999999999";
const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";
const draftKey = "peptix-contact-draft-v1";
const cookieKey = "peptix-cookie-consent-v1";

const navItems = [
  ["PeptiX", "#peptix"], ["Tecnologia", "#tecnologia"], ["Peptídeos", "#peptideos"], ["Soluções", "#solucoes"], ["Contato", "#contato"],
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow"><span className="eyebrow-dot" />{children}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState("");
  const [cookieVisible, setCookieVisible] = useState(() => localStorage.getItem(cookieKey) !== "accepted");
  const [popupVisible, setPopupVisible] = useState(() => sessionStorage.getItem("peptix-popup-dismissed") !== "1");
  useEffect(() => { const form = document.querySelector<HTMLFormElement>("#peptix-contact-form"); if (!form) return; const draft = localStorage.getItem(draftKey); if (draft) Object.entries(JSON.parse(draft)).forEach(([key, value]) => { const field = form.elements.namedItem(key) as HTMLInputElement | HTMLTextAreaElement | null; if (field && typeof value === "string") field.value = value; }); const save = () => { const data = Object.fromEntries(new FormData(form).entries()); localStorage.setItem(draftKey, JSON.stringify(data)); }; form.addEventListener("input", save); return () => form.removeEventListener("input", save); }, []);
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de conhecer melhor a PeptiX Biotech.")}`;
  const scrollTo = (href: string) => { setMenuOpen(false); document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand-lockup" href="#inicio" onClick={(e) => { e.preventDefault(); scrollTo("#inicio"); }}>
          <img decoding="async" src={logo} alt="PeptiX Biotech" />
        </a>
        <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Navegação principal">
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={(e) => { e.preventDefault(); scrollTo(href); }}>{label}</a>)}
          <a className="nav-cta" href="#contato" onClick={(e) => { e.preventDefault(); scrollTo("#contato"); }}>Fale conosco <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-visual" style={{ backgroundImage: `url(${heroVisual})` }} />
          <div className="hero-vignette" />
          <div className="hero-content container">
            <SectionEyebrow>Advanced Cellular Renewal</SectionEyebrow>
            <h1>Peptídeos.<br /><em>A ciência em escala molecular.</em></h1>
            <p className="hero-copy">Tecnologia avançada, pesquisa e inovação aplicadas a uma nova geração de biotecnologia.</p>
            <div className="hero-actions"><a className="button button-primary" href="#peptix" onClick={(e) => { e.preventDefault(); scrollTo("#peptix"); }}>Conheça a PeptiX <ArrowUpRight size={17} /></a><a className="text-link" href="#contato" onClick={(e) => { e.preventDefault(); scrollTo("#contato"); }}>Fale com nossa equipe <ChevronRight size={16} /></a></div>
            <div className="hero-index"><span>01</span><i /><span>Biotechnology / 2026</span></div>
          </div>
          <div className="hero-scroll">Scroll para explorar <span /></div>
        </section>

        <section id="peptix" className="intro-section section-pad">
          <div className="container split-layout">
            <div className="section-number">01<span>/</span>04</div>
            <div className="intro-copy"><SectionEyebrow>O futuro é molecular</SectionEyebrow><h2>O futuro da biotecnologia começa <strong>no nível molecular.</strong></h2><p>Na PeptiX Biotech, transformamos conhecimento científico em soluções e caminhos de pesquisa baseados no universo dos peptídeos.</p><a className="text-link gold" href="#tecnologia">Explorar nossa abordagem <ArrowUpRight size={16} /></a></div>
            <div className="intro-stamp"><Orbit size={24} /><span>PEPTIX<br />BIOTECH</span><small>PRECISION / RESEARCH / EVOLUTION</small></div>
          </div>
          <div className="container principle-grid">
            {[[Dna, "Ciência", "Conhecimento científico como ponto de partida para decisões moleculares mais precisas."], [Microscope, "Tecnologia", "Tecnologia aplicada à leitura, desenvolvimento e documentação de soluções bioativas."], [ShieldCheck, "Precisão", "Consistência técnica em cada etapa, do conceito ao próximo experimento."], [Sparkles, "Inovação", "Uma disciplina de pesquisa que evolui junto com a escala molecular."]].map(([Icon, title, text]) => <article className="principle" key={title as string}><Icon size={26} strokeWidth={1.2} /><span>0{(title as string).length % 4 + 1}</span><h3>{title as string}</h3><p>{text as string}</p></article>)}
          </div>
        </section>

        <section id="tecnologia" className="visual-section section-pad">
          <div className="visual-bg" style={{ backgroundImage: `url(${dnaVisual})` }} /><div className="visual-overlay" />
          <div className="container visual-content"><div className="section-number">02<span>/</span>04</div><div className="visual-copy"><SectionEyebrow>Pesquisa aplicada</SectionEyebrow><h2>Tecnologia de<br /><em>alta performance.</em></h2><p>Leitura molecular, controle de processo e precisão técnica para transformar pesquisa em caminhos bioativos mais claros.</p><div className="tech-lines"><span>01 / Pesquisa</span><span>02 / Desenvolvimento</span><span>03 / Precisão</span></div></div></div>
        </section>

        <section id="peptideos" className="education-section section-pad"><div className="container education-layout"><div className="education-image"><img loading="lazy" decoding="async" src={peptideVisual} alt="Representação molecular de uma cadeia peptídica" /><div className="image-caption">Molecular study / PX–04</div></div><div className="education-copy"><SectionEyebrow>Conhecimento essencial</SectionEyebrow><div className="section-number">03<span>/</span>04</div><h2>O que são<br /><strong>peptídeos?</strong></h2><p>Peptídeos são pequenas cadeias de aminoácidos. Eles são amplamente estudados em diferentes áreas científicas e fazem parte de uma fronteira importante da pesquisa molecular.</p><p className="muted">A PeptiX atua na apresentação institucional e no desenvolvimento de caminhos baseados em conhecimento, sem substituir avaliação técnica, médica ou regulatória.</p><a className="button button-outline" href="#contato" onClick={(e) => { e.preventDefault(); scrollTo("#contato"); }}>Converse com a PeptiX <ArrowUpRight size={16} /></a></div></div></section>

        <section className="vision-section section-pad"><div className="container vision-content"><SectionEyebrow>Nossa visão</SectionEyebrow><h2>Uma nova fronteira<br /><em>da biotecnologia.</em></h2><div className="vision-words"><span>Pesquisa</span><span>Precisão</span><span>Tecnologia</span><span>Evolução</span><span>Inovação</span></div></div></section>

        <section id="solucoes" className="solutions-section section-pad"><div className="container solution-row"><div><SectionEyebrow>Soluções</SectionEyebrow><h2>Portfólio em<br /><strong>atualização.</strong></h2></div><div className="empty-solution"><FlaskConical size={34} strokeWidth={1} /><p>Fale com nossa equipe para conhecer as informações disponíveis e as próximas frentes da PeptiX Biotech.</p><a className="text-link gold" href="#contato" onClick={(e) => { e.preventDefault(); scrollTo("#contato"); }}>Mais informações <ArrowUpRight size={16} /></a></div></div></section>

        <section id="contato" className="contact-section section-pad"><div className="container contact-layout"><div className="contact-intro"><SectionEyebrow>Contato</SectionEyebrow><h2>Fale com a<br /><em>PeptiX Biotech.</em></h2><p>Conte-nos sobre sua empresa, interesse ou desafio. Nossa equipe retornará com as informações adequadas.</p><a className="whatsapp-button" href={waLink} target="_blank" rel="noreferrer"><MessageCircle size={20} /> Falar pelo WhatsApp <ArrowUpRight size={15} /></a></div><form id="peptix-contact-form" className="contact-form" onSubmit={async (e) => { e.preventDefault(); setFormError(""); if (!formEndpoint) { setFormError("O formulário está pronto, mas ainda precisa do endpoint do Formspree."); return; } setSending(true); try { const response = await fetch(formEndpoint, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(e.currentTarget) }); if (!response.ok) throw new Error("send"); setSent(true); e.currentTarget.reset(); localStorage.removeItem(draftKey); } catch { setFormError("Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp."); } finally { setSending(false); } }}><div className="form-grid"><label>Nome<input name="name" required placeholder="Seu nome" /></label><label>WhatsApp<input name="whatsapp" placeholder="(00) 00000-0000" /></label><label>E-mail<input name="email" required type="email" placeholder="seu@email.com" /></label><label>Empresa<input name="company" placeholder="Nome da empresa" /></label></div><label>Assunto<input name="subject" placeholder="Como podemos ajudar?" /></label><label>Mensagem<textarea name="message" rows={4} placeholder="Escreva sua mensagem" /></label><label className="consent"><input required type="checkbox" name="consent" /> Autorizo o tratamento dos meus dados para retorno sobre esta solicitação.</label>{formError && <p className="form-message error" role="alert">{formError}</p>}{sent && <p className="form-message success" role="status">Mensagem enviada. Obrigado pelo contato.</p>}<button className="button button-primary" type="submit" disabled={sending}>{sending ? "Enviando..." : sent ? "Enviar nova mensagem" : "Enviar contato"} <ArrowUpRight size={17} /></button></form></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><img decoding="async" src={logo} alt="PeptiX Biotech" /><div className="footer-tag">Advanced Cellular Renewal</div><div className="footer-links"><a href="#peptix">PeptiX</a><a href="#tecnologia">Tecnologia</a><a href="#peptideos">Peptídeos</a><a href="#contato">Contato</a></div></div><div className="container footer-bottom"><span>© 2026 PeptiX Biotech. Conteúdo institucional.</span><div><a href="/privacidade">Privacidade</a><a href="/termos">Termos</a><a href="/cookies">Cookies</a></div></div></footer>
      {popupVisible && <aside className="contact-popover" role="dialog" aria-label="Fale com a PeptiX Biotech"><button className="popover-close" onClick={() => { setPopupVisible(false); sessionStorage.setItem("peptix-popup-dismissed", "1"); }} aria-label="Fechar">×</button><MessageCircle size={20} /><strong>Fale com um especialista</strong><span>Conheça a PeptiX Biotech.</span><a href={waLink} target="_blank" rel="noreferrer">Abrir WhatsApp <ArrowUpRight size={14} /></a></aside>}
      {cookieVisible && <aside className="cookie-banner" role="dialog" aria-label="Consentimento de cookies"><div><strong>Privacidade e cookies</strong><p>Usamos recursos essenciais para manter o site funcional. Você pode revisar suas preferências na <a href="/cookies">Política de Cookies</a>.</p></div><div className="cookie-actions"><button onClick={() => { localStorage.setItem(cookieKey, "accepted"); setCookieVisible(false); }}>Aceitar</button><button className="cookie-secondary" onClick={() => { localStorage.setItem(cookieKey, "essential"); setCookieVisible(false); }}>Somente essenciais</button></div></aside>}
      <a className="floating-wa" href={waLink} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp"><MessageCircle size={23} /></a>
    </div>
  );
}
