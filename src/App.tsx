import { useState, useEffect } from 'react'

const WHATSAPP = 'https://wa.me/55XXXXXXXXXXX?text=Olá, gostaria de agendar uma consulta!'

const services = [
    { icon: '🩺', title: '[Serviço 1]', desc: '[Descrição do serviço, foque no benefício ao paciente.]' },
    { icon: '💊', title: '[Serviço 2]', desc: '[Descrição do serviço, foque no benefício ao paciente.]' },
    { icon: '🏥', title: '[Serviço 3]', desc: '[Descrição do serviço, foque no benefício ao paciente.]' },
]

const testimonials = [
    { text: '"[Depoimento real do paciente 1. Inclua resultado específico se possível.]"', name: '[Nome do Paciente 1]', role: '[Cidade / Tratamento]', initial: 'A' },
    { text: '"[Segundo depoimento. Foque em superar uma objeção comum.]"', name: '[Nome do Paciente 2]', role: '[Cidade / Tratamento]', initial: 'B' },
    { text: '"[Terceiro depoimento sobre facilidade de agendamento ou resultado.]"', name: '[Nome do Paciente 3]', role: '[Cidade / Tratamento]', initial: 'C' },
]

const faqs = [
    { q: 'Como faço para agendar uma consulta?', a: '[Explique o processo de agendamento — pode ser pelo WhatsApp, telefone ou formulário online.]' },
    { q: '[Pergunta frequente 2 do seu nicho]', a: '[Resposta detalhada e tranquilizadora para a dúvida do paciente.]' },
    { q: '[Pergunta frequente 3 do seu nicho]', a: '[Resposta detalhada. Use linguagem acessível e empática.]' },
]

export default function App() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {/* Navbar */}
            <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
                <div className="nav-logo">[Nome da Clínica]</div>
                <a href={WHATSAPP} className="nav-cta" target="_blank" rel="noopener noreferrer">
                    Agendar Consulta
                </a>
            </nav>

            {/* Hero */}
            <section className="hero">
                <div className="container text-center">
                    <span className="badge">✦ [Especialidade]</span>
                    <h1>Cuidando da sua <span className="highlight">saúde</span><br />com dedicação.</h1>
                    <p className="hero-sub">[Descrição breve da clínica. Destaque o diferencial e o foco no bem-estar do paciente.]</p>
                    <a href={WHATSAPP} className="btn-primary" target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon /> Agendar pelo WhatsApp
                    </a>
                </div>
            </section>

            {/* Serviços */}
            <section className="section section--alt">
                <div className="container">
                    <h2 className="section-title">Nossos <span className="highlight">Serviços</span></h2>
                    <div className="grid-3">
                        {services.map((s, i) => (
                            <div key={i} className="card card--hover">
                                <div className="card-icon">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sobre */}
            <section className="section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-img-placeholder">🏥</div>
                        <div className="about-content">
                            <h2>Sobre <span className="highlight">nossa clínica</span></h2>
                            <p>[Parágrafo de apresentação da clínica. Conte a história, missão e valores do consultório.]</p>
                            <p>[Segundo parágrafo com credenciais do profissional responsável e sua experiência.]</p>
                            <ul className="check-list">
                                <li>[Diferencial 1 — ex: Atendimento humanizado]</li>
                                <li>[Diferencial 2 — ex: Profissionais especializados]</li>
                                <li>[Diferencial 3 — ex: Agendamento fácil e rápido]</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Depoimentos */}
            <section className="section section--alt">
                <div className="container">
                    <h2 className="section-title">O que nossos <span className="highlight">pacientes dizem</span></h2>
                    <div className="grid-3">
                        {testimonials.map((t, i) => (
                            <div key={i} className="testimonial-card">
                                <div className="stars">★★★★★</div>
                                <p className="testi-text">{t.text}</p>
                                <div className="testi-author">
                                    <div className="testi-avatar">{t.initial}</div>
                                    <div>
                                        <strong>{t.name}</strong>
                                        <span className="testi-role">{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Perguntas <span className="highlight">Frequentes</span></h2>
                    <div className="faq-list">
                        {faqs.map((faq, i) => (
                            <div key={i} className="faq-item">
                                <button
                                    className="faq-question"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    {faq.q}
                                    <span className={`faq-icon ${openFaq === i ? 'open' : ''}`}>+</span>
                                </button>
                                <div className={`faq-answer ${openFaq === i ? 'open' : ''}`}>
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="cta-section">
                <div className="container text-center">
                    <h2>Pronto para cuidar da sua saúde?</h2>
                    <p>Agende agora mesmo pelo WhatsApp. É rápido, fácil e sem complicação.</p>
                    <a href={WHATSAPP} className="btn-white" target="_blank" rel="noopener noreferrer">
                        📱 Agendar pelo WhatsApp
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© {new Date().getFullYear()} [Nome da Clínica]. Todos os direitos reservados.</p>
                <p>[Endereço] · <a href="tel:+55XXXXXXXXXXX">[Telefone]</a></p>
            </footer>

            {/* WhatsApp FAB */}
            <a href={WHATSAPP} className="whatsapp-fab" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <WhatsAppIcon />
            </a>
        </>
    )
}

function WhatsAppIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.824L.057 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.025-1.379l-.36-.213-3.757.981 1.001-3.651-.234-.374A9.796 9.796 0 012.182 12c0-5.413 4.41-9.818 9.818-9.818s9.818 4.405 9.818 9.818c0 5.413-4.41 9.818-9.818 9.818z" />
        </svg>
    )
}
