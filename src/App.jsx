import Heading from './components/Heading';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css'

export default function App() {
  return (
    <div>
     <Nav />
     <Heading greet="Welcome" />
     <Main content="Welcome to the body section" /> 
     <Footer greet="Goodbye" />

    </div>
  )
}
