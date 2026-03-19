import { FileText, AlertTriangle, TrendingUp, Ship, Factory } from 'lucide-react';
import { reportData } from '@/data/reportData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ExecutiveSummary() {
  const paragraphs = reportData.executiveSummary.split('\n\n');

  return (
    <Card className="mb-4 border-l-4 border-l-amber-500">
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <FileText className="w-5 h-5 text-amber-500" />
          EXECUTIVE SUMMARY
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span className="font-semibold text-amber-800 text-sm">Energy-Agri Convergence</span>
          </div>
          <p className="text-sm text-amber-900 leading-relaxed">{paragraphs[0]}</p>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
              <Ship className="w-4 h-4 text-red-600" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-gray-900">Strait of Hormuz Blockade</h4>
              <p className="text-sm text-gray-700 leading-relaxed">{paragraphs[1]}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
              <Factory className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-gray-900">European & CIS Impact</h4>
              <p className="text-sm text-gray-700 leading-relaxed">{paragraphs[2]}</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-3 rounded-lg border border-green-200">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="font-semibold text-green-800 text-sm">Market Response</span>
          </div>
          <p className="text-sm text-green-900 leading-relaxed">{paragraphs[3] || paragraphs[2]}</p>
        </div>
      </CardContent>
    </Card>
  );
}
