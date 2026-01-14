import { ProductCategory } from './types';
import type { Product, ServiceItem, NavLink } from './types';
// import { Cpu, Factory, Globe, Zap, Microchip, Layers, Wifi, Battery, Search } from 'lucide-react';
import asg1 from "./photos/AgriculturalSorting&Grading/asg1.jpeg";
import asg2 from "./photos/AgriculturalSorting&Grading/asg2.jpeg";
import asg3 from "./photos/AgriculturalSorting&Grading/asg3.jpeg";


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
import tmm3 from "./photos/TextileMachineryModernization/tmm3.jpeg"

/* Warehouse Logistics */
import wl1 from "./photos/WarehouseLogistics/wl1.jpeg"
import wl3 from "./photos/WarehouseLogistics/wl3.jpeg"

import flang1 from "./photos/flangs/flangs (1).jpeg";
import flang2 from "./photos/flangs/flangs (2).jpeg";
import flang3 from "./photos/flangs/flangs (3).jpeg";
import flang5 from "./photos/flangs/flangs (5).jpeg";
import flang6 from "./photos/flangs/flangs (6).jpeg";
import flang8 from "./photos/flangs/flangs (8).jpeg";
import flang9 from "./photos/flangs/flangs (9).jpeg";
import flang11 from "./photos/flangs/flangs (11).jpeg";
import flang12 from "./photos/flangs/flangs (12).jpeg";

import mount1 from "./photos/mount/mount (1).jpeg";
import mount2 from "./photos/mount/mount (2).jpeg";
import mount3 from "./photos/mount/mount (3).jpeg";
import mount4 from "./photos/mount/mount (4).jpeg";

import f9 from "./photos/interconnect/9F.jpeg"
import ff9 from "./photos/interconnect/9FF.jpeg"
import f15 from "./photos/interconnect/15F.jpeg"
import anderson from "./photos/interconnect/ANDERSON CONNECTOR.jpeg"
import battery from "./photos/interconnect/BATTERY CONNECTOR.jpeg"
import dancing from "./photos/interconnect/DANCING LEG USB.jpeg"
import deutsch from "./photos/interconnect/DEUTSCH CONNECTOR.jpeg"
import df15 from "./photos/interconnect/DF-15.jpeg"
import frcf from "./photos/interconnect/FRC F.jpeg"
import frcm from "./photos/interconnect/FRC M.jpeg"
import gender from "./photos/interconnect/GENDER CHANGE.jpeg"
import gx40 from "./photos/interconnect/GX 40.jpeg"
import gx12 from "./photos/interconnect/GX12.jpeg"
import rt from "./photos/interconnect/HEADER RT.jpeg"
import smd from "./photos/interconnect/HEADER SMD.jpeg"
import headerStra from "./photos/interconnect/HEADER STRAIGHT.jpeg"
import lt933 from "./photos/interconnect/LT-933.jpeg"
import lt2604 from "./photos/interconnect/LT-2604D.jpeg"
import m40 from "./photos/interconnect/M40.jpeg"
import ms3n from "./photos/interconnect/MACHINE SOCKET 3 NOTCH 10M.jpeg"
import ms2n from "./photos/interconnect/MACHINE SOCKETS 2 NOTCH.jpeg"
import ms3018 from "./photos/interconnect/MIL SPEC 3018.jpeg"
import ms3106 from "./photos/interconnect/MIL SPEC 3106.jpeg"
import mpx from "./photos/interconnect/MPX.jpeg"
import obd from "./photos/interconnect/OBD CONNECTOR.jpeg"
import panelrt from "./photos/interconnect/PANEL RT.jpeg"
import pcl from "./photos/interconnect/PCT 233-10R.jpeg"
import rjf from "./photos/interconnect/RJ45 F.jpeg"
import rjm from "./photos/interconnect/RJ45 M.jpeg"
import rs232 from "./photos/interconnect/RS232.jpeg"
import scsi from "./photos/interconnect/SCSI 14.jpeg"
import servomotor from "./photos/interconnect/SERVO MOTOR CONNECTOR.jpeg"
import sp13 from "./photos/interconnect/SP 13.jpeg"
import sp from "./photos/interconnect/SP.jpeg"
import ws16 from "./photos/interconnect/WS16.jpeg"
import xt60 from "./photos/interconnect/XT 60.jpeg"
import xy128 from "./photos/interconnect/XY128.jpeg"
import xy2500 from "./photos/interconnect/XY2500FE.jpeg"


