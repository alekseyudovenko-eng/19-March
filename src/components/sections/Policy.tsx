import { Scale, FileCheck, Calendar, Building2 } from 'lucide-react';
import { reportData } from '@/data/reportData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Policy() {
  return (
    <Card className="mb-4 border-l-4 border-l-indigo-500">
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <Scale className="w-5 h-5 text-indigo-500" />
          IV. POLICY AND REGULATORY ENVIRONMENT
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* EUDR */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-3 rounded-lg border border-indigo-200">
          <h4 className="font-semibold text-sm text-indigo-900 flex items-center gap-2 mb-3">
            <FileCheck className="w-4 h-4" />
            4.1 {reportData.policy.eudr.title}
          </h4>
          <div className="space-y-2">
            {reportData.policy.eudr.points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                <p className="text-sm text-indigo-800 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="bg-white/70 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1">
                <Calendar className="w-4 h-4 text-indigo-600" />
              </div>
              <div className="text-lg font-bold text-indigo-700">Dec 30, 2026</div>
              <div className="text-xs text-indigo-600">EUDR delay (large operators)</div>
            </div>
            <div className="bg-white/70 p-2 rounded text-center">
              <div className="flex items-center justify-center gap-1">
                <Building2 className="w-4 h-4 text-indigo-600" />
              </div>
              <div className="text-lg font-bold text-indigo-700">+1B liters</div>
              <div className="text-xs text-indigo-600">RME demand boost</div>
            </div>
          </div>
        </div>

        {/* Central Asia */}
        <div className="bg-gradient-to-r from-cyan-50 to-sky-50 p-3 rounded-lg border border-cyan-200">
          <h4 className="font-semibold text-sm text-cyan-900 flex items-center gap-2 mb-3">
            <Building2 className="w-4 h-4" />
            4.2 {reportData.policy.centralAsia.title}
          </h4>
          <div className="space-y-2">
            {reportData.policy.centralAsia.points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                <p className="text-sm text-cyan-800 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="bg-white/70 p-2 rounded text-center">
              <div className="text-lg font-bold text-cyan-700">Jan 1, 2027</div>
              <div className="text-xs text-cyan-600">Uzbekistan zero-duty</div>
            </div>
            <div className="bg-white/70 p-2 rounded text-center">
              <div className="text-lg font-bold text-cyan-700">20%</div>
              <div className="text-xs text-cyan-600">Kazakhstan export duty</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
