import Heading from './components/Heading';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css'

export default function App() {
  return (
    <div>
     <Heading greet="Welcome" />
     <Main content="Welcome to the body section" /> 
     <Footer greet="Goodbye" />

    </div>
  )
}
