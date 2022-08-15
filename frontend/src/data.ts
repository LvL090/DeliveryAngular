import { Food } from "./app/shared/models/Food";
import { Tag } from "./app/shared/models/Tag";

export const sample_foods: Food [] = [

  {
    id:'1',
    name: 'Pizza Pepperoni',
    cookTime: '10-20',
    price : 10,
    favorite: false,
    origins: ['italia'],
    stars: 4,
    imageUrl: 'assets/food-1.jpg',
    tags: ['ComidaRápida', 'Pizza', 'Comida'],
  },
  {
    id:'2',
    name: 'Albóndigas Vegetarianas',
    price: 20,
    cookTime: '20-30',
    favorite: true,
    origins: ['persia', 'oriente medio', 'china'],
    stars: 4.5,
    imageUrl: 'assets/food-2.jpg',
    tags: ['ComidaLenta', 'Comida'],
  },
  {
    id:'3',
    name: 'Hamburguesa de Ternera',
    price: 5,
    cookTime: '10-15',
    favorite: false,
    origins: ['alemania', 'américa'],
    stars: 3,
    imageUrl: 'assets/food-3.jpg',
    tags: ['ComidaRápida', 'Hamburguesa'],
  },
  {
    id:'4',
    name: 'Patatas Fritas',
    price: 2,
    cookTime: '15-20',
    favorite: true,
    origins: ['bélgica', 'francia'],
    stars: 3.5,
    imageUrl: 'assets/food-4.jpg',
    tags: ['ComidaRápida', 'Frito'],
  },
  {
    id:'5',
    name: 'Sopa de Pollo',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india', 'asia'],
    stars: 3.0,
    imageUrl: 'assets/food-5.jpg',
    tags: ['ComidaLenta', 'Sopa'],
  },
  {
    id:'6',
    name: 'Pizza Vegetariana',
    price: 9,
    cookTime: '40-50',
    favorite: false,
    origins: ['italia'],
    stars: 4.0,
    imageUrl: 'assets/food-6.jpg',
    tags: ['ComidaRápida', 'Pizza', 'Comida'],
  },
]

export const sample_tags:Tag [] = [
 // { name: 'All', count: 6 }, NO PILLA EN CASTELLANO//
  { name: 'ComidaRápida', count: 4 },
  { name: 'Pizza', count: 2 },
  { name: 'Comida', count: 3 },
  { name: 'ComidaLenta', count: 2 },
  { name: 'Hamburguesa', count: 1 },
  { name: 'Frito', count: 1 },
  { name: 'Sopa', count: 1 },
]
