import React from "react";
import { Link } from "react-router-dom";

const ProductPage = ({ match }) => {
  const { categoryId } = match.params;

  const products = [
    // Skincare products
    {
      id: 1,
      name: "Hydrating Face Cream",
      gender: "Unisex",
      description:
        "A nourishing cream that provides deep hydration and smooths skin texture.",
      price: 19.99,
      quantity_available: 100,
      image: "/src/assets/skincare/skincare1.jpg",
      categoryId: 1,
    },
    {
      id: 2,
      name: "Revitalizing Serum",
      gender: "Unisex",
      description:
        "An anti-aging serum that reduces the appearance of fine lines and wrinkles.",
      price: 29.99,
      quantity_available: 50,
      image: "/src/assets/skincare/skincare2.jpg",
      categoryId: 1,
    },
    {
      id: 3,
      name: "Purifying Cleanser",
      gender: "Unisex",
      description:
        "A gentle cleanser that removes impurities and refreshes the skin.",
      price: 15.99,
      quantity_available: 75,
      image: "/src/assets/skincare/skincare3.jpg",
      categoryId: 1,
    },
    {
      id: 4,
      name: "Soothing Toner",
      gender: "Unisex",
      description:
        "A calming toner that balances the skin's pH and reduces redness.",
      price: 12.99,
      quantity_available: 80,
      image: "/src/assets/skincare/skincare4.jpg",
      categoryId: 1,
    },
    {
      id: 5,
      name: "Brightening Eye Cream",
      gender: "Unisex",
      description:
        "An eye cream that brightens dark circles and reduces puffiness.",
      price: 22.99,
      quantity_available: 60,
      image: "/src/assets/skincare/skincare5.jpg",
      categoryId: 1,
    },
    {
      id: 6,
      name: "Exfoliating Scrub",
      gender: "Unisex",
      description: "A scrub that exfoliates dead skin cells and unclogs pores.",
      price: 18.99,
      quantity_available: 90,
      image: "/src/assets/skincare/skincare6.jpg",
      categoryId: 1,
    },
    {
      id: 7,
      name: "Hydrating Face Mask",
      gender: "Unisex",
      description: "A face mask that deeply hydrates and revitalizes the skin.",
      price: 24.99,
      quantity_available: 70,
      image: "/src/assets/skincare/skincare7.jpg",
      categoryId: 1,
    },
    {
      id: 8,
      name: "Anti-Aging Cream",
      gender: "Unisex",
      description:
        "A cream that reduces signs of aging and improves skin elasticity.",
      price: 34.99,
      quantity_available: 40,
      image: "/src/assets/skincare/skincare8.jpg",
      categoryId: 1,
    },
    {
      id: 9,
      name: "Moisturizing Lotion",
      gender: "Unisex",
      description: "A lightweight lotion that provides long-lasting moisture.",
      price: 17.99,
      quantity_available: 110,
      image: "/src/assets/skincare/skincare9.jpg",
      categoryId: 1,
    },

    // Makeup products
    {
      id: 10,
      name: "Liquid Foundation",
      gender: "Female",
      description:
        "A lightweight foundation that offers full coverage and a natural finish.",
      price: 27.99,
      quantity_available: 95,
      image: "/src/assets/makeup/makeup1.jpg",
      categoryId: 2,
    },
    {
      id: 11,
      name: "Matte Lipstick",
      gender: "Female",
      description:
        "A long-lasting lipstick with a matte finish available in various shades.",
      price: 14.99,
      quantity_available: 120,
      image: "/src/assets/makeup/makeup2.jpg",
      categoryId: 2,
    },
    {
      id: 12,
      name: "Waterproof Mascara",
      gender: "Female",
      description:
        "A mascara that lengthens and volumizes lashes without smudging.",
      price: 12.99,
      quantity_available: 85,
      image: "/src/assets/makeup/makeup3.jpg",
      categoryId: 2,
    },
    {
      id: 13,
      name: "Blush Palette",
      gender: "Female",
      description:
        "A palette with a range of blush shades for a natural, healthy glow.",
      price: 21.99,
      quantity_available: 55,
      image: "/src/assets/makeup/makeup4.jpg",
      categoryId: 2,
    },
    {
      id: 14,
      name: "Highlighter Stick",
      gender: "Female",
      description: "A creamy highlighter that adds a radiant glow to the skin.",
      price: 16.99,
      quantity_available: 70,
      image: "/src/assets/makeup/makeup5.jpg",
      categoryId: 2,
    },
    {
      id: 15,
      name: "Eyebrow Pencil",
      gender: "Female",
      description: "A precise pencil that shapes and defines eyebrows.",
      price: 10.99,
      quantity_available: 100,
      image: "/src/assets/makeup/makeup6.jpg",
      categoryId: 2,
    },
    {
      id: 16,
      name: "Eyeshadow Palette",
      gender: "Female",
      description:
        "A palette with a variety of eyeshadow colors for any occasion.",
      price: 29.99,
      quantity_available: 65,
      image: "/src/assets/makeup/makeup7.jpg",
      categoryId: 2,
    },
    {
      id: 17,
      name: "Concealer",
      gender: "Female",
      description:
        "A high-coverage concealer that hides imperfections and brightens.",
      price: 13.99,
      quantity_available: 90,
      image: "/src/assets/makeup/makeup8.jpg",
      categoryId: 2,
    },
    {
      id: 18,
      name: "Setting Spray",
      gender: "Female",
      description: "A spray that sets makeup and keeps it in place all day.",
      price: 18.99,
      quantity_available: 80,
      image: "/src/assets/makeup/makeup9.jpg",
      categoryId: 2,
    },

    // Fragrance products
    {
      id: 19,
      name: "Citrus Bloom Perfume",
      gender: "Female",
      description:
        "A refreshing perfume with notes of citrus and floral blooms.",
      price: 49.99,
      quantity_available: 50,
      image: "/src/assets/fragrance/fragrance1.jpg",
      categoryId: 3,
    },
    {
      id: 20,
      name: "Woody Spice Cologne",
      gender: "Male",
      description:
        "A cologne with a blend of woody and spicy notes for a masculine scent.",
      price: 54.99,
      quantity_available: 45,
      image: "/src/assets/fragrance/fragrance2.jpg",
      categoryId: 3,
    },
    {
      id: 21,
      name: "Vanilla Blossom Perfume",
      gender: "Female",
      description:
        "A sweet and warm perfume with hints of vanilla and blossom.",
      price: 59.99,
      quantity_available: 40,
      image: "/src/assets/fragrance/fragrance3.jpg",
      categoryId: 3,
    },
    {
      id: 22,
      name: "Ocean Breeze Cologne",
      gender: "Male",
      description: "A fresh and aquatic cologne inspired by the ocean breeze.",
      price: 52.99,
      quantity_available: 60,
      image: "/src/assets/fragrance/fragrance4.jpg",
      categoryId: 3,
    },
    {
      id: 23,
      name: "Lavender Dream Perfume",
      gender: "Female",
      description:
        "A calming perfume with a blend of lavender and floral notes.",
      price: 47.99,
      quantity_available: 55,
      image: "/src/assets/fragrance/fragrance5.jpg",
      categoryId: 3,
    },
    {
      id: 24,
      name: "Amber Noir Cologne",
      gender: "Male",
      description: "A rich and deep cologne with notes of amber and musk.",
      price: 57.99,
      quantity_available: 50,
      image: "/src/assets/fragrance/fragrance6.jpg",
      categoryId: 3,
    },
    {
      id: 25,
      name: "Rose Petal Perfume",
      gender: "Female",
      description: "A delicate perfume with the essence of fresh rose petals.",
      price: 48.99,
      quantity_available: 70,
      image: "/src/assets/fragrance/fragrance7.jpg",
      categoryId: 3,
    },
    {
      id: 26,
      name: "Cedarwood Cologne",
      gender: "Male",
      description: "A bold cologne with the earthy scent of cedarwood.",
      price: 53.99,
      quantity_available: 65,
      image: "/src/assets/fragrance/fragrance8.jpg",
      categoryId: 3,
    },
    {
      id: 27,
      name: "Peony Bliss Perfume",
      gender: "Female",
      description: "A floral perfume with the fresh scent of peony blossoms.",
      price: 51.99,
      quantity_available: 55,
      image: "/src/assets/fragrance/fragrance9.jpg",
      categoryId: 3,
    },

    // Beard Gang products
    {
      id: 28,
      name: "Beard Oil",
      gender: "Male",
      description:
        "A nourishing beard oil that softens and conditions facial hair.",
      price: 25.99,
      quantity_available: 100,
      image: "/src/assets/beardgang/beardgang1.jpg",
      categoryId: 4,
    },
    {
      id: 29,
      name: "Beard Balm",
      gender: "Male",
      description: "A styling balm that tames and shapes your beard.",
      price: 22.99,
      quantity_available: 80,
      image: "/src/assets/beardgang/beardgang2.jpg",
      categoryId: 4,
    },
    {
      id: 30,
      name: "Beard Wash",
      gender: "Male",
      description: "A gentle wash that cleanses and refreshes your beard.",
      price: 18.99,
      quantity_available: 90,
      image: "/src/assets/beardgang/beardgang3.jpg",
      categoryId: 4,
    },
    {
      id: 31,
      name: "Beard Conditioner",
      gender: "Male",
      description: "A conditioner that hydrates and detangles beard hair.",
      price: 20.99,
      quantity_available: 70,
      image: "/src/assets/beardgang/beardgang4.jpg",
      categoryId: 4,
    },
    {
      id: 32,
      name: "Beard Comb",
      gender: "Male",
      description: "A wooden comb designed specifically for beards.",
      price: 12.99,
      quantity_available: 150,
      image: "/src/assets/beardgang/beardgang5.jpg",
      categoryId: 4,
    },
    {
      id: 33,
      name: "Beard Brush",
      gender: "Male",
      description:
        "A boar bristle brush that evenly distributes oils through your beard.",
      price: 15.99,
      quantity_available: 120,
      image: "/src/assets/beardgang/beardgang6.jpg",
      categoryId: 4,
    },
    {
      id: 34,
      name: "Beard Growth Serum",
      gender: "Male",
      description: "A serum that promotes healthy beard growth.",
      price: 28.99,
      quantity_available: 60,
      image: "/src/assets/beardgang/beardgang7.jpg",
      categoryId: 4,
    },
    {
      id: 35,
      name: "Beard Scissors",
      gender: "Male",
      description: "Precision scissors for trimming your beard.",
      price: 19.99,
      quantity_available: 110,
      image: "/src/assets/beardgang/beardgang8.jpg",
      categoryId: 4,
    },
    {
      id: 36,
      name: "Beard Shaping Tool",
      gender: "Male",
      description: "A tool that helps shape and style your beard.",
      price: 14.99,
      quantity_available: 130,
      image: "/src/assets/beardgang/beardgang9.jpg",
      categoryId: 4,
    },
  ];
}

export default ProductPage;