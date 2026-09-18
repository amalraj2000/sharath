import { Briefcase, GraduationCap, MapPin, Building2, HardHat, Ruler } from 'lucide-react';

export const personalInfo = {
  name: "Sharath, PE",
  title: "Professional Civil Engineer",
  headline: "Designing Resilient Infrastructure for a Sustainable Future",
  summary: "Specializing in Structural Analysis, Site Execution, Project Management, and Highway & Urban Infrastructure. Committed to engineering solutions that blend safety, durability, and cost-efficiency.",
  stats: [
    { label: "Experience", value: "8+ Years" },
    { label: "Projects Completed", value: "25+" },
    { label: "Credentials", value: "Licensed PE" }
  ],
  contact: {
    email: "sharath.engineer@example.com",
    phone: "+1 (555) 123-4567",
    location: "Chicago, IL",
    linkedin: "linkedin.com/in/sharath-pe"
  },
  about: {
    overview: "I am a dedicated Civil Engineer with a robust background in overseeing large-scale commercial and infrastructure projects from conception to completion. My career is built on a foundation of rigorous structural analysis and hands-on site management.",
    philosophy: "My engineering philosophy centers on sustainability, strict safety compliance, and uncompromising structural integrity. I believe that modern infrastructure must not only serve the needs of today but also adapt to the environmental challenges of tomorrow."
  }
};

export const skills = {
  technical: [
    { name: "AutoCAD", level: 95 },
    { name: "Revit", level: 90 },
    { name: "STAAD.Pro", level: 85 },
    { name: "ETABS", level: 85 },
    { name: "Civil 3D", level: 80 },
    { name: "Primavera P6", level: 75 },
    { name: "MS Project", level: 80 }
  ],
  domain: [
    "Site Inspection",
    "Quantity Surveying (BOQ)",
    "Reinforced Concrete (RCC) Design",
    "Geotechnical Analysis",
    "Building Codes Compliance",
    "Quality Control (QA/QC)",
    "Risk Management"
  ]
};

export const projects = [
  {
    id: 1,
    title: "G+12 Commercial Complex",
    category: "Commercial",
    location: "Downtown Chicago, IL",
    scale: "250,000 sq ft",
    tools: ["AutoCAD", "ETABS", "MS Project"],
    responsibilities: [
      "Led the structural design and analysis for the RCC framework.",
      "Coordinated with architectural and MEP teams to resolve clashes.",
      "Ensured zero safety incidents during the 18-month construction phase."
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    specs: {
      budget: "$45M",
      duration: "18 Months",
      materials: "High-Strength Concrete, Structural Steel"
    }
  },
  {
    id: 2,
    title: "4-Lane Highway Stretch",
    category: "Infrastructure",
    location: "Interstate 90, IL",
    scale: "15 Miles",
    tools: ["Civil 3D", "Primavera P6"],
    responsibilities: [
      "Managed site execution and contractor scheduling.",
      "Implemented advanced geotechnical stabilization techniques.",
      "Conducted daily QA/QC inspections for asphalt laying."
    ],
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=800",
    specs: {
      budget: "$120M",
      duration: "24 Months",
      materials: "Asphalt, Geogrids, RC Pipes"
    }
  },
  {
    id: 3,
    title: "Eco-Friendly Residential Towers",
    category: "Residential",
    location: "Austin, TX",
    scale: "Two Towers, 300 Units",
    tools: ["Revit", "STAAD.Pro"],
    responsibilities: [
      "Designed foundation systems adhering to strict LEED requirements.",
      "Performed structural health monitoring during peak construction.",
      "Optimized material usage saving 10% of the structural budget."
    ],
    image: "https://images.unsplash.com/photo-1448697138198-9d192f0b64d1?auto=format&fit=crop&q=80&w=800",
    specs: {
      budget: "$85M",
      duration: "20 Months",
      materials: "Recycled Steel, Low-Carbon Concrete"
    }
  },
  {
    id: 4,
    title: "Urban Bridge Rehabilitation",
    category: "Infrastructure",
    location: "Seattle, WA",
    scale: "1.2 Miles",
    tools: ["AutoCAD", "STAAD.Pro"],
    responsibilities: [
      "Assessed structural fatigue and designed retrofitting solutions.",
      "Managed traffic diversion planning during construction.",
      "Overseen the installation of carbon fiber reinforcement."
    ],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    specs: {
      budget: "$25M",
      duration: "12 Months",
      materials: "Carbon Fiber, Epoxy Resins, Steel Plates"
    }
  }
];

export const education = [
  {
    id: 1,
    degree: "M.S. in Structural Engineering",
    institution: "University of Illinois at Urbana-Champaign",
    year: "2015-2017",
    honors: "Summa Cum Laude"
  },
  {
    id: 2,
    degree: "B.S. in Civil Engineering",
    institution: "Purdue University",
    year: "2011-2015",
    honors: "Dean's List"
  }
];

export const certifications = [
  { id: 1, name: "Professional Engineer (PE) License - State of Illinois", year: "2019" },
  { id: 2, name: "Project Management Professional (PMP)", year: "2020" },
  { id: 3, name: "OSHA 30-Hour Construction Safety", year: "2018" },
  { id: 4, name: "LEED Green Associate", year: "2021" }
];
