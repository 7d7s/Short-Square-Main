export interface SubService {
  title: string;
  slug: string;
  description: string;
  features: string[];
  image: string;
  gallery: string[];
}

export interface Studio {
  id: number;
  title: string;
  shortTitle: string;
  slug: string;
  image: string;
  description: string;
  subServices: SubService[];
}

export const servicesData: Studio[] = [
  {
    id: 1,
    title: "Image Studio",
    shortTitle: "Image",
    slug: "image-studio",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop",
    description: "High-end commercial photography capturing the raw essence of your brand, translated into a pristine visual language.",
    subServices: [
      {
        title: "Product & E-Commerce",
        slug: "product-ecommerce",
        description: "Macro-level product photography designed exclusively to elevate luxury physical goods through texture, structure, and light.",
        features: ["Focus Stacking", "Lighting Design", "High-End Retouching", "Volume E-Commerce"],
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Fashion & Apparel",
        slug: "fashion-apparel",
        description: "Immersive fashion photography capturing the raw essence of style and culture, translated into a pristine visual language.",
        features: ["Lookbooks", "Campaign Shoots", "Editorial Grading", "Studio & Location"],
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Jewellery & Luxury",
        slug: "jewellery-luxury",
        description: "Meticulous capture of precious stones and metals, utilizing absolute precision in lighting to highlight every facet.",
        features: ["Macro Photography", "Diamond Scintillation", "Watch Photography", "Luxury Still Life"],
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Beauty & Cosmetics",
        slug: "beauty-cosmetics",
        description: "Striking beauty photography focusing on texture, color accuracy, and flawless skin rendering.",
        features: ["Texture Shots", "Swatches", "Model Beauty", "Flawless Retouching"],
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2000&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Food & Beverage",
        slug: "food-beverage",
        description: "Appetite-inducing culinary photography that captures the texture, heat, and essence of gastronomy.",
        features: ["Styling Consultation", "Action Shots", "Beverage Splash", "Menu Curation"],
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Home & Furniture",
        slug: "home-furniture",
        description: "Architectural approach to interior styling, capturing lifestyle and comfort within designed spaces.",
        features: ["Room Sets", "Lighting Control", "Detail Shots", "Lifestyle Integration"],
        image: "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=2000&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Corporate & Industrial",
        slug: "corporate-industrial",
        description: "Professional representation of scale, process, and human capital within corporate environments.",
        features: ["Executive Portraits", "Facility Tours", "Process Documentation", "Annual Reports"],
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=2000&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Architecture & Interiors",
        slug: "architecture-interiors",
        description: "Precision photography capturing spatial dynamics, leading lines, and the interplay of natural light.",
        features: ["Twilight Photography", "Wide Angle", "Detail Isolation", "Perspective Correction"],
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Lifestyle & Editorial",
        slug: "lifestyle-editorial",
        description: "Narrative-driven lifestyle imagery capturing authentic moments styled with a high-end editorial eye.",
        features: ["Casting", "Location Scouting", "Authentic Moments", "Editorial Grading"],
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Portraits & Events",
        slug: "portraits-events",
        description: "Emotionally resonant portrait sessions and cinematic documentation of exclusive events.",
        features: ["Studio Environment", "Documentary Approach", "Lighting Design", "Same-Day Delivery"],
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Motion Studio",
    shortTitle: "Motion",
    slug: "motion-studio",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop",
    description: "Architectural and emotional storytelling delivered through absolute precision in lighting, grading, and editorial direction.",
    subServices: [
      {
        title: "Commercial Films",
        slug: "commercial-films",
        description: "High-impact narrative commercials designed for broadcast and premium digital placement.",
        features: ["Script to Screen", "Cinematography", "Talent Casting", "Full Post-Production"],
        image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2071&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Product Films",
        slug: "product-films",
        description: "Dynamic macro-cinematography showcasing product details, engineering, and luxury finish.",
        features: ["Motion Control", "Macro Lenses", "Dynamic Lighting", "3D Integration"],
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Brand Stories",
        slug: "brand-stories",
        description: "Documentary-style narratives that articulate brand ethos, heritage, and vision.",
        features: ["Interview Setup", "B-Roll Capture", "Narrative Arc", "Original Scoring"],
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Social Content",
        slug: "social-content",
        description: "Agile, trend-forward short-form video optimized for engagement across all social platforms.",
        features: ["Vertical Video", "Trend Adaptation", "Fast Turnaround", "Platform Native"],
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "TVCs",
        slug: "tvcs",
        description: "Television commercials produced at the highest industry standards for national and global campaigns.",
        features: ["Broadcast Standards", "Large Scale Sets", "VFX Supervision", "Audio Mixing"],
        image: "https://images.unsplash.com/photo-1535016120720-40c746a65652?q=80&w=2070&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Podcasts & Interviews",
        slug: "podcasts-interviews",
        description: "Multi-camera studio setups for premium video podcasts and executive interviews.",
        features: ["Multi-Cam Switching", "Acoustic Treatment", "Set Design", "Live Broadcasting"],
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2000&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Event Coverage",
        slug: "event-coverage",
        description: "Cinematic highlight reels capturing the energy, scale, and prestige of live events.",
        features: ["Roving Cameras", "Drone Coverage", "Same-Day Edit", "Keynote Recording"],
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Aerial Production",
        slug: "aerial-production",
        description: "Breathtaking drone cinematography providing expansive perspectives and dynamic tracking shots.",
        features: ["FPV Drones", "Heavy Lift Drones", "Licensed Pilots", "Cinematic Moves"],
        image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=2000&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Campaign Studio",
    shortTitle: "Campaign",
    slug: "campaign-studio",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop",
    description: "End-to-end campaign production, combining creative vision with meticulous execution to craft impactful brand moments.",
    subServices: [
      {
        title: "Creative Direction",
        slug: "creative-direction",
        description: "Visionary leadership defining the aesthetic, narrative, and strategic goal of the visual campaign.",
        features: ["Moodboards", "Concept Development", "Visual Identity", "Campaign Arc"],
        image: "https://images.unsplash.com/photo-1522542611704-502390b1574a?q=80&w=2000&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Campaign Production",
        slug: "campaign-production",
        description: "Comprehensive management of the end-to-end production pipeline for flawless execution.",
        features: ["Budgeting", "Scheduling", "Logistics", "Crew Assembly"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Art Direction",
        slug: "art-direction",
        description: "Translating creative concepts into physical realities through set design, props, and visual styling.",
        features: ["Set Construction", "Prop Sourcing", "Color Palette", "Visual Continuity"],
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Talent & Casting",
        slug: "talent-casting",
        description: "Sourcing and securing the perfect faces and personalities to embody the brand message.",
        features: ["Agency Liaison", "Street Casting", "Contract Negotiation", "Diversity & Inclusion"],
        image: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=2000&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Styling & Makeup",
        slug: "styling-makeup",
        description: "Top-tier wardrobe styling, hair, and makeup artistry to elevate the visual standard.",
        features: ["Wardrobe Sourcing", "Custom Tailoring", "SFX Makeup", "Look Conceptualization"],
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2000&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Set & Location",
        slug: "set-location",
        description: "Scouting, securing, and transforming locations to serve as the perfect backdrop.",
        features: ["Permit Procurement", "Location Scouting", "Set Building", "Studio Rental"],
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Production Management",
        slug: "production-management",
        description: "The logistical backbone ensuring on-set efficiency, safety, and adherence to creative vision.",
        features: ["Call Sheets", "Catering & Craft", "Risk Assessment", "On-Set Coordination"],
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2000&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Content Studio",
    shortTitle: "Content",
    slug: "content-studio",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    description: "Agile, narrative-driven content creation designed to perform across all modern digital platforms and marketplaces.",
    subServices: [
      {
        title: "Social Media",
        slug: "social-media",
        description: "Bespoke visual content optimized for native platform algorithms and audience engagement.",
        features: ["Reels & TikToks", "Carousel Posts", "Grid Aesthetics", "Community Engagement"],
        image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2000&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "E-Commerce",
        slug: "ecommerce",
        description: "High-volume, high-quality product imagery designed to maximize conversion rates.",
        features: ["White Background", "360 Spin", "Detail Macros", "Contextual Lifestyle"],
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2000&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Marketplace",
        slug: "marketplace",
        description: "Content tailored to comply with and excel on major marketplaces like Amazon and Shopify.",
        features: ["A+ Content", "Infographics", "Listing Videos", "Compliance Checks"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Launch Campaigns",
        slug: "launch-campaigns",
        description: "High-impact, rapid-deployment content packages designed to generate buzz for new releases.",
        features: ["Teaser Videos", "Countdown Graphics", "Influencer Kits", "Press Kits"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "UGC",
        slug: "ugc",
        description: "Authentic, user-generated style content curated and produced to build brand trust.",
        features: ["Creator Briefs", "Lo-Fi Production", "Testimonials", "Unboxing"],
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2000&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Performance Creatives",
        slug: "performance-creatives",
        description: "Data-driven ad creatives designed specifically for paid media acquisition and retargeting.",
        features: ["A/B Testing Variants", "Hook Variations", "CTA Optimization", "Direct Response"],
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2000&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Content Strategy",
        slug: "content-strategy",
        description: "Strategic roadmapping of visual assets to align with marketing calendars and brand goals.",
        features: ["Asset Mapping", "Platform Distribution", "Content Pillars", "Performance Analysis"],
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Post Studio",
    shortTitle: "Post",
    slug: "post-studio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
    description: "World-class finishing, retouching, and VFX, utilizing masterful studio control to isolate and elevate every frame.",
    subServices: [
      {
        title: "Image Finishing",
        slug: "image-finishing",
        description: "High-end retouching, color grading, and compositing to perfect every single pixel.",
        features: ["Skin Retouching", "Frequency Separation", "Color Matching", "Background Cleanup"],
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Video Finishing",
        slug: "video-finishing",
        description: "Editorial mastering, online editing, and final delivery formatting for all screens.",
        features: ["Conforming", "QC (Quality Control)", "Mastering", "Version Rendering"],
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2000&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Motion Design",
        slug: "motion-design",
        description: "Kinetic typography, 2D/3D animation, and graphic integration to bring static elements to life.",
        features: ["Title Sequences", "Logo Animation", "Explainer Graphics", "UI Mockups"],
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Color & Audio",
        slug: "color-audio",
        description: "Cinematic color grading (DI) and immersive audio mixing to enhance emotional impact.",
        features: ["HDR Grading", "Look Development", "Sound Design", "Audio Mixing"],
        image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Compositing & VFX",
        slug: "compositing-vfx",
        description: "Seamless integration of computer-generated elements and invisible visual effects.",
        features: ["Green Screen Extraction", "Rotoscoping", "Object Removal", "3D Tracking"],
        image: "https://images.unsplash.com/photo-1633519803138-0248f7626cf8?q=80&w=2000&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        title: "Asset Delivery",
        slug: "asset-delivery",
        description: "Structured, secure, and rapid deployment of all final assets across required formats.",
        features: ["DAM Integration", "Archiving", "Format Transcoding", "Secure Transfer"],
        image: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=2000&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1000&auto=format&fit=crop"
        ]
      }
    ]
  }
];
