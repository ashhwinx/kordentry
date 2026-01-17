import { ProductCategory } from './types';
import type { Product, ServiceItem, NavLink } from './types';


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

import auto1 from "./photos/automation/automation (1).jpeg"
import auto2 from "./photos/automation/automation (2).jpeg"
import auto3 from "./photos/automation/automation (3).jpeg"
import auto4 from "./photos/automation/automation (4).jpeg"
import auto5 from "./photos/automation/automation (5).jpeg"
import auto6 from "./photos/automation/automation (6).jpeg"
import auto7 from "./photos/automation/automation (7).jpeg"
import auto8 from "./photos/automation/automation (8).jpeg"
import auto9 from "./photos/automation/automation (9).jpeg"
import auto10 from "./photos/automation/automation (10).jpeg"






import f9 from "./photos/interconnect/9F.jpeg"
import ff9 from "./photos/interconnect/9FF.jpeg"
import f15 from "./photos/interconnect/15F.jpeg"
import anderson from "./photos/interconnect/ANDERSON CONNECTOR.jpeg"
import battery from "./photos/interconnect/BATTERY CONNECTOR.jpeg"

import dancing from "./photos/interconnect/usb.jpeg"
import deutsch from "./photos/interconnect/DEUTSCH CONNECTOR.jpeg"
import frcf from "./photos/interconnect/FRC F.jpeg"
import frcm from "./photos/interconnect/FRC M.jpeg"
import gender from "./photos/interconnect/GENDER CHANGE.jpeg"
import gx40 from "./photos/interconnect/GX 40.jpeg"
import gx12 from "./photos/interconnect/GX12.jpeg"
import rt from "./photos/interconnect/HEADER RT.jpeg"
import m40 from "./photos/interconnect/M40.jpeg"
import ms3018 from "./photos/interconnect/MIL SPEC 3018.jpeg"
import ms3106 from "./photos/interconnect/MIL SPEC 3106.jpeg"
import mpx from "./photos/interconnect/MPX.jpeg"
import obd from "./photos/interconnect/OBD CONNECTOR.jpeg"
import rjf from "./photos/interconnect/RJ45 F.jpeg"
import rjm from "./photos/interconnect/RJ45 M.jpeg"
import rs232 from "./photos/interconnect/RS232.jpeg"
import scsi from "./photos/interconnect/SCSI 14.jpeg"
import servomotor from "./photos/interconnect/SERVO MOTOR CONNECTOR.jpeg"
import sp13 from "./photos/interconnect/SP 13.jpeg"
import sp from "./photos/interconnect/SP.jpeg"
import ws16 from "./photos/interconnect/WS16.jpeg"
import xt60 from "./photos/interconnect/XT 60.jpeg"
import image1 from "./photos/interconnect/image (1).jpeg"
import image2 from "./photos/interconnect/image (2).jpeg"
import image3 from "./photos/interconnect/image (3).jpeg"
import image4 from "./photos/interconnect/image (4).jpeg"
import image5 from "./photos/interconnect/image (5).jpeg"
import image6 from "./photos/interconnect/image (6).jpeg"
import image7 from "./photos/interconnect/image (7).jpeg"
import image8 from "./photos/interconnect/image (8).jpeg"
import image9 from "./photos/interconnect/image (9).jpeg"
import image10 from "./photos/interconnect/image (10).jpeg"



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
  { id: "prod-1", name: "High-Precision Assembly Hardware", category: ProductCategory.AUTOMATION, description: "Specialized components for the safe handling and assembly of high-voltage battery packs. Ensures torque accuracy and electrical safety.", image: auto1 },
  { id: "prod-2", name: "IDC D-SUB CONNECTOR", category: ProductCategory.INTERCONNECTS, description: "Reliable 9F series connector for high-density signal transmission.", image: f9 },
  { id: "prod-3", name: "USB F Flange", category: ProductCategory.INTERCONNECTS, description: "Industrial female USB flange for secure panel-mount connectivity.", image: flang2 },
  { id: "prod-4", name: "POWERPOLE CONNECTOR", category: ProductCategory.INTERCONNECTS, description: "Heavy-duty Anderson power module for high-current industrial applications.", image: anderson },
  { id: "prod-5", name: "Mission-Critical Compute for Extreme Conditions ", category: ProductCategory.AUTOMATION, description: "Military-grade hardware engineered to withstand shock, vibration, and extreme temperature fluctuations. Ensures data integrity in field operations.", image: auto2 },
  { id: "prod-6", name: "RJ45 Mount", category: ProductCategory.INTERCONNECTS, description: "Heavy-duty network interface mount for stable Ethernet connections.", image: mount1 },
  { id: "prod-7", name: "MINI DSUB CONNECTOR", category: ProductCategory.INTERCONNECTS, description: "Precision 9FF signal interface for seamless industrial data transfer.", image: ff9 },
  { id: "prod-8", name: "Zero-Maintenance Hardware for Self-Service ", category: ProductCategory.AUTOMATION, description: "Reliable, fanless computing solutions built to run 24/7 inside kiosks and ATMs without overheating. Includes all necessary power and display interfaces.", image: auto3 },
  { id: "prod-9", name: "LP-20JO8SX-03", category: ProductCategory.INTERCONNECTS, description: "Corrosion-resistant circular flange for extreme industrial and marine environments.", image: flang6 },
  { id: "prod-10", name: "Battery Connector", category: ProductCategory.INTERCONNECTS, description: "Secure-lock battery system connector for stable industrial power delivery.", image: battery },
  { id: "prod-11", name: "Complete Powertrain for Mobile Robotics ", category: ProductCategory.AUTOMATION, description: "A fully integrated traction and navigation bundle designed for AGVs and AMRs. Delivers precise movement control while managing battery efficiency in 24V/48V systems.", image: auto4 },
  { id: "prod-12", name: "FLOW SOLDER", category: ProductCategory.INTERCONNECTS, description: "Right-angle precision PCB header for efficient board-to-board connections.", image: rt },
  { id: "prod-13", name: "CL RJ45 STOPPER", category: ProductCategory.INTERCONNECTS, description: "Secure dust-proof RJ45 flange stopper for critical port protection.", image: flang9 },
  { id: "prod-14", name: "Automated Quality Control & Defect Detection", category: ProductCategory.AUTOMATION, description: "High-speed vision hardware that identifies manufacturing defects faster than the human eye. Designed to integrate directly into production lines for zero-error sorting.", image: auto5 },
  { id: "prod-15", name: "LP-16-J Mount", category: ProductCategory.INTERCONNECTS, description: "Robust industrial support bracket for heavy equipment and sensors.", image: mount4 },
  { id: "prod-16", name: "Deutsch Connector", category: ProductCategory.INTERCONNECTS, description: "Waterproof automotive connector for reliable performance in harsh conditions.", image: deutsch },
  { id: "prod-17", name: "CL CHROME RJ45", category: ProductCategory.INTERCONNECTS, description: "Premium chrome-plated network flange for high-speed data transmission.", image: flang12 },
 
  { id: "prod-18", name: "USB", category: ProductCategory.INTERCONNECTS, description: "Flexible PCB-mount USB connector for specialized industrial electronic hardware.", image: dancing },
  { id: "prod-19", name: "Rugged Sorting Logic for Harsh Environments", category: ProductCategory.AUTOMATION, description: "Dust-resistant control systems designed for grain and food sorting machinery. Handles high-speed reject mechanisms while surviving vibration and dirt", image: auto6},
  { id: "prod-20", name: "GX 40 Aviation", category: ProductCategory.INTERCONNECTS, description: "Aviation-grade heavy-duty power link for high-vibration industrial environments.", image: gx40 },
  { id: "prod-21", name: "USB C Mount", category: ProductCategory.INTERCONNECTS, description: "High-stability mounting system designed for secure industrial USB-C integration.", image: mount2 },
  { id: "prod-22", name: "Power & Connectivity for Edge Facilities", category: ProductCategory.AUTOMATION, description: "The backbone of the server room. Ensures uninterrupted power delivery and high-speed optical data flow between racks.", image: auto7 },
  { id: "prod-23", name: "CL USB FRONT", category: ProductCategory.INTERCONNECTS, description: "Front-panel industrial USB access flange for protected user connectivity.", image: flang1 },
  { id: "prod-24", name: "FRC F Connector", category: ProductCategory.INTERCONNECTS, description: "Female ribbon cable connector for reliable multi-pin signal routing.", image: frcf },
  { id: "prod-25", name: "Smart Drive Systems for Intralogistics", category: ProductCategory.AUTOMATION, description: "Decentralized control modules for modern conveyor belts and sorters. Reduces cabling complexity and supports wireless power transfer for mobile units", image: auto8 },
  { id: "prod-26", name: "RJ45 Flange", category: ProductCategory.INTERCONNECTS, description: "High-precision network mounting flange for standard industrial Ethernet connectivity.", image: flang11 },
  { id: "prod-27", name: "GX12 Connector", category: ProductCategory.INTERCONNECTS, description: "Compact aviation-style connector for secure threaded low-voltage sensor links.", image: gx12 },
  { id: "prod-28", name: "USB F Mount", category: ProductCategory.INTERCONNECTS, description: "Precision support mounting module for female USB control interfaces.", image: mount3 },
  { id: "prod-29", name: "Lint-Proof Drive Systems for Looms", category: ProductCategory.AUTOMATION, description: "Specialized retrofit kits featuring coated electronics to prevent short circuits caused by conductive fiber dust. Extends the life of older weaving machinery", image: auto9 },
  { id: "prod-30", name: "LP-20-USB3", category: ProductCategory.INTERCONNECTS, description: "Heavy-duty USB 3.0 circular flange for high-speed data transmission.", image: flang5 },
  { id: "prod-31", name: "Gender Changer", category: ProductCategory.INTERCONNECTS, description: "Universal signal gender conversion adapter for mismatched industrial connectors.", image: gender },
  { id: "prod-32", name: "M12 Flange", category: ProductCategory.INTERCONNECTS, description: "Advanced waterproof M12 circular flange for secure industrial sensors.", image: flang8 },
  { id: "prod-33", name: "Precision Synchronization for VFFS & Wrapping", category: ProductCategory.AUTOMATION, description: "A complete motion control kit that synchronizes cutting, filling, and sealing operations at high speeds. Eliminates drift and reduces material waste", image: auto10 },
  { id: "prod-34", name: "FRC M Connector", category: ProductCategory.INTERCONNECTS, description: "Male ribbon cable industrial plug for robust data bus connections.", image: frcm },
  { id: "prod-35", name: "CL USB C", category: ProductCategory.INTERCONNECTS, description: "Next-gen high-speed USB-C flange module for modern industrial systems.", image: flang3 },
  { id: "prod-36", name: "M40 Connector", category: ProductCategory.INTERCONNECTS, description: "Large-scale industrial M40 connector for high-power electrical signal coupling.", image: m40 },
  { id: "prod-37", name: "Mil Spec 3018", category: ProductCategory.INTERCONNECTS, description: "Military standard 3018 connector built for extreme environmental stress.", image: ms3018 },
  { id: "prod-38", name: "Mil Spec 3106", category: ProductCategory.INTERCONNECTS, description: "Tactical grade circular military connector with robust signal shielding.", image: ms3106 },
  { id: "prod-39", name: "MPX Interface", category: ProductCategory.INTERCONNECTS, description: "High-speed multi-pole interface for reliable advanced robotics signal routing.", image: mpx },
  { id: "prod-40", name: "OBD Connector", category: ProductCategory.INTERCONNECTS, description: "Standardized automotive diagnostic interface for vehicle electronics system testing.", image: obd },
  { id: "prod-41", name: "RJ45 F Port", category: ProductCategory.INTERCONNECTS, description: "High-speed female Ethernet port for reliable industrial device connectivity.", image: rjf },
  { id: "prod-42", name: "RJ45 M Plug", category: ProductCategory.INTERCONNECTS, description: "Male gigabit Ethernet plug with robust relief for durable installations.", image: rjm },
  { id: "prod-43", name: "RS232 Serial", category: ProductCategory.INTERCONNECTS, description: "Standard serial communication data link for legacy industrial equipment.", image: rs232 },
  { id: "prod-44", name: "SCSI 14", category: ProductCategory.INTERCONNECTS, description: "High-bandwidth SCSI 14 interface for reliable high-speed peripheral data transfer.", image: scsi }, 
  { id: "prod-45", name: "Servo Motor Connector", category: ProductCategory.INTERCONNECTS, description: "Precision servo control interface for secure high-torque motor electrical paths.", image: servomotor },
  { id: "prod-46", name: "SP 13 Waterproof", category: ProductCategory.INTERCONNECTS, description: "Waterproof circular SP13 connector for harsh outdoor industrial power.", image: sp13 },
  { id: "prod-47", name: "SP Connector", category: ProductCategory.INTERCONNECTS, description: "Standard SP series power interface for versatile industrial device connectivity.", image: sp },
  { id: "prod-48", name: "WS16 Threaded", category: ProductCategory.INTERCONNECTS, description: "Robust threaded WS16 connector for vibration-resistant secure industrial coupling.", image: ws16 },
  { id: "prod-49", name: "XT 60 Plug", category: ProductCategory.INTERCONNECTS, description: "High-performance gold-plated power plug for minimal DC current resistance.", image: xt60 },
  { id: "prod-50", name: "15F Connector", category: ProductCategory.INTERCONNECTS, description: "Industrial grade 15F power interface for stable and durable signal routing.", image: f15 },
  // 10 New Interconnect Products
  { id: "prod-51", name: "Wire Connectors", category: ProductCategory.INTERCONNECTS, description: "High-reliability connectors designed for secure and stable electrical wire terminations in industrial wiring systems.", image: image1 },
  { id: "prod-52", name: "Power D-Sub", category: ProductCategory.INTERCONNECTS, description: "Specialized D-Sub interface engineered to handle high-current power delivery alongside precise signal transmission.", image: image2 },
  { id: "prod-53", name: "Pin Headers", category: ProductCategory.INTERCONNECTS, description: "Standardized male and female PCB connectors for reliable board-to-board and wire-to-board signal routing.", image: image3 },
  { id: "prod-54", name: "Servo Connectors", category: ProductCategory.INTERCONNECTS, description: "Heavy-duty interconnects specifically designed for precision servo motor power and feedback control signals.", image: image4 },
  { id: "prod-55", name: "Terminal Blocks", category: ProductCategory.INTERCONNECTS, description: "Modular, screw-down electrical connectors for organized and secure distribution in industrial control panels.", image: image5 },
  { id: "prod-56", name: "Machine Encoders", category: ProductCategory.INTERCONNECTS, description: "High-precision interface components for tracking rotational position and speed feedback in automated machinery.", image: image6 },
  { id: "prod-57", name: "RJ45 Ports", category: ProductCategory.INTERCONNECTS, description: "Standardized industrial Ethernet interfaces for reliable high-speed network data transmission in harsh environments.", image: image7 },
  { id: "prod-58", name: "Proximity Sensors", category: ProductCategory.INTERCONNECTS, description: "Advanced non-contact sensing modules for accurate object detection and positioning in automated production lines.", image: image8 },
  { id: "prod-59", name: "Din & Mini Din", category: ProductCategory.INTERCONNECTS, description: "Versatile multi-pin connectors used for high-density signal and power links in specialized industrial electronics.", image: image9 },
  { id: "prod-60", name: "Centronics", category: ProductCategory.INTERCONNECTS, description: "Robust parallel interface connectors for stable data communication in industrial printing and legacy control systems.", image: image10 }
];


