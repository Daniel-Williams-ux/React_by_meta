import MealsProvider from './providers/MealsProvider';
import MealsList from './components/MealsList';
import Counter from './components/Counter';
import './App.css'

export default function App() {
  return (
    <div>
     <MealsProvider />
       <MealsList />
       <Counter />
     <MealsProvider/> 
    </div>
  )
}