export type LiType = {
    name: string;
    href: string;
}

export interface DropdownProps {
    items: string[];   
}

export type BgPropType = {
    bgImage: string;
     showStory: boolean;
     toggleStory: () => void;
}

export interface SpecialityItemProps {
    name: string;
    description: string;
    image: string;
  }

export interface ProductProps {
    id: number;
    name: string;
    price: number;
    image: string;
    onAddToCart: (id: number) => void;
    onSeeMore: (id: number) => void;
  }  

  export interface ProductDetailsType {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    imagesList?: string[] | undefined;
    description?: string;
  }

  export interface UserAccountProps {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    imagesList?: string[] | undefined;
    description?: string;
    quantity: number
  }

 export interface Buttontype {
  title: string;
  href: string;
 } 

 export interface Review {
  id: number;
  name: string;
  image: string;
  rating: number;
  review: string;
}