export const personalInfo = {
  name: "Sharath Kumar V",
  title: "Architectural Designer & Civil Engineer",
  headline: "Architectural Design, Site Management & 3D Visualization",
  summary: "Detail-oriented Architectural Designer & Civil Engineer with 4+ years of experience in structural design, site execution, quality assurance, and project estimation. Proficient in AutoCAD, SketchUp & Lumion, with a proven track record of delivering high-value construction projects on schedule.",
  photo: "/sharath.jpg",
  stats: [
    { label: "Experience", value: "3+ Yrs" },
    { label: "Projects", value: "10+" },
    { label: "Waste Reduced", value: "12%" }
  ],
  contact: {
    email: "sharathleo637@gmail.com",
    phone: "+91 7561844151",
    location: "Calicut, Kerala, India",
    linkedin: "linkedin.com/in/sharathkumarv"
  },
  about: {
    overview: "Detail-oriented Civil Engineer and Architectural Designer with 4+ years of experience in structural design, site execution, quality assurance, and project estimation for commercial and residential developments. Proficient in AutoCAD, SketchUp, and Lumion, with a proven track record of reducing material waste by 12% and delivering high-value construction projects on schedule.",
    philosophy: "Adept at coordinating multidisciplinary teams, managing subcontractor workflows, and ensuring strict compliance with local building codes (IS Codes, NBC) and safety regulations — from blueprint to built reality."
  }
};

export const skills = {
  technical: [
    { name: "SketchUp", level: 95 },
    { name: "Lumion", level: 92 },
    { name: "AutoCAD", level: 90 },
    { name: "Photoshop", level: 85 }
  ],
  domain: [
    "On-site Supervision & Site Execution",
    "Bar Bending Schedule (BBS)",
    "Quality Control (QA/QC) & Concrete Technology",
    "Cost Estimation & BOQ Preparation",
    "Vendor & Subcontractor Management",
    "IS Codes (IS 456, IS 875) & NBC Compliance",
    "3D Architectural Modeling & Photorealistic Rendering",
    "Structural Drawing Review & MEP Coordination"
  ]
};

