import SteelOne from "@/assets/images/products/Steel.png";
import SteelTwo from "@/assets/images/products/Steel2.png";
import SteelThree from "@/assets/images/products/Steel3.png";
import SteelFour from "@/assets/images/products/Steel4.png";
import LeatherOne from "@/assets/images/products/Leather.png";
import LeatherTwo from "@/assets/images/products/Leather2.png";
import LeatherThree from "@/assets/images/products/Leather3.png";

export type ProductsTypes = {
    id: number;
    image: import("react-native").ImageSourcePropType,
    title: string,
    description: string,
    price: number,
    type: number,
    new: number,
    cart?: boolean
}

const Products: Array<ProductsTypes> = [
    {
        id: 1,
        image: SteelOne,
        title: "Rolex Submariner",
        description: "The Rolex Submariner is a line of sports watches designed for diving, known for their resistance to water and corrosion.",
        price: 7500,
        type: 0,
        new: 0,
    },
    {
        id: 2,
        image: SteelTwo,
        title: "Rolex Daytona",
        description: "The Rolex Daytona is a high-performance chronograph watch, engineered for professional racing drivers.",
        price: 13000,
        type: 0,
        new: 1
    },
    {
        id: 3,
        image: SteelThree,
        title: "Rolex GMT-Master II",
        description: "The Rolex GMT-Master II is a timepiece designed for pilots and travelers, featuring a 24-hour rotating bezel and a second time zone display.",
        price: 9000,
        type: 0,
        new: 0
    },
    {
        id: 4,
        image: SteelFour,
        title: "Rolex Explorer",
        description: "The Rolex Explorer is a rugged watch, designed for adventurers and explorers, with a robust construction and legible dial.",
        price: 6500,
        type: 0,
        new: 0
    },
    {
        id: 5,
        image: LeatherOne,
        title: "Rolex Day-Date",
        description: "The Rolex Day-Date, known as the 'President's Watch', is crafted in precious metals and features the day and date displayed in full.",
        price: 20000,
        type: 1,
        new: 1
    },
    {
        id: 6,
        image: LeatherTwo,
        title: "Rolex Datejust",
        description: "The Rolex Datejust is a classic watch, combining elegance with functionality, featuring a date display and a variety of style options.",
        price: 8000,
        type: 1,
        new: 0
    },
    {
        id: 7,
        image: LeatherThree,
        title: "Rolex Yacht-Master",
        description: "The Rolex Yacht-Master is a nautical-inspired watch, designed for sailing enthusiasts, with a bidirectional rotating bezel and waterproof case.",
        price: 11000,
        type: 1,
        new: 1
    },
];

export default Products;