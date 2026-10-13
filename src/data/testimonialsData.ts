export interface TestimonialItem {
  id: string;
  clientName: string;
  eventTitle: string;
  eventType: string;
  location: "Chittoor" | "Tirupati" | "Vellore" | "Bengaluru";
  date: string;
  rating: number; // 1-5
  reviewText: string;
  verified: boolean;
  avatarText?: string;
  eventImage?: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    clientName: "Anand & Divya Reddy",
    eventTitle: "Grand Temple Wedding & Reception",
    eventType: "Luxury Wedding Planning & Mandap Decor",
    location: "Tirupati",
    date: "November 2024",
    rating: 5,
    reviewText: "VSM Events transformed our wedding into an absolute fairy tale. From the sacred temple mandap early in the morning to the grand reception with 1,200 guests in Tirupati, their team worked tirelessly. The floral arrangements were fresh, grand, and beyond our expectations. Every relative praised the elegance.",
    verified: true,
    avatarText: "AD"
  },
  {
    id: "test-2",
    clientName: "Senthil & Meera Rajan",
    eventTitle: "Traditional Sangeet & Reception Gala",
    eventType: "Wedding Stage & Reception Decorations",
    location: "Vellore",
    date: "January 2025",
    rating: 5,
    reviewText: "We wanted a decor that honoured traditional Tamil heritage while having modern lighting for our evening reception at GRT Grand Vellore. The VSM Events team understood our brief instantly. Transparent quotation, zero hidden surprises, and flawless on-time delivery. Highly recommended!",
    verified: true,
    avatarText: "SM"
  },
  {
    id: "test-3",
    clientName: "K. Murali Mohan & Family",
    eventTitle: "Daughter's Grand Haldi & Wedding Ceremony",
    eventType: "Complete Event Management & Haldi Decor",
    location: "Chittoor",
    date: "December 2024",
    rating: 5,
    reviewText: "Having known VSM Events in Chittoor for years, trusting them with my daughter's wedding was the easiest decision. Their team coordinated everything — hospitality, stage fabrication, brass uruli setups, and guest coordination. As parents, we were completely free to enjoy our daughter's special day.",
    verified: true,
    avatarText: "KM"
  },
  {
    id: "test-4",
    clientName: "Vikram & Sneha Hegde",
    eventTitle: "1st Birthday Magical Dreamland & Gala Dinner",
    eventType: "Birthday Party Planning & Theme Decor",
    location: "Bengaluru",
    date: "February 2025",
    rating: 5,
    reviewText: "For our son's first birthday at a boutique resort in Bangalore, VSM Events designed an enchanted kingdom setup. The balloon artistry, custom 3D castle, and lighting were magazine-worthy. All our guests were amazed by the attention to detail and gentle coordination.",
    verified: true,
    avatarText: "VS"
  },
  {
    id: "test-5",
    clientName: "Praveen Kumar Naidu",
    eventTitle: "Parents' 50th Golden Jubilee Anniversary",
    eventType: "Anniversary Celebrations & Floral Setup",
    location: "Tirupati",
    date: "October 2024",
    rating: 5,
    reviewText: "The nostalgic memory walkway and golden floral mandap created for my parents' 50th anniversary brought tears of joy to their eyes. VSM Events treats every celebration with personal care and cultural reverence. Truly the most reliable event planners in the region.",
    verified: true,
    avatarText: "PK"
  }
];
