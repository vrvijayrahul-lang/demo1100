export interface GalleryItem {
  id: string;
  title: string;
  category: "Wedding Stages" | "Floral Mandaps" | "Reception Setups" | "Birthday Themes" | "Traditional Decor";
  location: "Chittoor" | "Tirupati" | "Vellore" | "Bengaluru";
  image: string;
  thumbnail: string;
  aspectRatio: "tall" | "wide" | "square";
  description: string;
}

export const galleryCategories = [
  "All",
  "Wedding Stages",
  "Floral Mandaps",
  "Reception Setups",
  "Birthday Themes",
  "Traditional Decor"
] as const;

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Grand Royal Temple Mandap with Golden Gopuram",
    category: "Floral Mandaps",
    location: "Tirupati",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=75",
    aspectRatio: "tall",
    description: "Carved gold temple pillar mandap adorned with 10,000 fresh white tuberose and orange marigold garlands for a traditional Telugu wedding in Tirupati."
  },
  {
    id: "gal-2",
    title: "Celestial Chandelier & Mirror Reception Runway",
    category: "Reception Setups",
    location: "Bengaluru",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=75",
    aspectRatio: "wide",
    description: "Opulent evening reception setup featuring 24 suspended crystal chandeliers, mirrored stage walkway, and deep burgundy rose runners."
  },
  {
    id: "gal-3",
    title: "Traditional South Indian Brass Uruli & Marigold Court",
    category: "Traditional Decor",
    location: "Chittoor",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=75",
    aspectRatio: "square",
    description: "Authentic Chittoor heritage estate courtyard transformed with brass Kuthuvilakkus, fresh jasmine curtains, and yellow marigold carpet."
  },
  {
    id: "gal-4",
    title: "Enchanted Fairytale 1st Birthday Castle",
    category: "Birthday Themes",
    location: "Bengaluru",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=75",
    aspectRatio: "tall",
    description: "Pastel blush and gold organic balloon cloud with handcrafted 3D storybook castle backdrop and personalized neon monogram."
  },
  {
    id: "gal-5",
    title: "Romantic Rose Gold & Ivory Wedding Stage",
    category: "Wedding Stages",
    location: "Vellore",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=75",
    aspectRatio: "wide",
    description: "Sweeping 50-foot floral stage with hand-pleated champagne silk drapes, warm pendant lights, and blush hydrangea installations."
  },
  {
    id: "gal-6",
    title: "Exotic Orchid & Lotus Kund Mandap Architecture",
    category: "Floral Mandaps",
    location: "Tirupati",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600&q=75",
    aspectRatio: "tall",
    description: "Circular Vedic havan mandap framed with imported pink Thai orchids, Madurai jasmine loops, and sacred brass bell pillars."
  },
  {
    id: "gal-7",
    title: "Royal Rajputana Sangeet & Reception Staging",
    category: "Reception Setups",
    location: "Bengaluru",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=75",
    aspectRatio: "wide",
    description: "Dramatic evening banquet and entertainment stage featuring multi-level LED trussing, velvet bolster lounges, and golden jaali screens."
  },
  {
    id: "gal-8",
    title: "Vibrant Haldi Ceremony with Floral Swing (Jhoola)",
    category: "Traditional Decor",
    location: "Chittoor",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=75",
    aspectRatio: "square",
    description: "Sun-drenched outdoor celebration with a custom wooden floral swing garlanded in yellow marigolds, sunshade drapes, and heritage brass pots."
  },
  {
    id: "gal-9",
    title: "Gilded Floral Archway & Ring Ceremony Stage",
    category: "Wedding Stages",
    location: "Vellore",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=75",
    aspectRatio: "tall",
    description: "Curved golden arch framing an intimate ring exchange, lit by warm Edison festoon bulbs and floating candle cylinders."
  },
  {
    id: "gal-10",
    title: "Jungle Safari Adventure 5th Birthday Wonderland",
    category: "Birthday Themes",
    location: "Chittoor",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=600&q=75",
    aspectRatio: "wide",
    description: "Life-sized fiberglass animal figures, canopy foliage, timber dessert carts, and custom interactive explorer photo zones."
  },
  {
    id: "gal-11",
    title: "Luminous Starlight Canopy for Grand Ballroom Reception",
    category: "Reception Setups",
    location: "Bengaluru",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=600&q=75",
    aspectRatio: "square",
    description: "Thousands of warm micro-LED fairy lights cascading across the ballroom ceiling, mimicking a star-filled evening sky."
  },
  {
    id: "gal-12",
    title: "Divine Heritage Seemantham & Cradle Celebration",
    category: "Traditional Decor",
    location: "Tirupati",
    image: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?auto=format&fit=crop&w=600&q=75",
    aspectRatio: "tall",
    description: "Traditional baby shower mandap with coconut leaf and banana stem entryway, pure bronze uruli with floating lotus blooms, and floral cradle."
  }
];
