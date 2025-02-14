const menuItemsName = [
  {name:"Air Force",},
  {name:"Jordan",},
  {name:"Blaze",},
  {name:"Crater",},
  {name:"Hippie",},
]

const slideData = [
    {img:"https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/e3467ff9-70f0-4027-bbce-6db7a5c7b1ee/variations/Default_create_nike_air_force_shoe_in_black_1_e3467ff9-70f0-4027-bbce-6db7a5c7b1ee_0.png", color:"bg-red-500", text:"text-red-500", title:"Air Force", newPrice:"199", newPrice2:"199", noItems: 1,}, 
    {img:"https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/1cf3721e-8eb6-4a6d-bbea-75d1af8ae239/variations/Default_create_high_quality_image_with_air_jordan_shoe_in_yell_2_1cf3721e-8eb6-4a6d-bbea-75d1af8ae239_0.png", color:"bg-yellow-500", text:"text-yellow-500", title:"Air Jordan", newPrice:"299", newPrice2:"299", noItems: 1,},
    {img:"https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/5e134d85-5475-41c2-bc7f-b651e3185e2f/variations/Default_nike_air_jordan_blue_sneaker_0_5e134d85-5475-41c2-bc7f-b651e3185e2f_0.png", color:"bg-blue-500", text:"text-blue-500" , title:"Blaze", newPrice:"149", newPrice2:"149", noItems: 1,},
    {img:"https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/3810e149-a135-4289-9f34-505af9ad68a1/variations/Default_create_nike_air_jordan_shoe_in_black_2_3810e149-a135-4289-9f34-505af9ad68a1_0.png", color:"bg-gray-500", text:"text-gray-500", title:"Crater", newPrice:"179", newPrice2:"179", noItems: 1,},
    {img:"https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/479182a9-ff0e-4bf6-814d-0aca04cd0706/variations/Default_green_air_jordan_sneaker_3_479182a9-ff0e-4bf6-814d-0aca04cd0706_0.png", color:"bg-green-500", text:"text-green-500", title:"Hippie", newPrice:"159", newPrice2:"159", noItems: 1,},
];

const featureData = [
    {img:"https://img.icons8.com/?size=200&id=8290&format=png&color=EF4444", img2:"https://img.icons8.com/wired/200/EF4444/free-shipping.png", title:"Free Shipping", desc:"Free Worldwide Shipping On All Orders."},
    {img:"https://img.icons8.com/?size=200&id=UhclbL6j7ysE&format=png&color=EF4444", img2:"https://img.icons8.com/wired/200/EF4444/return-purchase.png", title:"30 Days Return", desc:"Easy Refund In 14 Days"},
    {img:"https://img.icons8.com/?size=200&id=36069&format=png&color=EF4444", img2:"https://img.icons8.com/external-icongeek26-outline-icongeek26/200/EF4444/external-Gift-Card-e-commerce-icongeek26-outline-icongeek26.png", title:"Gift Cards", desc:"Buy Gifts Card And Use Coupon Code Easily"},
    {img:"https://img.icons8.com/?size=200&id=t1QhJ1rCvYZA&format=png&color=EF4444", img2:"https://img.icons8.com/wired/200/EF4444/paper-plane.png", title:"Contact Us", desc:"Keep In Touch Via Email And Support System."},
];

