import React, { useContext } from 'react';
import { CounterContext } from '../../Context/UserContext';
import RecentProducts from '../RecentProducts/RecentProducts';
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider';
import MainSlider from '../CategoriesSlider/mainSlider';
export default function Home() {
  const { counter, incrementCounter } = useContext(CounterContext);

  return <>
  <MainSlider/>
  <CategoriesSlider/>
  <RecentProducts/>
  
  </>
}

