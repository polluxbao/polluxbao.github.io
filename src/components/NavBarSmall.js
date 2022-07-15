import '../App.css';
import NavLinks from './Nav-links';
export default function NavBarSmall(props) {
  return (
    <div className='flex justify-center md:hidden sticky bottom-0 bg-black py-2 z-10'>
      <NavLinks/>
    </div>
  )
}