const galleryData = [
    {img:"https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title:"Be Yourself!"},
    {img:"https://images.unsplash.com/photo-1579199265916-436a773ce30b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title:"First day of your new life"},
    {img:"https://images.unsplash.com/photo-1490168105446-f43395eb50b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80", title:"Just do it!"},
]

////
///
//

const dataBase = [
  {
    img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
    title: "Nike Air Monarch IV",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    newPrice2: "200",
    company: "Nike",
    color: "white",
    category: "sneakers",
    noItems: 1,
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Nike Air Vapormax Plus",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    newPrice2: "200",
    company: "Nike",
    color: "red",
    category: "sneakers",
    noItems: 1,
  },

  {
    img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
    title: "Nike Waffle One Sneaker",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    newPrice2: "200",
    company: "Nike",
    color: "green",
    category: "sneakers",
    noItems: 1,
  },
  {
    img: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
    title: "Nike Running Shoe",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    newPrice2: "200",
    company: "Adidas",
    color: "black",
    category: "sneakers",
    noItems: 1,
  },
  {
    img: "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
    title: "Flat Slip On Pumps",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    newPrice2: "200",
    company: "Vans",
    color: "green",
    category: "flats",
    noItems: 1,
  },
  {
    img: "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
    title: "Knit Ballet Flat",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    newPrice2: "50",
    company: "Adidas",
    color: "black",
    category: "flats",
    noItems: 1,
  },

  {
    img: "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
    title: "Loafer Flats",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    newPrice2: "50",
    company: "Vans",
    color: "white",
    category: "flats",
    noItems: 1,
  },

  {
    img: "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
    title: "Nike Zoom Freak",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    newPrice2: "200",
    company: "Nike",
    color: "green",
    category: "sneakers",
    noItems: 1,
  },

  {
    img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
    title: "Nike Men's Sneaker",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    newPrice2: "200",
    company: "Adidas",
    color: "blue",
    category: "sneakers",
    noItems: 1,
  },

  {
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "PUMA BLACK-OCE",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    newPrice2: "150",
    company: "Puma",
    color: "green",
    category: "sneakers",
    noItems: 1,
  },
  {
    img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
    title: "Pacer Future Sneaker",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    newPrice2: "150",
    company: "Puma",
    color: "red",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
    title: "Unisex-Adult Super",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    newPrice2: "150",
    company: "Puma",
    color: "black",
    category: "sneakers",
    noItems: 1,
  },
  {
    img: "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
    title: "Roma Basic Sneaker",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    newPrice2: "150",
    company: "Puma",
    color: "white",
    category: "sneakers",
    noItems: 1,
  },
  {
    img: "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
    title: "Pacer Future Doubleknit",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    newPrice2: "150",
    company: "Puma",
    color: "black",
    category: "sneakers",
    noItems: 1,
  },

  {
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "Fusion Evo Golf Shoe",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "100",
    newPrice2: "100",
    company: "Puma",
    color: "green",
    category: "sneakers",
    noItems: 1,
  },
  {
    img: "https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg",
    title: "Rainbow Chex Skate",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "100",
    newPrice2: "100",
    company: "Vans",
    color: "red",
    category: "flats",
    noItems: 1,
  },
  {
    img: "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
    title: "Low-Top Trainers",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "100",
    newPrice2: "100",
    company: "Vans",
    color: "white",
    category: "sandals",
    noItems: 1,
  },
  {
    img: "https://m.media-amazon.com/images/I/71pf7VFs9CL._AC_UX575_.jpg",
    title: "Vans Unisex Low-Top",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "100",
    newPrice2: "100",
    company: "Vans",
    color: "blue",
    category: "sandals",
    noItems: 1,
  },
  {
    img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
    title: "Classic Bandana Sneakers",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    newPrice2: "50",
    company: "Nike",
    color: "black",
    category: "sandals",
    noItems: 1,
  },
  {
    img: "https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg",
    title: "Chunky High Heel",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    newPrice2: "50",
    company: "Vans",
    color: "black",
    category: "heels",
    noItems: 1,
  },
  {
    img: "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
    title: "Slip On Stiletto High Heel",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "100",
    newPrice2: "100",
    company: "puma",
    color: "black",
    category: "heels",
    noItems: 1,
  },
  {
    img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
    title: "DREAM PAIRS Court Shoes",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    newPrice2: "150",
    company: "Nike",
    color: "red",
    category: "heels",
    noItems: 1,
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Nike Air Vapormax Plus",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    newPrice2: "200",
    company: "Nike",
    color: "red",
    category: "sneakers",
    noItems: 1,
  },

  {
    img: "https://m.media-amazon.com/images/I/51PGWTXgf-L._AC_UY625_.jpg",
    title: "Low Mid Block Heels",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    newPrice2: "200",
    company: "Nike",
    color: "black",
    category: "heels",
    noItems: 1,
  },
  {
    img: "https://m.media-amazon.com/images/I/616sA5XUKtL._AC_UY675_.jpg",
    title: "Chunky High Heel",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    newPrice2: "50",
    company: "Adidas",
    color: "black",
    category: "heels",
    noItems: 1,
  },
  {
    img: "https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg",
    title: "Amore Fashion Stilettos",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    newPrice2: "150",
    company: "Adidas",
    color: "white",
    category: "heels",
    noItems: 1,
  },
  {
    img: "https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg",
    title: "Bridal Sandals Glitter",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    newPrice2: "50",
    company: "Adidas",
    color: "black",
    category: "heels",
    noItems: 1,
  },
  {
    img: "https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg",
    title: "Wedding Prom Bridal",
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    newPrice2: "50",
    company: "Adidas",
    color: "black",
    category: "flats",
    noItems: 1,
  },
];

const initialProductData = [
  {
    title: "Nike Pegasus",
    price: "$149",
    desc: "High-performance running shoe designed for speed and comfort, featuring responsive cushioning and a breathable mesh upper.",
    mobDesc:"Speed and comfort in a high-performance runner with responsive cushioning.",
    displayImg:"https://cdn.leonardo.ai/users/8d611489-0d5f-4751-a2ec-062c4b782ea8/generations/f6237ddb-744b-4255-8f04-bf20a0ac1bd2/variations/Default_nike_air_jordan_shoes_3_f6237ddb-744b-4255-8f04-bf20a0ac1bd2_0.png",
    item1: {
      img: "https://cdn.leonardo.ai/users/8d611489-0d5f-4751-a2ec-062c4b782ea8/generations/f6237ddb-744b-4255-8f04-bf20a0ac1bd2/variations/Default_nike_air_jordan_shoes_3_f6237ddb-744b-4255-8f04-bf20a0ac1bd2_0.png",
      color: "#D7262A",
      title:"Nike Pegasus",
      desc: "High-performance running shoe designed for speed and comfort, featuring responsive cushioning and a breathable mesh upper.",
    },
    item2: {
      img: "https://cdn.leonardo.ai/users/9e51583c-3ad7-46cd-8cb1-d09fc26ccdbf/generations/240bf4c6-d397-4ab2-b990-d0c8086947ce/variations/Default_air_jordan_0_240bf4c6-d397-4ab2-b990-d0c8086947ce_0.png",
      color: "#8F2525",
      title:"Nike Flex",
      desc: "Lightweight running shoe designed for natural movement, offering flexibility and a barefoot-like feel for a more adaptive stride.",
    },
  },
  {
    title: "Nike Infinity",
    price: "$175",
    desc: "Versatile running shoe engineered for maximum support and durability, offering a smooth ride and exceptional energy return.",
    mobDesc:"Maximum support and durability for a smooth, energized run.",
    displayImg:"https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/fb5734ff-020c-4a8d-8407-52da9fea1af7/variations/Default_nike_air_jordan_orange_sneaker_2_fb5734ff-020c-4a8d-8407-52da9fea1af7_0.png",
    item1: {
      img: "https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/fb5734ff-020c-4a8d-8407-52da9fea1af7/variations/Default_nike_air_jordan_orange_sneaker_2_fb5734ff-020c-4a8d-8407-52da9fea1af7_0.png",
      color: "#FC7B2D",
      title: "Nike Infinity",
      desc: "Versatile running shoe engineered for maximum support and durability, offering a smooth ride and exceptional energy return.",
    },
    item2: {
      img: "https://cdn.leonardo.ai/users/8d611489-0d5f-4751-a2ec-062c4b782ea8/generations/9a2b1093-22da-443e-8831-afca5e3fb0d5/variations/Default_nike_air_jordan_shoes_1_9a2b1093-22da-443e-8831-afca5e3fb0d5_0.png",
      color: "#B4B3B7",
      title: "Nike VapMax",
      desc: "Innovative running shoe engineered for superior cushioning, featuring tiny beads in the midsole for a personalized, responsive feel.",
    },
  },
  {
    title: "Nike Air Force",
    price: "$119",
    desc: "Classic sneaker reimagined with modern details, known for its iconic design, premium leather construction, and timeless style.",
    mobDesc:"Classic style meets modern design in premium leather.",
    displayImg:"https://cdn.leonardo.ai/users/9e51583c-3ad7-46cd-8cb1-d09fc26ccdbf/generations/a1b280f1-8dfd-4201-88fe-07ac1cc8aba7/variations/Default_Nike_Shoes_3_a1b280f1-8dfd-4201-88fe-07ac1cc8aba7_0.png",
    item1: {
      img: "https://cdn.leonardo.ai/users/9e51583c-3ad7-46cd-8cb1-d09fc26ccdbf/generations/a1b280f1-8dfd-4201-88fe-07ac1cc8aba7/variations/Default_Nike_Shoes_3_a1b280f1-8dfd-4201-88fe-07ac1cc8aba7_0.png",
      color: "#7EA9B1",
      title: "Nike Air Force",
      desc: "Classic sneaker reimagined with modern details, known for its iconic design, premium leather construction, and timeless style.",
    },
    item2: {
      img: "https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/d06f89d4-7fee-4f7c-b49b-656ed964069a/variations/Default_create_high_quality_image_with_nike_shoe_3_d06f89d4-7fee-4f7c-b49b-656ed964069a_0.png",
      color: "#2EBAC7",
      title: "Nike Flyknit",
      desc: "Iconic sneaker recognized for its retro design and visible full-length Air unit, delivering lightweight cushioning and a bold aesthetic.",
    },
  },
  {
    title: "Nike Air Max",
    price: "$229",
    desc: "Revolutionary running shoe designed for long-distance comfort, featuring ZoomX foam and a stable, supportive design.",
    mobDesc:"Lifestyle sneaker with a large Air Max unit for style and comfort.",
    displayImg:"https://cdn.leonardo.ai/users/9e51583c-3ad7-46cd-8cb1-d09fc26ccdbf/generations/b6a4dc15-0862-4f73-bf3b-206662d203aa/variations/Default_air_jordan_2_b6a4dc15-0862-4f73-bf3b-206662d203aa_0.png",
    item1: {
      img: "https://cdn.leonardo.ai/users/9e51583c-3ad7-46cd-8cb1-d09fc26ccdbf/generations/b6a4dc15-0862-4f73-bf3b-206662d203aa/variations/Default_air_jordan_2_b6a4dc15-0862-4f73-bf3b-206662d203aa_0.png",
      color: "#7E7D80",
      title: "Nike Air Max",
      desc: "Revolutionary running shoe designed for long-distance comfort, featuring ZoomX foam and a stable, supportive design.",
    },
    item2: {
      img: "https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/cf883e79-4fa3-4313-aba8-d178a058ca42/variations/Default_nike_air_jordan_gray_sneaker_0_cf883e79-4fa3-4313-aba8-d178a058ca42_0.png",
      color: "#C1C8D2",
      title: "Nike Joyride",
      desc: "Comfortable running shoe designed for everyday use, providing cushioning and stability for a smooth and reliable run.",
    },
  },
  {
    title: "Nike RN Max",
    price: "$249",
    desc: "Lifestyle sneaker combining style and comfort, featuring a large Air Max unit for cushioning and a sleek, modern silhouette.",
    mobDesc:"Lightweight, flexible running shoe for natural movement.",
    displayImg:"https://cdn.leonardo.ai/users/8d611489-0d5f-4751-a2ec-062c4b782ea8/generations/54a1cb9a-9528-4a5d-a389-c24494b0fdb9/variations/Default_nike_sneakers_1_54a1cb9a-9528-4a5d-a389-c24494b0fdb9_0.png",
    item1: {
      img: "https://cdn.leonardo.ai/users/8d611489-0d5f-4751-a2ec-062c4b782ea8/generations/54a1cb9a-9528-4a5d-a389-c24494b0fdb9/variations/Default_nike_sneakers_1_54a1cb9a-9528-4a5d-a389-c24494b0fdb9_0.png",
      color: "#B5BF8A",
      title: "Nike RN Max",
      desc: "Lifestyle sneaker combining style and comfort, featuring a large Air Max unit for cushioning and a sleek, modern silhouette.",
    },
    item2: {
      img: "https://cdn.leonardo.ai/users/8d611489-0d5f-4751-a2ec-062c4b782ea8/generations/bcabdefd-bdf8-4523-a45d-cc2426d529c9/variations/Default_nike_sneakers_2_bcabdefd-bdf8-4523-a45d-cc2426d529c9_0.png",
      color: "#E9A99A",
      title: "Nike ZoomX",
      desc: "Futuristic running shoe featuring VaporMax technology for lightweight, bouncy cushioning and a snug, sock-like fit.",
    },
  },
]

const productDataCopy = [
  {
      img: "https://cdn.leonardo.ai/users/8d611489-0d5f-4751-a2ec-062c4b782ea8/generations/f6237ddb-744b-4255-8f04-bf20a0ac1bd2/variations/Default_nike_air_jordan_shoes_3_f6237ddb-744b-4255-8f04-bf20a0ac1bd2_0.png",
      title: "Nike Pegasus",
      newPrice: "149",
      newPrice2: "149",
      noItems: 1,
  },
  {
      img: "https://cdn.leonardo.ai/users/9e51583c-3ad7-46cd-8cb1-d09fc26ccdbf/generations/240bf4c6-d397-4ab2-b990-d0c8086947ce/variations/Default_air_jordan_0_240bf4c6-d397-4ab2-b990-d0c8086947ce_0.png",
      title: "Nike Flex",
      newPrice: "149",
      newPrice2: "149",
      noItems: 1,
  },
  {
      img: "https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/fb5734ff-020c-4a8d-8407-52da9fea1af7/variations/Default_nike_air_jordan_orange_sneaker_2_fb5734ff-020c-4a8d-8407-52da9fea1af7_0.png",
      title: "Nike Infinity",
      newPrice: "175",
      newPrice2: "175",
      noItems: 1,
  },
  {
      img: "https://cdn.leonardo.ai/users/8d611489-0d5f-4751-a2ec-062c4b782ea8/generations/9a2b1093-22da-443e-8831-afca5e3fb0d5/variations/Default_nike_air_jordan_shoes_1_9a2b1093-22da-443e-8831-afca5e3fb0d5_0.png",
      title: "Nike VapMax",
      newPrice: "175",
      newPrice2: "175",
      noItems: 1,
  },,
  {
      img: "https://cdn.leonardo.ai/users/9e51583c-3ad7-46cd-8cb1-d09fc26ccdbf/generations/a1b280f1-8dfd-4201-88fe-07ac1cc8aba7/variations/Default_Nike_Shoes_3_a1b280f1-8dfd-4201-88fe-07ac1cc8aba7_0.png",
      title: "Nike Air Force",
      newPrice: "119",
      newPrice2: "119",
      noItems: 1,
  },,
  {
      img: "https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/d06f89d4-7fee-4f7c-b49b-656ed964069a/variations/Default_create_high_quality_image_with_nike_shoe_3_d06f89d4-7fee-4f7c-b49b-656ed964069a_0.png",
      title: "Nike Flyknit",
      newPrice: "119",
      newPrice2: "119",
      noItems: 1,
  },,
  {
      img: "https://cdn.leonardo.ai/users/9e51583c-3ad7-46cd-8cb1-d09fc26ccdbf/generations/b6a4dc15-0862-4f73-bf3b-206662d203aa/variations/Default_air_jordan_2_b6a4dc15-0862-4f73-bf3b-206662d203aa_0.png",
      title: "Nike Air Max",
      newPrice: "229",
      newPrice2: "229",
      noItems: 1,
  },,
  {
      img: "https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/cf883e79-4fa3-4313-aba8-d178a058ca42/variations/Default_nike_air_jordan_gray_sneaker_0_cf883e79-4fa3-4313-aba8-d178a058ca42_0.png",
      title: "Nike Joyride",
      newPrice: "229",
      newPrice2: "229",
      noItems: 1,
  },,
  {
      img: "https://cdn.leonardo.ai/users/8d611489-0d5f-4751-a2ec-062c4b782ea8/generations/54a1cb9a-9528-4a5d-a389-c24494b0fdb9/variations/Default_nike_sneakers_1_54a1cb9a-9528-4a5d-a389-c24494b0fdb9_0.png",
      title: "Nike RN Max",
      newPrice: "249",
      newPrice2: "249",
      noItems: 1,
  },,
  {
      img: "https://cdn.leonardo.ai/users/8d611489-0d5f-4751-a2ec-062c4b782ea8/generations/bcabdefd-bdf8-4523-a45d-cc2426d529c9/variations/Default_nike_sneakers_2_bcabdefd-bdf8-4523-a45d-cc2426d529c9_0.png",
      title: "Nike ZoomX",
      newPrice: "249",
      newPrice2: "249",
      noItems: 1,
  },
]

const categoryData = [
  {title:"All", id:"cat1", value:""},
  {title:"Sneakers", id:"cat2", value:"sneakers"},
  {title:"Flats", id:"cat3", value:"flats"},
  {title:"Sandals", id:"cat4", value:"sandals"},
  {title:"Heels", id:"cat5", value:"heels"},
];

const priceData = [
  {title:"All", id:"pri1", value:""},
  {title:"$0-50", id:"pri2", value:"50"},
  {title:"$50-100", id:"pri3", value:"100"},
  {title:"$100-150", id:"pri4", value:"150"},
  {title:"Over $150", id:"pri5", value:"200"},
];

const colorData = [
  {title:"All", id:"col1", value:"", color:"bg-gradient-to-b from-purple-800 to-pink-500"},
  {title:"Black", id:"col2", value:"black", color:"bg-black",},
  {title:"Blue", id:"col3", value:"blue", color:"bg-blue-500",},
  {title:"Red", id:"col4", value:"red", color:"bg-red-500",},
  {title:"Green", id:"col5", value:"green", color:"bg-green-500",},
  {title:"White", id:"col6", value:"white", color:"bg-gray-300",},
];

const buttonTitleData = [
  {title:"All Products", value:""}, {title:"Nike", value:"Nike"}, {title:"Adidas", value:"Adidas"}, {title:"Puma", value:"Puma"}, {title:"Vans", value:"Vans"},
]

const footerData = [
  {title:"About Us", more:[
    {subTitle:"Company",},{subTitle:"Contact"},{subTitle:"Careers"},{subTitle:"Affiliates"},{subTitle:"Stores"},
  ]},
  {title:"Useful links", more:[
    {subTitle:"Support",},{subTitle:"Refund"},{subTitle:"Careers"},{subTitle:"FAQ"},{subTitle:"Stores"},
  ]},
  {title:"Products", more:[
    {subTitle:"AIR FORCE", color:"bg-red-500",},{subTitle:"AIR JORDAN", color:"bg-yellow-500",},{subTitle:"BLAZER", color:"bg-blue-500",},{subTitle:"CRATER", color:"bg-gray-500",},{subTitle:"HIPPIE", color:"bg-green-500",},
  ]},
]

export {menuItemsName, slideData, featureData, galleryData, dataBase, initialProductData, productDataCopy, categoryData, priceData, colorData, buttonTitleData, footerData};