import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Stethoscope, Pill, Building2, Star, ChevronDown, ChevronUp, Menu, X, Sun, Moon, ArrowRight, Phone, MapPin, Clock, Shield, Award, Users, CheckCircle2 } from 'lucide-react'

const WHATSAPP = 'https://wa.me/5511999999999?text=Olá, gostaria de agendar uma consulta!'

const services = [
    { icon: Stethoscope, title: 'Consultas Gerais', desc: 'Avaliação completa de saúde com atendimento personalizado e humanizado.' },
    { icon: Heart, title: 'Cardiologia', desc: 'Exames especializados e acompanhamento cardiovascular com tecnologia de ponta.' },
    { icon: Pill, title: 'Nutrição Clínica', desc: 'Planos alimentares personalizados para seu bem-estar e qualidade de vida.' },
]

const testimonials = [
    { text: 'Excelente atendimento! A dra. foi muito atenciosa e explicou tudo com clareza. Recomendo demais.', name: 'Ana Carolina', role: 'São Paulo · Cardiologia', initial: 'A' },
    { text: 'Fiz tratamento nutricional e os resultados foram incríveis. Profissionais muito competentes.', name: 'Roberto Silva', role: 'Campinas · Nutrição', initial: 'R' },
    { text: 'Agendei pelo WhatsApp e fui atendido no mesmo dia. Prático e sem complicação. Nota 10!', name: 'Maria Fernanda', role: 'Santos · Consulta Geral', initial: 'M' },
]

const faqs = [
    { q: 'Como faço para agendar uma consulta?', a: 'Você pode agendar diretamente pelo WhatsApp, telefone ou através do nosso formulário online. Respondemos em até 2 horas úteis.' },
    { q: 'Vocês aceitam convênios médicos?', a: 'Sim, trabalhamos com os principais convênios da região. Consulte nossa secretaria para verificar a lista completa.' },
    { q: 'Qual o horário de funcionamento?', a: 'Segunda a sexta das 8h às 18h, e sábados das 8h às 12h. Urgências 24h pelo WhatsApp.' },
]

const stats = [
    { icon: Users, value: '15.000+', label: 'Pacientes Atendidos' },
    { icon: Award, value: '20+', label: 'Anos de Experiência' },
    { icon: Shield, value: '98%', label: 'Satisfação' },
]

function useTheme() {
    const [dark, setDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches
        }
        return false
    })

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark)
        localStorage.setItem('theme', dark ? 'dark' : 'light')
    }, [dark])

    return { dark, toggle: () => setDark(d => !d) }
}

