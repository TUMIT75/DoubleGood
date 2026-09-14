import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Menu,
  X,
  MapPin,
  Clock,
  DollarSign,
  Share2,
  Trophy,
  Package,
  Calendar,
  HeartHandshake,
  Users,
  Sparkles,
  TrendingUp,
  Star,
  ShieldCheck,
  Zap,
  Sliders,
  Mail,
  Phone,
  HelpCircle,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

/* ==========================================================================
   POP CITY GOURMET POPCORN - CLEAN & MINIMAL FUNDRAISING HOMEPAGE
   Aesthetics:
   - Minimalist, professional typography (Outfit & Plus Jakarta Sans)
   - Clean white / subtle neutral canvas with crisp modern borders
   - Bold Pop City crimson red (#D31E1E) & warm gold (#F5B400) accents
   - High readability, generous spacing, no cartoonish clutter
   ========================================================================== */

interface Flavor {
  id: string;
  name: string;
  category: string;
  description: string;
  tag: string;
  bgGradient: string;
  badgeColor: string;
}

const POPULAR_FLAVORS: Flavor[] = [
  {
    id: 'third-ward',
    name: '3rd Ward Signature Mix',
    category: 'Fan Favorite',
    description: 'The iconic sweet & savory blend of rich caramel corn and aged sharp cheddar.',
    tag: 'Best Seller',
    bgGradient: 'from-amber-100/80 to-red-100/60',
    badgeColor: 'bg-[#D31E1E] text-white',
  },
  {
    id: 'golden-caramel',
    name: 'Artisan Golden Caramel',
    category: 'Sweet Classic',
    description: 'Slow-cooked in copper kettles with pure cane sugar and real Wisconsin butter.',
    tag: 'Award Winner',
    bgGradient: 'from-amber-100/70 to-yellow-100/50',
    badgeColor: 'bg-[#F5B400] text-black',
  },
  {
    id: 'sharp-cheddar',
    name: 'White Cheddar Supreme',
    category: 'Savory',
    description: 'Tender jumbo puffs generously coated in tangy, real white cheddar cheese.',
    tag: 'Classic',
    bgGradient: 'from-zinc-100 to-amber-50',
    badgeColor: 'bg-zinc-800 text-white',
  },
  {
    id: 'spicy-kick',
    name: 'Kickin’ Jalapeño Cheddar',
    category: 'Specialty Heat',
    description: 'Zesty jalapeño warmth balanced by smooth cheddar for a gourmet kick.',
    tag: 'Zesty Pick',
    bgGradient: 'from-red-100/70 to-amber-100/60',
    badgeColor: 'bg-[#D31E1E] text-white',
  },
];