export const experience = [
  {
    id: 1,
    role: "Architectural Designer & Site Management",
    company: "Sthaayi Designs Pvt Ltd",
    period: "2025 – Present",
    location: "Calicut, Kerala",
    type: "Current",
    responsibilities: [
      "Leading architectural design projects for commercial and residential clients.",
      "Managing site activities and overseeing project execution from design to delivery.",
      "Coordinating with structural, MEP, and interior teams to ensure design integrity.",
      "Producing 3D visualizations and walkthroughs using SketchUp and Lumion."
    ]
  },
  {
    id: 2,
    role: "Civil Project Engineer",
    company: "Asok Architecture Pvt Limited",
    period: "July 2020 – 2022",
    location: "Calicut, Kerala",
    type: "Previous",
    responsibilities: [
      "Supervised daily site execution for a ₹45 Cr multi-story commercial complex, overseeing structural steel framing, reinforced concrete works, and finishing activities.",
      "Prepared detailed Bill of Quantities (BOQ), material requisition orders, and rate analyses — optimizing procurement cycles to reduce site material delays by 20%.",
      "Reviewed structural and MEP drawings using AutoCAD to resolve design conflicts on-site.",
      "Enforced quality control protocols, inspecting formwork, rebar placements, slump tests, and cube compressive strength tests across all construction phases.",
      "Directed a site team of 4 junior supervisors and managed over 120 subcontracted skilled/unskilled labourers.",
      "Maintained daily progress logs (DPRs), safety compliance records, and site inventory reports using MS Excel and ERP tools."
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "₹45 Cr Multi-Story Commercial Complex",
    category: "Commercial",
    location: "Calicut, Kerala",
    scale: "Multi-Storey",
    tools: ["AutoCAD", "SketchUp", "Lumion"],
    responsibilities: [
      "Supervised daily site execution covering structural steel framing and RCC works.",
      "Coordinated with MEP teams and reviewed structural drawings in AutoCAD.",
      "Enforced QA/QC protocols including slump tests and cube compressive strength inspections.",
      "Managed 4 junior supervisors and 120+ subcontracted skilled labourers."
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    specs: {
      budget: "₹45 Crore",
      duration: "2 Years",
      materials: "Structural Steel, RCC Framework, Masonry"
    }
  },
  {
    id: 2,
    title: "Modern Residential Villa — 3D Design",
    category: "Residential",
    location: "Kerala, India",
    scale: "3,200 sq ft",
    tools: ["SketchUp", "Lumion", "Photoshop", "AutoCAD"],
    responsibilities: [
      "Created complete 2D floor plans and elevation blueprints in AutoCAD.",
      "Built detailed 3D architectural massing and material texturing using SketchUp.",
      "Produced photorealistic exterior lighting and landscape renders with Lumion.",
      "Performed color grading and post-processing in Photoshop for client presentations."
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    specs: {
      budget: "Residential",
      duration: "3 Weeks",
      materials: "RCC Structure, Glass Facade, Timber Cladding"
    }
  },
  {
    id: 3,
    title: "Contemporary Interior & Landscape Rendering",
    category: "Residential",
    location: "Calicut, Kerala",
    scale: "2,400 sq ft",
    tools: ["SketchUp", "Photoshop", "Lumion"],
    responsibilities: [
      "Modeled custom interior furniture, lighting layouts, and wall panelling in SketchUp.",
      "Used Lumion for material reflections, soft shadows, and vegetation placement.",
      "Enhanced final imagery in Photoshop for professional client presentation.",
      "Delivered photorealistic walkthroughs for client approval prior to construction."
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    specs: {
      budget: "Interior Project",
      duration: "2 Weeks",
      materials: "Hardwood, Marble, Ambient Architectural Lighting"
    }
  },
  {
    id: 4,
    title: "Civil Structural Elevation & Detailing",
    category: "Infrastructure",
    location: "Kannur, Kerala",
    scale: "4,500 sq ft",
    tools: ["AutoCAD", "SketchUp", "Photoshop"],
    responsibilities: [
      "Designed detailed 2D structural drafting including column-beam grid layouts.",
      "Prepared BOQ and rate analyses in compliance with IS 456 and IS 875.",
      "Converted 2D CAD files into 3D volume representations for client review.",
      "Prepared client-ready presentation sheets with Photoshop composite layouts."
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&q=80&w=800",
    specs: {
      budget: "Civil Project",
      duration: "3 Weeks",
      materials: "RCC Framework, Masonry Walls"
    }
  }
];

export const education = [
  {
    id: 1,
    degree: "Diploma in Civil Engineering",
    institution: "Malabar Polytechnic College, Kottakkal, Malappuram",
    year: "Civil Engineering",
    honors: "Diploma Holder"
  }
];

export const certifications = [
  { id: 1, name: "AutoCAD for Civil Engineers – Autodesk Certified User", year: "Autodesk" },
  { id: 2, name: "SketchUp Architectural 3D Modeling", year: "Certified" },
  { id: 3, name: "Lumion Photorealistic Architectural Rendering", year: "Certified" },
  { id: 4, name: "Site Safety & QA/QC – IS Codes & NBC Compliance", year: "Certified" }
];

export const competencies = [
  {
    category: "Engineering Software",
    items: ["AutoCAD", "SketchUp", "Lumion", "Photoshop", "MS Excel", "ERP Tools"]
  },
  {
    category: "Site Operations",
    items: ["On-site Supervision", "Bar Bending Schedule (BBS)", "Quality Control (QA/QC)", "Concrete Technology", "DPR Maintenance"]
  },
  {
    category: "Project Management",
    items: ["Cost Estimation & BOQ", "Vendor Management", "Subcontractor Scheduling", "Site Safety (OSHA)", "Material Procurement"]
  },
  {
    category: "Standards & Codes",
    items: ["IS 456", "IS 875", "NBC (National Building Code)", "British Standards"]
  }
];