export default function App() {
    const { dark, toggle } = useTheme()
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    useEffect(() => {
        const h = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', h)
        return () => window.removeEventListener('scroll', h)
    }, [])

    return (
        <div className="min-h-screen">
            {/* Navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--card)]/90 backdrop-blur-xl shadow-lg border-b border-[var(--border)]' : 'bg-transparent'}`}
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <a href="#" className="font-display text-xl text-[var(--text)]">
                        Vida<span className="text-[var(--color-brand)]">Plena</span>
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#servicos" className="text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--color-brand)] transition-colors">Serviços</a>
                        <a href="#sobre" className="text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--color-brand)] transition-colors">Sobre</a>
                        <a href="#depoimentos" className="text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--color-brand)] transition-colors">Depoimentos</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <button onClick={toggle} className="p-2 rounded-lg hover:bg-[var(--bg-alt)] transition-colors text-[var(--text-muted)]">
                            {dark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--color-brand)] text-white rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-[var(--color-brand-dark)] transition-all">
                            <Phone size={16} /> Agendar
                        </a>
                        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-[var(--text)]">
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-[var(--card)] border-t border-[var(--border)]"
                        >
                            <div className="px-6 py-6 space-y-4">
                                <a href="#servicos" onClick={() => setMenuOpen(false)} className="block text-sm font-semibold text-[var(--text)] hover:text-[var(--color-brand)]">Serviços</a>
                                <a href="#sobre" onClick={() => setMenuOpen(false)} className="block text-sm font-semibold text-[var(--text)] hover:text-[var(--color-brand)]">Sobre</a>
                                <a href="#depoimentos" onClick={() => setMenuOpen(false)} className="block text-sm font-semibold text-[var(--text)] hover:text-[var(--color-brand)]">Depoimentos</a>
                                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="block px-6 py-3 bg-[var(--color-brand)] text-white rounded-lg font-bold text-sm text-center uppercase tracking-wider">
                                    Agendar Consulta
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Hero */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--bg-dark)]">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(5, 150, 105, 0.2) 0%, transparent 50%)' }} />

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full text-white/60 text-xs font-bold uppercase tracking-widest mb-6 bg-white/5">
                                ✦ Clínica Médica Especializada
                            </span>
                            <h1 className="font-display text-5xl md:text-7xl text-white leading-tight mb-6">
                                Cuidando da sua<br /><em className="text-[var(--color-brand)]">saúde</em> com dedicação.
                            </h1>
                            <p className="text-lg text-white/60 mb-10 leading-relaxed max-w-lg">
                                Atendimento humanizado com profissionais especializados. Sua saúde é a nossa prioridade.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-brand)] text-white rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-[var(--color-brand-dark)] transition-all hover:-translate-y-1">
                                    <Phone size={18} /> Agendar pelo WhatsApp
                                </a>
                                <a href="#servicos" className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-all">
                                    Nossos Serviços
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="grid grid-cols-3 gap-4"
                        >
                            {stats.map((s, i) => (
                                <div key={i} className="text-center p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                    <s.icon className="w-6 h-6 text-[var(--color-brand)] mx-auto mb-2" />
                                    <div className="text-xl font-bold text-white font-display">{s.value}</div>
                                    <div className="text-[10px] text-white/50 uppercase tracking-wider mt-1">{s.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Serviços */}
            <section id="servicos" className="py-24 bg-[var(--bg-alt)]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-[var(--color-brand)] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Especialidades</span>
                        <h2 className="font-display text-4xl md:text-5xl text-[var(--text)]">
                            Nossos <em className="text-[var(--color-brand)]">Serviços</em>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-[var(--card)] p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--color-brand)]/50 transition-all group"
                            >
                                <div className="w-14 h-14 bg-[var(--color-brand)]/10 rounded-xl flex items-center justify-center mb-6 text-[var(--color-brand)] group-hover:bg-[var(--color-brand)] group-hover:text-white transition-all">
                                    <s.icon size={24} />
                                </div>
                                <h3 className="font-display text-xl text-[var(--text)] mb-3">{s.title}</h3>
                                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sobre */}
            <section id="sobre" className="py-24 bg-[var(--bg)]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="aspect-square bg-gradient-to-br from-[var(--color-brand)]/10 to-[var(--color-brand)]/5 rounded-3xl flex items-center justify-center"
                        >
                            <Building2 className="text-[var(--color-brand)]/30" size={120} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[var(--color-brand)] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Sobre Nós</span>
                            <h2 className="font-display text-4xl text-[var(--text)] mb-6">
                                Sobre nossa <em className="text-[var(--color-brand)]">clínica</em>
                            </h2>
                            <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
                                Há mais de 20 anos cuidando da saúde da comunidade com compromisso, ética e carinho. Nossa equipe é formada por profissionais altamente qualificados.
                            </p>
                            <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
                                Acreditamos que cada paciente merece um atendimento único, personalizado e digno.
                            </p>

                            <div className="space-y-3">
                                {['Atendimento humanizado', 'Profissionais especializados', 'Agendamento fácil e rápido', 'Tecnologia de ponta'].map((d, i) => (
                                    <div key={i} className="flex items-center gap-3 text-[var(--text)]">
                                        <CheckCircle2 size={20} className="text-[var(--color-brand)] shrink-0" />
                                        <span className="text-sm font-medium">{d}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Depoimentos */}
            <section id="depoimentos" className="py-24 bg-[var(--bg-alt)]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-[var(--color-brand)] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Depoimentos</span>
                        <h2 className="font-display text-4xl md:text-5xl text-[var(--text)]">
                            O que nossos <em className="text-[var(--color-brand)]">pacientes</em> dizem
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[var(--card)] p-8 rounded-2xl border border-[var(--border)]"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, j) => (
                                        <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-[var(--text)] text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[var(--color-brand)]/10 rounded-full flex items-center justify-center text-[var(--color-brand)] font-bold text-sm">
                                        {t.initial}
                                    </div>
                                    <div>
                                        <strong className="text-sm text-[var(--text)]">{t.name}</strong>
                                        <span className="block text-xs text-[var(--text-muted)]">{t.role}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-[var(--bg)]">
                <div className="max-w-3xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-[var(--color-brand)] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Dúvidas</span>
                        <h2 className="font-display text-4xl text-[var(--text)]">
                            Perguntas <em className="text-[var(--color-brand)]">Frequentes</em>
                        </h2>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-[var(--card)] rounded-2xl border border-[var(--border)] overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                                >
                                    <span className="font-semibold text-[var(--text)] text-sm pr-4">{faq.q}</span>
                                    {openFaq === i ? <ChevronUp size={20} className="text-[var(--color-brand)] shrink-0" /> : <ChevronDown size={20} className="text-[var(--text-muted)] shrink-0" />}
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-6 pb-5 text-[var(--text-muted)] text-sm leading-relaxed">{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[var(--color-brand)]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-4xl md:text-5xl text-white mb-4">Pronto para cuidar da sua saúde?</h2>
                        <p className="text-white/80 text-lg mb-8">Agende agora pelo WhatsApp. É rápido, fácil e sem complicação.</p>
                        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--color-brand)] rounded-lg font-bold text-sm uppercase tracking-wider hover:shadow-xl transition-all hover:-translate-y-1">
                            <Phone size={18} /> Agendar pelo WhatsApp
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[var(--bg-dark)] text-white py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <span className="font-display text-xl mb-4 block">Vida<span className="text-[var(--color-brand)]">Plena</span></span>
                            <p className="text-white/50 text-sm">Cuidando da sua saúde com dedicação e carinho há mais de 20 anos.</p>
                        </div>
                        <div>
                            <h4 className="text-[var(--color-brand)] text-xs font-bold uppercase tracking-widest mb-4">Contato</h4>
                            <ul className="space-y-2 text-white/50 text-sm">
                                <li className="flex items-center gap-2"><Phone size={14} /> +55 (11) 99999-9999</li>
                                <li className="flex items-center gap-2"><MapPin size={14} /> Av. Paulista, 1000 - SP</li>
                                <li className="flex items-center gap-2"><Clock size={14} /> Seg-Sex: 8h-18h</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[var(--color-brand)] text-xs font-bold uppercase tracking-widest mb-4">Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#servicos" className="text-white/50 text-sm hover:text-white transition-colors">Serviços</a></li>
                                <li><a href="#sobre" className="text-white/50 text-sm hover:text-white transition-colors">Sobre</a></li>
                                <li><a href="#depoimentos" className="text-white/50 text-sm hover:text-white transition-colors">Depoimentos</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-white/10 pt-8 text-center">
                        <p className="text-white/30 text-xs">© {new Date().getFullYear()} VidaPlena Clínica. Todos os direitos reservados.</p>
                        <p className="text-white/30 text-xs mt-2">Desenvolvido por <a href="https://capybaraholding.com.br" target="_blank" rel="noopener noreferrer" className="text-[var(--color-brand)] font-semibold">Capybara Holding</a></p>
                    </div>
                </div>
            </footer>

            {/* WhatsApp FAB */}
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.824L.057 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.025-1.379l-.36-.213-3.757.981 1.001-3.651-.234-.374A9.796 9.796 0 012.182 12c0-5.413 4.41-9.818 9.818-9.818s9.818 4.405 9.818 9.818c0 5.413-4.41 9.818-9.818 9.818z"/>
                </svg>
            </a>
        </div>
    )
}
