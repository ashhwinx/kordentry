export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;

}

// FIX: Replacing Enum with 'as const' object to fix TS1294
export const ProductCategory = {
  WAREHOUSE: "Warehouse Logistics", //wl
  TEXTILE: "Textile Machinery Modernization",  //tmm
  VISUAL: "AI visual inspection systrems", //avss
  AMR: "AMR", //amr
  EVBATTERY: "EV Battery Manufacturing", //evbm
  DATA: "Data Center Infrastructure", //dci
  SMART: "Smart Kiosk & Retail Compute", //skrc
  RUGGED: "Rugged Defense Computing", //rdc
  SORTING: "Agricultural Sorting & Grading", //asg
  HIGHSPEED: "High-Speed Packaging Automation", //hspa
} as const;

// Creating a type from the object values
export type ProductCategoryType = typeof ProductCategory[keyof typeof ProductCategory];

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavLink {
  label: string;
  path: string;
}