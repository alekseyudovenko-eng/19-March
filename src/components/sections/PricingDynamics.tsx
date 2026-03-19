import { DollarSign, TrendingUp, TrendingDown, Activity, Fuel, Wheat } from 'lucide-react';
import { reportData } from '@/data/reportData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export function PricingDynamics() {
  return (
    <Card className="mb-4 border-l-4 border-l-green-500">
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-green-500" />
          I. PRICING DYNAMICS AND COMPETITIVE ANALYSIS
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Key Events */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm text-gray-900 flex items-center gap-2">
            <Activity className="w-4 h-4" />
            Key Market Events
          </h4>
          <div className="grid gap-2">
            {reportData.pricingDynamics.summary.map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700 leading-relaxed">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Energy-Agri Convergence */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 p-3 rounded-lg border border-orange-200">
          <h4 className="font-semibold text-sm text-orange-900 flex items-center gap-2 mb-2">
            <Fuel className="w-4 h-4" />
            1.1 The Energy-Agri Convergence Mechanism
          </h4>
          <p className="text-sm text-orange-800 leading-relaxed">
            {reportData.pricingDynamics.convergenceMechanism}
          </p>
        </div>

        {/* Sunflower Decoupling */}
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-3 rounded-lg border border-yellow-200">
          <h4 className="font-semibold text-sm text-yellow-900 flex items-center gap-2 mb-2">
            <Wheat className="w-4 h-4" />
            Sunflower Oil Decoupling
          </h4>
          <p className="text-sm text-yellow-800 leading-relaxed">
            {reportData.pricingDynamics.sunflowerDecoupling}
          </p>
        </div>

        {/* Price Benchmarks Table */}
        <div>
          <h4 className="font-semibold text-sm text-gray-900 mb-2">
            Table 1: Comparative Price Benchmarks (March 9 vs. March 16, 2026)
          </h4>
          <div className="overflow-x-auto -mx-2">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableHead className="text-xs">Commodity</TableHead>
                  <TableHead className="text-xs">Market Basis</TableHead>
                  <TableHead className="text-xs">Mar 9</TableHead>
                  <TableHead className="text-xs">Mar 16</TableHead>
                  <TableHead className="text-xs">Change</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reportData.pricingDynamics.priceBenchmarks.map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium text-xs py-2">{row.commodity}</TableCell>
                    <TableCell className="text-xs py-2">{row.marketBasis}</TableCell>
                    <TableCell className="text-xs py-2">{row.priceMarch9}</TableCell>
                    <TableCell className="text-xs py-2">{row.priceMarch16}</TableCell>
                    <TableCell className="text-xs py-2">
                      <span className={`flex items-center gap-1 ${row.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {row.change.startsWith('+') ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {row.change}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Trend Analysis */}
        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-sm text-blue-900 mb-1">
            1.2 Price Trend Comparative Analysis
          </h4>
          <p className="text-sm text-blue-800 leading-relaxed">
            {reportData.pricingDynamics.trendAnalysis}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
