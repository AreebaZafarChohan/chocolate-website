import { ProductDetailsType } from "@/types/componentTypes";
import { NextResponse } from "next/server";

export const products: ProductDetailsType[] = [

  // Chocolates
  {
    id: 1,
    name: "Dark Chocolate",
    price: 10,
    category: "chocolates",
    image: "/images/c3.jpg",
    imagesList: ["/images/dark1.jpg", "/images/dark2.jpg", "/images/dark3.jpg", "/images/dark4.jpg"],
    description:
      "Indulge in our rich and intense dark chocolate, crafted from the finest cocoa beans. Its deep, bittersweet flavor is perfect for true chocolate connoisseurs. Whether enjoyed alone or paired with your favorite wine, this dark chocolate promises an unforgettable tasting experience."
  },
  {
    id: 2,
    name: "Milk Chocolate",
    price: 8,
    category: "chocolates",
    image: "/images/c4.jpg",
    imagesList: ["/images/milk1.jpg", "/images/milk2.jpg", "/images/milk3.jpg", "/images/dark4.jpg"],
    description:
      "Smooth and creamy, our milk chocolate is made with the perfect balance of cocoa and milk. Its velvety texture and sweet flavor will melt in your mouth, offering a delightful treat for both kids and adults."
  },
  {
    id: 3,
    name: "White Chocolate",
    price: 9,
    category: "chocolates",
    image: "/images/white0.jpg",
    imagesList: ["/images/white1.jpg", "/images/white2.jpg", "/images/white3.jpg",  "/images/white4.jpg"],
    description:
      "Our luxurious white chocolate offers a silky and smooth taste with delicate notes of vanilla. Its rich, buttery flavor is perfect for those who prefer a sweeter, creamier chocolate experience."
  },
  {
    id: 4,
    name: "Hazelnut Chocolate",
    price: 11,
    category: "chocolates",
    image: "/images/hazelnut0.jpg",
    imagesList: ["/images/hazelnut1.jpg", "/images/hazelnut2.jpg", "/images/hazelnut3.jpg", "/images/hazelnut4.jpg"],
    description:
      "A perfect blend of creamy milk chocolate and crunchy roasted hazelnuts. Every bite is a harmony of smooth chocolate and the nutty goodness of hazelnuts, offering a deliciously satisfying treat."
  },
  {
    id: 5,
    name: "Almond Chocolate",
    price: 12,
    category: "chocolates",
    image: "/images/almond0.jpg",
    imagesList: ["/images/almond1.jpg", "/images/almond2.jpg", "/images/almond3.jpg", "/images/almond4.jpg"],
    description:
      "Crunchy roasted almonds combined with velvety chocolate create a perfect balance of flavors and textures. This chocolate bar is a nutty, rich, and satisfying treat for almond lovers."
  },
  {
    id: 6,
    name: "Caramel Chocolate",
    price: 10,
    category: "chocolates",
    image: "/images/caramel0.jpg",
    imagesList: ["/images/caramel1.jpg", "/images/caramel2.jpg", "/images/caramel3.jpg", "/images/caramel4.jpg"],
    description:
      "Rich chocolate meets luscious caramel in this delightful combination. With a soft caramel center enveloped in smooth chocolate, this treat provides a melt-in-your-mouth experience with every bite."
  },
  {
    id: 7,
    name: "Mint Chocolate",
    price: 8,
    category: "chocolates",
    image: "/images/mint0.jpg",
    imagesList: ["/images/mint1.jpg", "/images/mint2.jpg", "/images/mint3.jpg", "/images/mint4.jpg"],
    description:
      "Cool mint meets rich chocolate for a refreshing twist on a classic flavor combination. The burst of mint perfectly complements the creamy texture of the chocolate, making it an invigorating treat."
  },
  {
    id: 8,
    name: "Coconut Chocolate",
    price: 9,
    category: "chocolates",
    image: "/images/coconut0.jpg",
    imagesList: ["/images/coconut1.jpg", "/images/coconut2.jpg", "/images/coconut3.jpg", "/images/coconut4.jpg"],
    description:
      "Indulge in the tropical flavor of coconut with our coconut-filled chocolate bar. Each bite is a delightful mix of creamy chocolate and shredded coconut, providing an exotic taste of paradise."
  },
  {
    id: 9,
    name: "Fruit Chocolate",
    price: 12,
    category: "chocolates",
    image: "/images/fruit0.jpg",
    imagesList: ["/images/fruit1.jpg", "/images/fruit2.jpg", "/images/fruit3.jpg", "/images/fruit4.jpg"],
    description:
      "Our fruit-infused chocolate combines the richness of chocolate with the natural sweetness of dried fruits. A perfect balance of flavors for a healthy yet indulgent treat."
  },
  {
    id: 10,
    name: "Mix Nuts Chocolate",
    price: 14,
    category: "chocolates",
    image: "/images/nuts0.jpg",
    imagesList: ["/images/nuts1.jpg", "/images/nuts2.jpg", "/images/nuts3.jpg", "/images/nuts4.jpg"],
    description:
      "A crunchy and rich blend of almonds, hazelnuts, and cashews combined with silky smooth chocolate. Every bite offers a delightful mixture of textures, perfect for nut lovers."
  },

  // Boxes
  {
    id: 11,
    name: "Chocolate Box-(Small)",
    price: 25,
    category: "boxes",
    image: "/images/smbox0.jpg",
    imagesList: ["/images/smbox1.jpg", "/images/smbox2.jpg", "/images/smbox3.jpg", "/images/smbox4.jpg"],
    description:
      "A charming little gift box filled with assorted chocolates. The perfect size for gifting or indulging yourself with a variety of chocolate flavors."
  },
  {
    id: 12,
    name: "Chocolate Box-(Medium)",
    price: 30,
    category: "boxes",
    image: "/images/mdbox0.jpg",
    imagesList: ["/images/mdbox1.jpg", "/images/mdbox2.jpg", "/images/mdbox3.jpg", "/images/mdbox4.jpg"],
    description:
      "Our medium-sized chocolate box contains a generous assortment of chocolates, carefully crafted to offer a selection of flavors for every occasion."
  },
  {
    id: 13,
    name: "Chocolate Box-(Large)",
    price: 50,
    category: "boxes",
    image: "/images/lgbox0.jpg",
    imagesList: ["/images/lgbox1.jpg", "/images/lgbox2.jpg", "/images/lgbox3.jpg", "/images/lgbox4.jpg"],
    description:
      "A luxurious chocolate box filled with an array of premium chocolates. Ideal for sharing or gifting to loved ones on special occasions."
  },
  {
    id: 14,
    name: "Chocolate Box-(Luxury)",
    price: 35,
    category: "boxes",
    image: "/images/luxurybox0.jpg",
    imagesList: ["/images/luxurybox1.jpg", "/images/luxurybox2.jpg", "/images/luxurybox3.jpg", "/images/luxurybox4.jpg"],
    description:
      "A stunning luxury chocolate box designed for those who appreciate the finer things in life. This elegant box features high-end chocolates with sophisticated flavors."
  },
  {
    id: 15,
    name: "Strawberry Chocolate Box",
    price: 20,
    category: "boxes",
    image: "/images/strawberry0.jpg",
    imagesList: ["/images/strawberry1.jpg", "/images/strawberry2.jpg", "/images/strawberry3.jpg", "/images/strawberry4.jpg"],
    description:
      "A delightful combination of strawberries and chocolate in a beautiful gift box. A perfect sweet treat for birthdays, anniversaries, or any celebration."
  },
  {
    id: 16,
    name: "Nuts Chocolate Box",
    price: 45,
    category: "boxes",
    image: "/images/nutsbox0.jpg",
    imagesList: [
      "/images/nutsbox1.jpg",
      "/images/nutsbox2.jpg",
      "/images/nutsbox3.jpg",
      "/images/nutsbox4.jpg",
    ],
    description:
      "A luxurious assortment of rich chocolate paired with a variety of premium nuts, including almonds, hazelnuts, and pistachios. Perfect for gifting or indulging in a crunchy, chocolatey delight.",
  },
  {
    id: 17,
    name: "White Chocolate Box",
    price: 40,
    category: "boxes",
    image: "/images/whitechocbox0.jpg",
    imagesList: [
      "/images/whitechocbox1.jpg",
      "/images/whitechocbox2.jpg",
      "/images/whitechocbox3.jpg",
      "/images/whitechocbox4.jpg",
    ],
    description:
      "A curated selection of creamy white chocolates with a smooth and velvety texture, perfect for those who appreciate the subtle sweetness of white chocolate. A delightful treat for any occasion.",
  },
  {
    id: 18,
    name: "Pink Chocolate Box",
    price: 30,
    category: "boxes",
    image: "/images/pinkbox0.jpg",
    imagesList: [
      "/images/pinkbox1.jpg",
      "/images/pinkbox2.jpg",
      "/images/pinkbox3.jpg",
      "/images/pinkbox4.jpg",
    ],
    description:
      "A charming box filled with strawberry-infused pink chocolates, offering a perfect balance of sweetness and fruitiness. An ideal gift to express love and affection on special occasions.",
  },
  {
    id: 19,
    name: "Red Chocolate Box",
    price: 55,
    category: "boxes",
    image: "/images/redbox0.jpg",
    imagesList: [
      "/images/redbox1.jpg",
      "/images/redbox2.jpg",
      "/images/redbox3.jpg",
      "/images/redbox4.jpg",
    ],
    description:
      "An elegant red box packed with handcrafted chocolates in a variety of flavors. Each piece is carefully selected to deliver a burst of rich cocoa goodness, making it the perfect romantic gesture.",
  },
  {
    id: 20,
    name: "Rainbow Chocolate Box",
    price: 60,
    category: "boxes",
    image: "/images/rainbowbox0.jpg",
    imagesList: [
      "/images/rainbowbox1.jpg",
      "/images/rainbowbox2.jpg",
      "/images/rainbowbox3.jpg",
      "/images/rainbowbox4.jpg",
    ],
    description:
      "A colorful selection of chocolates in every shade of the rainbow, offering a wide range of flavors from fruity to nutty. Ideal for celebrations, this box brings joy with every bite.",
  },

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