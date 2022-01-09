import { v4 as uuidv4 } from "uuid";

export const vehicles = [
  {
    id: uuidv4(),
    modelName: "2022 hyundai accent",
    brand: {
      id: "a947f56d-f71c-473e-9a0b-0980da851221",
      name: "hyundai",
      image:
        "https://static.tcimg.net/vehicles/logo_text/384x384_full_color/d88259cdbac929b7/Hyundai.png?fill=solid&fit=fill&h=30&w=30",
    },
    classification: {
      id: "c54000e6-55c1-4a66-b2c8-fce9bd5a4dd9",
      name: "car",
    },
    price: "1",
    remark: "new",
    image:
      "https://static.tcimg.net/vehicles/primary/e30083a50f942327/2022-Hyundai-Accent-white-full_color-driver_side_front_quarter.png?h=350&w=700",
  },
  {
    id: uuidv4(),
    modelName: "2022 hyundai elantra",
    brand: {
      id: "a947f56d-f71c-473e-9a0b-0980da851221",
      name: "hyundai",
      image:
        "https://static.tcimg.net/vehicles/logo_text/384x384_full_color/d88259cdbac929b7/Hyundai.png?fill=solid&fit=fill&h=30&w=30",
    },
    classification: {
      id: "af942659-ae02-4a93-b6eb-660f823e8eab",
      name: "sedan",
    },
    price: "1",
    remark: "new",
    image:
      "https://static.tcimg.net/vehicles/primary/917ba19d21e5fe04/2022-Hyundai-Elantra-white-full_color-driver_side_front_quarter.png?h=350&w=700",
  },
  {
    id: uuidv4(),
    modelName: "2018 hyundai sonata",
    brand: {
      id: "a947f56d-f71c-473e-9a0b-0980da851221",
      name: "hyundai",
      image:
        "https://static.tcimg.net/vehicles/logo_text/384x384_full_color/d88259cdbac929b7/Hyundai.png?fill=solid&fit=fill&h=30&w=30",
    },
    classification: {
      id: "af942659-ae02-4a93-b6eb-660f823e8eab",
      name: "sedan",
    },
    price: "1",
    remark: "used",
    image:
      "https://listings-prod.tcimg.net/listings/51962/77/09/5NPEB4ACXEH870977/T2P47HSA4CV3CKQGJR5X5JW4HI-cr-540.jpg",
  },
  {
    id: uuidv4(),
    modelName: "2022 hyundai tucson",
    brand: {
      id: "a947f56d-f71c-473e-9a0b-0980da851221",
      name: "hyundai",
      image:
        "https://static.tcimg.net/vehicles/logo_text/384x384_full_color/d88259cdbac929b7/Hyundai.png?fill=solid&fit=fill&h=30&w=30",
    },
    classification: {
      id: "f251bc86-1875-4554-a4c7-72721498af6c",
      name: "suv",
    },
    price: "1",
    remark: "new",
    image:
      "https://static.tcimg.net/vehicles/primary/0d548cfdc0e46d44/2022-Hyundai-Tucson-silver-full_color-driver_side_front_quarter.png?h=350&w=700",
  },
  {
    id: uuidv4(),
    modelName: "2019 hyundai tucson",
    brand: {
      id: "a947f56d-f71c-473e-9a0b-0980da851221",
      name: "hyundai",
      image:
        "https://static.tcimg.net/vehicles/logo_text/384x384_full_color/d88259cdbac929b7/Hyundai.png?fill=solid&fit=fill&h=30&w=30",
    },
    classification: {
      id: "f251bc86-1875-4554-a4c7-72721498af6c",
      name: "suv",
    },
    price: "1",
    remark: "used",
    image:
      "https://listings-prod.tcimg.net/listings/77763/30/09/KM8J3CA27HU540930/P5POHKCXFNYYR5IFDPGSD7ONW4-og-860.jpg",
  },
  {
    id: uuidv4(),
    modelName: "2011 hyundai santa fe sport suv",
    brand: {
      id: "a947f56d-f71c-473e-9a0b-0980da851221",
      name: "hyundai",
      image:
        "https://static.tcimg.net/vehicles/logo_text/384x384_full_color/d88259cdbac929b7/Hyundai.png?fill=solid&fit=fill&h=30&w=30",
    },
    classification: {
      id: "f251bc86-1875-4554-a4c7-72721498af6c",
      name: "suv",
    },
    price: "1",
    remark: "used",
    image:
      "https://listings-prod.tcimg.net/listings/175576/43/96/5XYZGDABXBG029643/KFIXVCVZWAS7AEE4IUN4GGKLZM-og-860.jpg",
  },
  {
    id: uuidv4(),
    modelName: "2022 honda ridgeline",
    brand: {
      id: "1e5db966-5a75-4438-9fad-356fa57050d3",
      name: "honda",
      image:
        "https://static.tcimg.net/vehicles/logo/605x384_full_color/00fea4dbe4426fc2/Honda.png?fill=solid&fit=fill&h=30&w=30",
    },
    classification: {
      id: "ffe98c48-9f14-48e0-8140-7358752888cf",
      name: "truck",
    },
    price: "1",
    remark: "new",
    image:
      "https://static.tcimg.net/vehicles/primary/987bbcdebaa73822/2022-Honda-Ridgeline-silver-full_color-driver_side_front_quarter.png?h=350&w=700",
  },
  {
    id: uuidv4(),
    modelName: "2022 honda pilot",
    brand: {
      id: "1e5db966-5a75-4438-9fad-356fa57050d3",
      name: "honda",
      image:
        "https://static.tcimg.net/vehicles/logo/605x384_full_color/00fea4dbe4426fc2/Honda.png?fill=solid&fit=fill&h=30&w=30",
    },
    classification: {
      id: "f251bc86-1875-4554-a4c7-72721498af6c",
      name: "suv",
    },
    price: "1",
    remark: "new",
    image:
      "https://static.tcimg.net/vehicles/primary/8cbd893c0ab6440f/2022-Honda-Pilot-silver-full_color-driver_side_front_quarter.png?h=350&w=700",
  },
  {
    id: uuidv4(),
    modelName: "2022 honda odyssey",
    brand: {
      id: "1e5db966-5a75-4438-9fad-356fa57050d3",
      name: "honda",
      image:
        "https://static.tcimg.net/vehicles/logo/605x384_full_color/00fea4dbe4426fc2/Honda.png?fill=solid&fit=fill&h=30&w=30",
    },
    classification: {
      id: "c120c2e2-2f29-4587-9724-c0b0c71199de",
      name: "van",
    },
    price: "1",
    remark: "new",
    image:
      "https://static.tcimg.net/vehicles/primary/930092a7727b7e35/2022-Honda-Odyssey-silver-full_color-driver_side_front_quarter.png?h=350&w=700",
  },
  {
    id: uuidv4(),
    modelName: "2022 kia carnival",
    brand: {
      id: "2d57e442-2092-445a-babe-8f36911d30cc",
      name: "kia",
      image:
        "https://static.tcimg.net/vehicles/logo/1629x384_full_color/638bbde84c5f569e/Kia.png?fill=solid&fit=fill&h=30&w=30",
    },
    classification: {
      id: "32cce4e3-8027-444a-b07d-cb7ce05ea318",
      name: "suv",
    },
    price: "1",
    remark: "new",
    image:
      "https://static.tcimg.net/vehicles/primary/9f6a1fe3890b3fcb/2022-Kia-Carnival-gray-full_color-driver_side_front_quarter.png?h=350&w=700",
  },
  {
    id: uuidv4(),
    modelName: "2022 kia rio",
    brand: {
      id: "2d57e442-2092-445a-babe-8f36911d30cc",
      name: "kia",
      image:
        "https://static.tcimg.net/vehicles/logo/1629x384_full_color/638bbde84c5f569e/Kia.png?fill=solid&fit=fill&h=30&w=30",
    },
    classification: {
      id: "74e1d962-0d8f-4d43-9380-1c8ca6b2fd04",
      name: "sedan",
    },
    price: "1",
    remark: "new",
    image:
      "https://static.tcimg.net/vehicles/primary/8740972dc234feba/2022-Kia-Rio-white-full_color-driver_side_front_quarter.png?h=350&w=700",
  },
  {
    id: uuidv4(),
    modelName: "2019 kia optima",
    brand: {
      id: "2d57e442-2092-445a-babe-8f36911d30cc",
      name: "kia",
      image:
        "https://static.tcimg.net/vehicles/logo/1629x384_full_color/638bbde84c5f569e/Kia.png?fill=solid&fit=fill&h=30&w=30",
    },
    classification: {
      id: "74e1d962-0d8f-4d43-9380-1c8ca6b2fd04",
      name: "sedan",
    },
    price: "1",
    remark: "used",
    image:
      "https://listings-prod.tcimg.net/listings/214232/38/43/5XXGT4L36KG344338/P2ASK432WKALWYNEERNSR2JRHA-og-860.jpg",
  },
  {
    id: uuidv4(),
    modelName: "bmw z4",
    brand: {
      id: "8fe9a3e3-47dc-48b1-b676-1fc2bae79faf",
      name: "bmw",
      image:
        "https://static.tcimg.net/vehicles/logo/384x384_full_color/614861eca7caf1b4/BMW.png?fill=solid&fit=fill&h=30&w=30",
    },
    classification: {
      id: "45e66a02-46ce-4bd8-a0cf-402a2655c85a",
      name: "convertible",
    },
    price: "1",
    remark: "new",
    image:
      "https://static.tcimg.net/vehicles/primary/af94892d38a3cf77/2022-BMW-Z4-white-full_color-driver_side_front_quarter.png?h=350&w=700",
  },

  // {
  //   id: uuidv4(),
  //   modelName: "2020 honda odyssey",
  //   brand: {
  //     id: "1e5db966-5a75-4438-9fad-356fa57050d3",
  //     name: "honda",
  //     image:
  //       "https://static.tcimg.net/vehicles/logo/605x384_full_color/00fea4dbe4426fc2/Honda.png?fill=solid&fit=fill&h=30&w=30",
  //   },
  //   classification: {
  //     id: "73596013-e3a5-4e56-ae98-29709ec26912",
  //     name: "van",
  //   },
  //   price: "1",
  //   remark: "used",
  // },
  // {
  //   id: uuidv4(),
  //   modelName: "2020 honda civic",
  //   brand: {
  //     id: "1e5db966-5a75-4438-9fad-356fa57050d3",
  //     name: "honda",
  //     image:
  //       "https://static.tcimg.net/vehicles/logo/605x384_full_color/00fea4dbe4426fc2/Honda.png?fill=solid&fit=fill&h=30&w=30",
  //   },
  //   classification: {
  //     id: "af942659-ae02-4a93-b6eb-660f823e8eab",
  //     name: "sedan",
  //   },
  //   price: "1",
  //   remark: "used",
  // },
  // {
  //   id: uuidv4(),
  //   modelName: "2020 honda accord",
  //   brand: {
  //     id: "1e5db966-5a75-4438-9fad-356fa57050d3",
  //     name: "honda",
  //     image:
  //       "https://static.tcimg.net/vehicles/logo/605x384_full_color/00fea4dbe4426fc2/Honda.png?fill=solid&fit=fill&h=30&w=30",
  //   },
  //   classification: {
  //     id: "af942659-ae02-4a93-b6eb-660f823e8eab",
  //     name: "sedan",
  //   },
  //   price: "1",
  //   remark: "used",
  // },
];

