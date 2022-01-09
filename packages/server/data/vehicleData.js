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
  },
  {
    id: uuidv4(),
    modelName: "2022 hyundai selantra",
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
  },
  {
    id: uuidv4(),
    modelName: "2014 hyundai santa fe sport suv",
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
      id: "73596013-e3a5-4e56-ae98-29709ec26912",
      name: "van",
    },
    price: "1",
    remark: "new",
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