export default function App() {
  // Navigation & Modal state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Profit Calculator state
  const [participants, setParticipants] = useState<number>(20);
  const [bagsSold, setBagsSold] = useState<number>(10);
  const profitPerBag = 7.50;
  const retailPrice = 15.00;
  const totalBags = participants * bagsSold;
  const totalProfit = totalBags * profitPerBag;
  const totalGross = totalBags * retailPrice;

  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    orgType: 'Sports Team',
    email: '',
    phone: '',
    participantsCount: '20',
  });

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 flex flex-col font-sans selection:bg-[#D31E1E] selection:text-white">
      
      {/* ====================================================================
          TOP VALUE BAR (Subtle, Clean & High Trust)
          ==================================================================== */}
      <aside aria-label="Announcement Bar" className="bg-[#111315] text-zinc-300 text-xs py-2.5 px-4 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left font-medium">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-[#D31E1E] text-white tracking-wide uppercase">
              50% Profit Split
            </span>
            <span>
              Your team earns <strong className="text-white font-semibold">$7.50 on every bag</strong> sold. 100% online, zero upfront cost.
            </span>
          </div>
          <div className="flex items-center gap-4 text-zinc-400 text-xs">
            <span className="hidden md:inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#F5B400]" />
              3rd Street Market Hall, Downtown Milwaukee
            </span>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-white hover:text-[#F5B400] font-semibold transition-colors flex items-center gap-1"
            >
              Get Free Kit <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </aside>

      {/* ====================================================================
          1. STICKY TOP NAVIGATION
          ==================================================================== */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-zinc-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Identity / Clean Logo */}
          <a href="#" className="flex items-center gap-3.5 group">
            {/* Popcorn Bucket Emblem */}
            <div className="w-10 h-10 rounded-xl bg-[#D31E1E] p-1.5 flex flex-col items-center justify-center shadow-xs border border-red-700/20 group-hover:scale-105 transition-transform">
              <div className="flex -space-x-0.5 mb-0.5">
                <span className="w-2 h-2 bg-[#F5B400] rounded-full inline-block"></span>
                <span className="w-2.5 h-2.5 bg-white rounded-full inline-block"></span>
                <span className="w-2 h-2 bg-[#F5B400] rounded-full inline-block"></span>
              </div>
              <div className="w-5 h-4 bg-white rounded-b-xs flex justify-around items-stretch overflow-hidden px-0.5">
                <div className="w-0.5 bg-[#D31E1E]"></div>
                <div className="w-0.5 bg-[#D31E1E]"></div>
                <div className="w-0.5 bg-[#D31E1E]"></div>
              </div>
            </div>

            {/* Wordmark */}
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-extrabold text-2xl tracking-tight text-zinc-950">
                  POP <span className="text-[#D31E1E]">CITY</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 hidden sm:inline">
                  Fundraising
                </span>
              </div>
              <span className="text-[11px] text-zinc-500 font-medium tracking-normal -mt-1">
                Gourmet Popcorn • Milwaukee, WI
              </span>
            </div>
          </a>

          {/* Clean Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-zinc-600">
            <a href="#how-it-works" className="hover:text-zinc-950 transition-colors">
              How It Works
            </a>
            <a href="#who-we-help" className="hover:text-zinc-950 transition-colors">
              Who We Help
            </a>
            <a href="#profit-calculator" className="hover:text-zinc-950 transition-colors flex items-center gap-1.5">
              <span>Calculator</span>
              <span className="bg-red-50 text-[#D31E1E] text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-red-200">
                50%
              </span>
            </a>
            <a href="#flavors" className="hover:text-zinc-950 transition-colors">
              Flavors
            </a>
            <a href="#results" className="hover:text-zinc-950 transition-colors">
              Success Stories
            </a>
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#D31E1E] hover:bg-[#b51717] text-white font-medium text-sm px-5 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all active:scale-98 flex items-center gap-2"
            >
              <span>Start a Fundraiser</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-zinc-200 px-6 py-5 space-y-4 shadow-xl">
            <div className="flex flex-col space-y-3 font-semibold text-zinc-700 text-sm">
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-zinc-950"
              >
                How It Works
              </a>
              <a
                href="#who-we-help"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-zinc-950"
              >
                Who We Help
              </a>
              <a
                href="#profit-calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-zinc-950 flex items-center justify-between"
              >
                <span>Profit Calculator</span>
                <span className="bg-red-50 text-[#D31E1E] text-xs px-2 py-0.5 rounded-full">
                  50% Return
                </span>
              </a>
              <a
                href="#flavors"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-zinc-950"
              >
                Gourmet Flavors
              </a>
              <a
                href="#results"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-zinc-950"
              >
                Success Stories
              </a>
            </div>
            <div className="pt-2 border-t border-zinc-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full bg-[#D31E1E] text-white font-medium text-sm py-3 rounded-full text-center shadow-xs flex items-center justify-center gap-2"
              >
                <span>Start a Fundraiser</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ====================================================================
          2. HERO SECTION (Minimalist, Elevated & Professional)
          ==================================================================== */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-zinc-200/80 bg-white">
        
        {/* Subtle Ambient Background */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-50/50 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Refined Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-800 border border-zinc-200/70 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#D31E1E] animate-pulse"></span>
                <span className="font-semibold text-zinc-950">Support Teams. Build Community.</span>
                <span className="text-zinc-400">|</span>
                <span className="text-[#D31E1E] font-bold">50% Profit Returned</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.1]">
                Get a Popping <br className="hidden sm:inline" />
                <span className="text-[#D31E1E]">Fundraiser</span> for Your Team.
              </h1>

              {/* Clear, Minimal Subheadline */}
              <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Turn your team’s passion into real funding in just <strong>7 days</strong>. Sell Milwaukee’s favorite small-batch gourmet popcorn 100% online. Zero money handling, direct doorstep delivery, and zero upfront cost.
              </p>

              {/* Primary Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto bg-[#D31E1E] hover:bg-[#b01616] text-white font-semibold text-base px-7 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all active:scale-98 flex items-center justify-center gap-2.5"
                >
                  <span>Start a Fundraiser</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#profit-calculator"
                  className="w-full sm:w-auto bg-zinc-50 hover:bg-zinc-100 text-zinc-800 font-medium text-base px-6 py-3.5 rounded-full border border-zinc-200 shadow-2xs transition-all flex items-center justify-center gap-2"
                >
                  <DollarSign className="w-4 h-4 text-[#D31E1E]" />
                  <span>Calculate Team Profit</span>
                </a>
              </div>

              {/* Clean Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-zinc-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D31E1E]" />
                  <span>Keep $7.50 per bag (50%)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D31E1E]" />
                  <span>Ships fresh direct to door</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D31E1E]" />
                  <span>Launch in under 5 minutes</span>
                </div>
              </div>

            </div>

            {/* Right Product Showcase & Campaign Preview (Clean & Editorial) */}
            <div className="lg:col-span-5 relative">
              
              {/* Product Card Container */}
              <div className="relative bg-[#FAFAFA] rounded-2xl border border-zinc-200 p-5 sm:p-6 shadow-xs">
                
                {/* Floating Live Fundraiser Stat Badge */}
                <div className="absolute -top-3.5 right-6 bg-[#111315] text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2 border border-zinc-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Live 7-Day Sprint</span>
                </div>

                {/* Popcorn Photography Placeholder Block (Clean, Elegant, Architectural) */}
                <div 
                  className="relative aspect-4/3 w-full rounded-xl bg-gradient-to-br from-zinc-100 via-zinc-50 to-amber-50/40 border border-dashed border-zinc-300 flex flex-col items-center justify-center p-6 text-center overflow-hidden"
                  aria-label="High-resolution popcorn photography placeholder"
                >
                  {/* Minimal Stylized Popcorn Graphic */}
                  <div className="w-20 h-24 bg-white rounded-lg border border-zinc-200 p-2 flex flex-col items-center justify-end relative shadow-sm mb-3">
                    <div className="flex space-x-1 -mt-4 mb-2">
                      <span className="w-4 h-4 bg-[#F5B400] rounded-full inline-block shadow-2xs"></span>
                      <span className="w-4.5 h-4.5 bg-white border border-zinc-200 rounded-full inline-block -mt-1 shadow-2xs"></span>
                      <span className="w-4 h-4 bg-[#F5B400] rounded-full inline-block shadow-2xs"></span>
                    </div>
                    <div className="w-full h-12 flex justify-between px-1">
                      <div className="w-1.5 bg-[#D31E1E] rounded-xs"></div>
                      <div className="w-1.5 bg-[#D31E1E] rounded-xs"></div>
                      <div className="w-1.5 bg-[#D31E1E] rounded-xs"></div>
                    </div>
                    <span className="text-[8px] font-bold text-zinc-700 uppercase tracking-tight mt-1">
                      Pop City
                    </span>
                  </div>

                  {/* Clean Placeholder Descriptor */}
                  <div className="bg-white/90 backdrop-blur-xs px-4 py-2 rounded-lg border border-zinc-200 shadow-2xs max-w-xs">
                    <p className="text-xs font-semibold text-zinc-900 tracking-wide">
                      [ Product & Team Photography Placeholder ]
                    </p>
                    <p className="text-[11px] text-zinc-500 mt-0.5">
                      High-resolution shot of Pop City signature gourmet bags & happy team members
                    </p>
                  </div>
                </div>

                {/* Mini Campaign Live Progress Metric */}
                <div className="mt-4 pt-4 border-t border-zinc-200/80">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-zinc-700">East High Basketball 2026</span>
                    <span className="font-bold text-[#D31E1E]">$2,450 raised of $2,000</span>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#D31E1E] to-[#F5B400] w-[122%] rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center mt-2 text-[11px] text-zinc-500">
                    <span>164 Bags Sold</span>
                    <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                      Goal 122% Achieved
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================
          3. QUICK STAT / VALUE STRIP
          "20 Players × 10 Bags = $1,500 for Your Team"
          "Your Team Earns $7.50 for Every Bag Sold"
          ==================================================================== */}
      <section className="bg-white py-10 border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Math Formula Pill */}
            <div className="lg:col-span-7 bg-zinc-50 rounded-2xl p-6 border border-zinc-200 flex flex-wrap items-center justify-center lg:justify-between gap-4 text-center">
              
              {/* Players */}
              <div className="flex flex-col items-center">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-zinc-950">
                  20
                </span>
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-0.5">
                  Players
                </span>
              </div>

              <span className="text-2xl font-light text-zinc-400">×</span>

              {/* Bags Each */}
              <div className="flex flex-col items-center">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-zinc-950">
                  10
                </span>
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-0.5">
                  Bags Each
                </span>
              </div>

              <span className="text-2xl font-light text-zinc-400">=</span>

              {/* Total For Your Team */}
              <div className="flex flex-col items-center sm:items-end bg-white px-5 py-2.5 rounded-xl border border-zinc-200 shadow-2xs">
                <div className="font-display text-4xl sm:text-5xl font-black text-[#D31E1E]">
                  $1,500
                </div>
                <span className="text-xs font-bold text-zinc-800 uppercase tracking-wider">
                  For Your Team
                </span>
              </div>
            </div>

            {/* Right Value Banner */}
            <div className="lg:col-span-5 bg-gradient-to-r from-red-50 via-amber-50/50 to-red-50 rounded-2xl p-6 border border-red-200/70 flex flex-col justify-center text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#D31E1E]"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D31E1E]">
                  Industry-Leading Return
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-900 leading-tight">
                Your Team Earns <span className="text-[#D31E1E] font-black underline decoration-[#F5B400] decoration-3">$7.50</span> for Every Bag Sold
              </h3>
              <p className="text-xs text-zinc-600 mt-1 font-medium">
                No hidden processing deductions. 50% flat split directly wired to your bank.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ====================================================================
          INTERACTIVE PROFIT CALCULATOR
          Clean, elegant sliders with instant real-time calculation
          ==================================================================== */}
      <section id="profit-calculator" className="py-16 bg-[#FAFAFA] border-b border-zinc-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D31E1E]">
              Interactive Estimator
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight mt-1">
              Calculate Your Team’s Earnings
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-2">
              Slide to match your roster size and realistic bag goal to see what you can raise in 7 days.
            </p>
          </div>

          {/* Calculator Card */}
          <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Sliders Left */}
              <div className="md:col-span-7 space-y-8">
                
                {/* Slider 1: Participants */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label htmlFor="participants-range" className="text-sm font-semibold text-zinc-800">
                      Active Participants / Players
                    </label>
                    <span className="text-base font-bold text-zinc-950 bg-zinc-100 px-3 py-1 rounded-lg border border-zinc-200">
                      {participants} Participants
                    </span>
                  </div>
                  <input
                    id="participants-range"
                    type="range"
                    min="5"
                    max="100"
                    step="5"
                    value={participants}
                    onChange={(e) => setParticipants(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#D31E1E]"
                  />
                  <div className="flex justify-between text-[11px] text-zinc-400 font-medium">
                    <span>5 (Small squad)</span>
                    <span>20 (Standard team)</span>
                    <span>50 (School club)</span>
                    <span>100+ (Entire league)</span>
                  </div>
                </div>

                {/* Slider 2: Bags per person */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label htmlFor="bags-range" className="text-sm font-semibold text-zinc-800">
                      Estimated Bags Sold per Person
                    </label>
                    <span className="text-base font-bold text-zinc-950 bg-zinc-100 px-3 py-1 rounded-lg border border-zinc-200">
                      {bagsSold} Bags
                    </span>
                  </div>
                  <input
                    id="bags-range"
                    type="range"
                    min="5"
                    max="30"
                    step="1"
                    value={bagsSold}
                    onChange={(e) => setBagsSold(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#D31E1E]"
                  />
                  <div className="flex justify-between text-[11px] text-zinc-400 font-medium">
                    <span>5 bags ($37.50)</span>
                    <span>10 bags ($75.00 avg)</span>
                    <span>20 bags ($150.00)</span>
                    <span>30 bags ($225.00 star)</span>
                  </div>
                </div>

                <div className="bg-zinc-50 rounded-xl p-3.5 border border-zinc-200 text-xs text-zinc-600 flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Simple pricing: Bags retail for $15.00 each. Your team keeps <strong>exactly 50% ($7.50)</strong>.
                  </span>
                </div>

              </div>

              {/* Profit Box Right */}
              <div className="md:col-span-5 bg-[#111315] text-white rounded-xl p-6 text-center flex flex-col justify-between shadow-sm">
                <div>
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Total Estimated Team Profit
                  </span>
                  <div className="font-display text-5xl sm:text-6xl font-black text-[#F5B400] tracking-tight my-3">
                    ${totalProfit.toLocaleString()}
                  </div>
                  <p className="text-xs text-zinc-400">
                    From {totalBags} total gourmet bags sold
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800 space-y-2 text-xs text-left">
                  <div className="flex justify-between text-zinc-400">
                    <span>Total Sales Generated:</span>
                    <span className="font-semibold text-white">${totalGross.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>Your Organization Cut:</span>
                    <span className="font-semibold text-emerald-400">50% Net Payout</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="mt-6 w-full bg-[#D31E1E] hover:bg-[#b01616] text-white font-medium text-sm py-3 rounded-full transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Lock In Your 7-Day Window</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ====================================================================
          4. "HOW IT WORKS" (Double Good 3-Step Flow — Minimal & Structured)
          ==================================================================== */}
      <section id="how-it-works" className="py-20 bg-white border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D31E1E]">
              Simple & Streamlined
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight mt-1">
              How Pop City Fundraising Works
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-2">
              No handling cash, no carrying boxes, no order sheet chaos. Everything is managed digitally in 3 seamless steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="bg-[#FAFAFA] rounded-2xl p-8 border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#D31E1E] text-white flex items-center justify-center font-display font-bold text-lg mb-6 shadow-2xs">
                  01
                </div>
                <h3 className="font-display text-lg font-bold text-zinc-950 mb-2">
                  Set Up Your Team Fundraiser
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Register your group in under 5 minutes. Set your fundraising goal, upload your team mascot or logo, and choose your 7-day start date.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-zinc-200/60 text-xs font-semibold text-zinc-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D31E1E]" />
                <span>Instant store setup — 100% free</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#FAFAFA] rounded-2xl p-8 border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-900 text-[#F5B400] flex items-center justify-center font-display font-bold text-lg mb-6 shadow-2xs">
                  02
                </div>
                <h3 className="font-display text-lg font-bold text-zinc-950 mb-2">
                  Share Your Online Store
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Every player gets a unique digital link. Share with parents, family, alumni, and friends across text, email, and social media with one click.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-zinc-200/60 text-xs font-semibold text-zinc-700 flex items-center gap-1.5">
                <Share2 className="w-4 h-4 text-[#D31E1E]" />
                <span>Mobile-optimized payment & checkout</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#FAFAFA] rounded-2xl p-8 border border-zinc-200 flex flex-col justify-between hover:border-zinc-300 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F5B400] text-zinc-950 flex items-center justify-center font-display font-bold text-lg mb-6 shadow-2xs">
                  03
                </div>
                <h3 className="font-display text-lg font-bold text-zinc-950 mb-2">
                  Watch Funds Roll In Live
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Track live leaderboards as purchases occur. When the sprint closes, we pop fresh, ship directly to supporters, and transfer 50% profit instantly.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-zinc-200/60 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-emerald-600" />
                <span>Direct payout to your group account</span>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-sm px-6 py-3 rounded-full transition-colors shadow-xs"
            >
              <span>Ready to Get Started? Launch Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ====================================================================
          5. "WHO WE HELP" (Minimalist Badge Grid)
          Sports Teams, Schools, Clubs, Cheer & Dance, Churches, Youth Orgs
          ==================================================================== */}
      <section id="who-we-help" className="py-20 bg-[#FAFAFA] border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D31E1E]">
              Community Impact
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight mt-1">
              Who We Help
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-2">
              From competitive sports to school music departments, we help community organizations meet their critical financial goals.
            </p>
          </div>

          {/* 6 Clean Circular Badge Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
            
            {/* 1. Sports Teams */}
            <div className="bg-white rounded-xl p-5 border border-zinc-200 text-center flex flex-col items-center hover:border-zinc-300 hover:shadow-xs transition-all">
              <div className="w-14 h-14 rounded-full bg-zinc-900 text-white flex items-center justify-center mb-3.5 relative border border-zinc-800">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span className="absolute -bottom-0.5 right-0.5 w-3 h-3 bg-[#D31E1E] rounded-full border border-white"></span>
              </div>
              <h3 className="font-display text-sm font-bold text-zinc-900">
                Sports Teams
              </h3>
              <span className="text-[11px] text-zinc-500 mt-1">
                AAU, Leagues, Club
              </span>
            </div>

            {/* 2. Schools */}
            <div className="bg-white rounded-xl p-5 border border-zinc-200 text-center flex flex-col items-center hover:border-zinc-300 hover:shadow-xs transition-all">
              <div className="w-14 h-14 rounded-full bg-zinc-900 text-white flex items-center justify-center mb-3.5 relative border border-zinc-800">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                <span className="absolute -bottom-0.5 right-0.5 w-3 h-3 bg-[#D31E1E] rounded-full border border-white"></span>
              </div>
              <h3 className="font-display text-sm font-bold text-zinc-900">
                Schools
              </h3>
              <span className="text-[11px] text-zinc-500 mt-1">
                PTAs, High Schools, Trips
              </span>
            </div>

            {/* 3. Clubs */}
            <div className="bg-white rounded-xl p-5 border border-zinc-200 text-center flex flex-col items-center hover:border-zinc-300 hover:shadow-xs transition-all">
              <div className="w-14 h-14 rounded-full bg-zinc-900 text-white flex items-center justify-center mb-3.5 relative border border-zinc-800">
                <Users className="w-7 h-7 text-white" />
                <span className="absolute -bottom-0.5 right-0.5 w-3 h-3 bg-[#D31E1E] rounded-full border border-white"></span>
              </div>
              <h3 className="font-display text-sm font-bold text-zinc-900">
                Clubs
              </h3>
              <span className="text-[11px] text-zinc-500 mt-1">
                Robotics, Band, Theater
              </span>
            </div>

            {/* 4. Cheer & Dance */}
            <div className="bg-white rounded-xl p-5 border border-zinc-200 text-center flex flex-col items-center hover:border-zinc-300 hover:shadow-xs transition-all">
              <div className="w-14 h-14 rounded-full bg-zinc-900 text-white flex items-center justify-center mb-3.5 relative border border-zinc-800">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18.8 4A6.3 8.7 0 0 1 20 9a6.3 8.7 0 0 1-1.2 5M3 11v3a1 1 0 0 0 1 1h2l4 4V5L6 9H4a1 1 0 0 0-1 1z" />
                </svg>
                <span className="absolute -bottom-0.5 right-0.5 w-3 h-3 bg-[#D31E1E] rounded-full border border-white"></span>
              </div>
              <h3 className="font-display text-sm font-bold text-zinc-900">
                Cheer & Dance
              </h3>
              <span className="text-[11px] text-zinc-500 mt-1">
                Competitive & Squads
              </span>
            </div>

            {/* 5. Churches */}
            <div className="bg-white rounded-xl p-5 border border-zinc-200 text-center flex flex-col items-center hover:border-zinc-300 hover:shadow-xs transition-all">
              <div className="w-14 h-14 rounded-full bg-zinc-900 text-white flex items-center justify-center mb-3.5 relative border border-zinc-800">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v6m-3-3h6M4 22h16M6 22V9l6-4 6 4v13M10 22v-5a2 2 0 0 1 4 0v5" />
                </svg>
                <span className="absolute -bottom-0.5 right-0.5 w-3 h-3 bg-[#D31E1E] rounded-full border border-white"></span>
              </div>
              <h3 className="font-display text-sm font-bold text-zinc-900">
                Churches
              </h3>
              <span className="text-[11px] text-zinc-500 mt-1">
                Youth Groups, Missions
              </span>
            </div>

            {/* 6. Youth Orgs */}
            <div className="bg-white rounded-xl p-5 border border-zinc-200 text-center flex flex-col items-center hover:border-zinc-300 hover:shadow-xs transition-all">
              <div className="w-14 h-14 rounded-full bg-zinc-900 text-white flex items-center justify-center mb-3.5 relative border border-zinc-800">
                <HeartHandshake className="w-7 h-7 text-white" />
                <span className="absolute -bottom-0.5 right-0.5 w-3 h-3 bg-[#D31E1E] rounded-full border border-white"></span>
              </div>
              <h3 className="font-display text-sm font-bold text-zinc-900">
                Youth Orgs
              </h3>
              <span className="text-[11px] text-zinc-500 mt-1">
                Scouts, YMCA, Centers
              </span>
            </div>

          </div>

          {/* Clean Callout Strip */}
          <div className="mt-10 bg-white rounded-xl p-6 border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-center sm:text-left">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-[#D31E1E] flex items-center justify-center shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <p className="font-display text-sm font-bold text-zinc-900">
                  SELL MORE • RAISE MORE • MAKE AN IMPACT
                </p>
                <p className="text-xs text-zinc-500">
                  Have a specific goal or timeline? Pop City builds custom campaigns for any group size.
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-xs font-semibold text-[#D31E1E] hover:text-[#b01616] border border-red-200 bg-red-50/50 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              Consult with a Specialist
            </button>
          </div>

        </div>
      </section>

      {/* ====================================================================
          6. FEATURES BAR (Minimalist 3 Columns)
          ==================================================================== */}
      <section className="bg-white py-14 border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-100">
            
            {/* Feature 1 */}
            <div className="flex items-start gap-4 pt-4 md:pt-0 md:pr-6">
              <div className="w-11 h-11 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0 text-zinc-900 border border-zinc-200">
                <Calendar className="w-5 h-5 text-[#D31E1E]" />
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-zinc-950">
                  7-Day Fundraising Campaign
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1 leading-relaxed">
                  A compact 7-day sprint creates genuine urgency and keeps your team completely energized without volunteer burnout.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4 pt-6 md:pt-0 md:px-6">
              <div className="w-11 h-11 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0 text-zinc-900 border border-zinc-200">
                <Package className="w-5 h-5 text-[#F5B400]" />
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-zinc-950">
                  Delicious Gourmet Flavors
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1 leading-relaxed">
                  Small-batch artisan recipes crafted with non-GMO corn, real aged cheddar, and decadent butter caramel. Premium quality people crave.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4 pt-6 md:pt-0 md:pl-6">
              <div className="w-11 h-11 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0 text-zinc-900 border border-zinc-200">
                <TrendingUp className="w-5 h-5 text-[#D31E1E]" />
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-zinc-950">
                  Support Local, Make a Difference
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1 leading-relaxed">
                  Rooted right in Downtown Milwaukee at 3rd Street Market Hall. You support local craftsmanship while funding youth opportunity.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ====================================================================
          GOURMET FLAVORS SHOWCASE
          ==================================================================== */}
      <section id="flavors" className="py-20 bg-[#FAFAFA] border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D31E1E]">
                Artisan Quality
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight mt-1">
                Flavors That Sell Themselves
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base mt-1">
                Every bag is popped fresh to order using premium ingredients.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="text-xs text-zinc-500 font-medium">
                Retails at <strong className="text-zinc-900">$15.00/bag</strong> • $7.50 returned to you
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {POPULAR_FLAVORS.map((flavor) => (
              <div
                key={flavor.id}
                className="bg-white rounded-xl border border-zinc-200 overflow-hidden flex flex-col justify-between hover:shadow-sm transition-all"
              >
                {/* Visual Placeholder for Flavor Photography */}
                <div className={`h-44 bg-gradient-to-br ${flavor.bgGradient} p-4 relative flex flex-col justify-between border-b border-zinc-100`}>
                  <div className="flex justify-between items-start">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${flavor.badgeColor}`}>
                      {flavor.tag}
                    </span>
                    <span className="text-[10px] bg-white/90 text-zinc-700 font-semibold px-2 py-0.5 rounded">
                      {flavor.category}
                    </span>
                  </div>

                  {/* Clean Minimal Placeholder Graphic */}
                  <div className="flex flex-col items-center justify-center my-auto">
                    <div className="w-12 h-14 bg-white/95 rounded-md border border-zinc-200 shadow-2xs flex flex-col items-center justify-center">
                      <span className="w-2.5 h-2.5 bg-[#F5B400] rounded-full mb-1"></span>
                      <span className="text-[8px] font-bold text-zinc-800 uppercase">POP CITY</span>
                    </div>
                    <span className="text-[9px] text-zinc-500 mt-1 font-medium">[ Flavor Bag Photo ]</span>
                  </div>
                </div>

                {/* Flavor Details */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-display text-base font-bold text-zinc-950 mb-1">
                      {flavor.name}
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {flavor.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold">
                    <span className="text-zinc-500">$15 Retail</span>
                    <span className="text-[#D31E1E]">+$7.50 for your team</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ====================================================================
          7. RESULTS / SOCIAL PROOF (High-Trust Editorial Cards)
          ==================================================================== */}
      <section id="results" className="py-20 bg-white border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D31E1E]">
              Proven Impact
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight mt-1">
              Real Teams. Real Results.
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-2">
              Over $150,000+ raised for Milwaukee-area athletic programs, music groups, and youth initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Story 1 */}
            <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-zinc-900 bg-zinc-200/70 px-2.5 py-1 rounded">
                    Youth Basketball
                  </span>
                  <div className="flex text-[#F5B400]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="font-display text-3xl font-extrabold text-[#D31E1E] mb-1">
                  $3,150 Raised
                </div>
                <p className="text-xs text-zinc-500 mb-4 font-medium">
                  24 Players • 420 Bags Sold in 7 Days
                </p>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                  "Our players shared their store link with grandma in Florida and aunts in Chicago. We had our entire tournament travel budget covered in less than a week."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-900 text-white text-xs font-bold flex items-center justify-center">
                  MD
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-950">Coach Marcus D.</p>
                  <p className="text-[11px] text-zinc-500">Milwaukee Elite AAU</p>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-zinc-900 bg-zinc-200/70 px-2.5 py-1 rounded">
                    High School Cheer
                  </span>
                  <div className="flex text-[#F5B400]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="font-display text-3xl font-extrabold text-[#D31E1E] mb-1">
                  $2,400 Raised
                </div>
                <p className="text-xs text-zinc-500 mb-4 font-medium">
                  18 Squad Members • 320 Bags Sold
                </p>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                  "No sorting bags, no sticky chocolate boxes melting in cars. People loved the 3rd Ward mix and were asking how to buy more after the campaign closed!"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-900 text-white text-xs font-bold flex items-center justify-center">
                  SK
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-950">Sarah K.</p>
                  <p className="text-[11px] text-zinc-500">Varsity Cheer Booster Club</p>
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-zinc-900 bg-zinc-200/70 px-2.5 py-1 rounded">
                    Middle School Band
                  </span>
                  <div className="flex text-[#F5B400]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="font-display text-3xl font-extrabold text-[#D31E1E] mb-1">
                  $4,875 Raised
                </div>
                <p className="text-xs text-zinc-500 mb-4 font-medium">
                  45 Students • 650 Bags Sold
                </p>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                  "The 50% split is the highest we've ever seen from a food fundraiser. We bought brand new brass instruments and sheet music for our entire ensemble."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-900 text-white text-xs font-bold flex items-center justify-center">
                  TR
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-950">Timothy R.</p>
                  <p className="text-[11px] text-zinc-500">Music Director</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ====================================================================
          8. FINAL CTA BAND (Minimal, Punchy & Clear)
          ==================================================================== */}
      <section className="py-20 bg-[#111315] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-800 text-[#F5B400] border border-zinc-700">
            <Sparkles className="w-3.5 h-3.5 text-[#F5B400]" />
            <span>Ready for Your Next Win?</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Launch Your 7-Day Fundraiser Today and Keep <span className="text-[#F5B400]">50% of Every Sale</span>.
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            No contracts, no upfront fees, no inventory headaches. Just delicious popcorn and direct community support.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-[#D31E1E] hover:bg-[#b01616] text-white font-medium text-base px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all active:scale-98 flex items-center justify-center gap-2"
            >
              <span>Start Your Fundraiser Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#profit-calculator"
              className="w-full sm:w-auto text-zinc-300 hover:text-white border border-zinc-700 hover:border-zinc-500 font-medium text-base px-7 py-4 rounded-full transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Earnings Calculator</span>
            </a>
          </div>

          <div className="pt-6 flex items-center justify-center gap-6 text-xs text-zinc-400">
            <span>✓ 100% Free to start</span>
            <span>✓ No minimums</span>
            <span>✓ Direct deposit payouts</span>
          </div>

        </div>
      </section>

      {/* ====================================================================
          9. FOOTER (Clean & Professional)
          ==================================================================== */}
      <footer className="bg-white border-t border-zinc-200 text-zinc-600 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            
            {/* Column 1: Brand & Location */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#D31E1E] p-1 flex flex-col items-center justify-center shadow-xs">
                  <span className="w-1.5 h-1.5 bg-[#F5B400] rounded-full mb-0.5"></span>
                  <div className="w-3.5 h-2.5 bg-white rounded-2xs"></div>
                </div>
                <span className="font-display font-extrabold text-xl tracking-tight text-zinc-950">
                  POP <span className="text-[#D31E1E]">CITY</span>
                </span>
              </div>
              
              <p className="text-xs text-zinc-500 leading-relaxed">
                Pop City Gourmet Popcorn provides modern 50% profit digital fundraising for sports teams, schools, and community organizations.
              </p>

              <div className="pt-1 space-y-2 text-xs text-zinc-700 font-medium">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D31E1E] shrink-0" />
                  <span>Located inside 3rd Street Market Hall, Downtown Milwaukee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#F5B400] shrink-0" />
                  <span>Open 7 Days a Week • Fresh Small Batches</span>
                </div>
              </div>

              {/* Attribution / Network note */}
              <div className="pt-3 border-t border-zinc-100 text-[11px] text-zinc-400">
                Powered by <strong className="text-zinc-700">Seventh Level Network</strong>
                <span className="block text-[10px] text-zinc-400 mt-0.5">Media • Community • Impact</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="md:col-span-2 space-y-3">
              <h5 className="font-display text-xs font-bold uppercase tracking-wider text-zinc-950">
                Fundraising
              </h5>
              <ul className="space-y-2 text-xs font-medium">
                <li><a href="#how-it-works" className="hover:text-zinc-950 transition-colors">How It Works</a></li>
                <li><a href="#profit-calculator" className="hover:text-zinc-950 transition-colors">Profit Calculator</a></li>
                <li><a href="#who-we-help" className="hover:text-zinc-950 transition-colors">Who We Help</a></li>
                <li><a href="#flavors" className="hover:text-zinc-950 transition-colors">Gourmet Flavors</a></li>
                <li><a href="#results" className="hover:text-zinc-950 transition-colors">Success Stories</a></li>
              </ul>
            </div>

            {/* Column 3: Groups */}
            <div className="md:col-span-2 space-y-3">
              <h5 className="font-display text-xs font-bold uppercase tracking-wider text-zinc-950">
                Organizations
              </h5>
              <ul className="space-y-2 text-xs font-medium">
                <li><a href="#who-we-help" className="hover:text-zinc-950 transition-colors">Sports Teams (AAU/High School)</a></li>
                <li><a href="#who-we-help" className="hover:text-zinc-950 transition-colors">Marching Bands & Music</a></li>
                <li><a href="#who-we-help" className="hover:text-zinc-950 transition-colors">Cheer & Dance Academies</a></li>
                <li><a href="#who-we-help" className="hover:text-zinc-950 transition-colors">Church & Youth Ministries</a></li>
                <li><a href="#who-we-help" className="hover:text-zinc-950 transition-colors">Academic & STEM Clubs</a></li>
              </ul>
            </div>

            {/* Column 4: Newsletter & Contact */}
            <div className="md:col-span-4 space-y-3">
              <h5 className="font-display text-xs font-bold uppercase tracking-wider text-zinc-950">
                Fundraising Coordinator Kit
              </h5>
              <p className="text-xs text-zinc-500">
                Get our free downloadable Fundraising Playbook with sample parent scripts and campaign schedules.
              </p>

              {newsletterSuccess ? (
                <div className="bg-emerald-50 text-emerald-800 text-xs p-3 rounded-lg border border-emerald-200 font-medium">
                  ✓ Success! Check your inbox for the coordinator playbook.
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-[#D31E1E]"
                  />
                  <button
                    type="submit"
                    className="bg-[#D31E1E] hover:bg-[#b01616] text-white text-xs font-medium px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Send Kit
                  </button>
                </form>
              )}

              <div className="pt-3 text-[11px] text-zinc-400">
                Questions? Visit us in person at 3rd Street Market Hall or start online anytime.
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
            <p>© {new Date().getFullYear()} Pop City Gourmet Popcorn. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <button onClick={() => setIsModalOpen(true)} className="hover:text-zinc-700">Start a Fundraiser</button>
              <a href="#profit-calculator" className="hover:text-zinc-700">Calculator</a>
              <a href="#how-it-works" className="hover:text-zinc-700">Guidelines</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ====================================================================
          MODAL: START A FUNDRAISER LEAD FORM
          ==================================================================== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-lg bg-white rounded-2xl border border-zinc-200 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-zinc-700 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-zinc-950">
                  You’re All Set!
                </h3>
                <p className="text-sm text-zinc-600 max-w-sm mx-auto">
                  Thank you, <strong>{formData.name || 'Coordinator'}</strong>. Our Pop City fundraising team has received your information for <strong>{formData.organization || 'your group'}</strong> and will send your custom store setup link within 2 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setIsModalOpen(false);
                    }}
                    className="bg-[#D31E1E] text-white text-sm font-medium px-6 py-2.5 rounded-full"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D31E1E]">
                    Start in 5 Minutes
                  </span>
                  <h3 className="font-display text-2xl font-extrabold text-zinc-950 mt-1">
                    Set Up Your Team Fundraiser
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                    No upfront fees or credit card required. Fill this out and we'll prepare your personalized store.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      Organization / Team Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Riverside High Girls Varsity Basketball"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3.5 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-[#D31E1E]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">
                        Group Type *
                      </label>
                      <select
                        value={formData.orgType}
                        onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-[#D31E1E]"
                      >
                        <option>Sports Team</option>
                        <option>School / PTA</option>
                        <option>Marching Band / Music</option>
                        <option>Cheer & Dance</option>
                        <option>Church / Youth Group</option>
                        <option>Community Club / Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">
                        Estimated Participants *
                      </label>
                      <input
                        type="number"
                        min="5"
                        max="500"
                        required
                        value={formData.participantsCount}
                        onChange={(e) => setFormData({ ...formData, participantsCount: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3.5 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-[#D31E1E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">
                        Contact Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Coach / Coordinator Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3.5 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-[#D31E1E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(414) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3.5 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-[#D31E1E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="coordinator@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3.5 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-[#D31E1E]"
                    />
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full bg-[#D31E1E] hover:bg-[#b01616] text-white font-medium text-sm py-3 rounded-full transition-colors shadow-sm flex items-center justify-center gap-2"
                    >
                      <span>Create My Team's Store</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-[11px] text-zinc-400 text-center">
                    Zero upfront cost. Payouts transferred directly upon 7-day campaign completion.
                  </p>
                </form>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
