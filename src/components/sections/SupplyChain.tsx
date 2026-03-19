import { Ship, Route, AlertTriangle, Clock, TrendingUp } from 'lucide-react';
import { reportData } from '@/data/reportData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function SupplyChain() {
  return (
    <Card className="mb-4 border-l-4 border-l-red-500">
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <Ship className="w-5 h-5 text-red-500" />
          III. SUPPLY CHAIN LOGISTICS AND MARITIME SECURITY
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Strait of Hormuz */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-3 rounded-lg border border-red-200">
          <h4 className="font-semibold text-sm text-red-900 flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4" />
            3.1 {reportData.supplyChain.hormuz.title}
          </h4>
          <div className="space-y-2">
            {reportData.supplyChain.hormuz.points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                <p className="text-sm text-red-800 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="bg-white/70 p-2 rounded text-center border-2 border-red-300">
              <div className="text-xl font-bold text-red-700">0</div>
              <div className="text-xs text-red-600">AIS crossings (Mar 14)</div>
            </div>
            <div className="bg-white/70 p-2 rounded text-center border-2 border-orange-300">
              <div className="text-xl font-bold text-orange-700">$4,000</div>
              <div className="text-xs text-orange-600">per container surcharge</div>
            </div>
          </div>
        </div>

        {/* Middle Corridor */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-3 rounded-lg border border-emerald-200">
          <h4 className="font-semibold text-sm text-emerald-900 flex items-center gap-2 mb-3">
            <Route className="w-4 h-4" />
            3.2 {reportData.supplyChain.middleCorridor.title}
          </h4>
          <div className="space-y-2">
            {reportData.supplyChain.middleCorridor.points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                <p className="text-sm text-emerald-800 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="bg-white/70 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span className="text-xl font-bold text-emerald-700">11 days</span>
              </div>
              <div className="text-xs text-emerald-600">China-Baku transit</div>
            </div>
            <div className="bg-white/70 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span className="text-xl font-bold text-emerald-700">25x</span>
              </div>
              <div className="text-xs text-emerald-600">volume increase since 2022</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
