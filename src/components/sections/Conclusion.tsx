import { Flag, MapPin, Navigation } from 'lucide-react';
import { reportData } from '@/data/reportData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Conclusion() {
  return (
    <Card className="mb-4 border-l-4 border-l-teal-500">
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <Flag className="w-5 h-5 text-teal-500" />
          VI. CONCLUSION: IMPLICATIONS FOR THE MALAYSIAN PALM OIL INDUSTRY
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-4 rounded-lg border-2 border-teal-300">
          <div className="flex items-start gap-3">
            <div className="bg-teal-100 p-3 rounded-xl flex-shrink-0">
              <Navigation className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-teal-900 mb-2">Middle Corridor Entry</h4>
              <p className="text-sm text-teal-800 leading-relaxed">
                {reportData.conclusion.replace('Middle Corridor Entry: ', '')}
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 bg-white/70 p-3 rounded-lg">
            <MapPin className="w-5 h-5 text-teal-600" />
            <span className="font-bold text-teal-800">Port of Baku</span>
            <span className="text-teal-600">→</span>
            <span className="text-sm text-teal-700">Central Asian markets</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
