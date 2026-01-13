import { ProductCategory } from './types';
import type { Product, ServiceItem, NavLink } from './types';
// import { Cpu, Factory, Globe, Zap, Microchip, Layers, Wifi, Battery, Search } from 'lucide-react';
import asg1 from "./photos/AgriculturalSorting&Grading/asg1.jpeg";
import asg2 from "./photos/AgriculturalSorting&Grading/asg2.jpeg";
import asg3 from "./photos/AgriculturalSorting&Grading/asg3.jpeg";
import asg4 from "./photos/AgriculturalSorting&Grading/asg4.jpeg";

import avss1 from "./photos/AIvisualinspectionsystrems/avss1.jpeg"
import avss2 from "./photos/AIvisualinspectionsystrems/avss2.jpeg"
import avss3 from "./photos/AIvisualinspectionsystrems/avss3.jpeg"

import am1 from "./photos/AMR/amr1.jpeg"
import am2 from "./photos/AMR/amr2.jpeg"
import am3 from "./photos/AMR/amr3.jpeg"
import am4 from "./photos/AMR/amr4.jpeg"

import dci1 from "./photos/DataCenterInfrastructure/dci1.jpeg"
import dci2 from "./photos/DataCenterInfrastructure/dci2.jpeg"
import dci3 from "./photos/DataCenterInfrastructure/dci3.jpeg"
import dci4 from "./photos/DataCenterInfrastructure/dci4.jpeg"


/* EV Battery Manufacturing */
import evbm1 from "./photos/EVBatteryManufacturing/evbm1.jpeg"
import evbm2 from "./photos/EVBatteryManufacturing/evbm2.jpeg"
import evbm3 from "./photos/EVBatteryManufacturing/evbm3.jpeg"

/* High Speed Packaging Automation */
import hspa1 from "./photos/High-SpeedPackagingAutomation/hspa1.jpeg"
import hspa2 from "./photos/High-SpeedPackagingAutomation/hspa2.jpeg"
import hspa3 from "./photos/High-SpeedPackagingAutomation/hspa3.jpeg"
import hspa4 from "./photos/High-SpeedPackagingAutomation/hspa4.jpeg"

/* Rugged Defense Computing */
import rdc1 from "./photos/RuggedDefenseComputing/rdc1.jpeg"
import rdc2 from "./photos/RuggedDefenseComputing/rdc2.jpeg"
import rdc3 from "./photos/RuggedDefenseComputing/rdc3.jpeg"

/* Smart Kiosk & Retail Compute */
import skrc1 from "./photos/SmartKiosk&RetailCompute/skrc1.jpeg"
import skrc2 from "./photos/SmartKiosk&RetailCompute/skrc2.jpeg"
import skrc3 from "./photos/SmartKiosk&RetailCompute/skrc3.jpeg"

/* Textile Machinery Modernization */
import tmm1 from "./photos/TextileMachineryModernization/tmm1.jpeg"
import tmm2 from "./photos/TextileMachineryModernization/tmm2.jpeg"
import tmm3 from "./photos/TextileMachineryModernization/tmm3.jpeg"

/* Warehouse Logistics */
import wl1 from "./photos/WarehouseLogistics/wl1.jpeg"
import wl2 from "./photos/WarehouseLogistics/wl2.jpeg"
import wl3 from "./photos/WarehouseLogistics/wl3.jpeg"




export const COMPANY_INFO = {
  name: "Korden Technologies",
  address: "B/2402, 24th Floor, Tulsi Tower, M.G road, Goregaon West, Mumbai, Maharashtra 400104",
  email: "sales@korden.tech",
  phone: "+91 84529 88088  ",
  whatsapp: "+91 84529 88088",
  founded: "2024"
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'High Performance Interconnects',
    description: 'From rugged Mil-Spec connectors to high speed M12 data cables. We source the critical connectivity solutions that power Autonomous Robots and Defense systems. Specialized in finding "hard-to-get" pin configurations.',
    icon: 'Globe'
  },
  {
    id: 's2',
    title: 'Data Center Solutions',
    description: 'High-performance infrastructure sourcing, including Servo Motors, cooling systems, and power management units for enterprise data centers.',
    icon: 'Layers'
  },
  {
    id: 's3',
    title: 'Unified Automation Kits',
    description: 'Streamline your procurement. We customise and bundle Servos, PLCs, and Drives into application ready "Retrofit Kits" based on your applications. Receive your entire Bill of Materials as a single, pre-labeled SKU to reduce logistics complexity.',
    icon: 'Factory'
  },
  {
    id: 's4',
    title: 'Industrial Computing & Edge AI',
    description: 'Sourcing rugged Fanless PCs, AI Inference Systems, and Machine Vision Cameras. We supply the high performance compute hardware required for Edge AI, Visual Inspection, and harsh industrial environments. ',
    icon: 'Search'
  }
];


export const SERVICE: ServiceItem[] = [
  {
    id: 's1',
    title: 'High Performance Interconnects',
    description: 'Connectivity is the single most common point of failure in industrial environments. We source and stock rugged, high-reliability interconnects designed to withstand vibration, moisture (IP67/68), and EMI interference. Whether you need Mil-Spec circular connectors for a defense chassisor high-speed M12 data cables for AMR sensors, we secure the exactpin configurations that standard distributors often leave on backorder.',
    icon: 'Globe'
  },
  {
    id: 's2',
    title: 'Data Center Solutions',
    description: 'High-performance infrastructure sourcing, including Servo Motors, cooling systems, and power management units for enterprise data centers.',
    icon: 'Layers'
  },
  {
    id: 's3',
    title: 'Unified Automation Kits',
    description: 'Stop managing 5 different vendors for one machine. We consolidate your Motion and Control hardware into a single,pre-validated SKU.From Servo Motors and Drives to PLCs and HMIs, receive your complete "Retrofit Kit" in one shipment, ready for immediate installation. We simplify your Bill of Materials so you can focus on assembly',
    icon: 'Factory'
  },
  {
    id: 's4',
    title: 'Industrial Computing & Edge AI',
    description: 'Powering the intelligence of modern machinery. We source and stock rugged, fanless Industrial PCs (IPCs) and AI Inference Systems designed for harsh environments. Whether you need high-processing power for AI Visual Inspection or vibration-resistant computing for Defense & AMRs, we secure the specific configurations that standard IT vendors cannot supply.',
    icon: 'Search'
  }
];








