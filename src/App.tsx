import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { ExecutiveSummary } from '@/components/sections/ExecutiveSummary';
import { PricingDynamics } from '@/components/sections/PricingDynamics';
import { ProductionTrade } from '@/components/sections/ProductionTrade';
import { SupplyChain } from '@/components/sections/SupplyChain';
import { Policy } from '@/components/sections/Policy';
import { Trends } from '@/components/sections/Trends';
import { Conclusion } from '@/components/sections/Conclusion';
import './App.css';

// Telegram WebApp types
declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        ready: () => void;
        expand: () => void;
        close: () => void;
        MainButton: {
          show: () => void;
          hide: () => void;
          setText: (text: string) => void;
          onClick: (callback: () => void) => void;
        };
        themeParams: {
          bg_color?: string;
          text_color?: string;
          hint_color?: string;
          link_color?: string;
          button_color?: string;
          button_text_color?: string;
        };
      };
    };
  }
}

function App() {
  const [activeSection, setActiveSection] = useState('executive');

  useEffect(() => {
    // Initialize Telegram WebApp
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      tg.expand();
      
      // Set theme based on Telegram theme
      const theme = tg.themeParams;
      if (theme.bg_color) {
        document.body.style.backgroundColor = theme.bg_color;
      }
    }

    // Intersection Observer for tracking active section
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    const sectionIds = ['executive', 'pricing', 'production', 'supply', 'policy', 'trends', 'conclusion'];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="pt-14 pb-8 px-3 max-w-lg mx-auto">
        <Header />
        
        <div id="executive">
          <ExecutiveSummary />
        </div>
        
        <div id="pricing">
          <PricingDynamics />
        </div>
        
        <div id="production">
          <ProductionTrade />
        </div>
        
        <div id="supply">
          <SupplyChain />
        </div>
        
        <div id="policy">
          <Policy />
        </div>
        
        <div id="trends">
          <Trends />
        </div>
        
        <div id="conclusion">
          <Conclusion />
        </div>
        
        <footer className="text-center text-xs text-gray-400 mt-8 pb-4">
          <p>Extended Weekly Update • March 16, 2026</p>
          <p className="mt-1">Vegetable Oils & Fats Market Analysis</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
