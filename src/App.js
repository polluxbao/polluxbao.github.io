import './App.css';
import Header from './components/Header';
import NavBarSmall from './components/NavBarSmall';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
document.body.style.backgroundColor = "#17171F";

function App() {
  return (
    <div className='text-white font-poppins pb-12'>
    <Header></Header>
    
    <Hero></Hero>
    <Projects></Projects>
    
    <About description=
    "I'm a self taught web developer who strives for excellence through determination and persistence. If I'm not coding I'm probably reading or making a coffee. Although I get fulfillment from things such as snowboarding or biking, nothing really compares to the satisfaction I get from solving complex problems."></About>
    <Contact></Contact>
    <NavBarSmall/>
    </div>
  
    )
}


export default App;
