import { ProductCategory } from './types';
import type { Product, ServiceItem, NavLink } from './types';
// import { Cpu, Factory, Globe, Zap, Microchip, Layers, Wifi, Battery, Search } from 'lucide-react';
import asg1 from "./photos/AgriculturalSorting&Grading/asg1.jpg";
import asg2 from "./photos/AgriculturalSorting&Grading/asg2.jpg";
import asg3 from "./photos/AgriculturalSorting&Grading/asg3.jpg";
import asg4 from "./photos/AgriculturalSorting&Grading/asg4.jpg";



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
  {
    id: "prod-1",
    name: "K-Tech Power Series 101",
    category: ProductCategory.SEMICONDUCTORS,
    description: "High-performance power supply solution for industrial and consumer electronics. Designed for durability and efficiency.",
    image: asg1,
    specs: ["Industrial Grade", "RoHS Compliant", "High Efficiency"]
  },
  {
    id: "prod-2",
    name: "K-Tech Sensor Series 102",
    category: ProductCategory.SEMICONDUCTORS,
    description: "High-performance sensors solution for industrial and consumer electronics. Designed for durability and efficiency.",
    image: asg2,
    specs: ["Industrial Grade", "RoHS Compliant", "High Efficiency"]
  },
  {
    id: "prod-3",
    name: "K-Tech Control Series 103",
    category: ProductCategory.SEMICONDUCTORS,
    description: "High-performance control systems solution for industrial and consumer electronics. Designed for durability and efficiency.",
    image: asg3,
    specs: ["Industrial Grade", "RoHS Compliant", "High Efficiency"]
  },
  {
    id: "prod-4",
    name: "K-Tech Automation Series 104",
    category: ProductCategory.SEMICONDUCTORS,
    description: "High-performance automation solution for industrial and consumer electronics. Designed for durability and efficiency.",
    image: asg4,
    specs: ["Industrial Grade", "RoHS Compliant", "High Efficiency"]
  },
  {
    id: "prod-5",
    name: "K-Tech Power Series 105",
    category: ProductCategory.SEMICONDUCTORS,
    description: "High-performance power supply solution for industrial and consumer electronics. Designed for durability and efficiency.",
    image: "https://picsum.photos/400/300?random=5",
    specs: ["Industrial Grade", "RoHS Compliant", "High Efficiency"]
  },
  {
    id: "prod-6",
    name: "K-Tech Sensor Series 106",
    category: ProductCategory.SEMICONDUCTORS,
    description: "High-performance sensors solution for industrial and consumer electronics. Designed for durability and efficiency.",
    image: "https://picsum.photos/400/300?random=6",
    specs: ["Industrial Grade", "RoHS Compliant", "High Efficiency"]
  },
  {
    id: "prod-7",
    name: "K-Tech Control Series 107",
    category: ProductCategory.SEMICONDUCTORS,
    description: "High-performance control systems solution for industrial and consumer electronics. Designed for durability and efficiency.",
    image: "https://picsum.photos/400/300?random=7",
    specs: ["Industrial Grade", "RoHS Compliant", "High Efficiency"]
  },
  {
    id: "prod-8",
    name: "K-Tech Automation Series 108",
    category: ProductCategory.SEMICONDUCTORS,
    description: "High-performance automation solution for industrial and consumer electronics. Designed for durability and efficiency.",
    image: "https://picsum.photos/400/300?random=8",
    specs: ["Industrial Grade", "RoHS Compliant", "High Efficiency"]
  },
  {
    id: "prod-9",
    name: "K-Tech Power Series 109",
    category: ProductCategory.SEMICONDUCTORS,
    description: "High-performance power supply solution for industrial and consumer electronics. Designed for durability and efficiency.",
    image: "https://picsum.photos/400/300?random=9",
    specs: ["Industrial Grade", "RoHS Compliant", "High Efficiency"]
  },
  {
    id: "prod-10",
    name: "K-Tech Sensor Series 110",
    category: ProductCategory.SEMICONDUCTORS,
    description: "High-performance sensors solution for industrial and consumer electronics. Designed for durability and efficiency.",
    image: "https://picsum.photos/400/300?random=10",
    specs: ["Industrial Grade", "RoHS Compliant", "High Efficiency"]
  }
];
