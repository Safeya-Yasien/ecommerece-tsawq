import iphone from "../assets/images/apple-iphone.webp";

import phone_1 from "../assets/images/phone_1.webp";
import phone_2 from "../assets/images/phone_2.webp";
import phone_3 from "../assets/images/phone_3.webp";
import phone from "../assets/images/phone.webp";

export const phonesList = [
  {
    id: "1",
    imgSrc: phone_1,
    name: "هواوي P40 برو 128 جيجا",
    price: 6500,
    originalPrice: 7000,
    rating: 4.2,
    category: "هواتف",
  },
  {
    id: "2",
    imgSrc: iphone,
    name: "هواوي P40 برو 128 جيجا",
    price: 12000,
    originalPrice: 13000,
    rating: 4.8,
    category: "هواتف",
  },
  {
    id: "3",
    imgSrc: phone,
    name: "هواوي P40 برو 128 جيجا",
    price: 9800,
    originalPrice: 10500,
    rating: 4.5,
    category: "هواتف",
  },
  {
    id: "4",
    imgSrc: phone_2,
    name: "هواوي P40 برو 128 جيجا",
    price: 7400,
    originalPrice: 7800,
    rating: 4.3,
    category: "هواتف",
  },
  {
    id: "5",
    imgSrc: phone_3,
    name: "هواوي P40 برو 128 جيجا",
    price: 5500,
    originalPrice: 6000,
    rating: 4.1,
    category: "هواتف",
  },
];

export const productsList = [
  {
    id: "1",
    imgSrc: phone,
    name: "سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي.",
    price: 6500,
    originalPrice: 7000,
    rating: 4.2,
    category: "هواتف",
    images: [phone, iphone, phone_1, phone],
  },
  {
    id: "2",
    imgSrc: iphone,
    name: "آيفون 13 برو ماكس 256 جيجا",
    price: 12000,
    originalPrice: 13000,
    rating: 4.8,
    category: "لابتوب",
    images: [phone, iphone, phone_1, iphone],
  },
  {
    id: "3",
    imgSrc: phone_1,
    name: "هواوي P40 برو 128 جيجا",
    price: 9800,
    originalPrice: 10500,
    rating: 4.5,
    category: "سماعات",
    images: [phone, iphone, phone_1, phone],
  },
  {
    id: "4",
    imgSrc: phone,
    name: "شاومي مي 11 128 جيجا",
    price: 7400,
    originalPrice: 7800,
    rating: 4.3,
    category: "لابتوب",
    images: [phone, iphone, iphone, phone],
  },
  {
    id: "5",
    imgSrc: iphone,
    name: "أوبو رينو 5 128 جيجا",
    price: 5500,
    originalPrice: 6000,
    rating: 4.1,
    category: "هواتف",
    images: [phone, iphone, iphone, phone_1],
  },
  {
    id: "6",
    imgSrc: phone_1,
    name: "ريلمي 8 برو 128 جيجا",
    price: 6200,
    originalPrice: 6600,
    rating: 4.4,
    category: "هواتف",
    images: [phone_1, iphone, iphone, phone],
  },
];
