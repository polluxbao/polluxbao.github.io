import '../App.css';
export default function Card(props) {
  return (
    <div className=' ease-in duration-200 bg-input/[0.3] p-12 hover:bg-selected-text/[0.13] hover:shadow-lg shadow-md shadow-cyan-500/40 hover:shadow-cyan-500/60 rounded-lg'>
      <h2 className='text-pop text-2xl text-center mb-6 md:text-3xl font-semibold'>{props.title}</h2>
      <div className='block py-6 md:py-0 md:w-72 md:h-48 mx-auto'> <img src={process.env.PUBLIC_URL + `${props.image}` }alt={props.alt}></img></div>
      <p className=' md:h-36 mx-auto md:text-center md:w-72'>{props.description}</p>
    <div className='flex justify-center gap-8 text-center py-8 mt-4'>
    <button className='bg-theme p-2 md:p-3 font-semibold hover:scale-105 hover:bg-theme/[.7]' onClick={(e) => {e.preventDefault(); window.open(props.source)}}>Source Code </button> 
    <button className='bg-theme p-2 md:p-3 font-semibold hover:scale-105 hover:bg-theme/[.7]' onClick={(e) => {e.preventDefault(); window.open(props.preview)}}>Live Preview</button>
  </div>
  <div className='flex-col mx-auto'>
    <p className='text-center'>Created With</p>
    <div className='container flex gap-6 flex-wrap justify-center mt-4'>
        <div className='flex gap-4 md:gap-8'>{props.tools1} {props.tools2} {props.tools3} {props.tools4}</div> 
    </div>
  </div>
</div>
  )
}