//  {
//         "id": "a947f56d-f71c-473e-9a0b-0980da851221",
//         "name": "hyundai"
//       },
//       {
//         "id": "1e5db966-5a75-4438-9fad-356fa57050d3",
//         "name": "honda"
//       },
//       {
//         "id": "2d57e442-2092-445a-babe-8f36911d30cc",
//         "name": "kia"
//       },
//       {
//         "id": "1437f19e-228f-4f44-a21b-b232afa4d8e1",
//         "name": "nissan"
//       },
//       {
//         "id": "8fe9a3e3-47dc-48b1-b676-1fc2bae79faf",
//         "name": "bmw"
//       },
//       {
//         "id": "315472e2-f431-430e-8a66-38072e7f4f14",
//         "name": "ford"
//       },
//       {
//         "id": "070673bf-e2b8-4272-bda7-ddae95e8fc88",
//         "name": "audi"
//       }

// new
// kia soul suv
// kia sportage suv
// kia stinger car
// nissan titan truck
// nissan titanXd truck
// nissan rouge suv
// bmw 2 series car
// bmw x7 suv
// bmw z4 convertible
// ford transit cargo van
// ford transit crew van
// for transit passenger waggon van
// audi TT convertible
// audi TT rs sedan
// audi tts sedan

// old
// 2016 kia rio sedan
// 2021 kia k5 car
// 2014 kia sorento suv
// 2020 Volkswagen Jetta car
// 2019 Volkswagen Tiguan suv
// 2016 Volkswagen passat sedan
// 2018 tesla model s car
// 2019 tesla model 3 car
// 2018 tesla model 3 car
// 2018 Chevrolet Silverado 1500 truck
// 2014 Chevrolet Silverado 1500 truck
