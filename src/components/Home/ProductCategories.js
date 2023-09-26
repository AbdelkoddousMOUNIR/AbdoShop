import electronicsImg from '../imgs/electronics.jpg';
import fashionImg from '../imgs/fashion.jpg';
import healthAndBeauty from '../imgs/health and beauty.jpg'
import house from '../imgs/house.jpg'
import petsAndAnimals from '../imgs/pets and animals.jpg'
import sportsAndFitness from '../imgs/sports and fitness.jpg'
import { electronicsProducts } from '../Products/ElectronicProducts'
import { fashionProducts } from '../Products/FashionProducts'
import { healthAndBeautyProducts } from '../Products/HealthAndBeautyProducts'
import { HouseProducts } from '../Products/HouseProducts'
import { petsAndAnimalsproducts } from '../Products/PetsAndAnimals'
import { sportsAndFitnessProducts } from '../Products/SportsAndFitness'

export const productCategories = [
    {
      id: 1,
      name: 'electronics',
      img: electronicsImg,
      products : electronicsProducts
    },
    {
      id: 2,
      name: 'fashion',
      img: fashionImg,
      products: fashionProducts
    },
    {
      id: 3,
      name: 'health and beauty',
      img: healthAndBeauty,
      products : healthAndBeautyProducts
    },
    {
      id: 4,
      name: 'house',
      img: house,
      products : HouseProducts
    },
    {
      id: 5,
      name: 'pets and animals',
      img: petsAndAnimals,
      products : petsAndAnimalsproducts
    },
    {
      id: 6,
      name: 'sports and fitness',
      img: sportsAndFitness,
      products : sportsAndFitnessProducts
    }
  ];