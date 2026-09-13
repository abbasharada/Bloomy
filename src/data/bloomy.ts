export const WHATSAPP_NUMBER = '2348093938844';
export const PHONE_DISPLAY = '0809 393 8844';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WA_MESSAGE =
  'Hello Bloomy Drinks! I would like to place an order / inquire about event catering for my event.';

export interface DrinkProduct {
  id: string;
  name: string;
  hausaName?: string;
  tagline: string;
  description: string;
  image: string;
  priceFrom: string;
  sizes: string[];
  ingredients: string[];
  healthBenefits: string[];
  tasteNotes: string;
  accentColor: string;
  badge?: string;
}

export const DRINKS: DrinkProduct[] = [
  {
    id: 'zobo',
    name: '100% Natural Zobo',
    hausaName: 'Zobo',
    tagline: 'Signature Hibiscus Blend',
    description:
      'Our flagship drink — rich, ruby-red hibiscus infused with ginger, pineapple rind and a whisper of natural sweetness. The authentic Naija classic, perfected.',
    image:
      'https://images.pexels.com/photos/33284162/pexels-photo-33284162.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    priceFrom: '₦500',
    sizes: ['35cl', '50cl', '1 Litre'],
    ingredients: ['Hibiscus', 'Ginger', 'Pineapple', 'Natural Sweetener'],
    healthBenefits: ['Rich in antioxidants', 'Supports heart health', 'Natural vitamin C'],
    tasteNotes: 'Tangy · Rich · Refreshing',
    accentColor: 'hibiscus',
    badge: 'Bestseller',
  },
  {
    id: 'ginger-lemonade',
    name: 'Ginger-Lemonade',
    tagline: 'Zesty & Refreshing',
    description:
      'A bold, fiery kick of fresh ginger balanced with tangy lemon and a cooling finish. The perfect pick-me-up for Kano heat.',
    image:
      'https://images.pexels.com/photos/6542756/pexels-photo-6542756.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    priceFrom: '₦600',
    sizes: ['35cl', '50cl', '1 Litre'],
    ingredients: ['Fresh Ginger', 'Lemon', 'Mint', 'Natural Sweetener'],
    healthBenefits: ['Boosts immunity', 'Aids digestion', 'Anti-inflammatory'],
    tasteNotes: 'Zesty · Spicy · Cooling',
    accentColor: 'gold',
  },
  {
    id: 'watermelon-refresh',
    name: 'Watermelon Refresh',
    tagline: 'Natural Fruit Hydration',
    description:
      'Cold-pressed watermelon with a squeeze of lime and fresh mint leaves. Pure, hydrating goodness in every sip.',
    image:
      'https://images.pexels.com/photos/11009203/pexels-photo-11009203.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    priceFrom: '₦700',
    sizes: ['35cl', '50cl', '1 Litre'],
    ingredients: ['Watermelon', 'Lime', 'Fresh Mint'],
    healthBenefits: ['Excellent hydration', 'Rich in lycopene', 'Natural electrolytes'],
    tasteNotes: 'Sweet · Hydrating · Crisp',
    accentColor: 'ruby',
  },
  {
    id: 'natures-tango',
    name: "Nature's Tango",
    tagline: 'Exotic Fruit Fusion',
    description:
      'A vibrant dance of tropical fruits — mango, pineapple and a hint of cucumber for a clean, exotic finish. Our most adventurous blend.',
    image:
      'https://images.pexels.com/photos/8771964/pexels-photo-8771964.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    priceFrom: '₦800',
    sizes: ['35cl', '50cl', '1 Litre'],
    ingredients: ['Mango', 'Pineapple', 'Cucumber', 'Lime'],
    healthBenefits: ['Vitamin A & C boost', 'Supports skin health', 'Natural hydration'],
    tasteNotes: 'Tropical · Exotic · Clean',
    accentColor: 'emerald',
    badge: 'New',
  },
  {
    id: 'hibiscus-fusion',
    name: 'Hibiscus Fusion',
    tagline: 'Bold Floral Infusion',
    description:
      'A deeper, more intense hibiscus experience blended with rosehips and a hint of clove. A sophisticated, floral twist on the classic Zobo.',
    image:
      'https://images.pexels.com/photos/34467117/pexels-photo-34467117.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    priceFrom: '₦700',
    sizes: ['35cl', '50cl', '1 Litre'],
    ingredients: ['Hibiscus', 'Rosehips', 'Clove', 'Natural Sweetener'],
    healthBenefits: ['Lowers blood pressure', 'Rich in antioxidants', 'Supports liver health'],
    tasteNotes: 'Floral · Bold · Aromatic',
    accentColor: 'hibiscus',
    badge: 'Premium',
  },
  {
    id: 'spiced-lemonade',
    name: 'Spiced Lemonade',
    tagline: 'Warm Citrus Kick',
    description:
      'Fresh lemonade infused with a warming blend of local spices — chili, ginger and a touch of honey. An energising, bold twist on a classic.',
    image:
      'https://images.pexels.com/photos/8042740/pexels-photo-8042740.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    priceFrom: '₦650',
    sizes: ['35cl', '50cl', '1 Litre'],
    ingredients: ['Lemon', 'Chili', 'Ginger', 'Honey'],
    healthBenefits: ['Metabolism boost', 'Vitamin C rich', 'Natural energy'],
    tasteNotes: 'Spicy · Citrus · Energising',
    accentColor: 'gold',
  },
];

