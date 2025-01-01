import { ProductDetailsType } from "@/types/componentTypes";
import { NextResponse } from "next/server";

export const products: ProductDetailsType[] = [
  // Baskets
  {
    id: 21,
    name: "Chocolate Basket",
    price: 20,
    category: "baskets",
    image: "/images/chocobasket0.jpg",
    imagesList: [
      "/images/chocobasket1.jpg",
      "/images/chocobasket2.jpg",
      "/images/chocobasket3.jpg",
      "/images/chocobasket4.jpg",
    ],
    description:
      "A delightful basket filled with an assortment of classic chocolates, perfect for gifting to loved ones or as a treat for yourself. A mix of milk, dark, and white chocolates for every palate.",
  },
  {
    id: 22,
    name: "Snacks Basket",
    price: 25,
    category: "baskets",
    image: "/images/snackbasket0.jpg",
    imagesList: [
      "/images/snackbasket1.jpg",
      "/images/snackbasket2.jpg",
      "/images/snackbasket3.jpg",
      "/images/snackbasket4.jpg",
    ],
    description:
      "A variety-packed basket full of savory and sweet snacks, including chocolates, crackers, and nuts. Perfect for picnics, parties, or simply snacking at home.",
  },
  {
    id: 23,
    name: "Teddy Basket",
    price: 30,
    category: "baskets",
    image: "/images/teddybasket0.jpg",
    imagesList: [
      "/images/teddybasket1.jpg",
      "/images/teddybasket2.jpg",
      "/images/teddybasket3.jpg",
      "/images/teddybasket4.jpg",
    ],
    description:
      "A heartwarming basket featuring chocolates and a soft teddy bear, making it the perfect gift for birthdays, anniversaries, or just to show someone you care.",
  },
  {
    id: 24,
    name: "Luxury Basket",
    price: 50,
    category: "baskets",
    image: "/images/luxurybasket0.jpg",
    imagesList: [
      "/images/luxurybasket1.jpg",
      "/images/luxurybasket2.jpg",
      "/images/luxurybasket3.jpg",
      "/images/luxurybasket4.jpg",
    ],
    description:
      "An exquisite collection of premium chocolates and fine treats, elegantly arranged in a luxury basket. This is the ultimate gift for those who appreciate the finer things in life.",
  },
  {
    id: 25,
    name: "Basket For Him",
    price: 40,
    category: "baskets",
    image: "/images/forhimbasket0.jpg",
    imagesList: [
      "/images/forhimbasket1.jpg",
      "/images/forhimbasket2.jpg",
      "/images/forhimbasket3.jpg",
      "/images/forhimbasket4.jpg",
    ],
    description:
      "A thoughtfully curated basket filled with gourmet chocolates, snacks, and beverages, designed specifically to delight the special man in your life. Perfect for birthdays, Father's Day, or any occasion.",
  },
  {
    id: 26,
    name: "Basket For Her",
    price: 35,
    category: "baskets",
    image: "/images/forherbasket0.jpg",
    imagesList: [
      "/images/forherbasket1.jpg",
      "/images/forherbasket2.jpg",
      "/images/forherbasket3.jpg",
      "/images/forherbasket4.jpg",
    ],
    description:
      "A beautiful basket filled with an assortment of sweet treats and chocolates, perfect for pampering the special woman in your life. Ideal for birthdays, anniversaries, or a thoughtful surprise.",
  },
  {
    id: 27,
    name: "Special Basket",
    price: 45,
    category: "baskets",
    image: "/images/specialbasket0.jpg",
    imagesList: [
      "/images/specialbasket1.jpg",
      "/images/specialbasket2.jpg",
      "/images/specialbasket3.jpg",
      "/images/specialbasket4.jpg",
    ],
    description:
      "A special collection of gourmet chocolates and treats, elegantly presented in a stylish basket. Perfect for marking memorable moments or celebrating milestones.",
  },
  {
    id: 28,
    name: "Baby Basket",
    price: 55,
    category: "baskets",
    image: "/images/babybasket0.jpg",
    imagesList: [
      "/images/babybasket1.jpg",
      "/images/babybasket2.jpg",
      "/images/babybasket3.jpg",
      "/images/babybasket4.jpg",
    ],
    description:
      "An adorable baby-themed basket featuring soft pastel-colored chocolates and baby-friendly treats. A wonderful gift for baby showers or celebrating a new arrival.",
  },
  {
    id: 29,
    name: "Bestie Basket",
    price: 60,
    category: "baskets",
    image: "/images/bestiebasket0.jpg",
    imagesList: [
      "/images/bestiebasket1.jpg",
      "/images/bestiebasket2.jpg",
      "/images/bestiebasket3.jpg",
      "/images/bestiebasket4.jpg",
    ],
    description:
      "Celebrate your friendship with this fun and colorful basket packed with chocolates and snacks that you and your best friend can enjoy together. Perfect for special bonding moments.",
  },
  {
    id: 30,
    name: "Customized Basket",
    price: 70,
    category: "baskets",
    image: "/images/cmbasket0.jpg",
    imagesList: [
      "/images/cmbasket1.jpg",
      "/images/cmbasket2.jpg",
      "/images/cmbasket3.jpg",
      "/images/cmbasket4.jpg",
    ],
    description:
      "Create your own unique gift basket by selecting your favorite chocolates, snacks, and treats. Perfect for personalizing a gift that is tailored to the recipients tastes and preferences.",
  },
    {
      id: 31,
      name: "Rose Bouquet",
      price: 15,
      category: "bouquets",
      image: "/images/rosebouquet0.jpg",
      imagesList: [
        "/images/rosebouquet1.jpg",
        "/images/rosebouquet2.jpg",
        "/images/rosebouquet3.jpg",
        "/images/rosebouquet4.jpg",
      ],
      description:
        "A classic bouquet of fresh roses, perfect for expressing love and affection.",
    },
    {
      id: 32,
      name: "Chocolate Bouquet",
      price: 20,
      category: "bouquets",
      image: "/images/chocobouquet0.jpg",
      imagesList: [
        "/images/chocobouquet1.jpg",
        "/images/chocobouquet2.jpg",
        "/images/chocobouquet3.jpg",
        "/images/chocobouquet4.jpg",
      ],
      description:
        "A creative bouquet featuring chocolates, perfect for gifting to someone with a sweet tooth.",
    },
    {
      id: 33,
      name: "Kitkat Bouquet",
      price: 25,
      category: "bouquets",
      image: "/images/kitkatbouquet0.jpg",
      imagesList: [
        "/images/kitkatbouquet1.jpg",
        "/images/kitkatbouquet2.jpg",
        "/images/kitkatbouquet3.jpg",
        "/images/kitkatbouquet4.jpg",
      ],
      description:
        "A delicious bouquet made from Kitkat bars, ideal for chocolate lovers and special occasions.",
    },
    {
      id: 34,
      name: "Dairy Milk Bouquet",
      price: 30,
      category: "bouquets",
      image: "/images/dairymilkbouquet0.jpg",
      imagesList: [
        "/images/dairymilkbouquet1.jpg",
        "/images/dairymilkbouquet2.jpg",
        "/images/dairymilkbouquet3.jpg",
        "/images/dairymilkbouquet4.jpg",
      ],
      description:
        "A luxurious bouquet made with Dairy Milk chocolates, perfect for birthdays or celebrations.",
    },
    {
      id: 35,
      name: "Snacks Bouquet",
      price: 18,
      category: "bouquets",
      image: "/images/snacksbouquet0.jpg",
      imagesList: [
        "/images/snacksbouquet1.jpg",
        "/images/snacksbouquet2.jpg",
        "/images/snacksbouquet3.jpg",
        "/images/snacksbouquet4.jpg",
      ],
      description:
        "A unique bouquet made with a variety of snacks, perfect for casual gifting or parties.",
    },
    {
      id: 36,
      name: "Pink Rose Bouquet",
      price: 22,
      category: "bouquets",
      image: "/images/pinkrosebouquet0.jpg",
      imagesList: [
        "/images/pinkrosebouquet1.jpg",
        "/images/pinkrosebouquet2.jpg",
        "/images/pinkrosebouquet3.jpg",
        "/images/pinkrosebouquet4.jpg",
      ],
      description:
        "A beautiful bouquet of pink roses, ideal for expressing admiration or celebrating special moments.",
    },
    {
      id: 37,
      name: "Ramen Bouquet",
      price: 28,
      category: "bouquets",
      image: "/images/ramenbouquet0.jpg",
      imagesList: [
        "/images/ramenbouquet1.jpg",
        "/images/ramenbouquet2.jpg",
        "/images/ramenbouquet3.jpg",
        "/images/ramenbouquet4.jpg",
      ],
      description:
        "A fun and unique bouquet featuring packets of ramen noodles, making it a quirky gift for food lovers.",
    },
    {
      id: 38,
      name: "Balloon Bouquet",
      price: 50,
      category: "bouquets",
      image: "/images/balloonbouquet0.jpg",
      imagesList: [
        "/images/balloonbouquet1.jpg",
        "/images/balloonbouquet2.jpg",
        "/images/balloonbouquet3.jpg",
        "/images/balloonbouquet4.jpg",
      ],
      description:
        "A festive bouquet that includes colorful balloons, perfect for birthdays or parties.",
    },
    {
      id: 39,
      name: "Jelly Bouquet",
      price: 24,
      category: "bouquets",
      image: "/images/jellybouquet0.jpg",
      imagesList: [
        "/images/jellybouquet1.jpg",
        "/images/jellybouquet2.jpg",
        "/images/jellybouquet3.jpg",
        "/images/jellybouquet4.jpg",
      ],
      description:
        "A sweet bouquet made from a variety of jelly candies, perfect for a fun and tasty gift.",
    },
    {
      id: 40,
      name: "White Flower Bouquet",
      price: 35,
      category: "bouquets",
      image: "/images/whitebouquet0.jpg",
      imagesList: [
        "/images/whitebouquet1.jpg",
        "/images/whitebouquet2.jpg",
        "/images/whitebouquet3.jpg",
        "/images/whitebouquet4.jpg",
      ],
      description:
        "A sophisticated bouquet of white flowers, perfect for elegant occasions or as a gesture of peace.",
    },
      {
        id: 41,
        name: "Chocolate Cake",
        price: 30,
        category: "cakes",
        image: "/images/chocolatecake0.jpg",
        imagesList: [
          "/images/chocolatecake1.jpg",
          "/images/chocolatecake2.jpg",
          "/images/chocolatecake3.jpg",
          "/images/chocolatecake4.jpg",
        ],
        description:
          "A rich and moist chocolate cake, perfect for any chocolate lover's celebration.",
      },
      {
        id: 42,
        name: "Vanilla Cake",
        price: 25,
        category: "cakes",
        image: "/images/vanillacake0.jpg",
        imagesList: [
          "/images/vanillacake1.jpg",
          "/images/vanillacake2.jpg",
          "/images/vanillacake3.jpg",
          "/images/vanillacake4.jpg",
        ],
        description:
          "A classic vanilla cake made with fresh cream, perfect for birthdays or special occasions.",
      },
      {
        id: 43,
        name: "Red Velvet Cake",
        price: 35,
        category: "cakes",
        image: "/images/redvelvetcake0.jpg",
        imagesList: [
          "/images/redvelvetcake1.jpg",
          "/images/redvelvetcake2.jpg",
          "/images/redvelvetcake3.jpg",
          "/images/redvelvetcake4.jpg",
        ],
        description:
          "A moist and delicious red velvet cake with cream cheese frosting, great for celebrations.",
      },
      {
        id: 44,
        name: "Carrot Cake",
        price: 28,
        category: "cakes",
        image: "/images/carrotcake0.jpg",
        imagesList: [
          "/images/carrotcake1.jpg",
          "/images/carrotcake2.jpg",
          "/images/carrotcake3.jpg",
          "/images/carrotcake4.jpg",
        ],
        description:
          "A moist carrot cake filled with spices and topped with creamy frosting, perfect for any occasion.",
      },
      {
        id: 45,
        name: "Lemon Cake",
        price: 27,
        category: "cakes",
        image: "/images/lemoncake0.jpg",
        imagesList: [
          "/images/lemoncake1.jpg",
          "/images/lemoncake2.jpg",
          "/images/lemoncake3.jpg",
          "/images/lemoncake4.jpg",
        ],
        description:
          "A refreshing lemon cake with zesty frosting, perfect for spring and summer gatherings.",
      },
      {
        id: 46,
        name: "Cheesecake",
        price: 40,
        category: "cakes",
        image: "/images/cheesecake0.jpg",
        imagesList: [
          "/images/cheesecake1.jpg",
          "/images/cheesecake2.jpg",
          "/images/cheesecake3.jpg",
          "/images/cheesecake4.jpg",
        ],
        description:
          "A creamy and smooth cheesecake with a graham cracker crust, perfect for dessert lovers.",
      },
      {
        id: 47,
        name: "Fruit Cake",
        price: 45,
        category: "cakes",
        image: "/images/fruitcake0.jpg",
        imagesList: [
          "/images/fruitcake1.jpg",
          "/images/fruitcake2.jpg",
          "/images/fruitcake3.jpg",
          "/images/fruitcake4.jpg",
        ],
        description:
          "A rich fruit cake filled with dried fruits and nuts, ideal for festive occasions.",
      },
      {
        id: 48,
        name: "Coffee Cake",
        price: 32,
        category: "cakes",
        image: "/images/coffeecake0.jpg",
        imagesList: [
          "/images/coffeecake1.jpg",
          "/images/coffeecake2.jpg",
          "/images/coffeecake3.jpg",
          "/images/coffeecake4.jpg",
        ],
        description:
          "A delicious coffee-flavored cake, perfect for pairing with your afternoon tea or coffee.",
      },
      {
        id: 49,
        name: "Chocolate Mousse Cake",
        price: 38,
        category: "cakes",
        image: "/images/chocomoussecake0.jpg",
        imagesList: [
          "/images/chocomoussecake1.jpg",
          "/images/chocomoussecake2.jpg",
          "/images/chocomoussecake3.jpg",
          "/images/chocomoussecake4.jpg",
        ],
        description:
          "A decadent chocolate mousse cake that melts in your mouth, perfect for special celebrations.",
      },
      {
        id: 50,
        name: "Pineapple Cake",
        price: 29,
        category: "cakes",
        image: "/images/pineapplecake0.jpg",
        imagesList: [
          "/images/pineapplecake1.jpg",
          "/images/pineapplecake2.jpg",
          "/images/pineapplecake3.jpg",
          "/images/pineapplecake4.jpg",
        ],
        description:
          "A delicious pineapple cake topped with cream and fresh pineapple slices, perfect for any celebration.",
      },
];

export async function GET() {
  try {
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}