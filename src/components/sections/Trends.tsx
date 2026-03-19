import { TrendingUp, Info, ArrowRightLeft, Sandwich } from 'lucide-react';
import { reportData } from '@/data/reportData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Trends() {
  return (
    <Card className="mb-4 border-l-4 border-l-pink-500">
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-pink-500" />
          V. INDUSTRIAL AND CONSUMER TRENDS
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {reportData.trends.map((trend, idx) => {
            if (trend.includes('Substitution')) {
              return (
                <div key={idx} className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                      <ArrowRightLeft className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-green-900">Substitution Effect</h4>
                      <p className="text-sm text-green-800 leading-relaxed">{trend.replace('Substitution: ', '')}</p>
                    </div>
                  </div>
                  <div className="mt-2 bg-white/70 p-2 rounded text-center">
                    <div className="text-2xl font-bold text-green-700">+11%</div>
                    <div className="text-xs text-green-600">India palm oil imports (Feb)</div>
                  </div>
                </div>
              );
            }
            if (trend.includes('Margarine')) {
              return (
                <div key={idx} className="bg-gradient-to-r from-yellow-50 to-amber-50 p-3 rounded-lg border border-yellow-200">
                  <div className="flex items-start gap-3">
                    <div className="bg-yellow-100 p-2 rounded-lg flex-shrink-0">
                      <Sandwich className="w-4 h-4 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-yellow-900">Margarine Market Growth</h4>
                      <p className="text-sm text-yellow-800 leading-relaxed">{trend.replace('Margarine Growth: ', '')}</p>
                    </div>
                  </div>
                  <div className="mt-2 bg-white/70 p-2 rounded text-center">
                    <div className="text-2xl font-bold text-yellow-700">4.1%</div>
                    <div className="text-xs text-yellow-600">CAGR 2026</div>
                  </div>
                </div>
              );
            }
            return (
              <div key={idx} className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="bg-gray-100 p-2 rounded-lg flex-shrink-0">
                    <Info className="w-4 h-4 text-gray-600" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{trend}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
