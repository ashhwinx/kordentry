export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  

}

// FIX: Replacing Enum with 'as const' object to fix TS1294
export const ProductCategory = {
  // MOUNTS:"Mounts",
  // FLANGES:"Flanges",
  AUTOMATION: "Automation kit",
  INTERCONNECTS : "Interconnects",
} as const;

// Creating a type from the object values
export type ProductCategoryType = typeof ProductCategory[keyof typeof ProductCategory];

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image:string;
}

export interface NavLink {
  label: string;
  path: string;
}