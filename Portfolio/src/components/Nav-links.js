import '../App.css';
export default function NavLinks(props) { 

  return (
    <div className='flex gap-6 md:flex-row md:space-x-12 items-center md:gap-0'>
      <a href="#home" className="hover:text-selected-text">Home</a>
      <a href="#work" className="hover:text-selected-text">My work</a>
      <a href="#about" className="hover:text-selected-text">About</a>
      <a href="#contact" className="hover:text-selected-text"> <button className='px-6 py-2 bg-theme font-bold hover:bg-theme/[0.8]'>Contact</button></a>
    </div>
  )
}