import one from "./photos/homeImg/01.jpg"
import two from "./photos/homeImg/02.jpg"
import three from "./photos/homeImg/03.jpg"
import four from "./photos/homeImg/04.jpg"






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
    icon: 'Globe',
    image:one
  },
  {
    id: 's2',
    title: 'Data Center Solutions',
    description: 'High-performance infrastructure sourcing, including Servo Motors, cooling systems, and power management units for enterprise data centers.',
    icon: 'Layers',
    image:two
  },
  {
    id: 's3',
    title: 'Unified Automation Kits',
    description: 'Streamline your procurement. We customise and bundle Servos, PLCs, and Drives into application ready "Retrofit Kits" based on your applications. Receive your entire Bill of Materials as a single, pre-labeled SKU to reduce logistics complexity.',
    icon: 'Factory',
    image:three
  },
  {
    id: 's4',
    title: 'Industrial Computing & Edge AI',
    description: 'Sourcing rugged Fanless PCs, AI Inference Systems, and Machine Vision Cameras. We supply the high performance compute hardware required for Edge AI, Visual Inspection, and harsh industrial environments. ',
    icon: 'Search',
    image:four
  }
];


export const SERVICE: ServiceItem[] = [
  {
    id: 's1',
    title: 'High Performance Interconnects',
    description: 'Connectivity is the single most common point of failure in industrial environments. We source and stock rugged, high-reliability interconnects designed to withstand vibration, moisture (IP67/68), and EMI interference. Whether you need Mil-Spec circular connectors for a defense chassisor high-speed M12 data cables for AMR sensors, we secure the exactpin configurations that standard distributors often leave on backorder.',
    icon: 'Globe',
    image:one
  },
  {
    id: 's2',
    title: 'Data Center Solutions',
    description: 'High-performance infrastructure sourcing, including Servo Motors, cooling systems, and power management units for enterprise data centers.',
    icon: 'Layers',
    image:two
  },
  {
    id: 's3',
    title: 'Unified Automation Kits',
    description: 'Stop managing 5 different vendors for one machine. We consolidate your Motion and Control hardware into a single,pre-validated SKU.From Servo Motors and Drives to PLCs and HMIs, receive your complete "Retrofit Kit" in one shipment, ready for immediate installation. We simplify your Bill of Materials so you can focus on assembly',
    icon: 'Factory',
    image:three
  },
  {
    id: 's4',
    title: 'Industrial Computing & Edge AI',
    description: 'Powering the intelligence of modern machinery. We source and stock rugged, fanless Industrial PCs (IPCs) and AI Inference Systems designed for harsh environments. Whether you need high-processing power for AI Visual Inspection or vibration-resistant computing for Defense & AMRs, we secure the specific configurations that standard IT vendors cannot supply.',
    icon: 'Search',
    image:four
  }
];







