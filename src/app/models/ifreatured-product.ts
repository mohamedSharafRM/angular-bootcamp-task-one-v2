export interface IFreaturedProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    thumbnail: string;
    price: number;
}

export const FEATURED_PRODUCTS: IFreaturedProduct[] = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing",
    category: "beauty",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    price : 11.5,
    },
  {
    id: 6,
    title: "Calvin Klein CK One",
    description:
      "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent",
    category: "fragrances",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
      price : 44,
    },
  {
    id: 13,
    title: "Bedside Table African Cherry",
    description:
      "The Bedside Table in African Cherry is a stylish and functional addition to your",
    category: "furniture",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp",
      price : 20.5,
    },
  {
    id: 27,
    title: "Honey Jar",
    description:
      "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp",
      price : 102.5,
    },
]
