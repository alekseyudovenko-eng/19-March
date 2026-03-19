import { TrendingUp, Globe, Calendar } from 'lucide-react';
import { reportData } from '@/data/reportData';

export function Header() {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-4 rounded-xl shadow-lg mb-4">
      <div className="flex items-start gap-3">
        <div className="bg-white/20 p-2 rounded-lg">
          <TrendingUp className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h1 className="text-lg font-bold leading-tight mb-2">
            {reportData.title}
          </h1>
          <div className="flex flex-col gap-1 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{reportData.period}</span>
            </div>
            <div className="flex items-start gap-2">
              <Globe className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span className="text-xs leading-relaxed">{reportData.countries}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
