import { Product, Category, Brand } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Air Max 90",
    price: 120,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/blvtfsit0cdzabgkss7j/air-max-90-mens-shoes-6n3vKB.png",
    description: "The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey.",
    category: "men",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: ["White", "Black", "Blue"],
    brand: "Nike",
    gender: "men",
    rating: 4.8
  },
  {
    id: 2,
    name: "Ultraboost 22",
    price: 180,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/61f87dec481e4512823bae7a0086fa78_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
    description: "Running reinvented. These adidas Ultraboost 22 running shoes deliver incredible energy return. The Primeknit upper provides a supportive fit that allows your foot to expand and contract naturally with your stride.",
    category: "women",
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
    colors: ["Black", "Pink", "White"],
    brand: "Adidas",
    gender: "women",
    rating: 4.9
  },
  {
    id: 3,
    name: "Chuck Taylor All Star",
    price: 55,
    image: "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw7cd89a28/images/a_107/M9160_A_107X1.jpg",
    description: "The Converse Chuck Taylor All Star is the one that started it all for Converse. The iconic silhouette is known worldwide for its cultural authenticity and classic simplicity.",
    category: "unisex",
    sizes: [4, 5, 6, 7, 8, 9, 10, 11, 12],
    colors: ["Black", "White", "Red"],
    brand: "Converse",
    gender: "unisex",
    rating: 4.5
  },
  {
    id: 4,
    name: "Old Skool",
    price: 70,
    image: "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$",
    description: "The Old Skool was the first Vans shoe to feature the iconic sidestripe. Originally called the 'jazz stripe', it has become the unmistakable hallmark of the Vans brand.",
    category: "unisex",
    sizes: [5, 6, 7, 8, 9, 10, 11, 12],
    colors: ["Black", "White", "Blue"],
    brand: "Vans",
    gender: "unisex",
    rating: 4.7
  },
  {
    id: 5,
    name: "574 Core",
    price: 90,
    image: "https://nb.scene7.com/is/image/NB/ml574evn_nb_02_i?$pdpflexf2$&wid=440&hei=440",
    description: "The 574 Core from New Balance offers a clean and classic look with a suede and mesh upper for comfort and breathability. ENCAP midsole cushioning combines lightweight foam with a durable polyurethane rim to deliver all-day support.",
    category: "men",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: ["Navy", "Grey", "Black"],
    brand: "New Balance",
    gender: "men",
    rating: 4.6
  },
  {
    id: 6,
    name: "Gel-Kayano 28",
    price: 160,
    image: "https://images.asics.com/is/image/asics/1012A715_004_SR_RT_GLB?$sfcc-product$",
    description: "The GEL-KAYANO 28 running shoe from ASICS offers excellent support and comfort for those who need a little extra stability in their run. The Dynamic DuoMax Support System enhances stability and support, with reduced weight and improved platform comfort.",
    category: "women",
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
    colors: ["Black", "Blue", "Pink"],
    brand: "ASICS",
    gender: "women",
    rating: 4.8
  },
  {
    id: 7,
    name: "Classic Leather",
    price: 80,
    image: "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6d0688179e2b4f929d25a9620127c996_9366/Classic_Leather_Shoes_White_49799_01_standard.jpg",
    description: "The Reebok Classic Leather tennis shoes were first introduced in 1983 and have since become a staple in both athletic and fashionable footwear. They feature a soft leather upper that provides natural support and comfort.",
    category: "unisex",
    sizes: [5, 6, 7, 8, 9, 10, 11, 12],
    colors: ["White", "Black", "Grey"],
    brand: "Reebok",
    gender: "unisex",
    rating: 4.5
  },
  {
    id: 8,
    name: "Suede Classic",
    price: 70,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/374915/01/sv01/fnd/PNA/fmt/png/PUMA-Suede-Classic-XXI-Men's-Sneakers",
    description: "The PUMA Suede Classic features a suede upper with the world-famous PUMA Formstrip. It's a shoe with a rich heritage and a place in street culture that's still going strong after 50 years.",
    category: "men",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: ["Blue", "Red", "Black"],
    brand: "PUMA",
    gender: "men",
    rating: 4.6
  },
  {
    id: 9,
    name: "Nike Air Force 1",
    price: 100,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7fbc5e94-8d49-4730-a280-f19d3cfad0b0/air-force-1-07-shoes-WrLlWX.png",
    description: "The radiance lives on in the Nike Air Force 1, the basketball original that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine.",
    category: "men",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["White", "Black"],
    brand: "Nike",
    gender: "men",
    rating: 4.9
  },
  {
    id: 10,
    name: "Stan Smith",
    price: 85,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg",
    description: "The adidas Stan Smith shoes are a modern take on a tennis classic. The simple design and clean profile nods to the authentic look of the 1971 original.",
    category: "unisex",
    sizes: [5, 6, 7, 8, 9, 10, 11, 12],
    colors: ["White", "Green"],
    brand: "Adidas",
    gender: "unisex",
    rating: 4.7
  },
  {
    id: 11,
    name: "Sk8-Hi",
    price: 75,
    image: "https://images.vans.com/is/image/Vans/VN000D5IB8C-HERO?$583x583$",
    description: "The Sk8-Hi was introduced in 1978 as 'Style 38', and showcased the now-iconic Vans sidestripe on a higher silhouette. As only the second model featuring the sidestripe, the Sk8-Hi was an early testament to Vans' design innovation.",
    category: "unisex",
    sizes: [5, 6, 7, 8, 9, 10, 11, 12],
    colors: ["Black", "White", "Red"],
    brand: "Vans",
    gender: "unisex",
    rating: 4.6
  },
  {
    id: 12,
    name: "Fresh Foam 1080v11",
    price: 150,
    image: "https://nb.scene7.com/is/image/NB/m1080b11_nb_02_i?$pdpflexf2$&wid=440&hei=440",
    description: "The Fresh Foam 1080v11 is a premium neutral cushioned running shoe for the runner looking for a plush, comfortable ride who isn't willing to sacrifice performance.",
    category: "men",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Blue", "Black", "Grey"],
    brand: "New Balance",
    gender: "men",
    rating: 4.8
  },
  {
    id: 13,
    name: "Superstar",
    price: 90,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg",
    description: "Built for basketball, adopted by hip hop and skate, the Superstar has been worn by teams and crews who push culture forward. These shoes keep the classic shell toe and smooth leather upper of the '70s original.",
    category: "unisex",
    sizes: [5, 6, 7, 8, 9, 10, 11, 12],
    colors: ["White", "Black"],
    brand: "Adidas",
    gender: "unisex",
    rating: 4.7
  },
  {
    id: 14,
    name: "Air Jordan 1",
    price: 170,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-d2f71ab1-64f5-4430-a828-764e18784e27/air-jordan-1-mid-se-womens-shoes-4VBHnG.png",
    description: "The Air Jordan 1 Mid SE gives you similar hoops-inspired style as the original AJ1. Made with a mix of materials and colors, it's a fresh take on a classic look.",
    category: "women",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Red", "Black", "White"],
    brand: "Nike",
    gender: "women",
    rating: 4.9
  },
  {
    id: 15,
    name: "Classic Clog",
    price: 50,
    image: "https://www.crocs.com/dw/image/v2/BGNM_PRD/on/demandware.static/-/Sites-crocs_master/default/dwc4a5fe97/10001_001_ALT100.jpg?sw=540&sh=405",
    description: "The Crocs Classic Clog is incredibly light and fun to wear. The iconic silhouette features ventilation ports that add breathability and help shed water and debris.",
    category: "unisex",
    sizes: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    colors: ["Black", "White", "Blue", "Red", "Green"],
    brand: "Crocs",
    gender: "unisex",
    rating: 4.5
  },
  {
    id: 16,
    name: "Gazelle",
    price: 90,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e72b9dd6d10c47489596add80167bc5e_9366/Gazelle_Shoes_Black_BB5476_01_standard.jpg",
    description: "The Gazelle debuted as a training shoe in 1966 and has had a place in the fashion lineup ever since. These shoes have the original narrow shape, with a suede upper and serrated 3-Stripes.",
    category: "men",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Blue", "Black", "Red"],
    brand: "Adidas",
    gender: "men",
    rating: 4.6
  },
  {
    id: 17,
    name: "Metcon 7",
    price: 130,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2cf93d69-14cd-487c-9283-b4c181d5116c/metcon-7-mens-training-shoes-9Vmmx5.png",
    description: "The Nike Metcon 7 is the most stable and durable training shoe for lifting weights, high-intensity workouts, and cardio.",
    category: "men",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Black", "Grey", "Red"],
    brand: "Nike",
    gender: "men",
    rating: 4.8
  },
  {
    id: 18,
    name: "Cloud X",
    price: 140,
    image: "https://images.on-running.com/images/product/25.99760/model/ON-M-Cloud-X-Black-White-M.png?q=90&auto=format,compress&dpr=1.25",
    description: "The On Cloud X is a lightweight and responsive shoe designed for mixed-sport workouts. It features zero-gravity foam for weightless cushioning and a precision-molded heel cap for a secure fit.",
    category: "men",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Black", "White", "Blue"],
    brand: "On",
    gender: "men",
    rating: 4.7
  },
  {
    id: 19,
    name: "Classic Slip-On",
    price: 60,
    image: "https://images.vans.com/is/image/Vans/EYEBWW-HERO?$583x583$",
    description: "The Vans Classic Slip-On features durable slip-on canvas uppers, padded collars, elastic side accents, and signature rubber waffle outsoles.",
    category: "unisex",
    sizes: [5, 6, 7, 8, 9, 10, 11, 12],
    colors: ["Black", "White", "Checkerboard"],
    brand: "Vans",
    gender: "unisex",
    rating: 4.6
  },
  {
    id: 20,
    name: "Gel-Nimbus 23",
    price: 150,
    image: "https://images.asics.com/is/image/asics/1011B004_100_SR_RT_GLB?$sfcc-product$",
    description: "The GEL-NIMBUS 23 running shoe continues to offer excellent comfort and long-run impact absorption. Its improved stability provides a more balanced stride.",
    category: "women",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Blue", "Black", "Pink"],
    brand: "ASICS",
    gender: "women",
    rating: 4.7
  },
  {
    id: 21,
    name: "Yeezy Boost 350 V2",
    price: 220,
    image: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/008/654/842/original/182811_00.png.png",
    description: "The adidas Yeezy Boost 350 V2 features an upper composed of re-engineered Primeknit. The post-dyed monofilament side stripe is woven into the upper. A full-length Boost midsole provides responsive cushioning.",
    category: "unisex",
    sizes: [5, 6, 7, 8, 9, 10, 11, 12],
    colors: ["Zebra", "Black", "Cream"],
    brand: "Adidas",
    gender: "unisex",
    rating: 4.9
  },
  {
    id: 22,
    name: "Gel-Cumulus 23",
    price: 120,
    image: "https://images.asics.com/is/image/asics/1201A033_002_SR_RT_GLB?$sfcc-product$",
    description: "The GEL-CUMULUS 23 running shoe is a versatile trainer that's functional for various runners. The flytefoam midsole offering a softer feel and improved comfort.",
    category: "men",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Grey", "Blue", "Black"],
    brand: "ASICS",
    gender: "men",
    rating: 4.6
  },
  {
    id: 23,
    name: "Blazer Mid '77",
    price: 100,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5e4812f2-5185-4e5a-a77c-dc9990767338/blazer-mid-77-mens-shoes-CDsb4h.png",
    description: "The Nike Blazer Mid '77 has a vintage look and feel. The elevated design includes exposed foam on the tongue and a retro Swoosh finish.",
    category: "men",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["White", "Black", "Green"],
    brand: "Nike",
    gender: "men",
    rating: 4.7
  },
  {
    id: 24,
    name: "Disruptor II",
    price: 65,
    image: "https://images.fila.com/is/image/FilaUSA/5FM00002_125_1?hei=1000&wid=1000",
    description: "The Fila Disruptor II is a chunky, retro-style sneaker with a leather upper, EVA midsole for cushioning, and a rubber outsole for traction.",
    category: "women",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["White", "Black", "Pink"],
    brand: "Fila",
    gender: "women",
    rating: 4.5
  },
  {
    id: 25,
    name: "Revolution 6",
    price: 70,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/67f2c066-1c05-4310-97ca-dddff8b82598/revolution-6-road-running-shoes-zXqnhR.png",
    description: "The Nike Revolution 6 is designed for casual runners with lightweight cushioning and a soft, padded collar for ankle comfort.",
    category: "women",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Black", "Pink", "Grey"],
    brand: "Nike",
    gender: "women",
    rating: 4.5
  },
  {
    id: 26,
    name: "React Infinity Run Flyknit",
    price: 160,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-cead81da-1bc9-4599-9785-d66f5352e645/react-infinity-run-flyknit-2-road-running-shoes-Xpx2rK.png",
    description: "The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a comfortable fit with the smooth, springy ride you expect from React foam.",
    category: "men",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Black", "Blue", "Grey"],
    brand: "Nike",
    gender: "men",
    rating: 4.7
  },
  {
    id: 27,
    name: "FuelCell Rebel v2",
    price: 130,
    image: "https://nb.scene7.com/is/image/NB/mfcxlm2_nb_02_i?$pdpflexf2$",
    description: "The FuelCell Rebel v2 is designed for the runner looking for a fast, versatile option for a variety of runs. It features responsive FuelCell foam in the midsole and a breathable upper design.",
    category: "men",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Blue", "Black", "Red"],
    brand: "New Balance",
    gender: "men",
    rating: 4.7
  },
  {
    id: 28,
    name: "Ghost 14",
    price: 130,
    image: "https://www.brooksrunning.com/dw/image/v2/BGPF_PRD/on/demandware.static/-/Sites-brooks-master-catalog/default/dw43bac9c3/original/110369/110369-020-l-ghost-14-mens-cushion-running-shoe.jpg",
    description: "The Brooks Ghost 14 offers smooth transitions plus soft cushioning so your run is the only thing on your mind. It has been updated with new DNA LOFT foam for a softer feel underfoot.",
    category: "men",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Grey", "Blue", "Black"],
    brand: "Brooks",
    gender: "men",
    rating: 4.8
  },
  {
    id: 29,
    name: "Kinvara 12",
    price: 110,
    image: "https://s7d4.scene7.com/is/image/WolverineWorldWide/S10619-1_1200x735?wid=826&hei=685&resMode=bilin&op_usm=0.5,1.0,8,0&iccEmbed=0&printRes=72",
    description: "The Saucony Kinvara 12 is a lightweight, responsive shoe built for speed. It features a PWRRUN cushioning system for a responsive feel and a breathable mesh upper.",
    category: "women",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Pink", "Blue", "Black"],
    brand: "Saucony",
    gender: "women",
    rating: 4.6
  },
  {
    id: 30,
    name: "Speedgoat 4",
    price: 145,
    image: "https://cdn.shopify.com/s/files/1/0324/2069/1974/products/HOKAONEONE-SPEEDGOAT4W-1106527-BPBL-1_720x.jpg",
    description: "The HOKA ONE ONE Speedgoat 4 trail running shoe is designed with a wider midsole and toe box for enhanced stability. It features Vibram Megagrip rubber outsoles with 5mm lugs for traction on varied terrain.",
    category: "women",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Blue", "Black", "Red"],
    brand: "HOKA ONE ONE",
    gender: "women",
    rating: 4.8
  },
  {
    id: 31,
    name: "Kids' Air Max 270",
    price: 100,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2d9d0ef6-a736-4258-806f-6dd6a12fd9a9/air-max-270-big-kids-shoes-HbtNX3.png",
    description: "The Nike Air Max 270 is Nike's first lifestyle Air Max shoe with a 270-degree air unit. It offers all-day comfort and a sporty, modern look.",
    category: "kids",
    sizes: [3, 4, 5, 6, 7],
    colors: ["Black", "Red", "Blue"],
    brand: "Nike",
    gender: "unisex",
    rating: 4.7
  },
  {
    id: 32,
    name: "Kids' Ultraboost",
    price: 110,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c76ea3703934a5d8518aaf000eb9ae3_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9120_01_standard.jpg",
    description: "The kids' adidas Ultraboost features responsive boost cushioning and a supportive adidas Primeknit upper. It's designed to provide energy return with every step.",
    category: "kids",
    sizes: [3, 4, 5, 6, 7],
    colors: ["Black", "Blue", "Red"],
    brand: "Adidas",
    gender: "unisex",
    rating: 4.8
  },
  {
    id: 33,
    name: "Kids' Classic Leather",
    price: 55,
    image: "https://assets.reebok.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e650d56e38b645478750a98000f5a3db_9366/Classic_Leather_Shoes_-_Toddler_White_EH3044_01_standard.jpg",
    description: "The Reebok Classic Leather for kids offers the timeless style of the original with added durability and comfort for active kids.",
    category: "kids",
    sizes: [3, 4, 5, 6, 7],
    colors: ["White", "Black", "Pink"],
    brand: "Reebok",
    gender: "unisex",
    rating: 4.6
  },
  {
    id: 34,
    name: "Kids' Old Skool",
    price: 45,
    image: "https://images.vans.com/is/image/Vans/VN000W9T6BT-HERO?$583x583$",
    description: "The Kids' Vans Old Skool features the classic side stripe on a durable canvas and suede upper. The padded collars provide support and flexibility for growing feet.",
    category: "kids",
    sizes: [3, 4, 5, 6, 7],
    colors: ["Black", "Blue", "Red"],
    brand: "Vans",
    gender: "unisex",
    rating: 4.7
  },
  {
    id: 35,
    name: "Kids' Fresh Foam 680v6",
    price: 65,
    image: "https://nb.scene7.com/is/image/NB/yk680lb6_nb_02_i?$pdpflexf2$",
    description: "The New Balance Fresh Foam 680v6 for kids offers plush cushioning with a durable rubber outsole for traction. The breathable mesh upper keeps little feet cool and comfortable.",
    category: "kids",
    sizes: [3, 4, 5, 6, 7],
    colors: ["Blue", "Black", "Pink"],
    brand: "New Balance",
    gender: "unisex",
    rating: 4.6
  },
  {
    id: 36,
    name: "Pegasus 38",
    price: 120,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0e7fc8f3-76b7-4091-804b-2a3401e2bc6b/pegasus-38-road-running-shoes-D4VtC4.png",
    description: "The Nike Pegasus 38 offers responsive cushioning and a wider forefoot for a more comfortable fit. It's designed to keep your feet cushioned and secure for miles.",
    category: "men",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Black", "Grey", "Blue"],
    brand: "Nike",
    gender: "men",
    rating: 4.7
  },
  {
    id: 37,
    name: "Gel-Kayano 28",
    price: 160,
    image: "https://images.asics.com/is/image/asics/1012A715_002_SR_RT_GLB?$sfcc-product$",
    description: "The GEL-KAYANO 28 running shoe continues to offer excellent stability and comfort for overpronators. It features dynamic support for improved stride and reduced impact.",
    category: "men",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Grey", "Black", "Blue"],
    brand: "ASICS",
    gender: "men",
    rating: 4.8
  },
  {
    id: 38,
    name: "NMD_R1",
    price: 140,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2a18c4e3f104d52a697ad6a01477bb7_9366/NMD_R1_Shoes_Black_GZ9256_01_standard.jpg",
    description: "The adidas NMD_R1 combines a distinctive look with responsive Boost cushioning. The sock-like fit hugs your foot and provides comfort for all-day wear.",
    category: "men",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Black", "Grey", "Red"],
    brand: "Adidas",
    gender: "men",
    rating: 4.7
  },
  {
    id: 39,
    name: "Air Zoom Tempo NEXT%",
    price: 200,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/59b62ef5-9bdc-4e76-95ab-d407f7e72649/air-zoom-tempo-next-road-racing-shoes-FrBdRz.png",
    description: "The Nike Air Zoom Tempo NEXT% blends durability with race day-worthy energy return. It features responsive Zoom Air units and lightweight ZoomX foam for optimal performance.",
    category: "women",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Black", "Purple", "Green"],
    brand: "Nike",
    gender: "women",
    rating: 4.9
  },
  {
    id: 40,
    name: "Clifton 8",
    price: 130,
    image: "https://cdn.shopify.com/s/files/1/0324/2069/1974/products/HOKAONEONE-CLIFTON8W-1119396-BBLC-1_720x.jpg",
    description: "The HOKA ONE ONE Clifton 8 offers a smooth, balanced ride with a lightweight, responsive foam midsole. The engineered mesh upper provides breathability and comfort.",
    category: "women",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Blue", "Black", "White"],
    brand: "HOKA ONE ONE",
    gender: "women",
    rating: 4.8
  },
  {
    id: 41,
    name: "Endorphin Speed 2",
    price: 160,
    image: "https://s7d4.scene7.com/is/image/WolverineWorldWide/S20688-35_1200x735?wid=826&hei=685&resMode=bilin&op_usm=0.5,1.0,8,0&iccEmbed=0&printRes=72",
    description: "The Saucony Endorphin Speed 2 is a lightweight, responsive training shoe with a nylon plate for propulsion. The PWRRUN PB cushioning provides a springy, responsive feel.",
    category: "women",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Pink", "Green", "Black"],
    brand: "Saucony",
    gender: "women",
    rating: 4.7
  },
  {
    id: 42,
    name: "Kids' Jazz Original",
    price: 42,
    image: "https://s7d4.scene7.com/is/image/WolverineWorldWide/SK261578_1200x735?wid=826&hei=685&resMode=bilin&op_usm=0.5,1.0,8,0&iccEmbed=0&printRes=72",
    description: "The Saucony Kids' Jazz Original features a durable suede and nylon upper with a padded tongue and collar for comfort. The EVA midsole provides cushioning for all-day play.",
    category: "kids",
    sizes: [3, 4, 5, 6, 7],
    colors: ["Blue", "Red", "Pink"],
    brand: "Saucony",
    gender: "unisex",
    rating: 4.5
  },
  {
    id: 43,
    name: "Kids' Court Borough Low",
    price: 55,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-9f34f5e7-1e66-4625-a9ac-57c80d868045/court-borough-low-2-big-kids-shoes-kC7xN8.png",
    description: "The Nike Court Borough Low offers classic basketball style in a durable design. The leather and synthetic upper provides support while the rubber cupsole ensures traction.",
    category: "kids",
    sizes: [3, 4, 5, 6, 7],
    colors: ["White", "Black", "Pink"],
    brand: "Nike",
    gender: "unisex",
    rating: 4.6
  },
  {
    id: 44,
    name: "Kids' Fortarun",
    price: 65,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/87584c9fc2e349bbb338ac5e003eb3ef_9366/FortaRun_Running_Shoes_2020_Blue_FW3719_01_standard.jpg",
    description: "The adidas Fortarun offers cushioned support for active kids. The breathable mesh upper keeps feet cool, while the durable outsole provides traction for playground adventures.",
    category: "kids",
    sizes: [3, 4, 5, 6, 7],
    colors: ["Blue", "Black", "Pink"],
    brand: "Adidas",
    gender: "unisex",
    rating: 4.7
  },
  {
    id: 45,
    name: "Renew Run",
    price: 90,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-f51a0a29-78ce-4472-a32f-b04214b12338/renew-run-mens-running-shoe-Wj9Lqg.png",
    description: "The Nike Renew Run offers soft, responsive foam for comfort and a durable outsole for traction. The mesh upper provides breathability for a cool run.",
    category: "men",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Grey", "Black", "Blue"],
    brand: "Nike",
    gender: "men",
    rating: 4.6
  },
  {
    id: 46,
    name: "Gel-Venture 8",
    price: 70,
    image: "https://images.asics.com/is/image/asics/1011A824_020_SR_RT_GLB?$sfcc-product$",
    description: "The GEL-VENTURE 8 running shoe features a trail-specific outsole with reversed lugs for uphill and downhill traction. The ORTHOLITE sockliner provides cushioning and moisture management.",
    category: "women",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Grey", "Black", "Purple"],
    brand: "ASICS",
    gender: "women",
    rating: 4.5
  },
  {
    id: 47,
    name: "ZoomX Invincible Run Flyknit",
    price: 180,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7e0a0e99-9002-4b33-9e54-833e29722709/zoomx-invincible-run-flyknit-mens-road-running-shoes-sP8SDN.png",
    description: "The Nike ZoomX Invincible Run Flyknit offers high levels of cushioning and energy return with ZoomX foam. The Flyknit upper provides stretch and support where you need it.",
    category: "men",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Black", "White", "Red"],
    brand: "Nike",
    gender: "men",
    rating: 4.8
  },
  {
    id: 48,
    name: "Kids' Authentic",
    price: 35,
    image: "https://images.vans.com/is/image/Vans/EE3RED-HERO?$583x583$",
    description: "The Vans Kids' Authentic features the original low-top construction with a durable canvas upper, metal eyelets, and the signature waffle outsole for grip and support.",
    category: "kids",
    sizes: [3, 4, 5, 6, 7],
    colors: ["Red", "Black", "Blue"],
    brand: "Vans",
    gender: "unisex",
    rating: 4.6
  },
  {
    id: 49,
    name: "Novablast",
    price: 130,
    image: "https://images.asics.com/is/image/asics/1011B259_001_SR_RT_GLB?$sfcc-product$",
    description: "The ASICS Novablast delivers energetic cushioning with FLYTEFOAM Blast technology. The lightweight design and responsive rebound make it perfect for neutral runners seeking a fun, bouncy run.",
    category: "women",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Black", "Pink", "Blue"],
    brand: "ASICS",
    gender: "women",
    rating: 4.7
  },
  {
    id: 50,
    name: "Alphabounce+",
    price: 100,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f5bf3559e3514e2d8722aaf800baf238_9366/Alphabounce+_Shoes_White_GX0561_01_standard.jpg",
    description: "The adidas Alphabounce+ offers a responsive ride with Bounce cushioning. The supportive fit adapts to your foot's natural movement for a comfortable, secure feel.",
    category: "men",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["White", "Black", "Grey"],
    brand: "Adidas",
    gender: "men",
    rating: 4.6
  },
  {
    id: 51,
    name: "Air Max 270 React",
    price: 150,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-2ff8b828-d69a-4e7d-9f8e-7576c695c197/air-max-270-react-mens-shoes-6bhhrf.png",
    description: "The Nike Air Max 270 React combines the large Air unit from the Air Max 270 with React foam for a combined cushioning experience. The design offers all-day comfort with a modern, stylish look.",
    category: "men",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Black", "White", "Multicolor"],
    brand: "Nike",
    gender: "men",
    rating: 4.7
  },
  {
    id: 52,
    name: "Kids' Revolution 5",
    price: 50,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-1ed4011f-b6f3-4c7e-9dc1-006256c51c92/revolution-5-little-kids-shoes-JscLHR.png",
    description: "The Nike Revolution 5 for kids offers lightweight cushioning and a soft, flexible feel. The durable rubber outsole provides traction for active play.",
    category: "kids",
    sizes: [3, 4, 5, 6, 7],
    colors: ["Blue", "Pink", "Black"],
    brand: "Nike",
    gender: "unisex",
    rating: 4.5
  },
  {
    id: 53,
    name: "Fresh Foam Roav",
    price: 85,
    image: "https://nb.scene7.com/is/image/NB/wroavlk_nb_02_i?$pdpflexf2$",
    description: "The New Balance Fresh Foam Roav delivers a bold, modern look with performance features. The Ultra Heel and bootie construction offer a supported, comfortable fit.",
    category: "women",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Grey", "Black", "Pink"],
    brand: "New Balance",
    gender: "women",
    rating: 4.6
  },
  {
    id: 54,
    name: "Solar Boost 3",
    price: 140,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f4891ca78d9342beac15ac0900d52a94_9366/Solarboost_3_Shoes_Blue_FY0315_01_standard.jpg",
    description: "The adidas Solar Boost 3 offers responsive Boost cushioning with a propulsion system for a smooth, energized ride. The upper provides a secure fit with targeted support.",
    category: "men",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Blue", "Black", "Grey"],
    brand: "Adidas",
    gender: "men",
    rating: 4.7
  },
  {
    id: 55,
    name: "Gel-Contend 7",
    price: 60,
    image: "https://images.asics.com/is/image/asics/1012A910_401_SR_RT_GLB?$sfcc-product$",
    description: "The GEL-CONTEND 7 running shoe is designed for the low-mileage runner seeking value, comfort, and versatility. The AmpliFoam midsole provides a comfortable and supportive feel.",
    category: "women",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Blue", "Black", "White"],
    brand: "ASICS",
    gender: "women",
    rating: 4.5
  },
  {
    id: 56,
    name: "Kids' Flexy Run",
    price: 45,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/18aa4ac572c94e5c99fdac9e00a83b02_9366/FortaRun_Running_Shoes_2020_Purple_FX0016_01_standard.jpg",
    description: "The Skechers Kids' Flexy Run offers a flexible, lightweight design with memory foam insoles for comfort. The mesh upper keeps feet cool during active play.",
    category: "kids",
    sizes: [3, 4, 5, 6, 7],
    colors: ["Purple", "Pink", "Blue"],
    brand: "Skechers",
    gender: "unisex",
    rating: 4.5
  },
  {
    id: 57,
    name: "UltraRange EXO",
    price: 100,
    image: "https://images.vans.com/is/image/Vans/VN0A4UWMBLK-HERO?$583x583$",
    description: "The Vans UltraRange EXO combines comfort, grip, and durability with an EXO skeleton for added support. The UltraCush lite midsole offers lightweight comfort and cushioning.",
    category: "men",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Black", "White", "Grey"],
    brand: "Vans",
    gender: "men",
    rating: 4.7
  },
  {
    id: 58,
    name: "Kids' Dynamo Free",
    price: 55,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7cafdac5-69f6-4d65-98cf-26ff1f58182c/dynamo-free-little-kids-shoes-DcPCJ4.png",
    description: "The Nike Dynamo Free for kids offers a flexible, slip-on design that's easy to get on and off. The cushioned midsole provides comfort for all-day play.",
    category: "kids",
    sizes: [3, 4, 5, 6, 7],
    colors: ["Blue", "Pink", "Black"],
    brand: "Nike",
    gender: "unisex",
    rating: 4.6
  }
];

