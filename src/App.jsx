import React from 'react';
import { MealsProvider } from './providers/MealsProvider';
import MealsList from './components/MealsList';
import Counter from './components/Counter';
import './App.css'

function App() {
  return (
    <MealsProvider>
      <Counter />
      <MealsList />
    </MealsProvider>
  );
}

export default App;
