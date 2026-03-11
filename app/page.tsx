"use client";

import { useState, useEffect, useRef } from "react";

export default function FullShieldLinktree() {
  const links = [
    {
      label: "Falar no WhatsApp",
      href: "https://wa.me/5519991504649?text=Ol%C3%A1!%20Vi%20o%20site%20e%20quero%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Blindagem%20Premium",
      icon: "/whatsapp.png",
      highlight: true,
    },
    {
      label: "Ver Instagram",
      href: "https://instagram.com/fullshield.cell",
      icon: "/instagram.png",
    },
    {
      label: "Localização",
      href: "#", 
      icon: "/mapa.png",
    },
    {
      label: "Serviços",
      href: "#servicos",
      icon: "/servicos.png",
    },
    {
      label: "Promoções",
      href: "#promo",
      icon: "/promo.png",
    }
  ];

  const carouselImages = [
    {
      image: "/servico-1.png",
      title: "Blindagem Premium",
      description: "Proteção invisível com acabamento profissional."
    },
    {
      image: "/servico-2.png",
      title: "Aplicação Profissional",
      description: "Tecnologia líquida aplicada por especialistas."
    },
    {
      image: "/servico-3.png",
      title: "Alta Resistência",
      description: "Proteção contra riscos, sujeira e desgaste."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, carouselImages.length]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const distance = touchStartX - touchEndX;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
  };

  const logoScale = Math.max(0.72, 1 - scrollY * 0.0012);
  const logoTranslateY = Math.min(scrollY * 0.18, 30);
  const logoOpacity = Math.max(0.82, 1 - scrollY * 0.001);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <div className="relative min-h-screen">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.16),_transparent_28%),radial-gradient(circle_at_bottom,_rgba(234,179,8,0.12),_transparent_22%)]" />
        <div className="absolute inset-0 opacity-60 bg-[linear-gradient(135deg,transparent_0%,transparent_18%,rgba(250,204,21,0.14)_18.4%,transparent_19.2%,transparent_81%,rgba(250,204,21,0.12)_81.4%,transparent_82.2%)]" />
        <div className="absolute left-3 top-3 h-[96%] w-[calc(100%-24px)] rounded-[36px] border border-yellow-400/25" />

        <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col items-center justify-start p-4 pt-12">
          <div className="w-full rounded-[36px] border border-yellow-400/35 bg-zinc-950/90 px-6 py-8 shadow-[0_0_60px_rgba(234,179,8,0.15)] backdrop-blur-sm">
            
            <div className="text-center">
              <div className="mb-8 flex justify-center overflow-visible">
                <img
                  src="/logo.png"
                  alt="FullShield Cell"
                  className="w-80 object-contain transition-transform duration-150"
                  style={{
                    transform: `translateY(-${logoTranslateY}px) scale(${logoScale})`,
                    opacity: logoOpacity,
                    filter: "drop-shadow(0 0 16px rgba(255, 204, 1, 0.45))",
                  }}
                />
              </div>

              <h1 className="font-[family-name:var(--font-noto-serif)] bg-gradient-to-b from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text text-4xl font-black tracking-tight text-transparent drop-shadow-[0_2px_10px_rgba(250,204,21,0.18)]">
                FullShield Cell
              </h1>

              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.35em] text-yellow-200/90">
                Blindagem Premium
              </p>

              <div className="mx-auto mt-4 h-px w-40 bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent" />

              <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-zinc-300">
                Proteção premium para o seu celular com acabamento profissional,
                atendimento rápido e presença digital elegante.
              </p>
            </div>

            {/* Links Section - ÍCONE NA ESQUERDA E TEXTO CENTRALIZADO */}
            <div className="mt-8 space-y-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative flex items-center justify-center rounded-full border px-6 py-3.5 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 ${
                    link.highlight
                      ? "border-yellow-300/70 bg-gradient-to-r from-[#0f2418] via-zinc-900 to-[#102818] text-yellow-100 shadow-[0_0_20px_rgba(250,204,21,0.15)]"
                      : "border-yellow-400/45 bg-zinc-900/85 text-yellow-100"
                  } hover:border-yellow-300 hover:shadow-[0_0_22px_rgba(250,204,21,0.18)]`}
                >
                  {/* Ícone fixo na esquerda absoluta dentro do botão */}
                  <img src={link.icon} className="absolute left-6 h-5 w-5 object-contain" alt="" />
                  
                  {/* Texto centralizado */}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>

            {/* Carousel Section */}
            <div id="servicos" className="mt-10 border-t border-yellow-400/20 pt-6">
              <div className="text-center">
                <h2 className="text-lg font-bold text-yellow-200 uppercase tracking-widest">Nossos Serviços</h2>
                <p className="mt-2 text-sm text-zinc-400">Deslize para ver mais resultados.</p>
              </div>

              <div
                className="group mt-5 overflow-hidden rounded-[28px] border border-yellow-400/25 bg-zinc-900/70 p-3 shadow-[0_0_30px_rgba(250,204,21,0.08)]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="relative overflow-hidden rounded-[22px]" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
                  <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {carouselImages.map((image, index) => (
                      <div key={index} className="relative min-w-full">
                        <img src={image.image} alt={image.title} className="h-64 w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                          <p className="text-xs font-bold uppercase tracking-widest text-yellow-300">{image.title}</p>
                          <p className="text-sm text-white">{image.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Diferenciais Section */}
            <div className="mt-12 space-y-6">
              <h2 className="text-center text-lg font-bold text-yellow-200 uppercase tracking-widest">
                Por que nos escolher?
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="group p-4 rounded-3xl border border-yellow-400/10 bg-zinc-900/40 backdrop-blur-sm transition-all hover:border-yellow-400/40">
                  <span className="text-2xl">💎</span>
                  <h3 className="mt-2 text-xs font-bold text-yellow-100 uppercase">Dureza 9H</h3>
                  <p className="mt-1 text-[11px] text-zinc-400 leading-tight">Proteção máxima contra riscos.</p>
                </div>
                <div className="group p-4 rounded-3xl border border-yellow-400/10 bg-zinc-900/40 backdrop-blur-sm transition-all hover:border-yellow-400/40">
                  <span className="text-2xl">✨</span>
                  <h3 className="mt-2 text-xs font-bold text-yellow-100 uppercase">Invisível</h3>
                  <p className="mt-1 text-[11px] text-zinc-400 leading-tight">Preserva o design original.</p>
                </div>
                <div className="group p-4 rounded-3xl border border-yellow-400/10 bg-zinc-900/40 backdrop-blur-sm transition-all hover:border-yellow-400/40">
                  <span className="text-2xl">💧</span>
                  <h3 className="mt-2 text-xs font-bold text-yellow-100 uppercase">Oleofóbico</h3>
                  <p className="mt-1 text-[11px] text-zinc-400 leading-tight">Menos marcas de dedo.</p>
                </div>
                <div className="group p-4 rounded-3xl border border-yellow-400/10 bg-zinc-900/40 backdrop-blur-sm transition-all hover:border-yellow-400/40">
                  <span className="text-2xl">⚡</span>
                  <h3 className="mt-2 text-xs font-bold text-yellow-100 uppercase">Touch 100%</h3>
                  <p className="mt-1 text-[11px] text-zinc-400 leading-tight">Resposta tátil imediata.</p>
                </div>
              </div>
            </div>

            {/* Como Funciona Section */}
            <div className="mt-12 border-t border-yellow-400/20 pt-8 pb-4">
              <h2 className="text-center text-lg font-bold text-yellow-200 uppercase tracking-widest mb-6">
                Como Funciona
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/40 border border-yellow-400/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black font-bold text-sm">1</span>
                  <div>
                    <p className="text-xs font-bold text-yellow-100 uppercase">Agendamento</p>
                    <p className="text-[11px] text-zinc-400">Entre em contato via WhatsApp e informe o modelo do seu dispositivo.</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/40 border border-yellow-400/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black font-bold text-sm">2</span>
                  <div>
                    <p className="text-xs font-bold text-yellow-100 uppercase">Atendimento Delivery</p>
                    <p className="text-[11px] text-zinc-400">Nos envie seu endereço e nossa equipe vai até você para realizar a aplicação.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/40 border border-yellow-400/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black font-bold text-sm">3</span>
                  <div>
                    <p className="text-xs font-bold text-yellow-100 uppercase">Proteção Ativa</p>
                    <p className="text-[11px] text-zinc-400">A blindagem líquida é aplicada e seu aparelho sai protegido em minutos.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/40 border border-yellow-400/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black font-bold text-sm shadow-[0_0_10px_rgba(250,204,21,0.4)]">4</span>
                  <div>
                    <p className="text-xs font-bold text-yellow-100 uppercase">Suporte VIP</p>
                    <p className="text-[11px] text-zinc-400">Acompanhamos sua satisfação e estamos disponíveis para qualquer dúvida.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTÃO DE AGENDAMENTO FINAL */}
            <div className="mt-10 px-2">
              <a
                href="https://wa.me/5519991504649?text=Ol%C3%A1!%20Li%20sobre%20o%20processo%20e%20quero%20agendar%20a%20minha%20blindagem%20premium%20agora!"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-full py-4 rounded-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-600 text-black font-black uppercase tracking-tighter text-sm shadow-[0_0_25px_rgba(250,204,21,0.35)] hover:scale-[1.02] active:scale-95 transition-all"
              >
                <span className="absolute left-6">🚀</span>
                Agendar Blindagem agora!
              </a>
            </div>

            <p className="mt-12 text-center text-[10px] tracking-widest text-zinc-600 uppercase">
              © 2026 FullShield Cell • Todos os direitos reservados
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}