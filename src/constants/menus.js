import { image } from "framer-motion/client"

export const menuData = {
  tea: {
    title: "Tea & Coffee",
    image: "/menu/tea.jpeg",
    subcategories: {
      hotCoffee: {
        title: "Hot Coffee",
        items: [
          { name: "Espresso Single", price: 200, description: null, },
          { name: "Espresso Double", price: 250, description: null, },
          { name: "Cappuccino Single", price: 250, description: null, },
          { name: "Cappuccino Double", price: 300, description: null, },
          { name: "Cafe Latte Single", price: 200, description: null, },
          { name: "Cafe Latte Double", price: 300, description: null, },
          { name: "Latte Macchiato Single", price: 200, description: null, },
          { name: "Latte Macchiato Double", price: 300, description: null, },
          { name: "Espresso Macchiato Single", price: 200, description: null, },
          { name: "Espresso Macchiato Double", price: 300, description: null, },
          { name: "Caramel Macchiato", price: 300, description: null, },
          { name: "Americano / Long Black", price: 200, description: null, },
          { name: "Espresso Con Panna", price: 300, description: null, },
          { name: "Espresso Affogato", price: 300, description: null, },
          { name: "Black Coffee", price: 200, description: null, },
          { name: "Lemon Coffee", price: 200, description: null, },
          { name: "White Coffee", price: 200, description: null, },
        ],
      },
      coldCoffee: {
        title: "Cold Coffee",
        items: [
          { name: "Iced Americano", price: 300, description: null, },
          { name: "Iced Coffee", price: 300, description: null, },
          { name: "Iced Latte", price: 300, description: null, },
          { name: "Iced Mocha", price: 300, description: null, },
        ],
      },
      hotBeverages: {
        title: "Hot Beverages",
        items: [
          { name: "Milk Pot", price: 200, description: null, },
          { name: "Chai Latte", price: 200, description: null, },
          { name: "African Mixed Tea", price: 150, description: null, },
          { name: "Special Tea", price: 200, description: null, },
          { name: "Lactose Free Tea", price: 250, description: null, },
          { name: "English Tea", price: 200, description: null, },
          { name: "Black Tea", price: 100, description: null, },
          { name: "African Masala Tea", price: 200, description: null, },
          { name: "Lemon Tea", price: 200, description: null, },
          { name: "Fresh Ginger Water", price: 100, description: null, },
          { name: "Lemon Water", price: 200, description: null, },
          { name: "Ginger Dawa", price: 200, description: null, },
          { name: "Hot Chocolate", price: 200, description: null, },
          { name: "Milo", price: 200, description: null, },
        ],
      },
      coldTea: {
        title: "Cold Tea",
        items: [
          { name: "Iced Passion Tea", price: 200, description: null, },
          { name: "Iced Tea", price: 200, description: null, },
          { name: "Iced Lemon Tea", price: 200, description: null, },
        ],
      },
      herbalTea: {
        title: "Herbal Tea",
        items: [
          { name: "Hibiscus Tea", price: 250, description: null, },
          { name: "Camomile Tea", price: 250, description: null, },
          { name: "Mint Tea", price: 250, description: null, },
          { name: "Ginger Tea", price: 250, description: null, },
        ],
      },
    },
  },
  snacks: {
    title: "Snacks",
    image: "/menu/snacks.png",
    items: [
      { name: "Beef Samosa", price: 100, description: null },
      { name: "Special Samosa", price: 350, description: null, },
      { name: "Chicken Samosa", price: 100, description: null },
      { name: "Andazi", price: 60, description: null, },
      { name: "Honey-Glazed Pancakes [3pcs]", price: 200, description: null, },
      { name: "Waffles", price: 150, description: null, },
      { name: "White Chapati", price: 100, description: null, },
      { name: "Brown Chapati", price: 100, description: null, },
      { name: "2 Eggs Fried on a Toast", price: 200, description: null, },
      { name: "2 Eggs Scrambled on a Toast", price: 200, description: null, },
      { name: "Spanish Omelette", price: 300, description: null, },
      { name: "Chinese Omelette", price: 400, description: null, },
      { name: "Vegetable Omelette", price: 200, description: null, },
      { name: "French Toast", price: 200, description: null, },
      { name: "Beef Kebab", price: 250, description: null, },
      { name: "2 Sausages", price: 200, description: null, },
      { name: "Sausage Roll", price: 200, description: null, },
      { name: "Special Beef Sausage", price: 350, description: null, },
      { name: "Choma Sausage", price: 200, description: null, },
      { name: "Doughnut", price: 100, description: null, },
      { name: "White Toast [3 pcs]", price: 100, description: null, },
      { name: "Brown Toast [3 pcs]", price: 100, description: null, },
    ],
  },
  desserts: {
    title: "Desserts",
    image: "/menu/desserts.jpg",
    subcategories: {
      iceCreams: {
        title: "Ice Creams",
        items: [
          { name: "Vanilla Ice Cream", price: 200, description: null, },
          { name: "Chocolate Ice Cream", price: 200, description: null, },
          { name: "Strawberry Ice Cream", price: 200, description: null, },
        ],
      },
      omegaShakes: {
        title: "Omega Shakes",
        items: [
          {
            name: "Very Vanilla",
            price: 550,
            description: "Vanilla Ice Cream, Cold Milk, Topped with Whipped Cream",
          },
          {
            name: "Strawberry Shakes",
            price: 550,
            description: "Strawberry Ice Cream, Fresh Strawberries, Cold Fresh Milk",
          },
          {
            name: "Omega Wonder",
            price: 550,
            description: "Strawberry Ice Cream, Pineapple Cuttings, Fresh Banana, Mango Cuttings",
          },
          {
            name: "Rich Chocolate",
            price: 550,
            description: "Chocolate Ice Cream, Dark Chocolate",
          },
          {
            name: "Neapolitan Shake",
            price: 550,
            description: "Vanilla, Strawberry, Chocolate, Cold Milk",
          },
          {
            name: "Easy Oreo Shake",
            price: 450,
            description: "Oreo Cookies, Chocolate Ice Cream, Vanilla Ice Cream, Skim Milk (Small Glass)",
          },
          {
            name: "Easy Oreo Shake (Jumbo Glass)",
            price: 550,
            description: "Oreo Cookies, Chocolate Ice Cream, Vanilla Ice Cream, Skim Milk (Jumbo Glass)",
          },
        ],
      },
      pastries: {
        title: "Pastries",
        items: [
          { name: "Black Forest", price: 300, description: null, },
          { name: "White Forest", price: 300, description: null, },
          { name: "Marble Cake", price: 250, description: null, },
          { name: "Vanilla Cake", price: 250, description: null, },
          { name: "Red Velvet", price: 300, description: null, },
          { name: "Meat Pie", price: 200, description: null, },
          { name: "Beef Pie", price: 200, description: null, },
          { name: "Vanilla Muffin", price: 100, description: null, },
          { name: "Chocolate Muffin", price: 100, description: null, },
        ],
      },
      otherDesserts: {
        title: "Other Desserts",
        items: [
          { name: "Vanilla Ice Cream scoops", price: 200, description: null, },
          { name: "Tropical Fruit Salad Topped with Ice Cream", price: 300, description: null, },
          { name: "Twin Cupcakes", price: 200, description: null, },
        ],
      },
    },
  },

  sandwich: {
    title: "Sandwiches",
    image: '/menu/sandwich.jpg',
    items: [
      {
        name: "Cheese & Ham Sandwich",
        price: 700,
        description: "Slice of Ham on Bread Toast Topped With Cheese and a Stack of French Fries",
      },
      {
        name: "Chicken Club Sandwich",
        price: 1200,
        description: "A Combination of crunchy boneless Chicken, spicy ham, Eggs and leafy Lettuce on Toasted bread served With a stack of French Fries",
      },
      {
        name: "Vegetable Sandwich",
        price: 700,
        description: "Fresh Ice Bag Lettuce, Cucumber, Tomatoes and Caramelized Onions on a Crunchy Toast with a stack of Fresh Fries",
      },
    ],
  },
  starters: {
    title: "Starters",
    image: "/menu/starters.jpg",
    subcategories: {
      salads: {
        title: "Salads",
        items: [
          {
            name: "Crafted Kitchen Salad",
            price: 350,
            description: "Combo of Freshly harvested vegetables seasoned with Creamy yoghurt dressing",
          },
          {
            name: "A Bowl of Fruit Salad",
            price: 350,
            description: "Colorful Cubed Fruits with combined flavors dressed with a honey syrup",
          },
          {
            name: "Fish Salad",
            price: 500,
            description:
              "Chunk of Grilled Fish Fillet layed on a bed of Fresh Teared Lettuce & Grated Carrots dressed with Tartar Sauce",
          },
          {
            name: "Chicken Salad",
            price: 500,
            description:
              "Chunk of Grilled Chicken Breast layed on a bed of Fresh Teared Lettuce & Grated Carrots dressed with Tartar Sauce",
          },
        ],
      },
      soups: {
        title: "Soups",
        items: [
          {
            name: "Ossobucco",
            price: 350,
            description: "Natural Braised Beef with Bone Marrow",
          },
          {
            name: "Clear Beef Broth",
            price: 350,
            description: "Served with Bread roll",
          },
          {
            name: "Clear Chicken Soup",
            price: 350,
            description: "Served with Bread roll",
          },
          {
            name: "Cream of Tomato Soup",
            price: 350,
            description: "Served with Bread roll",
          },
          {
            name: "Mixed Vegetable Soup",
            price: 350,
            description: "Served with Bread roll",
          },
          {
            name: "Butter Nut Soup",
            price: 350,
            description: "Served with Bread roll",
          },
          {
            name: "Cream of Chicken Soup",
            price: 350,
            description: "Served with Bread roll",
          },
        ],
      },
      bittings: {
        title: "Bittings",
        items: [
          {
            name: "Crispy Fish Fingers",
            price: 500,
            description:
              "Well-Seasoned Finger-like Fillets, Bread crumbed served with French Fries & generous Tartar Sauce",
          },
          {
            name: "Crispy Bacon",
            price: 500,
            description: "Crispy Bacon served with few Chips & Salad of the day",
          },
          {
            name: "Crunchy Chicken Nuggets",
            price: 700,
            description: "Coated Chicken Cutlets served with French Fries & Coleslaw Salad",
          },
          {
            name: "4pcs Chicken Wings",
            price: 550,
            description: "Honey Glazed, Sweet & Sour, Periperi or Crispy Coated served with Few Fries & Coleslaw Salad",
          },
          {
            name: "2 pcs Drum Sticks",
            price: 500,
            description: "Coated in BBQ Sauce or Crispy Coated with breadcrumbs served with French Fries",
          },
        ],
      },
    },
  },
  burgers: {
    title: "Burgers",
    image: "/menu/burgers.jpg",
    items: [
      {
        name: "Traditional Beef Burger",
        price: 600,
        description: "Classic beef burger with all the fixings",
      },
      {
        name: "Cheese & Tomato Burger",
        price: 600,
        description: "Juicy burger with cheese and fresh tomatoes",
      },
      {
        name: "Chicken Burger",
        price: 600,
        description: "Grilled chicken breast burger",
      },
      {
        name: "Double Burger",
        price: 900,
        description: "Double the meat, double the satisfaction",
      },
      {
        name: "Combo Burger Beef & Chicken",
        price: 1200,
        description: "With generous amount of Mozzarella Cheese served with fries & Coleslaw Salad",
      },
    ],
  },
  pasta: {
    title: "Pasta",
    image: "/menu/pasta.png",
    items: [
      {
        name: "Spaghetti Napolitan",
        price: 400,
        description: "Pasta in Mint Tomato Sauce",
      },
      {
        name: "Macaroni Al Primavera",
        price: 500,
        description: "Tossed in Shreds of Vegetable",
      },
      {
        name: "Spaghetti Bolognase",
        price: 700,
        description: "Pasta in slow cooked Beef minced Sauce topped with grated Cheese",
      },
      {
        name: "Carbonara Pasta",
        price: 700,
        description: "Fresh Pasta tossed in a rich creamy Sauce topped with Crispy Bacon & a generous amount of Cheese",
      },
      {
        name: "Chinese Beef Noodles",
        price: 500,
        description: "A Bowl of noodles with Beef & Vegetables",
      },
      {
        name: "Chinese Chicken Noodles",
        price: 500,
        description: "Stripes of Chicken & A Bowl of noodles with vegetables",
      },
      {
        name: "Chinese Pork Noodles",
        price: 500,
        description: "A Bowl of Noodles with Braised pork berry",
      },
    ],
  },
  pizza: {
    title: "Pizza Corner",
    image: "/menu/pizza.jpg",
    items: [
      {
        name: "Margarita Pizza",
        price: { large: 1100, medium: 800, small: 600 },
        description: "Topped with mozzarella, Tomatoes, Fresh Basil, Cheese",
      },
      {
        name: "Vegie Feast",
        price: { large: 1300, medium: 1000, small: 800 },
        description: "Sweetcorn, Mushroom, Capsicum, Tomatoes & Cheese",
      },
      {
        name: "Chicken & Mushroom",
        price: { large: 1600, medium: 1100, small: 800 },
        description: "Chicken topped with Mozzarella",
      },
      {
        name: "Hawaiian Pizza",
        price: { large: 1600, medium: 1100, small: 800 },
        description: "Ham, Pineapples, Chicken & Mozzarella Cheese",
      },
      {
        name: "BBQ Chicken",
        price: { large: 1600, medium: 1100, small: 800 },
        description: "Chicken, Ham, Cheese",
      },
      {
        name: "Meat Deluxe",
        price: { large: 1600, medium: 1100, small: 800 },
        description: "Beef, Ham, Sweetcorn, Cheese",
      },
      {
        name: "Mega Combo Pizza",
        price: 2300,
        description: "Beef, Chicken, Pork, Ham, Bacon, Sweet Corn & generous amount of Mozzarella Cheese",
      },
    ],
  },
  beef: {
    title: "Beef",
    image: "/menu/beef.jpg",
    items: [
      {
        name: "Beef Stew",
        price: 700,
        description: "250g Cubed Beef Braised with Peas, Carrots & Baby Marrow",
      },
      {
        name: "Beef Fillet Steak",
        price: 800,
        description: "250g Fillet Tenderized served in a Creamy Pepper sauce",
      },
      {
        name: "Fried Beef on Bone",
        price: 1000,
        description: "500g Beef on Bone done to your specification",
      },
      {
        name: "Beef Choma",
        price: 1000,
        description: "500g of tender beef marinated and grilled to your specification",
      },
      {
        name: "Beef Pepper Chops",
        price: 1100,
        description: "500g beef chops well marinated, served with light pepper sauce",
      },
      {
        name: "Fried Beef on Bone (1kg)",
        price: 1800,
        description: "1kg beef on bone done to your specification",
      },
      {
        name: "Beef Pepper Chops (1kg)",
        price: 1800,
        description: "1kg beef chops well marinated, served with light pepper sauce",
      },
      {
        name: "Boiled Beef (Tumbukiza)",
        price: 1900,
        description: "1kg beef boiled and served with its soup",
      },
      {
        name: "Beef Choma (1kg)",
        price: 1800,
        description: "1kg of tender beef marinated and grilled to your specification",
      },
    ],
  },
  chicken: {
    title: "Chicken",
    image: "/menu/chicken.png",
    subcategories: {
      capon: {
        title: "Chicken Capon",
        items: [
          {
            name: "Creamy Chicken Breast",
            price: 800,
            description: "Cubed Boneless Chicken Breast in a Creamy Coconut Sauce",
          },
          {
            name: "Chicken Maryland",
            price: 800,
            description: "1/4 Crispy Coated Chicken served with Plantains, slash of Bacon & cocktail Dipping",
          },
          {
            name: "Herby Roast Chicken (1/2)",
            price: 1000,
            description: "1/2 Capon Chicken in Chef's marination seasoned with herbs and charcoal roasted",
          },
          {
            name: "Chicken Choma (1/2)",
            price: 1000,
            description: "1/2 Capon Chicken well marinated in chef marination and charcoal roasted",
          },
          {
            name: "Herby Roast Chicken (Full)",
            price: 1600,
            description: "Full Capon Chicken in Chef's marination seasoned with herbs and charcoal roasted",
          },
          {
            name: "Flame Grilled Chicken (1/2)",
            price: 1300,
            description:
              "1/2 Capon Chicken marinated with garlic, lemon & soy sauce, slowly grilled and served with roast potatoes & French fries",
          },
          {
            name: "Chicken Choma (Full)",
            price: 1600,
            description: "Full Capon Chicken well marinated in Chef's marination and charcoal roasted",
          },
          {
            name: "Flame Grilled Chicken (Full)",
            price: 2000,
            description:
              "Full Capon Chicken marinated with garlic, lemon, soy sauce, slowly grilled & served with roast potatoes, French fries and 1lr soda",
          },
        ],
      },
      drumsticks: {
        title: "Crispy Coated Drumsticks",
        items: [
          {
            name: "2Pcs Crispy Coated Drumsticks",
            price: 500,
            description: "Served with Fries & Coleslaw Salad",
          },
          {
            name: "4Pcs Crispy Coated Drumsticks",
            price: 1000,
            description: "Served with Fries & Coleslaw Salad",
          },
          {
            name: "4Pcs Barbeque Chicken Wings",
            price: 500,
            description: "Served with Fries and BBQ Sauce",
          },
          {
            name: "8Pcs Barbeque Chicken Wings",
            price: 1000,
            description: "Served with Fries and BBQ Sauce",
          },
          {
            name: "4 Coated Drumstick, Honey glazed Wings & Thighs",
            price: 2500,
            description: "Served with Fries, Coleslaw Salad, Honey dripping sauce & 1 ltrs Soda",
          },
        ],
      },
      countryside: {
        title: "Countryside Chicken",
        items: [
          {
            name: "Fried Countryside Chicken",
            price: 700,
            description: "1/4 countryside chicken fried with onions and dhania",
          },
          {
            name: "Countryside Chicken Choma (1/2)",
            price: 1200,
            description: "1/2 countryside Chicken well marinated in garlic, ginger & soy sauce",
          },
          {
            name: "Boiled Countryside Chicken (1/2)",
            price: 1200,
            description: "1/2 Countryside Chicken boiled and served with its soup",
          },
          {
            name: "Omega Special Countryside Chicken (1/2)",
            price: 1400,
            description: "1/2 Countryside Chicken, egg, potatoes, eggplant, nduma & boiled green maize",
          },
          {
            name: "Boiled Countryside Chicken (Full)",
            price: 2000,
            description: "Full Countryside Chicken boiled and served with its soup",
          },
          {
            name: "Flame Grilled Countryside Chicken",
            price: 2000,
            description: "Full Countryside Chicken seasoned with black pepper, garlic, ginger and flame grilled",
          },
          {
            name: "Omega Special Countryside Chicken (Full)",
            price: 2500,
            description: "Full Countryside Chicken, eggs, potatoes, eggplant, nduma & boiled green maize",
          },
        ],
      },
    },
  },
  fish: {
    title: "Fish",
    image: "/menu/fish.jpg",
    items: [
      {
        name: "Whole Tilapia",
        price: 900,
        description:
          "Whole Tilapia Deep Fried then done as per your choice (wet or dry). Served with Plain Rice, Chapatti, Plain Chips, ugali, Roast potatoes, or Mashed Potatoes",
      },
      {
        name: "Coconut Whole Fish",
        price: 1000,
        description:
          "Whole Tilapia well-seasoned, deep fried & served in coconut sauce. Served with Plain Rice, Chapatti, Plain Chips, ugali, Roast potatoes, or Mashed Potatoes",
      },
    ],
  },
  pork: {
    title: "Pork",
    image: "/menu/pork.png",
    items: [
      {
        name: "Grilled Pork Spare Ribs (500g)",
        price: 1000,
        description: "500g Pork spare ribs marinated in garlic, ginger, pineapples and glazed with honey",
      },
      {
        name: "Pan Fried Pork Chops (500g)",
        price: 1000,
        description: "500g pork chops well marinated served in sweet & sour sauce",
      },
      {
        name: "Fried Pork (500g)",
        price: 1000,
        description: "500g Pork done to your specification",
      },
      {
        name: "Grilled Pork Spare Ribs (1kg)",
        price: 1800,
        description: "1kg Pork Spare ribs marinated in garlic, ginger, pineapples and glazed with honey",
      },
      {
        name: "Pan Fried Pork Chops (1kg)",
        price: 1800,
        description: "1kg Pork Chops well marinated served in sweet & sour sauce",
      },
      {
        name: "Fried Pork (1kg)",
        price: 1800,
        description: "1kg Pork served with Sweet & Sour sauce",
      },
    ],
  },
  mutton: {
    title: "Mutton",
    image: "/menu/mutton.png",
    items: [
      {
        name: "Mutton Chops",
        price: 800,
        description: "250g Tendered ribs, grilled & served with mint sauce",
      },
      {
        name: "Baked Mutton",
        price: 1000,
        description: "500g mutton well marinated, oven baked & draped in onions",
      },
      {
        name: "Irish Mutton Stew (500g)",
        price: 1000,
        description: "500g mutton boiled with potatoes/banana & vegetables served with its soup",
      },
      {
        name: "Grilled Mutton",
        price: 1900,
        description: "1Kg mutton seasoned with garlic & herbs",
      },
      {
        name: "Irish Mutton Stew (1kg)",
        price: 1900,
        description: "1Kg mutton boiled with potatoes/banana & vegetables served with its soup",
      },
      {
        name: "Grilled Mutton Chops (500g)",
        price: 1000,
        description: "500g mutton chops seasoned with garlic, herbs",
      },
      {
        name: "Mutton Choma (1kg)",
        price: 1900,
        description: "1kg mutton marinated and grilled",
      },
      {
        name: "Half Mutton Ribs Choma",
        price: 1600,
        description: "mutton ribs well marinated in ginger, garlic & light soy sauce",
      },
      {
        name: "Full Mutton Shoulder Choma",
        price: 1900,
        description: "mutton shoulder marinated with garlic and charcoal grilled",
      },
      {
        name: "Mutton Leg Choma",
        price: 2500,
        description: "Chef's marinated and charcoal roasted",
      },
      {
        name: "Full Mutton Ribs Choma",
        price: 3000,
        description: "mutton ribs well marinated in ginger, garlic and light soy sauce",
      },
    ],
  },
  vegetarian: {
    title: "Vegetarian Corner",
    image: "/menu/vegetables.jpg",
    items: [
      {
        name: "Mixed Vegetable Stew",
        price: 400,
        description: "A Combination of carrots, courgettes, garden peas and French beans in dhania sauce",
      },
      {
        name: "Fried Moong Dal",
        price: 400,
        description: "Pre-cooked split lentils fried in turmeric & garlic sauce",
      },
    ],
  },
  indian: {
    title: "Indian Dishes",
    image: "/menu/indian.jpg",
    items: [
      {
        name: "Chicken Biryani",
        price: 700,
        description: "Aromatic basmati rice with spiced chicken",
      },
      {
        name: "Beef Biryani",
        price: 700,
        description: "Aromatic basmati rice with spiced beef",
      },
      {
        name: "Mutton Curry",
        price: 800,
        description: "Traditional mutton curry with spices",
      },
      {
        name: "Chicken Curry",
        price: 800,
        description: "Traditional chicken curry with spices",
      },
      {
        name: "Beef Curry",
        price: 800,
        description: "Traditional beef curry with spices",
      },
      {
        name: "Vegetable Curry",
        price: 500,
        description: "Mixed vegetables in curry sauce",
      },
    ],
  },
  african: {
    title: "African Dishes",
    image: "/menu/african-food.png",
    items: [
      {
        name: "Ugali Terere",
        price: 400,
        description: "Traditional ugali with terere vegetables",
      },
      {
        name: "Ugali Managu",
        price: 400,
        description: "Traditional ugali with managu vegetables",
      },
      {
        name: "Githeri Minji",
        price: 400,
        description: "Mixed beans and maize with green peas",
      },
      {
        name: "Githeri Vegetables",
        price: 400,
        description: "Mixed beans and maize with vegetables",
      },
      {
        name: "Special Githeri",
        price: 700,
        description: "Premium githeri with special ingredients",
      },
      {
        name: "Plain Matoke",
        price: 400,
        description: "Steamed green bananas",
      },
      {
        name: "Beef Matoke",
        price: 700,
        description: "Green bananas cooked with beef",
      },
    ],
  },
  kids: {
    title: "Kids Corner",
    image: "/menu/kids.jpg",
    subcategories: {
      baskets: {
        title: "Omega Kids Basket",
        items: [
          {
            name: "Omega Zam Zam Basket",
            price: 500,
            description: "mini cheese sandwich, one beef sausage with fries and garden salad",
          },
          {
            name: "Cinderella Basket",
            price: 500,
            description:
              "one mini pie or samosa, French fries and mini chicken sandwich with a touch of coleslaw salad",
          },
          {
            name: "Beef Noodles",
            price: 400,
            description: "noodles with beef cubes",
          },
          {
            name: "Chicken Noodles",
            price: 400,
            description: "Noodles with shredded Chicken",
          },
          {
            name: "Lions Lunch",
            price: 500,
            description: "Two pieces of chicken drumstick, French fries and BBQ sauce",
          },
        ],
      },
      delights: {
        title: "Delights",
        items: [
          {
            name: "Hot Dog",
            price: 300,
            description: "served with fries",
          },
          {
            name: "Crunchy Fish Fingers",
            price: 500,
            description: "served with few chips",
          },
          {
            name: "Crunchy Chicken Nuggets",
            price: 700,
            description: "bread crumbed chicken flakes served with few chips & 1000 Islands sauce",
          },
          {
            name: "Grilled Chicken Cutlets",
            price: 500,
            description: "chicken cutlets with sweet pepper and red onions",
          },
          {
            name: "Choma Sausages",
            price: 500,
            description: "fried with onion & dark soy sauce served with few fries",
          },
        ],
      },
      sandwiches: {
        title: "Sandwiches",
        items: [
          {
            name: "Chicken Sandwich",
            price: 500,
            description: "chicken in a white toast sandwich with a heap of chips",
          },
          {
            name: "Cheesy Goodness",
            price: 500,
            description: "mini baguette bread sandwich with mozzarella cheese, served with French fries",
          },
          {
            name: "Vegetable Sandwich",
            price: 500,
            description: "fresh ice-bag lettuce, cucumber, tomatoes and caramelized onions on a crunchy toast",
          },
        ],
      },
      miniburgers: {
        title: "Mini Burgers",
        items: [
          {
            name: "Mini Beef Burger",
            price: 500,
            description: "few chips and salad",
          },
          {
            name: "Mini Chicken Burger",
            price: 500,
            description: "few chips and salad",
          },
          {
            name: "Mini Cheese Burger",
            price: 500,
            description: "few chips and salad",
          },
        ],
      },
    },
  },

  sides: {
    title: "Side Orders",
    image: "/menu/ugali.jpg",
    items: [
      {
        name: "Ugali",
        price: 100,
        description: "Traditional cornmeal staple",
      },
      {
        name: "Brown Ugali",
        price: 200,
        description: "Healthy brown ugali",
      },
      {
        name: "Posh Ugali",
        price: 150,
        description: "Premium ugali preparation",
      },
      {
        name: "Plain Rice",
        price: 100,
        description: "Steamed white rice",
      },
      {
        name: "Vegetable Rice",
        price: 200,
        description: "Rice with mixed vegetables",
      },
      {
        name: "Plain Chips",
        price: 300,
        description: "Golden French fries",
      },
      {
        name: "Masala Chips",
        price: 350,
        description: "Spiced French fries",
      },
      {
        name: "Bhajia",
        price: 350,
        description: "Spiced potato fritters",
      },
      {
        name: "Lyonnais Potatoes",
        price: 300,
        description: "Pan-fried potatoes with onions",
      },
      {
        name: "Roast Potatoes",
        price: 250,
        description: "Herb-roasted potatoes",
      },
      {
        name: "Mukimo",
        price: 250,
        description: "Mashed potatoes with greens",
      },
      {
        name: "Mashed Potatoes",
        price: 250,
        description: "Creamy mashed potatoes",
      },
      {
        name: "White Chapatti",
        price: 100,
        description: "Soft flatbread",
      },
      {
        name: "Brown Chapatti",
        price: 100,
        description: "Whole wheat flatbread",
      },
    ],
  },

  omegaBreakfasts: {
    title: "Omega Breakfasts",
    image: "/menu/breakfast.jpg",
    items: [
      {
        name: "Safari Mini Breakfast",
        price: 500,
        description: "Tea, Sausages, 2 eggs done to your specification and Toast with Marmalade or Jam",
      },
      {
        name: "Omega Special Breakfast",
        price: 500,
        description: "Starter: Oat Porridge. A bowl of cereals served with cold milk. Fruit Curves, Freshly blended Mocktail. Cravings: Crispy bacon, sausages, baked beans, tossed mushrooms, beef or mutton stripe, Vegetables, Roots and Sauteed Potatoes. Dessert of the day: Hot Beverage of your choice served with a tea cake",
      },
      {
        name: "Combo Breakfast",
        price: 500,
        description: "2 Eggs, Bacon, 1pc Sausage Toast",
      },
      {
        name: "Crispy Bacon served with few fries",
        price: 500,
        description: null,
      },
      {
        name: "Pigs in a blanket",
        price: 500,
        description: "Pancakes rolled with bacon",
      },
    ],
  },
  warmers: {
    title: "Warmers",
    image: "/menu/warmers.jpg",
    items: [
      {
        name: "Uji Power",
        price: 200,
        description: "A Bowl of Healthy Porridge",
      },
      {
        name: "Bone soup",
        price: 100,
        description: null,
      },
      {
        name: "Ossubuco",
        price: 300,
        description: null,
      },
    ],
  },
  cocktails: {
    title: "Cocktails & Beverages",
    image: "/menu/cocktails.jpg",
    subcategories: {
      mocktails: {
        title: "Mocktails (Non-Alcoholic)",
        items: [
          {
            name: "Omega Gardens Special",
            price: 500,
            description: "Orange Juice, Passion Juice, Tropical Fruits, Cubes and Grenadine Syrup",
          },
          {
            name: "Virgin Mary",
            price: 500,
            description: "Tomato Juice, Lemon Juice, Tobasco Pepper and Salt",
          },
          {
            name: "Fruits Serenade",
            price: 500,
            description: "Fresh Strawberry, Passion Juice, Lemon Juice, Strawberry Syrup",
          },
          {
            name: "Simba Sunrise",
            price: 500,
            description: "Orange Juice, Pineapple Juice, Mango Juice, Lemon Juice & Grenadine",
          },
        ],
      },
      cocktails: {
        title: "Cocktails & Long Drinks",
        items: [
          {
            name: "Hakuna Matata",
            price: 600,
            description: "Kenya Cane, Lemon Juice, Orange Juice, Grenadine Syrup",
          },
          {
            name: "Hot Toddy",
            price: 500,
            description: "Viceroy, Ginger, Honey, Lemon Juice, & Cinnamon",
          },
          {
            name: "Long Island",
            price: 700,
            description: "Vodka, Gin, Rum, Triple sec, Tequila, Lemon Juice, Sugar Syrup & coke",
          },
          {
            name: "Tom Collins",
            price: 600,
            description: "Gilbey's Gin, Lime Juice & Soda Water",
          },
          {
            name: "Mojito",
            price: 600,
            description: "White Rum, Mint Leaves, Soda, Water, Sugar and lime wedges",
          },
          {
            name: "Dry Martini",
            price: 600,
            description: "Gilbey's Gin, Martini Dry",
          },
          {
            name: "Piña Colada",
            price: 600,
            description: "White Rum, Malibu, Pineapple Juice & Coconut Milk",
          },
          {
            name: "Royal Romance",
            price: 600,
            description: "Gilbeys, Orange Juice",
          },
          {
            name: "Gin & Tonic",
            price: 600,
            description: "Gilbeys, Lemon Juice & Mint",
          },
        ],
      },
      coldBeverages: {
        title: "Cold Beverages",
        items: [
          { name: "Fresh Juice", price: 200, description: null, },
          { name: "Soda 300ml", price: 100, description: null, },
          { name: "Keringet 500ml", price: 100, description: null, },
          { name: "Keringet 1L", price: 200, description: null, },
          { name: "Delmonte", price: 400, description: null, },
          { name: "Redbull", price: 300, description: null, },
          { name: "Monster", price: 350, description: null, },
        ],
      },
      softDrinks: {
        title: "Soft Drinks",
        items: [
          { name: "SODA 330ML", price: 100.00 },
          { name: "DELMONTE", price: 400.00 },
          { name: "KERINGET 1LTR", price: 200.00 },
          { name: "KERINGET 1/2LTR", price: 100.00 },
          { name: "HEINEKEN NON ALC 330ML", price: 350.00 },
        ],
      },
      cocktails: {
        title: "Cocktails",
        items: [
          { name: "LONG ISLAND", price: 700.00 },
          { name: "MOJITO", price: 600.00 },
          { name: "TOM COLLINS", price: 600.00 },
          { name: "HAKUNA MATATA", price: 600.00 },
          { name: "HOT TODDY", price: 500.00 },
          { name: "DRY MARTINI", price: 600.00 },
          { name: "PINA COLADA", price: 600.00 },
          { name: "ROYAL ROMANCE", price: 600.00 },
          { name: "GIN & TONIC", price: 600.00 },
        ],
      },
      smoothies: {
        title: "Smoothies",
        items: [
          { name: "Banana Smoothie", price: 300, description: null, },
          { name: "Mango Smoothie", price: 300, description: null, },
          { name: "Go Green [Avocado Smoothie]", price: 300, description: null, },
          { name: "Pineapple Smoothie", price: 300, description: null, },
          { name: "Dragon Fruit & Banana Smoothie", price: 300, description: null, },
        ],
      },
    },
  },
  beverages: {
    title: "Wines and spirits",
    image: "/menu/spirits.jpeg",
    subcategories: {
      beerCans: {
        title: "Beer Cans",
        items: [
          { name: "BALOZI CAN", price: 350.00 },
          { name: "GORDONS TONIC CAN 330ML", price: 300.00 },
          { name: "Pineapple Punch Can", price: 300.00 },
          { name: "GUARANA Can", price: 300.00 },
          { name: "GUINESS CAN 500ML", price: 350.00 },
          { name: "HEINEKEN CAN 500ML", price: 400.00 },
          { name: "PILSNER CAN 500ML", price: 350.00 },
          { name: "SMIRNOFF BLACK CAN 330ML", price: 300.00 },
          { name: "TUSKER CAN 500ML", price: 350.00 },
          { name: "TUSKER CIDER CAN 500ML", price: 350.00 },
          { name: "TUSKER MALT CAN 500ML", price: 350.00 },
          { name: "TUSKER LITE CAN", price: 350.00 },
          { name: "WHITE CAP CAN 500ML", price: 350.00 },
          { name: "WHITE CAP CRISP CAN", price: 350.00 },
        ],
      },
      beers: {
        title: "Beers",
        items: [
          { name: "BALOZI", price: 300.00 },
          { name: "GUINESS KUBWA", price: 300.00 },
          { name: "PILSNER", price: 300.00 },
          { name: "SMIRNOFF BLACK", price: 300.00 },
          { name: "SNAPP", price: 300.00 },
          { name: "TUSKER CIDER", price: 300.00 },
          { name: "TUSKER LAGER", price: 300.00 },
          { name: "TUSKER LITE", price: 300.00 },
          { name: "TUSKER MALT", price: 300.00 },
          { name: "WHITE CAP", price: 300.00 },
          { name: "WHITE CAP CRISP", price: 300.00 },
          { name: "KO 330ML", price: 350.00 },
          { name: "DESPERADO", price: 350.00 },
          { name: "HEINEKEN 330ML", price: 400.00 },
          { name: "HUNTERS", price: 300.00 },
          { name: "KINGFISHER", price: 300.00 },
          { name: "SAVANNAH DRY", price: 350.00 },
          { name: "SAVANNAH LEMON", price: 350.00 },
          { name: "WINDHOEK LAGER", price: 300.00 },
        ],
      },
      brandy: {
        title: "Brandy",
        items: [
          { name: "KENYA CANE 375ML", price: 600.00 },
          { name: "KENYA CANE 750ML", price: 2000.00 },
          { name: "RICHOT 250ML", price: 700.00 },
          { name: "RICHOT 375ML", price: 900.00 },
          { name: "RICHOT 750ML", price: 2000.00 },
          { name: "VICEROY 250ML", price: 700.00 },
          { name: "VICEROY 375ML", price: 1000.00 },
          { name: "VICEROY 750ML", price: 2000.00 },
          { name: "VICEROY TOT", price: 200.00 },
        ],
      },
      gin: {
        title: "Gin",
        items: [
          { name: "GILBEYS 250ML", price: 800.00 },
          { name: "GILBEYS 375ML", price: 1000.00 },
          { name: "GILBEYS 750ML", price: 2500.00 },
          { name: "Tanqueray no.10 1ltr", price: 6500.00 },
          { name: "Tanqueray Gin 1ltr", price: 5000.00 },
          { name: "GORDONS 750ML", price: 3000.00 },
          { name: "BEEFEATER GIN 1LTR", price: 4000.00 },
          { name: "BEEFEATER PINK 750ML", price: 3500.00 },
          { name: "HENDRICKS 700ML", price: 6500.00 },
          { name: "GILBEYS TOT", price: 200.00 },
          { name: "MALFY GIN", price: 7500.00 },
        ],
      },
      vodka: {
        title: "Vodka",
        items: [
          { name: "CRUZ VINTAGE BLACK VODKA 750ML", price: 3000.00 },
          { name: "SMIRNOFF VODKA 250ML", price: 700.00 },
          { name: "SMIRNOFF VODKA 375ML", price: 1000.00 },
          { name: "SMIRNOFF VODKA 750ML", price: 1000.00 },
          { name: "FLIRT VODKA 1LTR", price: 2000.00 },
          { name: "SMIRNOFF VODKA TOT", price: 200.00 },
        ],
      },
      tequila: {
        title: "Tequila",
        items: [
          { name: "TEQUILA CAMINO 750ML", price: 3500.00 },
          { name: "JOSE CUEVO 750ML", price: 4000.00 },
          { name: "TEQUILA ROSE 700ML", price: 3500.00 },
          { name: "JOSECUEVO SPECIAL TOT", price: 200.00 },
          { name: "TEQUILLA CAMINO TOT", price: 200.00 },
        ],
      },
      whisky: {
        title: "Whisky",
        items: [
          { name: "BALLENTINE 1LTR", price: 3500.00 },
          { name: "BEST WHISKY 250ML", price: 600.00 },
          { name: "BLACK AND WHITE 500ML", price: 900.00 },
          { name: "BLACK AND WHITE 750ML", price: 2000.00 },
          { name: "BOND 7 375ML", price: 1000.00 },
          { name: "J&B RARE 375ML", price: 1500.00 },
          { name: "J&B RARE 750ML", price: 3000.00 },
          { name: "J/W DOUBLE BLACK 1LTR", price: 8500.00 },
          { name: "J/W DOUBLE BLACK 750ML", price: 7000.00 },
          { name: "JACKDANIELS 375ML", price: 3000.00 },
          { name: "JACKDANIELS 700ML", price: 5000.00 },
          { name: "JACKDANIEL 1LTR", price: 6500.00 },
          { name: "JAMESON 375ML", price: 2000.00 },
          { name: "JW BLACK 375ML", price: 3000.00 },
          { name: "JAMESON 750ML", price: 3500.00 },
          { name: "JW BLACK 1LRT", price: 6500.00 },
          { name: "JW BLACK 750ML", price: 5000.00 },
          { name: "JW GOLD LABEL 750ML", price: 8500.00 },
          { name: "OLD SMUGGLER 750ML", price: 2500.00 },
          { name: "OLMECA DARK CHOC 750ML", price: 4500.00 },
          { name: "SCOTTISH LEADER 12YRS 750ML", price: 5500.00 },
          { name: "SCOTTISH LEADER 3YRS 750ML.", price: 3000.00 },
          { name: "SINGLETON 15YRS 750ML", price: 9500.00 },
          { name: "TIA MARIA 1LTR", price: 5000.00 },
          { name: "VAT 375ML", price: 1200.00 },
          { name: "VAT 750ML", price: 2500.00 },
          { name: "WILLIAM LAWSON 375ML", price: 1200.00 },
          { name: "WILLIAM LAWSON 750ML", price: 2500.00 },
          { name: "WILLIAM LAWSON 1LTR", price: 3500.00 },
          { name: "GRANTS 750ML", price: 2500.00 },
          { name: "JW RED 375ML", price: 2000.00 },
          { name: "JW RED 750ML", price: 3000.00 },
          { name: "JW DOUBLE BLACK 1LTR", price: 8500.00 },
          { name: "SCOTTISH LEADER 3YRS 750ML", price: 3000.00 },
          { name: "SCOTTISH LEADER 12YRS 750ML", price: 5500.00 },
          { name: "FAMOUS GROUSE 750ML", price: 3000.00 },
          { name: "GLENFIDDICH 12YRS 750ML", price: 8000.00 },
          { name: "GLENFIDDICH 15YRS 750ML", price: 15000.00 },
          { name: "GLENFIDDICH 18YRS 750ML", price: 18000.00 },
          { name: "SINGLETON 15YRS 750ML", price: 9500.00 },
          { name: "SINGLETON 12YRS 750ML", price: 7500.00 },
          { name: "BULLEIT BOURBON 700ML", price: 5500.00 },
          { name: "CHIVAS REGAL 12YRS 700ML", price: 6000.00 },
          { name: "MONKEY SHOULDER 700ML", price: 6000.00 },
          { name: "PASSPORT 750ML", price: 2000.00 },
          { name: "ALL SEASONS 750ML", price: 2000.00 },
          { name: "BALLENTINE 750ML", price: 3500.00 },
          { name: "JAMESON TOT", price: 200.00 },
          { name: "JW BLACK TOT", price: 250.00 },
          { name: "JACKDANIELS TOT", price: 250.00 },
          { name: "GLEN FIDDICH 15YRS TOT", price: 600.00 },
          { name: "MONKEY SHOULDER TOT", price: 250.00 },
          { name: "OLMECA DARK CHOC TOTS", price: 250.00 },
        ],
      },
      cognac: {
        title: "Cognac",
        items: [
          { name: "HENNESSY V.S 700ML", price: 7500.00 },
          { name: "HENNESSY V.S.O.P 700ML", price: 15000.00 },
          { name: "MARTEL V.S 700ML", price: 7500.00 },
          { name: "MARTEL V.S.O.P 700ML", price: 12000.00 },
          { name: "REMY MARTIN VSOP 750ML", price: 15000.00 },
          { name: "COURVOISIER VSOP 1LTR", price: 6500.00 },
          { name: "HENNESSY V.S TOT", price: 350.00 },
          { name: "MARTEL VS TOT", price: 350.00 },
        ],
      },
      liqueur: {
        title: "Liqueur",
        items: [
          { name: "SOUTHERN COMFORT 700ML", price: 3500.00 },
          { name: "JAGERMEISTER 700ML", price: 4000.00 },
          { name: "AMARULA 375ML", price: 1600.00 },
          { name: "AMARULA 750ML", price: 3000.00 },
          { name: "BAILEYS 750", price: 4000.00 },
          { name: "SHERIDANTS 1LTR", price: 7000.00 },
          { name: "ZAPPA RED 750ML", price: 2000.00 },
          { name: "ZAPPA BLUE 750ML", price: 2000.00 },
          { name: "ZAPPA CLEAR 750ML", price: 2000.00 },
          { name: "JAGERMEISTER TOT", price: 200.00 },
          { name: "SHERIDENT TOT", price: 300.00 },
          { name: "SOUTHERN COMFORT TOT", price: 200.00 },
        ],
      },
      rum: {
        title: "Rum",
        items: [
          { name: "BACARDI SUPERIOR 750ML", price: 2500.00 },
          { name: "MALIBU 750ML", price: 3000.00 },
          { name: "MYERS RUM 750ML", price: 3000.00 },
          { name: "CAPTAIN MORGAN GOLD 250ML", price: 500.00 },
          { name: "CAPTAIN MORGAN GOLD 750ML", price: 3000.00 },
          { name: "MALIBU TOT", price: 200.00 },
        ],
      },
      wines: {
        title: "Wines",
        items: [
          { name: "14 TH STREET WHITE PER GLASS", price: 250.00 },
          { name: "4TH STREET RED PER GLASS", price: 250.00 },
          { name: "4TH STREET RED 750ML", price: 1700.00 },
          { name: "4TH STREET WHITE 750ML", price: 1700.00 },
          { name: "AMOR 750ML", price: 1500.00 },
          { name: "CAPRICE DRY WHITE 1 LTR", price: 1000.00 },
          { name: "CAPRICE WHITE SWEET 1 LTR", price: 1000.00 },
          { name: "CAPRICE RED SWEET 1 LTR", price: 1000.00 },
          { name: "CAPRICE DRY RED 1LTR", price: 1000.00 },
          { name: "CELLAR CASK RED PER GLASS", price: 250.00 },
          { name: "CELLAR CASK WHITE PER GLASS", price: 250.00 },
          { name: "CELLAR CASK RED 750ML", price: 1700.00 },
          { name: "CELLAR CASK WHITE 750ML", price: 1700.00 },
          { name: "CHAMDOR RED 750ML", price: 1500.00 },
          { name: "DROSTDY HOF RED PER GLASS", price: 250.00 },
          { name: "DROSTDY HOF CRU PER GLASS", price: 250.00 },
          { name: "DROSTY HOF CRU 750ML", price: 1700.00 },
          { name: "DROSTY HOF 750ML", price: 1700.00 },
          { name: "FOUR COUSINS WHITE 750ML", price: 1700.00 },
          { name: "FOUR COUSINS RED 750ML", price: 1700.00 },
          { name: "FRONTERA 750ML", price: 2000.00 },
          { name: "GATO NEGRO 750 ML", price: 1700.00 },
          { name: "KAGORLUX 750ML", price: 2500.00 },
          { name: "KISS ME NOW 750ML", price: 2500.00 },
          { name: "NAMAQUA RED 750ML", price: 1500.00 },
          { name: "NAMAQUA WHITE 750ML", price: 1500.00 },
          { name: "NEDERBURG CABERNET SAUVIGNON 750M", price: 3000.00 },
          { name: "NEDERBURG MERLOT 750ML", price: 3000.00 },
          { name: "NEDERBURG WHITE 750ML", price: 2500.00 },
          { name: "NEDERBURG-SHIRAZ 750ML", price: 3000.00 },
          { name: "ROBERTSON WINERY RED 1.5LTR", price: 3500.00 },
          { name: "ROBERTSON WINERY RED 750ML", price: 2000.00 },
          { name: "ROBERTSON WINERY WHITE 1.5LTR", price: 3500.00 },
          { name: "ROBERTSON WINERY WHITE 750ML", price: 2000.00 },
          { name: "ROSSO NOBILE SWEETRED 750ML", price: 2500.00 },
          { name: "ROSSO NOBILE BIANCO 750ML", price: 2500.00 },
          { name: "SAINT ANNA 750ML", price: 1500.00 },
        ],
      },
    },
  },
}

export const getAllItems = () => {
  const allItems = []

  Object.values(menuData).forEach((category) => {
    if (category.items) {
      category.items.forEach((item) => {
        allItems.push({
          ...item,
          category: category.title,
        })
      })
    }

    if (category.subcategories) {
      Object.values(category.subcategories).forEach((subcategory) => {
        subcategory.items.forEach((item) => {
          allItems.push({
            ...item,
            category: category.title,
            subcategory: subcategory.title,
          })
        })
      })
    }
  })

  return allItems
}

export const searchItems = (query) => {
  const allItems = getAllItems()
  const lowercaseQuery = query.toLowerCase()

  return allItems.filter(
    (item) =>
      (item.name ?? "").toLowerCase().includes(lowercaseQuery) ||
      (item.description ?? "").toLowerCase().includes(lowercaseQuery) ||
      (item.category ?? "").toLowerCase().includes(lowercaseQuery) ||
      (item.subcategory ?? "").toLowerCase().includes(lowercaseQuery),
  )
}
