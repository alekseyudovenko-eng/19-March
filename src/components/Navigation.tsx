import { useState, useEffect } from 'react';
import { 
  FileText, 
  DollarSign, 
  Factory, 
  Ship, 
  Scale, 
  TrendingUp, 
  Flag,
  ChevronUp,
  Menu
} from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: 'executive', label: 'Executive Summary', icon: FileText, color: 'text-amber-500' },
  { id: 'pricing', label: 'Pricing Dynamics', icon: DollarSign, color: 'text-green-500' },
  { id: 'production', label: 'Production & Trade', icon: Factory, color: 'text-purple-500' },
  { id: 'supply', label: 'Supply Chain', icon: Ship, color: 'text-red-500' },
  { id: 'policy', label: 'Policy & Regulation', icon: Scale, color: 'text-indigo-500' },
  { id: 'trends', label: 'Market Trends', icon: TrendingUp, color: 'text-pink-500' },
  { id: 'conclusion', label: 'Conclusion', icon: Flag, color: 'text-teal-500' },
];

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeLabel = sections.find(s => s.id === activeSection)?.label || 'Menu';

  return (
    <>
      {/* Fixed Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-3 py-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Menu className="w-4 h-4" />
                <span className="text-sm font-medium">{activeLabel}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] p-0">
              <SheetHeader className="p-4 border-b bg-gradient-to-r from-blue-600 to-blue-800">
                <SheetTitle className="text-white text-left">Report Sections</SheetTitle>
              </SheetHeader>
              <div className="py-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => handleSectionClick(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                        isActive 
                          ? 'bg-blue-50 border-r-4 border-blue-500' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${section.color}`} />
                      <span className={`text-sm ${isActive ? 'font-semibold text-blue-900' : 'text-gray-700'}`}>
                        {section.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
          
          <div className="text-xs text-gray-500 font-medium">
            Oil Market Report
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