export const PRODUCTS: Product[] = [
  { id: "prod-1", name: "Delta As Plc", category: ProductCategory.AUTOMATION, description: "High-performance Delta PLC for advanced industrial automation control.", image: am1 },
  { id: "prod-2", name: "9F Connector", category: ProductCategory.INTERCONNECTS, description: "Reliable 9F series connector for high-density signal transmission.", image: f9 },
  { id: "prod-3", name: "USB F Flange", category: ProductCategory.FLANGES, description: "Industrial female USB flange for secure panel-mount connectivity.", image: flang2 },
  { id: "prod-4", name: "Anderson Connector", category: ProductCategory.INTERCONNECTS, description: "Heavy-duty Anderson power module for high-current industrial applications.", image: anderson },
  { id: "prod-5", name: "Delta MOOVair", category: ProductCategory.AUTOMATION, description: "Advanced air movement solution for efficient industrial warehouse cooling.", image: wl1 },
  { id: "prod-6", name: "RJ45 Mount", category: ProductCategory.MOUNTS, description: "Heavy-duty network interface mount for stable Ethernet connections.", image: mount1 },
  { id: "prod-7", name: "9FF Connector", category: ProductCategory.INTERCONNECTS, description: "Precision 9FF signal interface for seamless industrial data transfer.", image: ff9 },
  { id: "prod-8", name: "Delta Machine Vision", category: ProductCategory.AUTOMATION, description: "Precise automated visual inspection system for high-speed quality monitoring.", image: avss2 },
  { id: "prod-9", name: "LP-20JO8SX-03", category: ProductCategory.FLANGES, description: "Corrosion-resistant circular flange for extreme industrial and marine environments.", image: flang6 },
  { id: "prod-10", name: "Battery Connector", category: ProductCategory.INTERCONNECTS, description: "Secure-lock battery system connector for stable industrial power delivery.", image: battery },
  { id: "prod-11", name: "ASRock iEPF-9000S", category: ProductCategory.AUTOMATION, description: "Rugged expandable industrial computer for high-performance edge AI tasks.", image: evbm1 },
  { id: "prod-12", name: "Header RT", category: ProductCategory.INTERCONNECTS, description: "Right-angle precision PCB header for efficient board-to-board connections.", image: rt },
  { id: "prod-13", name: "CL RJ45 STOPPER", category: ProductCategory.FLANGES, description: "Secure dust-proof RJ45 flange stopper for critical port protection.", image: flang9 },
  { id: "prod-14", name: "Delta-HMI-DOP", category: ProductCategory.AUTOMATION, description: "Advanced HMI touch panel for intuitive industrial machinery control.", image: hspa3 },
  { id: "prod-15", name: "LP-16-J Mount", category: ProductCategory.MOUNTS, description: "Robust industrial support bracket for heavy equipment and sensors.", image: mount4 },
  { id: "prod-16", name: "Deutsch Connector", category: ProductCategory.INTERCONNECTS, description: "Waterproof automotive connector for reliable performance in harsh conditions.", image: deutsch },
  { id: "prod-17", name: "ASRock iEP-9000", category: ProductCategory.AUTOMATION, description: "High-performance rugged edge computing system for industrial AI applications.", image: rdc1 },
  { id: "prod-18", name: "CL CHROME RJ45", category: ProductCategory.FLANGES, description: "Premium chrome-plated network flange for high-speed data transmission.", image: flang12 },
  { id: "prod-19", name: "Dancing Leg USB", category: ProductCategory.INTERCONNECTS, description: "Flexible PCB-mount USB connector for specialized industrial electronic hardware.", image: dancing },
  { id: "prod-20", name: "Delta DT 3 Series", category: ProductCategory.AUTOMATION, description: "Precise multi-loop temperature control system for optimal thermal management.", image: tmm1 },
  { id: "prod-21", name: "GX 40 Aviation", category: ProductCategory.INTERCONNECTS, description: "Aviation-grade heavy-duty power link for high-vibration industrial environments.", image: gx40 },
  { id: "prod-22", name: "USB C Mount", category: ProductCategory.MOUNTS, description: "High-stability mounting system designed for secure industrial USB-C integration.", image: mount2 },
  { id: "prod-23", name: "Delta MS300 VF", category: ProductCategory.AUTOMATION, description: "Compact high-efficiency vector drive for versatile motor speed control.", image: asg3 },
  { id: "prod-24", name: "CL USB FRONT", category: ProductCategory.FLANGES, description: "Front-panel industrial USB access flange for protected user connectivity.", image: flang1 },
  { id: "prod-25", name: "FRC F Connector", category: ProductCategory.INTERCONNECTS, description: "Female ribbon cable connector for reliable multi-pin signal routing.", image: frcf },
  { id: "prod-26", name: "Delta DC Brushless Fans", category: ProductCategory.AUTOMATION, description: "High-reliability thermal cooling solutions for consistent industrial equipment performance.", image: skrc2 },
  { id: "prod-27", name: "Header SMD", category: ProductCategory.INTERCONNECTS, description: "Vertical surface-mount technology header for automated industrial PCB assembly.", image: smd },
  { id: "prod-28", name: "RJ45 Flange", category: ProductCategory.FLANGES, description: "High-precision network mounting flange for standard industrial Ethernet connectivity.", image: flang11 },
  { id: "prod-29", name: "Delta SCARA Robot", category: ProductCategory.AUTOMATION, description: "High-speed precision robotic arm for rapid industrial assembly tasks.", image: evbm2 },
  { id: "prod-30", name: "GX12 Connector", category: ProductCategory.INTERCONNECTS, description: "Compact aviation-style connector for secure threaded low-voltage sensor links.", image: gx12 },
  { id: "prod-31", name: "USB F Mount", category: ProductCategory.MOUNTS, description: "Precision support mounting module for female USB control interfaces.", image: mount3 },
  { id: "prod-32", name: "ASDA-A3", category: ProductCategory.AUTOMATION, description: "High-performance motion control servo drive with advanced vibration suppression.", image: hspa1 },
  { id: "prod-33", name: "LP-20-USB3", category: ProductCategory.FLANGES, description: "Heavy-duty USB 3.0 circular flange for high-speed data transmission.", image: flang5 },
  { id: "prod-34", name: "Gender Changer", category: ProductCategory.INTERCONNECTS, description: "Universal signal gender conversion adapter for mismatched industrial connectors.", image: gender },
  { id: "prod-35", name: "Delta CliQ M Series", category: ProductCategory.AUTOMATION, description: "High-efficiency DIN rail power supply for reliable industrial operations.", image: rdc2 },
  { id: "prod-36", name: "DF-15 Connector", category: ProductCategory.INTERCONNECTS, description: "Compact multi-pin precision signal link for high-density electronic connections.", image: df15 },
  { id: "prod-37", name: "M12 Flange", category: ProductCategory.FLANGES, description: "Advanced waterproof M12 circular flange for secure industrial sensors.", image: flang8 },
  { id: "prod-38", name: "Delta CT2000", category: ProductCategory.AUTOMATION, description: "Dedicated textile tension control drive for modern industrial machinery.", image: tmm3 },
  { id: "prod-39", name: "FRC M Connector", category: ProductCategory.INTERCONNECTS, description: "Male ribbon cable industrial plug for robust data bus connections.", image: frcm },
  { id: "prod-40", name: "ASRock iEP-5000G", category: ProductCategory.AUTOMATION, description: "Compact rugged industrial IoT gateway for secure remote monitoring.", image: am4 },
  { id: "prod-41", name: "CL USB C", category: ProductCategory.FLANGES, description: "Next-gen high-speed USB-C flange module for modern industrial systems.", image: flang3 },
  { id: "prod-42", name: "Header Straight", category: ProductCategory.INTERCONNECTS, description: "Standard vertical alignment PCB header for stable electrical component paths.", image: headerStra },
  { id: "prod-43", name: "Delta Row Cool", category: ProductCategory.AUTOMATION, description: "Precision data center cooling system for efficient server rack management.", image: dci1 },
  { id: "prod-44", name: "LT-933 Series", category: ProductCategory.INTERCONNECTS, description: "High-voltage industrial power link for safe and efficient distribution.", image: lt933 },
  { id: "prod-45", name: "Delta PMC Power Supply", category: ProductCategory.AUTOMATION, description: "Reliable panel mount power supply for stable industrial control systems.", image: skrc3 },
  { id: "prod-46", name: "LT-2604D Module", category: ProductCategory.INTERCONNECTS, description: "Precision digital signal processing module for high-accuracy industrial measurement.", image: lt2604 },
  { id: "prod-47", name: "Delta Area Scan Camera", category: ProductCategory.AUTOMATION, description: "High-speed industrial image capture sensor for automated production lines.", image: asg1 },
  { id: "prod-48", name: "M40 Connector", category: ProductCategory.INTERCONNECTS, description: "Large-scale industrial M40 connector for high-power electrical signal coupling.", image: m40 },
  { id: "prod-49", name: "Delta DMV-3000", category: ProductCategory.AUTOMATION, description: "Multi-camera vision system hub for high-speed industrial quality inspection.", image: avss3 },
  { id: "prod-50", name: "Machine Socket 3 Notch", category: ProductCategory.INTERCONNECTS, description: "Triple-notch heavy-duty machine socket for secure keyed electrical connections.", image: ms3n },
  { id: "prod-51", name: "Delta Servo Press", category: ProductCategory.AUTOMATION, description: "Precision electronic force-joining system for sensitive industrial assembly operations.", image: evbm3 },
  { id: "prod-52", name: "Machine Sockets 2 Notch", category: ProductCategory.INTERCONNECTS, description: "Dual-notch industrial equipment socket for specialized mechanical-electrical interfaces.", image: ms2n },
  { id: "prod-53", name: "Warehouse Automation Hub", category: ProductCategory.AUTOMATION, description: "Centralized smart logistics platform for controlling autonomous mobile robots.", image: wl3 },
  { id: "prod-54", name: "Mil Spec 3018", category: ProductCategory.INTERCONNECTS, description: "Military standard 3018 connector built for extreme environmental stress.", image: ms3018 },
  { id: "prod-55", name: "ASDA-B3 and Motor", category: ProductCategory.AUTOMATION, description: "High-torque precision servo system for accurate industrial position control.", image: am2 },
  { id: "prod-56", name: "Mil Spec 3106", category: ProductCategory.INTERCONNECTS, description: "Tactical grade circular military connector with robust signal shielding.", image: ms3106 },
  { id: "prod-57", name: "ASRock RackMount Server Barebones", category: ProductCategory.AUTOMATION, description: "Scalable high-density server chassis for enterprise-level industrial data processing.", image: dci2 },
  { id: "prod-58", name: "MPX Interface", category: ProductCategory.INTERCONNECTS, description: "High-speed multi-pole interface for reliable advanced robotics signal routing.", image: mpx },
  { id: "prod-59", name: "Delta DXMC Motion", category: ProductCategory.AUTOMATION, description: "Integrated multi-axis motion control for synchronized automated machinery movement.", image: hspa4 },
  { id: "prod-60", name: "OBD Connector", category: ProductCategory.INTERCONNECTS, description: "Standardized automotive diagnostic interface for vehicle electronics system testing.", image: obd },
  { id: "prod-61", name: "ASrock iEP-7020E", category: ProductCategory.AUTOMATION, description: "Edge-ready industrial computing module for real-time automated data analysis.", image: asg2 },
  { id: "prod-62", name: "Panel RT Connector", category: ProductCategory.INTERCONNECTS, description: "Right-angle panel mount interface for clean industrial cable management.", image: panelrt },
  { id: "prod-63", name: "ASRock NUC BOX", category: ProductCategory.AUTOMATION, description: "Ultra-compact high-performance mini PC for space-constrained industrial applications.", image: skrc1 },
  { id: "prod-64", name: "PCT 233-10R", category: ProductCategory.INTERCONNECTS, description: "Industrial terminal block connector for secure screw-less wiring solutions.", image: pcl },
  { id: "prod-65", name: "High Performance blower", category: ProductCategory.AUTOMATION, description: "Heavy-duty industrial centrifugal blower for intensive cooling and ventilation.", image: rdc3 },
  { id: "prod-66", name: "RJ45 F Port", category: ProductCategory.INTERCONNECTS, description: "High-speed female Ethernet port for reliable industrial device connectivity.", image: rjf },
  { id: "prod-67", name: "Delta Modulon DPH", category: ProductCategory.AUTOMATION, description: "High-availability modular UPS system for mission-critical industrial data backup.", image: dci3 },
  { id: "prod-68", name: "RJ45 M Plug", category: ProductCategory.INTERCONNECTS, description: "Male gigabit Ethernet plug with robust relief for durable installations.", image: rjm },
  { id: "prod-69", name: "Delta Id-e Sensor lidr", category: ProductCategory.AUTOMATION, description: "Precision laser distance sensing lidar for autonomous mobile robot detection.", image: am3 },
  { id: "prod-70", name: "RS232 Serial", category: ProductCategory.INTERCONNECTS, description: "Standard serial communication data link for legacy industrial equipment.", image: rs232 },
  { id: "prod-71", name: "ASRock Ind. iEPF-9000S", category: ProductCategory.AUTOMATION, description: "Advanced AI-powered industrial workstation for deep learning vision applications.", image: avss1 },
  { id: "prod-72", name: "SCSI 14", category: ProductCategory.INTERCONNECTS, description: "High-bandwidth SCSI 14 interface for reliable high-speed peripheral data transfer.", image: scsi },
  { id: "prod-73", name: "Rack PDU", category: ProductCategory.AUTOMATION, description: "Intelligent rack-mount PDU for efficient power management in servers.", image: dci4 },
  { id: "prod-74", name: "Servo Motor Connector", category: ProductCategory.INTERCONNECTS, description: "Precision servo control interface for secure high-torque motor electrical paths.", image: servomotor },
  { id: "prod-75", name: "SP 13 Waterproof", category: ProductCategory.INTERCONNECTS, description: "Waterproof circular SP13 connector for harsh outdoor industrial power.", image: sp13 },
  { id: "prod-76", name: "SP Connector", category: ProductCategory.INTERCONNECTS, description: "Standard SP series power interface for versatile industrial device connectivity.", image: sp },
  { id: "prod-77", name: "WS16 Threaded", category: ProductCategory.INTERCONNECTS, description: "Robust threaded WS16 connector for vibration-resistant secure industrial coupling.", image: ws16 },
  { id: "prod-78", name: "XT 60 Plug", category: ProductCategory.INTERCONNECTS, description: "High-performance gold-plated power plug for minimal DC current resistance.", image: xt60 },
  { id: "prod-79", name: "XY128 Terminal", category: ProductCategory.INTERCONNECTS, description: "PCB-mount terminal block for easy and secure industrial wire termination.", image: xy128 },
  { id: "prod-80", name: "XY2500FE Module", category: ProductCategory.INTERCONNECTS, description: "Pluggable terminal block module for rapid and reliable maintenance operations.", image: xy2500 },
  { id: "prod-81", name: "15F Connector", category: ProductCategory.INTERCONNECTS, description: "Industrial grade 15F power interface for stable and durable signal routing.", image: f15 }
];


