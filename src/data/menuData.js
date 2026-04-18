import coffeeCategoryImg from '../assets/images/coffee-category.png'
import drinksCategoryImg from '../assets/images/drinks-category.png'
import burgerCategoryImg from '../assets/images/burger-category.png'
import shawarmaCategoryImg from '../assets/images/shawarma-category.png'
import gallery1 from '../assets/images/gallery-1.png'
import gallery2 from '../assets/images/gallery-2.png'
import gallery3 from '../assets/images/gallery-3.png'
import gallery4 from '../assets/images/gallery-4.png'
import gallery5 from '../assets/images/gallery-5.png'
import gallery6 from '../assets/images/gallery-6.png'

export const categories = [
  {
    id: 'coffee',
    name: 'Coffee & Espresso',
    image: coffeeCategoryImg,
    description: 'Handcrafted specialty brews',
  },
  {
    id: 'cold-drinks',
    name: 'Cold Drinks',
    image: drinksCategoryImg,
    description: 'Refreshing mocktails & smoothies',
  },
  {
    id: 'burgers',
    name: 'Burgers & Rolls',
    image: burgerCategoryImg,
    description: 'Artisan gourmet creations',
  },
  {
    id: 'shawarma',
    name: 'Shawarma & Wraps',
    image: shawarmaCategoryImg,
    description: 'Mediterranean flavors perfected',
  },
]

