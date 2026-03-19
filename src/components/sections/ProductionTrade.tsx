import { Factory, AlertCircle, Globe, Package } from 'lucide-react';
import { reportData } from '@/data/reportData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ProductionTrade() {
  return (
    <Card className="mb-4 border-l-4 border-l-purple-500">
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <Factory className="w-5 h-5 text-purple-500" />
          II. PRODUCTION AND TRADE FLOWS
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Kazakhstan */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200">
          <h4 className="font-semibold text-sm text-green-900 flex items-center gap-2 mb-3">
            <Globe className="w-4 h-4" />
            2.1 {reportData.productionTrade.kazakhstan.title}
          </h4>
          <div className="space-y-2">
            {reportData.productionTrade.kazakhstan.points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                <p className="text-sm text-green-800 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="bg-white/70 p-2 rounded text-center">
              <div className="text-lg font-bold text-green-700">888.8K</div>
              <div className="text-xs text-green-600">tons produced</div>
            </div>
            <div className="bg-white/70 p-2 rounded text-center">
              <div className="text-lg font-bold text-green-700">+17.4%</div>
              <div className="text-xs text-green-600">YoY growth</div>
            </div>
            <div className="bg-white/70 p-2 rounded text-center">
              <div className="text-lg font-bold text-green-700">85.7%</div>
              <div className="text-xs text-green-600">sunflower oil share</div>
            </div>
          </div>
        </div>

        {/* Ukraine */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-sm text-blue-900 flex items-center gap-2 mb-3">
            <AlertCircle className="w-4 h-4" />
            2.2 {reportData.productionTrade.ukraine.title}
          </h4>
          <div className="space-y-2">
            {reportData.productionTrade.ukraine.points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                <p className="text-sm text-blue-800 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="bg-white/70 p-2 rounded text-center">
              <div className="text-lg font-bold text-red-600">25%</div>
              <div className="text-xs text-blue-600">idle capacity</div>
            </div>
            <div className="bg-white/70 p-2 rounded text-center">
              <div className="text-lg font-bold text-blue-700">4.1M</div>
              <div className="text-xs text-blue-600">tons export forecast</div>
            </div>
            <div className="bg-white/70 p-2 rounded text-center">
              <div className="text-lg font-bold text-red-600">-14%</div>
              <div className="text-xs text-blue-600">vs last year</div>
            </div>
          </div>
        </div>

        {/* Russia */}
        <div className="bg-gradient-to-r from-red-50 to-rose-50 p-3 rounded-lg border border-red-200">
          <h4 className="font-semibold text-sm text-red-900 flex items-center gap-2 mb-3">
            <Package className="w-4 h-4" />
            2.3 {reportData.productionTrade.russia.title}
          </h4>
          <div className="space-y-2">
            {reportData.productionTrade.russia.points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                <p className="text-sm text-red-800 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 bg-white/70 p-3 rounded text-center">
            <div className="text-2xl font-bold text-red-700">9,710.2</div>
            <div className="text-sm text-red-600">rubles/tonne export duty</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
