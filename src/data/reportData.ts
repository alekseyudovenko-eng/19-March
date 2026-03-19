export interface PriceBenchmark {
  commodity: string;
  marketBasis: string;
  priceMarch9: string;
  priceMarch16: string;
  change: string;
}

export interface ReportData {
  title: string;
  period: string;
  countries: string;
  executiveSummary: string;
  pricingDynamics: {
    summary: string[];
    convergenceMechanism: string;
    sunflowerDecoupling: string;
    priceBenchmarks: PriceBenchmark[];
    trendAnalysis: string;
  };
  productionTrade: {
    kazakhstan: {
      title: string;
      points: string[];
    };
    ukraine: {
      title: string;
      points: string[];
    };
    russia: {
      title: string;
      points: string[];
    };
  };
  supplyChain: {
    hormuz: {
      title: string;
      points: string[];
    };
    middleCorridor: {
      title: string;
      points: string[];
    };
  };
  policy: {
    eudr: {
      title: string;
      points: string[];
    };
    centralAsia: {
      title: string;
      points: string[];
    };
  };
  trends: string[];
  conclusion: string;
}

export const reportData: ReportData = {
  title: "ANALYTICAL REPORT ON THE VEGETABLE OILS AND FATS MARKET",
  period: "KEY EVENTS 9 – 16 MARCH, 2026",
  countries: "EU-27, Azerbaijan, Armenia, Belarus, Kazakhstan, Kyrgyzstan, Russia, Tajikistan, Turkmenistan, Uzbekistan, Georgia, and Ukraine.",
  executiveSummary: `The reporting period has been defined by a historic "Energy-Agri Convergence." The period opened on March 9 with a dramatic 9.32% surge in Crude Palm Oil (CPO) futures to 4,774 MYR/t ($1,204/MT), the highest level in over a year, precipitated by Brent crude oil clearing the $110/barrel threshold following military escalations in the Persian Gulf.

By March 14, the functional paralysis of the Strait of Hormuz became absolute, with AIS-confirmed commercial crossings falling to zero. This blockade, responsible for 20% of global oil and 45% of urea supply, has imposed emergency conflict surcharges of $4,000 per container.

In Europe and the CIS, sunflower oil hit multi-year highs at $1,616.90/t as "energy terror" in Ukraine idled 25% of national crushing capacity. The massive $350–$400/MT price spread between palm oil and sunflower oil has triggered an 11% surge in Indian imports.`,
  pricingDynamics: {
    summary: [
      "Palm Oil Price Surge (March 9): Crude Palm Oil (CPO) futures on the Bursa Malaysia exchange experienced their largest daily gain in three years, surging 9.32% to 4,774 MYR/t ($1,204/MT).",
      "Strait of Hormuz Functional Paralysis: Following military activity and Iranian threats, commercial transit through the Strait of Hormuz effectively fell to zero as of March 14.",
      "Emergency Freight Surcharges: Major shipping lines implemented emergency conflict surcharges of up to $4,000 per container, increasing the landed cost of palm oil in Europe by $80–$110.",
      "IEA Strategic Reserve Release: On March 11, IEA member countries unanimously agreed to release 400 million barrels of oil from emergency reserves to address energy supply disruptions."
    ],
    convergenceMechanism: `The last week confirmed a direct correlation between fossil fuel benchmarks and lipid valuations. As Brent Crude tested $120/bbl intraday on March 9, the "Palm Oil-Gasoil" (PO-GO) spread narrowed, forcing the energy sector to compete directly with food manufacturers for lipid supplies.`,
    sunflowerDecoupling: `Black Sea sunflower oil prices reached a multi-year peak of $1,616.90/t by March 18, decoupled from raw material costs due to infrastructure damage and massive geopolitical risk premiums.`,
    priceBenchmarks: [
      {
        commodity: "Crude Palm Oil",
        marketBasis: "Bursa Malaysia",
        priceMarch9: "4,774 MYR/t",
        priceMarch16: "4,550 MYR/t",
        change: "-4.69%"
      },
      {
        commodity: "Sunflower Oil",
        marketBasis: "FOB Black Sea",
        priceMarch9: "$1,580.00/t",
        priceMarch16: "$1,616.90/t",
        change: "+2.33%"
      },
      {
        commodity: "Soybean Oil",
        marketBasis: "CBOT Futures",
        priceMarch9: "$1,200.00/t",
        priceMarch16: "$1,160.02/t",
        change: "-3.33%"
      },
      {
        commodity: "Brent Crude",
        marketBasis: "Intercontinental",
        priceMarch9: "$102.65/bbl",
        priceMarch16: "$112.21/bbl",
        change: "+9.32%"
      }
    ],
    trendAnalysis: "The table tracks the decoupling of sunflower oil from the broader complex due to Black Sea supply disruptions."
  },
  productionTrade: {
    kazakhstan: {
      title: "Kazakhstan: Consolidation of Export Leadership",
      points: [
        "Kazakhstan Oilseed Roadmap 2026–2028: The government finalized a strategic roadmap to increase oilseed export revenue to $1 billion annually, focusing on utilizing crushing capacity that now exceeds 5 million tons per year.",
        "Kazakhstan has successfully transitioned to a finished product powerhouse. By mid-March 2026, the country has achieved a record 85.7% share of sunflower oil in its total vegetable oil production.",
        "Production: Total vegetable oil output reached 888,800 tons (+17.4% YoY).",
        "Stocks: Kazakhstan entered 2026 with record sunflower seed stocks 2.11 mil tons (+38% YoY).",
        "Trade Shift: China's share of Kazakh sunflower oil imports rose to 28%, while demand for palm oil in China declined as buyers switched to regional soft oil alternatives."
      ]
    },
    ukraine: {
      title: "Ukraine: Adaptive Survival Amidst Infrastructure Targeting",
      points: [
        "Ukrainian Planting Shift: Farmers in Ukraine are increasing soybean sowing area by 11% (to 3.0 million hectares) for the 2026 season due to lower logistics costs and stable demand from EU processors under EUDR requirements.",
        "The Ukrainian industry remains 'critically adaptive' as output is capped at 4–4.3 million tons for 2026 (down from 6 million).",
        "Idle Capacity: 25% of national crushing capacity is currently idle due to electricity supply issues and direct strikes on plants like the Allseeds terminal and Bunge-owned Oleina plant.",
        "Exports: Exports for MY 2025/26 are forecast at 4.1 million tons, 14% lower than last year."
      ]
    },
    russia: {
      title: "Russia: Fiscal Dampeners",
      points: [
        "In March 2026, the Russian Ministry of Agriculture increased export duties on sunflower oil to 9,710.2 rubles/tonne to keep domestic prices stable."
      ]
    }
  },
  supplyChain: {
    hormuz: {
      title: "Strait of Hormuz: Functional Paralysis",
      points: [
        "The closure of the strait since March 4, 2026, has entered its third week of total disruption.",
        "Transit Status: AIS-confirmed commercial crossings fell to zero on March 14.",
        "Freight Impact: Shipping giants (CMA CGM, MSC) have maintained surcharges of $4,000 per container.",
        "Inventory Risk: Rerouting via the Cape of Good Hope adds 10–14 days of transit time, causing equipment shortages in Asian hubs."
      ]
    },
    middleCorridor: {
      title: "The Middle Corridor (TITR) Strategic Edge",
      points: [
        "Instability in the Gulf and Black Sea has catalyzed the Trans-Caspian route (TITR).",
        "Efficiency: China-Baku transit times have been reduced to 11 days in early 2026.",
        "Volume: Transit volumes from China have increased 25-fold since 2022, positioning Azerbaijan as the primary gateway for palm oil entering the CIS."
      ]
    }
  },
  policy: {
    eudr: {
      title: "EUDR: The Technical Pause",
      points: [
        "EUDR Implementation Delay: The EU Deforestation Regulation (EUDR) application for large and medium operators has been officially postponed until December 30, 2026. Small and micro-enterprises have been granted an extension until June 30, 2027.",
        "EUDR Information System Technical Pause: The European Commission introduced a technical pause in the EUDR Information System from February 16 until mid-April 2026. During this period, the system is in read-only mode, and no new Due Diligence Statements (DDS) can be submitted.",
        "EU Biodiesel Mandate Shift: Legislative changes under RED III in Germany and the Netherlands will end the 'double counting' of waste-based feedstocks in 2026, which is expected to boost physical demand for crop-based biodiesel like Rapeseed Methyl Ester (RME) by 1 billion liters.",
        "'Downstream Operator' Classification: A major regulatory shift now exempts downstream processors (e.g., chocolate and margarine manufacturers) from submitting separate Due Diligence Statements, provided they retain the reference number of the first importer.",
        "System Status: The Information System entered a technical pause on February 16 (read-only until mid-April) to implement 'Downstream Operator' simplifications.",
        "Compliance: Secondary processors (margarine/chocolate) are now exempt from separate Due Diligence Statements (DDS), only needing the reference number from the first importer."
      ]
    },
    centralAsia: {
      title: "Central Asian Fiscal Reforms",
      points: [
        "Uzbekistan: Extended the zero-duty regime on vegetable oil imports until January 1, 2027, to mitigate food inflation, which stood at 7.2% in January.",
        "Kazakhstan: Implemented a 20% export duty on sunflower seeds (min. €100/t) to redirect raw materials to domestic plants."
      ]
    }
  },
  trends: [
    "Substitution: India's palm oil imports rose 11% in February to a six-month high as buyers switched from expensive sunflower oil.",
    "Margarine Growth: The EU industrial margarine market is projected to grow at 4.1% CAGR in 2026, driven by butter prices being 40% above historical levels.",
    "Information Availability: No specific news for Belarus, Armenia, Kyrgyzstan, Tajikistan, or Turkmenistan was recorded in the major financial media during this 10-day window outside of general CIS trade grouping."
  ],
  conclusion: "Middle Corridor Entry: Given the Hormuz paralysis, formalizing supply chains through the Port of Baku is mandatory for Central Asian market stability."
};