export const menuItems = [
  // Coffee & Espresso
  {
    id: 1,
    name: 'Classic Espresso',
    description: 'Rich, bold double shot pulled from single-origin Ethiopian beans with a velvety crema finish.',
    price: 3.50,
    category: 'coffee',
    bestseller: true,
  },
  {
    id: 2,
    name: 'Vanilla Oat Latte',
    description: 'Creamy oat milk steamed to perfection, layered with house-made vanilla syrup and espresso.',
    price: 5.25,
    category: 'coffee',
    bestseller: true,
  },
  {
    id: 3,
    name: 'Caramel Cappuccino',
    description: 'Frothy cappuccino crowned with artisan caramel drizzle and a dusting of cocoa.',
    price: 5.50,
    category: 'coffee',
    bestseller: false,
  },
  {
    id: 4,
    name: 'Cold Brew Reserve',
    description: 'Slow-steeped for 18 hours, served over hand-cut ice with a touch of raw honey.',
    price: 4.75,
    category: 'coffee',
    bestseller: true,
  },
  {
    id: 5,
    name: 'Mocha Velvet',
    description: 'Belgian dark chocolate blended with double espresso and topped with whipped cream.',
    price: 5.75,
    category: 'coffee',
    bestseller: false,
  },
  {
    id: 6,
    name: 'Flat White',
    description: 'Micro-foamed milk meets a ristretto shot for a silky, intense coffee experience.',
    price: 4.50,
    category: 'coffee',
    bestseller: false,
  },
  {
    id: 7,
    name: 'Affogato',
    description: 'A scoop of house-made vanilla gelato drowned in a fresh shot of hot espresso.',
    price: 6.00,
    category: 'coffee',
    bestseller: false,
  },
  {
    id: 8,
    name: 'Iced Americano',
    description: 'Chilled double espresso extended with filtered water over crystal-clear ice.',
    price: 3.75,
    category: 'coffee',
    bestseller: false,
  },

  // Cold Drinks
  {
    id: 9,
    name: 'Berry Bliss Smoothie',
    description: 'Blueberries, strawberries, and açaí blended with Greek yogurt and a drizzle of agave.',
    price: 6.50,
    category: 'cold-drinks',
    bestseller: true,
  },
  {
    id: 10,
    name: 'Mango Sunset Mocktail',
    description: 'Fresh mango purée layered with passion fruit syrup, sparkling water, and lime.',
    price: 5.75,
    category: 'cold-drinks',
    bestseller: true,
  },
  {
    id: 11,
    name: 'Green Detox Juice',
    description: 'Cold-pressed kale, cucumber, green apple, ginger, and a splash of lemon.',
    price: 6.00,
    category: 'cold-drinks',
    bestseller: false,
  },
  {
    id: 12,
    name: 'Tropical Paradise',
    description: 'Pineapple, coconut cream, and banana blended into a creamy island escape.',
    price: 6.25,
    category: 'cold-drinks',
    bestseller: false,
  },
  {
    id: 13,
    name: 'Lavender Lemonade',
    description: 'House-made lavender syrup swirled into fresh-squeezed lemonade with edible flowers.',
    price: 5.50,
    category: 'cold-drinks',
    bestseller: false,
  },
  {
    id: 14,
    name: 'Watermelon Mint Cooler',
    description: 'Freshly pressed watermelon with muddled mint and a hint of lime zest.',
    price: 5.25,
    category: 'cold-drinks',
    bestseller: false,
  },

  // Sandwiches
  {
    id: 15,
    name: 'Grilled Chicken Panini',
    description: 'Herb-marinated chicken breast with sun-dried tomatoes, mozzarella, and basil pesto on ciabatta.',
    price: 9.50,
    category: 'sandwiches',
    bestseller: true,
  },
  {
    id: 16,
    name: 'Smoked Salmon Croissant',
    description: 'Norwegian smoked salmon with cream cheese, capers, red onion, and fresh dill on a butter croissant.',
    price: 10.75,
    category: 'sandwiches',
    bestseller: false,
  },
  {
    id: 17,
    name: 'Avocado & Egg Club',
    description: 'Smashed avocado, poached egg, crispy turkey bacon, and arugula on toasted sourdough.',
    price: 9.75,
    category: 'sandwiches',
    bestseller: true,
  },
  {
    id: 18,
    name: 'Caprese Baguette',
    description: 'Fresh buffalo mozzarella, heirloom tomatoes, and basil with aged balsamic glaze.',
    price: 8.50,
    category: 'sandwiches',
    bestseller: false,
  },
  {
    id: 19,
    name: 'Turkey & Brie Wrap',
    description: 'Roasted turkey, creamy brie, cranberry compote, and mixed greens in a spinach tortilla.',
    price: 9.25,
    category: 'sandwiches',
    bestseller: false,
  },

  // Shawarma & Wraps
  {
    id: 20,
    name: 'Classic Chicken Shawarma',
    description: 'Slow-roasted marinated chicken with garlic toum, pickled turnips, and fresh veggies in warm pita.',
    price: 8.75,
    category: 'shawarma',
    bestseller: true,
  },
  {
    id: 21,
    name: 'Spicy Lamb Shawarma',
    description: 'Tender spiced lamb carved fresh, wrapped with tahini sauce, sumac onions, and parsley.',
    price: 10.25,
    category: 'shawarma',
    bestseller: true,
  },
  {
    id: 22,
    name: 'Falafel Wrap',
    description: 'Crispy house-made falafel with hummus, tabbouleh, and tangy pickled vegetables.',
    price: 7.50,
    category: 'shawarma',
    bestseller: false,
  },
  {
    id: 23,
    name: 'Mixed Grill Platter',
    description: 'Chicken and lamb shawarma served with saffron rice, fattoush salad, and garlic sauce.',
    price: 14.50,
    category: 'shawarma',
    bestseller: false,
  },
  {
    id: 24,
    name: 'Halloumi & Veggie Wrap',
    description: 'Grilled halloumi cheese with roasted peppers, hummus, and za\'atar-seasoned vegetables.',
    price: 8.25,
    category: 'shawarma',
    bestseller: false,
  },

  // Burgers & Rolls
  {
    id: 25,
    name: 'The Grove Signature Burger',
    description: 'Wagyu beef patty, aged cheddar, caramelized onions, truffle aioli on a brioche bun.',
    price: 13.50,
    category: 'burgers',
    bestseller: true,
  },
  {
    id: 26,
    name: 'Smoky BBQ Chicken Burger',
    description: 'Crispy buttermilk chicken with house smoky BBQ sauce, coleslaw, and jalapeño pickles.',
    price: 11.25,
    category: 'burgers',
    bestseller: true,
  },
  {
    id: 27,
    name: 'Mushroom Swiss Burger',
    description: 'Grilled Angus beef topped with sautéed wild mushrooms and melted Gruyère cheese.',
    price: 12.75,
    category: 'burgers',
    bestseller: false,
  },
  {
    id: 28,
    name: 'Spicy Chicken Roll',
    description: 'Crispy fried chicken strips with sriracha mayo, pickled slaw, and lettuce in a soft roll.',
    price: 8.50,
    category: 'burgers',
    bestseller: false,
  },
  {
    id: 29,
    name: 'Beyond Green Burger',
    description: 'Plant-based patty with avocado, sprouts, vegan cheese, and herb-garlic aioli.',
    price: 11.50,
    category: 'burgers',
    bestseller: false,
  },
  {
    id: 30,
    name: 'Classic Cheeseburger',
    description: 'Juicy beef patty, American cheese, fresh lettuce, tomato, pickles, and our secret sauce.',
    price: 9.75,
    category: 'burgers',
    bestseller: false,
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Food Blogger',
    text: 'The Grove Bistro redefines what a café can be. Every cup of coffee feels like a crafted masterpiece, and the ambiance is simply unmatched. This is my happy place.',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Anderson',
    role: 'Regular Customer',
    text: 'From the signature burger to their cold brew, everything here speaks quality. The vintage décor and warm lighting make every visit feel like a special occasion.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Interior Designer',
    text: 'I come for the shawarma and stay for the atmosphere. The Grove has nailed the perfect blend of modern comfort and old-world charm. Truly a gem in the city.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Chen',
    role: 'Coffee Enthusiast',
    text: 'As someone who takes coffee seriously, The Grove Bistro exceeds expectations. Their single-origin espresso is outstanding, and the oat latte is the best I\'ve ever had.',
    rating: 5,
  },
]

export const galleryImages = [
  { id: 1, src: gallery1, alt: 'Elegant breakfast spread with cappuccino and pastries' },
  { id: 2, src: gallery2, alt: 'Perfect espresso being crafted' },
  { id: 3, src: gallery3, alt: 'Artisan sandwich platter' },
  { id: 4, src: gallery4, alt: 'Tropical mocktail with fresh fruit garnish' },
  { id: 5, src: gallery5, alt: 'Gourmet shawarma platter' },
  { id: 6, src: gallery6, alt: 'Artisan chocolate dessert with gold leaf' },
]

export const teamMembers = [
  {
    id: 1,
    name: 'Marcus Rivera',
    role: 'Head Chef',
    bio: 'With 15 years in fine dining, Marcus brings creativity and precision to every dish at The Grove.',
  },
  {
    id: 2,
    name: 'Elena Vasquez',
    role: 'Head Barista',
    bio: 'A certified Q-grader, Elena sources and roasts our beans to deliver the perfect cup every time.',
  },
  {
    id: 3,
    name: 'Omar Khalil',
    role: 'Pastry Chef',
    bio: 'Trained in Paris, Omar crafts our pastries and desserts with an artistic touch and impeccable flavor.',
  },
]
