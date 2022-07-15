import '../App.css';
import NavLinks from './Nav-links';
export default function Header(props) {
  return (
    <div className='py-6 sticky top-0 bg-black z-10'> 
    <div className="relative container flex justify-between items-center mx-auto px-8 md:px-16 lg:px-24 w-full">
        <div className='text-pop text-xl font-bold'>Jacob Handelman</div>
        <div className='hidden md:flex space-x-12 items-center'>
          <NavLinks/>
      </div>
   
    </div>
  </div>
  )
}