export const PRODUCTS: Product[] = [
  { id: "prod-1", name: "Smart Warehouse System", category: ProductCategory.WAREHOUSE, description: "Automated warehouse operations", image: wl1 },
  { id: "prod-2", name: "AI Visual Inspection", category: ProductCategory.VISUAL, description: "AI powered quality inspection", image: avss2 },
  { id: "prod-3", name: "EV Battery Line", category: ProductCategory.EVBATTERY, description: "Precision battery manufacturing", image: evbm1 },
  { id: "prod-4", name: "Agricultural Sorting Unit", category: ProductCategory.SORTING, description: "Automated crop sorting", image: asg3 },
  { id: "prod-5", name: "Autonomous Mobile Robot", category: ProductCategory.AMR, description: "Smart autonomous movement", image: am1 },
  { id: "prod-6", name: "Data Center Module", category: ProductCategory.DATA, description: "Reliable data center infrastructure", image: dci4 },
  { id: "prod-7", name: "Retail Smart Kiosk", category: ProductCategory.SMART, description: "Interactive retail experience", image: skrc2 },
  { id: "prod-8", name: "High Speed Packaging", category: ProductCategory.HIGHSPEED, description: "Fast automated packaging", image: hspa3 },
  { id: "prod-9", name: "Defense Computing System", category: ProductCategory.RUGGED, description: "Rugged defense grade computing", image: rdc1 },
  { id: "prod-10", name: "Textile Automation Upgrade", category: ProductCategory.TEXTILE, description: "Modern textile machinery upgrade", image: tmm1 },

  { id: "prod-11", name: "Smart Logistics Platform", category: ProductCategory.WAREHOUSE, description: "Efficient logistics automation", image: wl2 },
  { id: "prod-12", name: "AI Inspection Advanced", category: ProductCategory.VISUAL, description: "High accuracy defect detection", image: avss1 },
  { id: "prod-13", name: "Battery Manufacturing System", category: ProductCategory.EVBATTERY, description: "Scalable EV battery production", image: evbm2 },
  { id: "prod-14", name: "Agricultural Grading Machine", category: ProductCategory.SORTING, description: "Precision crop grading", image: asg1 },
  { id: "prod-15", name: "Autonomous Robot Fleet", category: ProductCategory.AMR, description: "Multi robot coordination", image: am4 },
  { id: "prod-16", name: "Enterprise Data Center", category: ProductCategory.DATA, description: "High availability infrastructure", image: dci1 },
  { id: "prod-17", name: "Retail Compute System", category: ProductCategory.SMART, description: "Smart retail computing", image: skrc1 },
  { id: "prod-18", name: "Packaging Automation Line", category: ProductCategory.HIGHSPEED, description: "High throughput packaging", image: hspa1 },
  { id: "prod-19", name: "Military Computing Unit", category: ProductCategory.RUGGED, description: "Extreme environment computing", image: rdc3 },
  { id: "prod-20", name: "Textile Smart Control", category: ProductCategory.TEXTILE, description: "Digitized textile operations", image: tmm3 },

  { id: "prod-21", name: "Warehouse Automation Hub", category: ProductCategory.WAREHOUSE, description: "Smart material handling", image: wl3 },
  { id: "prod-22", name: "Visual Inspection System", category: ProductCategory.VISUAL, description: "Automated visual quality checks", image: avss3 },
  { id: "prod-23", name: "EV Battery Assembly", category: ProductCategory.EVBATTERY, description: "Advanced battery assembly", image: evbm3 },
  { id: "prod-24", name: "Agricultural Sorting Plant", category: ProductCategory.SORTING, description: "High speed produce sorting", image: asg4 },
  { id: "prod-25", name: "Mobile Robot Platform", category: ProductCategory.AMR, description: "Autonomous industrial transport", image: am2 },
  { id: "prod-26", name: "Modular Data Center", category: ProductCategory.DATA, description: "Scalable data infrastructure", image: dci2 },
  { id: "prod-27", name: "Smart Retail Terminal", category: ProductCategory.SMART, description: "Self service retail solution", image: skrc3 },
  { id: "prod-28", name: "Packaging Robotics System", category: ProductCategory.HIGHSPEED, description: "Robotic packaging automation", image: hspa4 },
  { id: "prod-29", name: "Rugged Computing Platform", category: ProductCategory.RUGGED, description: "Mission critical computing", image: rdc2 },
  { id: "prod-30", name: "Textile Modernization System", category: ProductCategory.TEXTILE, description: "Legacy textile modernization", image: tmm2 },

  { id: "prod-31", name: "Agricultural Processing Unit", category: ProductCategory.SORTING, description: "Smart agricultural processing", image: asg2 },
  { id: "prod-32", name: "Mobile Robot Controller", category: ProductCategory.AMR, description: "Autonomous robot control", image: am3 },
  { id: "prod-33", name: "High Speed Packaging Line", category: ProductCategory.HIGHSPEED, description: "Ultra fast packaging system", image: hspa2 },
  { id: "prod-34", name: "Data Center Control System", category: ProductCategory.DATA, description: "Centralized infrastructure control", image: dci3 }
];


