/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Wrench, 
  Package, 
  Sliders, 
  Shield, 
  Hammer, 
  Activity, 
  Phone, 
  MapPin, 
  Star, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Menu, 
  ArrowUpRight, 
  Copy, 
  Check, 
  ExternalLink,
  Compass,
  Clock,
  ChevronDown,
  Settings
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

// Shared type definitions
interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  actionText: string;
  badge?: string;
}



export default function App() {
  // Navigation active link on scroll management
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);



  // Back to top button state
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show back to top
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Intersection tracking for navbar links
      const sections = ['home', 'o-nas', 'uslugi', 'galeria', 'opinie', 'kontakt'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  // Services list
  const services: Service[] = [
    {
      id: 'ser1',
      icon: <Settings className="w-8 h-8 text-bright-purple" />,
      title: 'Przerabianie Terenówek',
      desc: 'Kompleksowe modyfikacje Twojego 4x4 według Twoich wymagań. Przygotowanie do ciężkiego terenu i wypraw.',
      actionText: 'Skonfiguruj modyfikacje'
    },
    {
      id: 'ser2',
      icon: <Package className="w-8 h-8 text-bright-purple" />,
      title: 'Bagażniki Dachowe na Zamówienie',
      desc: 'Bagażniki projektowane, dopasowane do dachu i spawane indywidualnie pod każdy model pojazdu. Pancerna wytrzymałość.',
      actionText: 'Zapytaj o projekt'
    },
    {
      id: 'ser3',
      icon: <Sliders className="w-8 h-8 text-bright-purple" />,
      title: 'Przerabianie Zawieszeń',
      desc: 'Lift kity, montaż amortyzatorów i sprężyn o podwyższonej nośności, dostosowane do Twoich potrzeb i tras terenowych.',
      actionText: 'Dobierz lift kit'
    },
    {
      id: 'ser4',
      icon: <Wrench className="w-8 h-8 text-bright-purple" />,
      title: 'Malowanie Raptorem',
      desc: 'Trwała, niezwykle odporna na gałęzie, zarysowania i warunki atmosferyczne poliuretanowa powłoka ochronna Raptor.',
      actionText: 'Oblicz koszt malowania'
    },
    {
      id: 'ser5',
      icon: <Hammer className="w-8 h-8 text-bright-purple" />,
      title: 'Usługi Blacharskie i Lakiernicze',
      desc: 'Naprawy powypadkowe, renowacje zmęczonych nadwozi terenówek oraz pełne lakierowanie i konserwacja ram.',
      actionText: 'Zarządaj renowacją'
    },
    {
      id: 'ser6',
      icon: <Shield className="w-8 h-8 text-bright-purple" />,
      title: 'Montaż Wciągarek i Zderzaków',
      desc: 'Dopasowanie i stabilny montaż stalowych zderzaków, płyt podwyciągarkowych oraz certyfikowanych wciągarek.',
      actionText: 'Wybierz wyciągarkę'
    },
    {
      id: 'ser7',
      icon: <Activity className="w-8 h-8 text-bright-purple" />,
      title: 'Szybka Mechanika',
      desc: 'Ekspresowa wymiana tarcz, klocków hamulcowych, wymiana olejów i filtrów, serwis mostów i reduktorów.',
      actionText: 'Zarezerwuj termin'
    },
    {
      id: 'ser8',
      icon: <Phone className="w-8 h-8 text-bright-purple" />,
      title: 'Darmowa Wycena',
      desc: 'Zadzwoń lub napisz do nas – profesjonalnie i fachowo omówimy zakres prac Twojego samochodu bez żadnych zobowiązań.',
      actionText: 'Połącz z mechanikiem',
      badge: 'Zalecane'
    }
  ];

  // Gallery images explicitly provided
  const galleryImages = [
    {
      url: 'https://i.ibb.co/rRGbh1bZ/654052124-17896330788419537-5066433808994196396-n.jpg',
      title: 'Modyfikacja Przodu 4x4',
      category: 'Wyciągarki & Stal'
    },
    {
      url: 'https://i.ibb.co/zLB5dV2/581833835-17880562878419537-5701180367688512053-n.jpg',
      title: 'Testy Terenowe zawieszenia',
      category: 'Zawieszenie & Lift'
    },
    {
      url: 'https://i.ibb.co/nNqyrHCz/580036514-17880562887419537-7939646651392300628-n.jpg',
      title: 'Wyprawowy setup',
      category: 'Bagażniki & Akcesoria'
    }
  ];



  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleNextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] font-sans text-[#F0EDFA] overflow-x-hidden selection:bg-[#7B2FBE] selection:text-white">
      
      {/* Background Mesh/Crosshatch Texture overlay */}
      <div className="fixed inset-0 pointer-events-none mesh-grid z-0 opacity-100" />

      {/* FIXED NAVIGATION */}
      <nav id="nav-container" className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A]/96 backdrop-blur-xl border-b-2 border-primary-purple/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
          
          {/* Logo Area */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative border border-primary-purple p-0.5 overflow-hidden bg-black flex-shrink-0">
              <img 
                src="https://i.ibb.co/GfjSvCCY/518127401-122110045334929060-5780794840305835487-n.jpg" 
                alt="Logo Kontrabanda 4x4" 
                className="h-[44px] w-[44px] object-cover filter brightness-110 contrast-125 hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
                id="brand-logo"
              />
              <div className="absolute inset-0 bg-[#7B2FBE]/10 mix-blend-color" />
            </div>
            <div className="flex flex-col">
              <span className="font-condensed font-extrabold text-2xl tracking-wide text-white leading-none group-hover:text-bright-purple transition-colors duration-200">
                KONTRABANDA
              </span>
              <span className="font-rajdhani font-bold text-xs tracking-[0.25em] text-bright-purple leading-none mt-0.5">
                WARSZTAT 4X4
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { label: 'O Nas', target: 'o-nas' },
              { label: 'Usługi', target: 'uslugi' },
              { label: 'Galeria', target: 'galeria' },
              { label: 'Opinie', target: 'opinie' },
              { label: 'Kontakt', target: 'kontakt' }
            ].map((link) => (
              <a 
                key={link.target}
                href={`#${link.target}`}
                className={`font-condensed font-semibold text-lg uppercase tracking-wider transition-colors duration-200 relative py-1 ${
                  activeSection === link.target ? 'text-bright-purple' : 'text-white hover:text-bright-purple'
                }`}
              >
                {link.label}
                {/* Slidable active line underline */}
                {activeSection === link.target && (
                  <motion.div 
                    layoutId="activeIndicator" 
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-bright-purple"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Action Button Desktop */}
          <div className="hidden lg:block">
            <a 
              href="tel:791224009"
              className="inline-flex items-center gap-2 px-5 py-2 border-2 border-primary-purple hover:bg-primary-purple text-white font-rajdhani font-bold uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(123,47,190,0.4)] relative"
              id="cta-nav-call"
            >
              <Phone className="w-4 h-4 text-glow-purple" />
              <span>791 224 009</span>
            </a>
          </div>

          {/* Mobile Hamburguer */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-2 text-bright-purple hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            id="mobile-menu-btn"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-xl flex flex-col justify-center items-center px-6 pt-20"
            id="mobile-nav-panel"
          >
            {/* Elegant close header inside */}
            <div className="absolute top-4 right-4">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 text-bright-purple hover:text-white focus:outline-none"
                id="mobile-menu-close-btn"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex flex-col items-center gap-6 w-full text-center">
              {[
                { label: 'O Nas', target: 'o-nas' },
                { label: 'Usługi', target: 'uslugi' },
                { label: 'Galeria', target: 'galeria' },
                { label: 'Opinie', target: 'opinie' },
                { label: 'Kontakt', target: 'kontakt' }
              ].map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.target}
                  href={`#${link.target}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-condensed font-bold text-3xl uppercase tracking-widest text-white hover:text-[#9D4EDD] py-2 block w-full border-b border-primary-purple/10"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 w-full max-w-sm"
              >
                <a 
                  href="tel:791224009" 
                  className="w-full flex items-center justify-center gap-3 bg-primary-purple text-white py-4 font-rajdhani font-bold text-xl tracking-wider uppercase border border-bright-purple hover:bg-bright-purple transition-colors neon-glow"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  ZADZWOŃ: 791 224 009
                </a>
                <p className="text-center text-[#9E9AAA] text-sm mt-3 font-sans">
                  Śląsk · Adama Mickiewicza 63, Będzin
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center pt-24 md:pt-0 overflow-hidden"
      >
        {/* Background Image Container with custom clip-path overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/nNqyrHCz/580036514-17880562887419537-7939646651392300628-n.jpg"
            alt="Modyfikacje off-road Patrol" 
            className="w-full h-full object-cover scale-105 filter brightness-90 transform motion-safe:animate-[pulse_10s_infinite_alternate]"
            referrerPolicy="no-referrer"
          />
          {/* Angular Dark Purple overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A] via-[#0A0A0A]/85 to-[#5A1F8A]/35" />
          {/* Extra dark bottom gradient */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
        </div>

        {/* Diagonal cut wrapper on the hero content section */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-12 flex flex-col md:flex-row items-center gap-10">
          
          <div className="w-full md:w-2/3 flex flex-col items-start text-left pl-0 md:pl-[4vw] mt-8 md:mt-0">
            
            {/* Small Glowing Label */}
            <span className="font-condensed font-semibold text-sm sm:text-base tracking-[0.25em] text-glow-purple uppercase bg-primary-purple/20 px-3 py-1 border border-primary-purple/30 inline-block mb-4 animate-pulse">
              ŚLĄSK · BĘDZIN · UL. MICKIEWICZA 63
            </span>

            {/* Giant Heading */}
            <h1 className="font-condensed font-extrabold tracking-tight uppercase leading-[0.9] text-white">
              <span className="block text-[3.8rem] sm:text-[6rem] lg:text-[7.5rem] xl:text-[9rem] hover:scale-[1.01] transition-transform duration-300 cursor-default font-extrabold tracking-wide neon-shadow-text">
                KONTRABANDA
              </span>
              <span className="block text-[4.8rem] sm:text-[8rem] lg:text-[10rem] xl:text-[11.5rem] text-bright-purple font-black tracking-normal leading-[1.0] neon-text">
                4x4
              </span>
            </h1>

            {/* Subtitle Tagline */}
            <p className="mt-6 text-lg sm:text-2xl text-[#F0EDFA]/90 font-sans max-w-xl font-light leading-relaxed">
              Zrobimy wszystko co chcesz. Zawsze solidnie, rzetelnie i z bezgraniczną pasją do jazdy terenowej.
            </p>

            {/* Thin Decorative Purple Bar */}
            <div className="h-1 bg-gradient-to-r from-[#9D4EDD] to-transparent w-32 mt-6 mb-8" />

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="tel:791224009"
                className="px-8 py-4 bg-primary-purple text-white font-rajdhani font-bold text-lg uppercase tracking-wider transition-all duration-300 hover:bg-bright-purple hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(157,78,221,0.6)] flex items-center justify-center gap-3 relative overflow-hidden"
              >
                <Phone className="w-5 h-5 fill-current text-white" />
                ZADZWOŃ PO WYCENĘ
              </a>
              <a 
                href="#uslugi"
                className="px-8 py-4 border-2 border-primary-purple hover:bg-primary-purple/20 text-white font-rajdhani font-bold text-lg uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <span>NASZE USŁUGI</span>
                <Compass className="w-5 h-5 text-bright-purple" />
              </a>
            </div>
          </div>

          {/* Quick Active Status Side-Card (Interactive Visual Accent) */}
          <div className="w-full md:w-1/3 flex flex-col justify-center items-end self-end md:self-center mt-6 md:mt-0">
            <div className="bg-[#181520]/90 border border-primary-purple/40 p-6 max-w-xs w-full hover:border-[#9D4EDD] transition-colors relative">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </div>
              <span className="font-condensed font-semibold text-xs tracking-widest text-glow-purple uppercase block mb-1">
                DARMOWA WYCENA
              </span>
              <p className="font-rajdhani font-bold text-lg text-white mb-2 uppercase">
                Status Warsztatu: OTWARTY
              </p>
              <p className="font-sans text-xs text-[#9E9AAA] leading-normal font-light">
                Projektujemy zawieszenie pod wyprawy, spawamy bagażniki pod namiot dachowy, konserwujemy i malujemy Raptorem.
              </p>
              <div className="mt-4 pt-3 border-t border-[#7B2FBE]/20 flex items-center justify-between text-xs">
                <span className="font-mono text-glow-purple">Oczekiwanie: Krótkie</span>
                <a href="#kontakt" className="font-rajdhani font-bold text-white hover:text-bright-purple uppercase flex items-center gap-1 transition-colors">
                  KONTAKT <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic section indicator slash overlay at the bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg className="relative block w-full h-[60px] md:h-[100px] text-[#111111]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 120L1200 0Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* O NAS (About) SECTION */}
      <section id="o-nas" className="relative bg-[#111111] py-24 z-10 overflow-hidden">
        
        {/* Subtle background element */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary-purple/5 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Headings + Story Text */}
            <div className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1">
              
              <div className="flex items-center gap-4 mb-3">
                <div className="w-1.5 h-8 bg-bright-purple" />
                <span className="font-condensed font-semibold text-sm tracking-[0.25em] text-glow-purple uppercase">
                  NASZA HISTORIA
                </span>
              </div>

              <h2 className="font-condensed font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-wider mb-6">
                ZBUDOWANI Z PASJI DO 4X4
              </h2>

              <div className="space-y-6 font-sans text-base sm:text-lg text-[#F0EDFA]/90 font-light leading-relaxed">
                <p className="font-medium text-white border-l-2 border-[#7B2FBE] pl-4 italic">
                  "Warsztat samochodowy Kontrabanda 4x4 powstał przede wszystkim z pasji i nieskończonej miłości do samochodów terenowych."
                </p>
                <p>
                  Dżungle błota, strome podjazdy, kamienne szlaki – teren to nasz drugi dom. Dlatego doskonale wiemy, na jakie wyzwania musi być przygotowany Twój pojazd wyprawowy. Nie uznajemy półśrodków, bo w terenie liczy się wyłącznie bezawaryjność i czysta moc konstrukcyjna.
                </p>
                <p>
                  Zajmujemy się nie tylko zaawansowanym udoskonalaniem podwozia czy montażem specjalistycznych stali, ale także kompleksową, szybką mechaniką – wymianą tarcz, klocków hamulcowych, olejów, filtrów, serwerem reduktorów i wiele więcej.
                </p>
                <p className="font-medium text-[#C77DFF]">
                  Jeśli chcesz, by ktoś profesjonalnie, z dbałością o każdy spaw zajął się Twoim ukochanym samochodem – zapraszamy do Kontrabanda 4x4!
                </p>
              </div>

              {/* Call out strip */}
              <div className="w-full mt-8 bg-[#1A1025] hover:bg-[#1E112B] transition-colors duration-300 border border-[#7B2FBE]/30 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="font-rajdhani font-semibold text-white tracking-wider flex items-center gap-3 text-sm sm:text-base">
                  WIĘCEJ SZCZEGÓŁÓW W WIADOMOŚCI LUB POD NR. 791 224 009
                </span>
                <a 
                  href="tel:791224009" 
                  className="px-6 py-2 bg-primary-purple hover:bg-bright-purple text-white font-rajdhani font-bold uppercase text-sm tracking-wide transition-all duration-300 shadow-[0_0_15px_rgba(123,47,190,0.3)] flex-shrink-0"
                >
                  Zadzwoń teraz
                </a>
              </div>

            </div>

            {/* Right Col: Complex Offset Frame Image */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center py-4">
              <div className="relative max-w-sm sm:max-w-md lg:max-w-full w-full">
                
                {/* Decorative absolute glow under image */}
                <div className="absolute inset-0 bg-[#7B2FBE]/20 blur-3xl rounded-none pointer-events-none" />

                {/* Purple Offset Frame behind image */}
                <div className="absolute inset-0 border-2 border-primary-purple transform translate-x-3 translate-y-3 lg:translate-x-5 lg:translate-y-5 z-0" />
                
                {/* Main Image */}
                <div className="relative z-10 border border-primary-purple/40 overflow-hidden bg-black aspect-[4/3] sm:aspect-square lg:aspect-[4/5]">
                  <img 
                    src="https://i.ibb.co/zLB5dV2/581833835-17880562878419537-5701180367688512053-n.jpg"
                    alt="Praca przy pojeździe terenowym" 
                    className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Neon overlay corner decorative brackets */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-bright-purple" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-bright-purple" />
                </div>

                {/* Mechanic Quote Badge overlay */}
                <div className="absolute -bottom-4 -left-4 bg-[#181520] border-l-4 border-bright-purple p-4 z-20 max-w-[200px] shadow-2xl">
                  <span className="font-condensed font-bold text-white text-lg block leading-none">KONTRABANDA 4x4</span>
                  <p className="font-sans text-xs text-[#9E9AAA] mt-1 italic">U nas off-road to religia, a precyzja to standard.</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* USŁUGI (Services) SECTION */}
      <section id="uslugi" className="relative bg-[#0A0A0A] py-24">
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12">
          
          {/* Header Block with diagonal-cut and neon title */}
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-condensed font-semibold text-sm tracking-[0.25em] text-[#C77DFF] uppercase mb-2">
              CZYM SIĘ ZAJMEJEMY
            </span>
            <h2 className="font-condensed font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-wider relative">
              NASZE USŁUGI
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#7B2FBE] to-transparent" />
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#9E9AAA] font-sans max-w-2xl font-light italic">
              Robimy wszystko co chcesz — od szybkiej, precyzyjnej mechaniki po ekstremalne projekty wyprawowe.
            </p>
          </div>

          {/* Grid Layout containing 8 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((ser, index) => (
              <motion.div
                key={ser.id}
                whileHover={{ y: -6 }}
                className="bg-[#181520] border-t-4 border-[#7B2FBE] hover:border-[#9D4EDD] p-6 flex flex-col justify-between h-full transition-all duration-300 relative group group-hover:shadow-[0_0_25px_rgba(123,47,190,0.30)]"
              >
                {/* Card Background subtle gloss */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#7B2FBE]/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Service Tag Badge */}
                {ser.badge && (
                  <span className="absolute top-3 right-3 text-[10px] font-condensed font-bold uppercase tracking-wider bg-bright-purple text-white px-2 py-0.5">
                    {ser.badge}
                  </span>
                )}

                <div>
                  {/* Icon Area */}
                  <div className="mb-4 text-bright-purple flex items-center justify-center w-12 h-12 bg-black/40 border border-[#7B2FBE]/20">
                    {ser.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-condensed font-bold text-xl sm:text-2xl text-white uppercase tracking-wider mb-3 leading-snug group-hover:text-bright-purple transition-colors">
                    {ser.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[#9E9AAA] sm:text-sm text-xs font-light leading-relaxed mb-6">
                    {ser.desc}
                  </p>
                </div>

                {/* Interaction */}
                <div className="pt-2">
                  <a 
                    href="#kontakt" 
                    className="font-rajdhani font-semibold text-xs tracking-wider text-glow-purple uppercase inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <span>{ser.actionText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Call to Action Strip */}
          <div className="mt-12 bg-[#1A1025] border border-primary-purple/40 p-4 flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="font-condensed font-bold text-lg sm:text-xl text-white tracking-wider uppercase text-center md:text-left">
              Chcesz skonsultować modyfikacje? ZADZWOŃ PO DARMOWĄ WYCENĘ
            </span>
            <a 
              href="tel:791224009" 
              className="px-8 py-3 bg-primary-purple hover:bg-bright-purple text-white font-rajdhani font-bold uppercase tracking-wider text-lg transition-all duration-300 shadow-[0_0_20px_rgba(157,78,221,0.4)] flex items-center gap-2 group flex-shrink-0"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Oblicz Projekt: 791 224 009
            </a>
          </div>

        </div>
      </section>

      {/* DYNAMIC BUILDS CONFIGURATOR AND ESTIMATOR */}

      {/* GALERIA (Gallery) SECTION */}
      <section id="galeria" className="relative bg-[#0A0A0A] py-24">
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12">
          
          {/* Header Block */}
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-condensed font-semibold text-sm tracking-[0.25em] text-[#C77DFF] uppercase mb-2">
              NASZE REALIZACJE
            </span>
            <h2 className="font-condensed font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-wider relative">
              GALERIA PROJEKTÓW
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#7B2FBE]" />
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#9E9AAA] font-sans max-w-xl font-light">
              Prawdziwe, nieustraszone zdjęcia prosto z naszego warsztatu w Będzinie.
            </p>
          </div>

          {/* Masonry-Grid Layout for images */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => handleOpenLightbox(idx)}
                className="group relative cursor-pointer overflow-hidden border border-[#7B2FBE]/30 bg-black transition-all duration-300 break-inside-avoid"
              >
                {/* Images with no border-radius */}
                <img 
                  src={img.url} 
                  alt="" 
                  className="w-full h-auto object-cover transform scale-100 group-hover:scale-102 transition-all duration-550 filter brightness-90 group-hover:brightness-105"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Hover overlay frame with info */}
                <div className="absolute inset-0 bg-[#0A0A0A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center border-2 border-bright-purple m-1.5">
                  <div className="flex items-center gap-2 text-white font-rajdhani font-bold text-sm tracking-wider uppercase">
                    <span>POWIĘKSZ ZDJĘCIE</span>
                    <Maximize2 className="w-4 h-4 text-[#9D4EDD]" />
                  </div>
                </div>

                {/* Corner elements to represent industrial steel sheets */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#7B2FBE]/80" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#7B2FBE]/80" />
              </div>
            ))}
          </div>

        </div>

        {/* LIGHTBOX FOR GALLERY INJECT */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#0A0A0A]/98 backdrop-blur-md flex items-center justify-center p-4"
              id="gallery-lightbox"
            >
              {/* Close Background trigger */}
              <div className="absolute inset-0" onClick={() => setLightboxOpen(false)} />

              {/* Close Button UI */}
              <button 
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 p-4 z-50 text-white hover:text-bright-purple bg-black/80 hover:bg-black border border-primary-purple/40 rounded-none cursor-pointer"
                id="lightbox-close-btn"
                aria-label="Close lightbox"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Box Image view */}
              <div className="relative max-w-4xl w-full flex flex-col items-center">
                
                {/* Active centered image */}
                <motion.div 
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.95 }}
                  className="relative z-10 border-2 border-primary-purple overflow-hidden bg-black flex justify-center items-center"
                >
                  <img 
                    src={galleryImages[lightboxIndex].url} 
                    alt={galleryImages[lightboxIndex].title} 
                    className="max-h-[75vh] w-auto object-contain max-w-full"
                    referrerPolicy="no-referrer"
                  />

                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-bright-purple" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-bright-purple" />
                </motion.div>

                {/* Controls and navigation */}
                <div className="w-full relative z-20 mt-4 flex items-center justify-center bg-[#181520] p-4 border border-primary-purple/30">
                  <div className="flex gap-4">
                    <button 
                      onClick={handlePrevImage}
                      className="p-3 bg-black hover:bg-primary-purple text-white transition-colors border border-primary-purple/40 cursor-pointer flex items-center gap-2"
                      id="lightbox-prev"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      <span className="font-rajdhani font-bold text-xs uppercase tracking-wider hidden sm:inline">POPRZEDNIE</span>
                    </button>
                    <button 
                      onClick={handleNextImage}
                      className="p-3 bg-black hover:bg-primary-purple text-white transition-colors border border-primary-purple/40 cursor-pointer flex items-center gap-2"
                      id="lightbox-next"
                      aria-label="Next image"
                    >
                      <span className="font-rajdhani font-bold text-xs uppercase tracking-wider hidden sm:inline">NASTĘPNE</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="text-[#9E9AAA] text-xs mt-3 font-mono">
                  Zrzut {lightboxIndex + 1} z {galleryImages.length}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </section>

      {/* OPINIE (Reviews) SECTION */}
      <section id="opinie" className="relative bg-[#111111] py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-condensed font-semibold text-sm tracking-[0.25em] text-[#C77DFF] uppercase mb-2">
              CO MÓWIĄ KLIENCI
            </span>
            <h2 className="font-condensed font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-wider relative">
              OPINIE O WARSZTACIE
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#7B2FBE]" />
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center">
            
            {/* Solo Center Stage Review Card */}
            <div className="bg-[#181520] border-l-4 border-[#7B2FBE] p-8 md:p-12 max-w-2xl w-full relative hover:shadow-[0_0_30px_rgba(123,47,190,0.25)] transition-all duration-300">
              
              {/* Massive quotation marks */}
              <span className="font-condensed font-extrabold text-8xl text-bright-purple opacity-40 absolute top-2 right-4 select-none leading-none">
                "
              </span>

              {/* Stars render */}
              <div className="flex gap-1 mb-6 text-bright-purple" id="review-stars">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-6 h-6 fill-current text-[#9D4EDD]" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="font-sans font-light italic text-[#F0EDFA] text-lg md:text-2xl leading-relaxed mb-6">
                "Serdecznie polecam warsztat, szybko, sprawnie, sympatycznie!"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#7B2FBE]/20 rounded-none flex items-center justify-center font-condensed font-bold text-white text-lg border border-bright-purple">
                  ZK
                </div>
                <div>
                  <cite className="font-condensed font-bold text-[#F0EDFA] text-lg uppercase tracking-wider not-italic">
                    — Zadowolony Klient
                  </cite>
                  <span className="block text-xs font-mono text-[#9E9AAA]">Opinia Zweryfikowana</span>
                </div>
              </div>

            </div>

            {/* CTA button to Facebook review tab */}
            <div className="mt-12">
              <a 
                href="https://www.facebook.com/profile.php?id=61577871826778&sk=reviews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 border-2 border-[#7B2FBE] hover:bg-primary-purple text-glow-purple hover:text-white font-rajdhani font-bold text-lg uppercase tracking-wider transition-colors duration-300"
                id="fb-reviews-btn"
              >
                <span>SPRAWDŹ OPINIE NA FACEBOOKU</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* KONTAKT (Contact) SECTION */}
      <section id="kontakt" className="relative bg-[#0A0A0A] py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12">
          
          {/* Header Block */}
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-condensed font-semibold text-sm tracking-[0.25em] text-[#C77DFF] uppercase mb-2">
              GDZIE NAS ZNAJDZIESZ
            </span>
            <h2 className="font-condensed font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-wider relative">
              KONTAKT I LOKALIZACJA
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#7B2FBE]" />
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left side details */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              
              {/* Box Info */}
              <div className="space-y-6">
                
                <h3 className="font-condensed font-extrabold text-3xl text-white uppercase tracking-wider">
                  KONTRABANDA 4X4 BĘDZIN
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#9E9AAA] font-light leading-relaxed">
                  Zawsze dbamy o pełen profesjonalizm i krótki czas oczekiwania. Zadzwoń po wycenę lub odwiedź nasz warsztat osobiście i skonsultuj swój pomysł off-road!
                </p>

                {/* Fast bullet contact points */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex-shrink-0 bg-primary-purple/20 border border-primary-purple/40 flex items-center justify-center text-bright-purple">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-condensed font-semibold text-xs tracking-wider text-glow-purple uppercase block">
                        Adres Warsztatu:
                      </span>
                      <p className="font-sans text-[#F0EDFA] text-base font-medium mt-0.5">
                        ul. Adama Mickiewicza 63, 42-506 Będzin (Śląsk)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex-shrink-0 bg-primary-purple/20 border border-primary-purple/40 flex items-center justify-center text-bright-purple">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-condensed font-semibold text-xs tracking-wider text-glow-purple uppercase block">
                        Telefon (Kliknij by zadzwonić):
                      </span>
                      <a 
                        href="tel:791224009"
                        className="font-condensed font-bold text-bright-purple text-2xl tracking-wide hover:text-white transition-colors block mt-0.5 relative"
                      >
                        791 224 009
                      </a>
                    </div>
                  </div>
                </div>

                {/* Facebook Action Button */}
                <div className="pt-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61577871826778"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-purple hover:bg-bright-purple text-white font-rajdhani font-bold text-base uppercase tracking-wider transition-colors"
                    id="fb-official-page-btn"
                  >
                    {/* Plain standard inline stylized logo instead of heavyweight FA */}
                    <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>KONTRABANDA NA FACEBOOKU</span>
                  </a>
                </div>

              </div>

              {/* Callout box above map */}
              <div className="bg-[#1A1025] border border-primary-purple/40 p-6 text-center">
                <span className="font-rajdhani font-bold text-white text-xl uppercase tracking-wider block mb-1">
                  DARMOWA WYCENA
                </span>
                <p className="font-sans text-[#9E9AAA] text-xs font-light block mb-3">
                  Zadzwoń i omów szczegóły — bez zobowiązań
                </p>
                <a 
                  href="tel:791224009"
                  className="font-condensed font-extrabold text-bright-purple hover:text-white text-4xl block tracking-wide transition-colors"
                >
                  791 224 009
                </a>
              </div>

            </div>

            {/* Right side Google Map */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              
              <div className="h-full min-h-[380px] w-full border-2 border-primary-purple/50 bg-[#181520] relative flex items-stretch">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2546.0507114386614!2d19.099624558094344!3d50.34695952174278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716d0d416a7e779%3A0x3a514ebd4f032305!2sAdama%20Mickiewicza%2063%2C%2042-506%20B%C4%99dzin!5e0!3m2!1spl!2spl!4v1781162722744!5m2!1spl!2spl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '380px' }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps: Kontrabanda 4x4 Będzin"
                />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-[#060606] pt-16 pb-8 border-t border-primary-purple/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 flex flex-col items-center text-center">
          
          {/* Logo brand footer */}
          <a href="#home" className="flex items-center gap-3 mb-6">
            <div className="border border-primary-purple p-0.5 overflow-hidden bg-black flex-shrink-0">
              <img 
                src="https://i.ibb.co/GfjSvCCY/518127401-122110045334929060-5780794840305835487-n.jpg"
                alt="Logo Kontrabanda 4x4" 
                className="h-[38px] w-[38px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-condensed font-extrabold text-2xl tracking-wide text-white block uppercase">
              KONTRABANDA 4X4
            </span>
          </a>

          {/* Thin line */}
          <div className="w-full max-w-sm h-[1px] bg-gradient-to-r from-transparent via-[#7B2FBE]/50 to-transparent mb-6" />

          {/* Tagline */}
          <p className="font-sans text-xs italic text-[#9E9AAA] max-w-md leading-relaxed mb-8">
            "Zrobimy wszystko co chcesz. Zawsze solidnie i rzetelnie."
          </p>

          {/* Footer menu links */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-8 font-condensed font-semibold text-sm uppercase tracking-wider">
            <a href="https://www.facebook.com/profile.php?id=61577871826778" target="_blank" rel="noopener noreferrer" className="text-glow-purple hover:text-bright-purple transition-colors">
              Facebook
            </a>
            <span className="text-white/10 select-none">·</span>
            <a href="https://www.facebook.com/profile.php?id=61577871826778&sk=reviews" target="_blank" rel="noopener noreferrer" className="text-glow-purple hover:text-bright-purple transition-colors">
              Opinie
            </a>
            <span className="text-white/10 select-none">·</span>
            <a href="#kontakt" className="text-glow-purple hover:text-bright-purple transition-colors">
              Kontakt
            </a>
          </div>

          {/* Copyright description tag */}
          <p className="font-sans text-[11px] text-[#9E9AAA]/70 leading-normal tracking-wide">
            © 2026 Kontrabanda 4x4 · Będzin, Śląsk · Wszelkie prawa zastrzeżone. Realizacja z pasji dla zmotoryzowanych.
          </p>

        </div>
      </footer>

      {/* BACK TO TOP FLOATING BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 p-3 bg-primary-purple hover:bg-bright-purple text-white border border-[#9D4EDD] focus:outline-none cursor-pointer shadow-[0_0_15px_rgba(123,47,190,0.5)] transition-colors"
            aria-label="Powrót na górę strony"
            id="back-to-top-btn"
          >
            <ChevronDown className="w-6 h-6 transform rotate-180" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
