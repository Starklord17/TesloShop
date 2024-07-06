export interface Product {
  // id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSize[];
  slug: string;
  tags: string[];
  title: string;
  // TODO: type: ValidType;
  gender: ValidCategory;
}

export type ValidCategory = 'men'|'women'|'kid'|'unisex';
export type ValidSize = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
export type ValidType = 'shirts'|'pants'|'hoodies'|'hats';