export const categories: Category[] = [
  {
    id: 1,
    name: "Men",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Women",
    image: "https://images.unsplash.com/photo-1508062125223-7bb6db6c7a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Kids",
    image: "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Sport",
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export const brands: Brand[] = [
  {
    id: 1,
    name: "Nike",
    logo: "https://www.freepnglogos.com/uploads/nike-logo-png-symbol-clothing-shoes-sneakers-foot-locker-shoes-sho-25.png"
  },
  {
    id: 2,
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1280px-Adidas_Logo.svg.png"
  },
  {
    id: 3,
    name: "Converse",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Converse_logo.svg/1280px-Converse_logo.svg.png"
  },
  {
    id: 4,
    name: "Vans",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Vans-logo.svg/1200px-Vans-logo.svg.png"
  },
  {
    id: 5,
    name: "New Balance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/New_Balance_logo.svg/1200px-New_Balance_logo.svg.png"
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsByBrand = (brand: string): Product[] => {
  return products.filter(product => product.brand === brand);
};

export const getFilteredProducts = (filters: {
  category?: string;
  brand?: string;
  priceRange?: [number, number];
  gender?: "men" | "women" | "unisex" | "kids";
}): Product[] => {
  let filtered = [...products];

  if (filters.category) {
    filtered = filtered.filter(product => product.category === filters.category);
  }

  if (filters.brand) {
    filtered = filtered.filter(product => product.brand === filters.brand);
  }

  if (filters.gender) {
    filtered = filtered.filter(product => product.gender === filters.gender);
  }

  if (filters.priceRange) {
    const [min, max] = filters.priceRange;
    filtered = filtered.filter(product => product.price >= min && product.price <= max);
  }

  return filtered;
};
