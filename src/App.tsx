import { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { value: '250+', label: 'Partner' },
    { value: '12M+', label: 'Conversions' },
    { value: '98%', label: 'Zufriedenheit' },
    { value: '24/7', label: 'Support' },
  ];

  const services = [
    {
      title: 'Performance Marketing',
      description: 'Datengetriebene Strategien für maximale Conversion-Raten und ROI.',
      icon: '◎',
    },
    {
      title: 'Partner-Netzwerk',
      description: 'Zugang zu über 250+ geprüften Premium-Publishern im DACH-Raum.',
      icon: '◉',
    },
    {
      title: 'Tracking & Analytics',
      description: 'Echtzeit-Tracking mit granularen Einblicken in jede Kampagne.',
      icon: '○',
    },
    {
      title: 'Beratung & Strategie',
      description: 'Individuelle Betreuung durch erfahrene Affiliate-Experten.',
      icon: '◌',
    },
  ];

  const testimonials = [
    {
      quote: 'Sales Circle hat unsere Affiliate-Performance um 340% gesteigert. Absolut professionell.',
      author: 'Markus Weber',
      company: 'TechVenture GmbH',
    },
    {
      quote: 'Die beste Entscheidung für unser Partnermarketing. Transparenz und Ergebnisse.',
      author: 'Sarah Müller',
      company: 'E-Commerce Solutions',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white overflow-x-hidden">
      {/* Animated Background Circles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[800px] h-[800px] rounded-full border border-amber-500/10"
          style={{
            top: '10%',
            left: '50%',
            transform: `translate(-50%, ${scrollY * 0.1}px) rotate(${scrollY * 0.02}deg)`,
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full border border-amber-500/5"
          style={{
            top: '15%',
            left: '50%',
            transform: `translate(-50%, ${scrollY * 0.15}px) rotate(-${scrollY * 0.03}deg)`,
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-amber-500/5 to-transparent"
          style={{
            top: '20%',
            left: '50%',
            transform: `translate(-50%, ${scrollY * 0.2}px)`,
          }}
        />
        <div
          className="absolute w-[1200px] h-[1200px] rounded-full border border-white/[0.02]"
          style={{
            top: '60%',
            right: '-30%',
            transform: `rotate(${scrollY * 0.01}deg)`,
          }}
        />
      </div>

      {/* Noise Texture Overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-amber-500 flex items-center justify-center">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-amber-500" />
            </div>
            <span className="text-lg md:text-xl font-display font-semibold tracking-tight">Sales Circle</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#leistungen" className="text-sm text-white/60 hover:text-amber-500 transition-colors">Leistungen</a>
            <a href="#ueber" className="text-sm text-white/60 hover:text-amber-500 transition-colors">Über uns</a>
            <a href="#partner" className="text-sm text-white/60 hover:text-amber-500 transition-colors">Partner</a>
            <a href="#kontakt" className="px-5 py-2.5 bg-amber-500 text-black text-sm font-medium rounded-full hover:bg-amber-400 transition-colors">
              Kontakt
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1.5">
              <div className={`w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0b]/95 backdrop-blur-lg border-t border-white/10 p-6">
            <div className="flex flex-col gap-4">
              <a href="#leistungen" className="text-lg text-white/80 py-2" onClick={() => setIsMenuOpen(false)}>Leistungen</a>
              <a href="#ueber" className="text-lg text-white/80 py-2" onClick={() => setIsMenuOpen(false)}>Über uns</a>
              <a href="#partner" className="text-lg text-white/80 py-2" onClick={() => setIsMenuOpen(false)}>Partner</a>
              <a href="#kontakt" className="px-5 py-3 bg-amber-500 text-black text-center font-medium rounded-full mt-2" onClick={() => setIsMenuOpen(false)}>
                Kontakt
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center px-4 md:px-8 pt-20">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/5 rounded-full border border-white/10 mb-6 md:mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs md:text-sm text-white/60">Premium Affiliate Marketing</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] mb-6 md:mb-8 animate-fade-in-up">
            Ihr Partner für
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500">
              Wachstum
            </span>
          </h1>

          <p className="text-base md:text-xl text-white/50 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-4 animate-fade-in-up animation-delay-200">
            Sales Circle verbindet Marken mit erstklassigen Publishern im deutschsprachigen Raum.
            Datengetrieben, transparent, erfolgreich.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <a
              href="#kontakt"
              className="w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 bg-amber-500 text-black font-medium rounded-full hover:bg-amber-400 transition-all hover:scale-105 text-center"
            >
              Jetzt starten
            </a>
            <a
              href="#leistungen"
              className="w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 border border-white/20 rounded-full hover:bg-white/5 transition-all text-center"
            >
              Mehr erfahren
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-amber-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-4 md:p-6 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-amber-500 mb-1 md:mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-white/40 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="relative py-16 md:py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16">
            <span className="text-amber-500 text-xs md:text-sm uppercase tracking-widest">Unsere Leistungen</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mt-3 md:mt-4">
              Volle Kontrolle,<br />
              <span className="text-white/40">maximale Ergebnisse.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-6 md:p-8 bg-white/[0.02] rounded-2xl md:rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all hover:bg-white/[0.04]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl text-amber-500 mb-4 md:mb-6 group-hover:scale-125 transition-transform origin-left">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-display font-semibold mb-2 md:mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-white/50 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="ueber" className="relative py-16 md:py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <span className="text-amber-500 text-xs md:text-sm uppercase tracking-widest">Über uns</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 md:mt-4 mb-6 md:mb-8">
                Ein Netzwerk,<br />
                das verbindet.
              </h2>
              <div className="space-y-4 md:space-y-6 text-sm md:text-base text-white/60 leading-relaxed">
                <p>
                  Sales Circle wurde gegründet, um das Affiliate-Marketing im deutschsprachigen Raum
                  neu zu definieren. Wir glauben an Transparenz, Qualität und echte Partnerschaften.
                </p>
                <p>
                  Unser Team aus erfahrenen Marketing-Experten verbindet modernste Technologie mit
                  persönlicher Betreuung. Das Ergebnis: messbare Erfolge für alle Beteiligten.
                </p>
              </div>
              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <span className="text-amber-500 text-sm md:text-base">✓</span>
                  </div>
                  <span className="text-sm md:text-base text-white/80">100% Transparenz</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <span className="text-amber-500 text-sm md:text-base">✓</span>
                  </div>
                  <span className="text-sm md:text-base text-white/80">DSGVO-konform</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-amber-500/20 via-amber-500/5 to-transparent p-8 md:p-12 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 rounded-full border border-amber-500/30 animate-spin-slow" />
                  <div className="absolute inset-8 md:inset-12 rounded-full border border-amber-500/20 animate-spin-reverse" />
                  <div className="absolute inset-16 md:inset-24 rounded-full bg-amber-500/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl md:text-6xl font-display font-bold text-amber-500">SC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="partner" className="relative py-16 md:py-32 px-4 md:px-8 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-amber-500 text-xs md:text-sm uppercase tracking-widest">Partner-Stimmen</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 md:mt-4">
              Was unsere Partner sagen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="p-6 md:p-8 bg-white/[0.03] rounded-2xl md:rounded-3xl border border-white/5"
              >
                <div className="text-amber-500 text-4xl md:text-5xl mb-4 md:mb-6">"</div>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6 md:mb-8">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500" />
                  <div>
                    <div className="text-sm md:text-base font-medium">{testimonial.author}</div>
                    <div className="text-xs md:text-sm text-white/40">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="kontakt" className="relative py-16 md:py-32 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-8 md:p-16 rounded-3xl md:rounded-[3rem] bg-gradient-to-br from-amber-500/20 via-amber-500/10 to-transparent border border-amber-500/20">
            <div className="absolute -inset-px rounded-3xl md:rounded-[3rem] bg-gradient-to-br from-amber-500/10 to-transparent blur-xl" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6">
                Bereit für den<br />
                <span className="text-amber-500">nächsten Schritt?</span>
              </h2>
              <p className="text-base md:text-lg text-white/50 mb-8 md:mb-10 max-w-xl mx-auto">
                Lassen Sie uns gemeinsam Ihr Affiliate-Marketing auf das nächste Level bringen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  className="w-full sm:w-auto flex-1 max-w-sm px-5 md:px-6 py-3.5 md:py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-white/30 focus:outline-none focus:border-amber-500/50 text-sm md:text-base"
                />
                <button className="w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 bg-amber-500 text-black font-medium rounded-full hover:bg-amber-400 transition-all hover:scale-105">
                  Kontakt aufnehmen
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 md:py-16 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-amber-500 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-amber-500" />
              </div>
              <span className="text-lg font-display font-semibold">Sales Circle</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-white/40">
              <a href="#" className="hover:text-amber-500 transition-colors py-1">Impressum</a>
              <a href="#" className="hover:text-amber-500 transition-colors py-1">Datenschutz</a>
              <a href="#" className="hover:text-amber-500 transition-colors py-1">AGB</a>
              <a href="#" className="hover:text-amber-500 transition-colors py-1">Karriere</a>
            </div>

            <div className="text-xs md:text-sm text-white/30">
              © 2024 Sales Circle. Alle Rechte vorbehalten.
            </div>
          </div>

          {/* Attribution Footer */}
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] md:text-xs text-white/20">
              Requested by @michaelonsol · Built by @clonkbot
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