export interface CateringService {
  icon: string;
  title: string;
  hausaTitle: string;
  description: string;
}

export const CATERING_SERVICES: CateringService[] = [
  {
    icon: 'ring',
    title: 'Wedding Ceremonies & Receptions',
    hausaTitle: 'Taron Biki',
    description:
      'Premium customised bottle packages, chilled setup, and bulk supply for your big day. Make every toast unforgettable.',
  },
  {
    icon: 'baby',
    title: 'Naming Ceremonies',
    hausaTitle: 'Taron Suna',
    description:
      'Celebrate new life with pure, natural refreshments. Custom labels and bulk packages for family and guests.',
  },
  {
    icon: 'mosque',
    title: 'Religious Celebrations & Receptions',
    hausaTitle: 'Taron Walima',
    description:
      'Honour your walima with hygienically-prepared, premium drinks delivered on time, every time.',
  },
  {
    icon: 'book',
    title: 'Quranic Graduation Ceremonies',
    hausaTitle: 'Taron Sauka',
    description:
      'Mark this blessed milestone with refreshing, natural drinks your guests will rave about.',
  },
  {
    icon: 'building',
    title: 'Corporate Events',
    hausaTitle: 'Taron Kamfanoni',
    description:
      'Professional bulk supply for conferences, seminars, retreats and corporate gatherings across Kano.',
  },
  {
    icon: 'party',
    title: 'Private & VIP Parties',
    hausaTitle: 'Taron Kida',
    description:
      'Birthdays, VIP gatherings and private celebrations — premium drinks, delivered ice-cold to your venue.',
  },
];

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  event?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Aisha Mohammed',
    location: 'Nassarawa, Kano',
    rating: 5,
    text: 'The Zobo at my wedding was the talk of the town! Guests kept asking who made the drinks. Bloomy delivered chilled and on time. Absolutely premium!',
    event: 'Taron Biki',
  },
  {
    name: 'Ibrahim Yusuf',
    location: 'GRA, Kano',
    rating: 5,
    text: "I've tasted many Zobo drinks in Kano, but Bloomy's is on another level. You can taste the quality and freshness. The Ginger-Lemonade is my go-to.",
  },
  {
    name: 'Fatima Abdullahi',
    location: 'Tudun Wada, Kano',
    rating: 5,
    text: 'We ordered for my daughter\'s Suna ceremony — over 200 bottles. Everything was perfectly packaged, ice-cold, and the taste was unmatched. Highly recommended!',
    event: 'Taron Suna',
  },
  {
    name: 'Sani Abubakar',
    location: 'Bompai, Kano',
    rating: 5,
    text: 'Their catering service is top-notch. Professional, punctual, and the drinks are 100% natural — you can tell the difference. Bloomy is our go-to for every event.',
    event: 'Corporate Event',
  },
  {
    name: 'Zainab Bello',
    location: 'Hotoro, Kano',
    rating: 5,
    text: "Nature's Tango blew my mind! The fruit fusion is so exotic and refreshing. I order weekly for my family. Best natural drinks in Kano, hands down.",
  },
  {
    name: 'Musa Ibrahim',
    location: 'Zaria Road, Kano',
    rating: 5,
    text: 'Ordered for our Walima — 300+ guests and not one complaint. Every bottle was perfect. The custom labels added such a premium touch. Thank you Bloomy!',
    event: 'Taron Walima',
  },
];

export const TRUST_BADGES = [
  {
    icon: 'leaf',
    title: '100% Natural & Preservative-Free',
    description: 'Made with real fruit, herbs and natural ingredients. No artificial preservatives, ever.',
  },
  {
    icon: 'shield',
    title: 'Ultra-Hygienic Production',
    description: 'Every batch is prepared in a clean, sanitised environment with strict food safety standards.',
  },
  {
    icon: 'truck',
    title: 'Ice-Cold Delivery Across Kano',
    description: 'Chilled setup and on-time delivery to your door or event venue anywhere in Kano and surrounds.',
  },
  {
    icon: 'heart',
    title: 'Authentic Nigerian Flavours',
    description: 'Rooted in Naija tradition, crafted to world-class standards. Taste the difference in every sip.',
  },
];

export const EVENT_TYPES = [
  'Taron Biki (Wedding)',
  'Taron Suna (Naming Ceremony)',
  'Taron Walima (Religious Celebration)',
  'Taron Sauka (Quranic Graduation)',
  'Corporate Event',
  'Birthday Party',
  'Other',
];
