import '../App.css';
export default function Contact(props) {
  return (
    <div id='contact' className='p-16 container lg:flex-col justify-between items-center mx-auto px-8 md:px-24 lg:px-24 w-full pb-24 bg-black md:mt-16'>
      <h2 className='mt-6 text-3xl font-bold md:text-6xl lg:text-5xl text-center mb-12 underline decoration-pop'> Contact Me </h2>
      <div className='flex justify-evenly  py-8 items-center lg:gap-16 lg:py-24'> 
      {/* bg-pop/[0.8] */}
       
        <div className='flex-col justify-center align-center text-center font-semibold'>
          <h2 onClick={(e) => {e.preventDefault(); window.open('https://github.com/Dezzep')}} className='mb-4 hover:cursor-pointer hover:text-selected-text px-4 py-1'>GitHub</h2>
          <svg onClick={(e) => {e.preventDefault(); window.open('https://github.com/Dezzep')}} className='fill-pop inline-block hover:fill-selected-text hover:cursor-pointer hover:scale-105' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </div>
        <div className='flex-col justify-center align-center text-center font-semibold'>
        <a href='mailto:jacobhandelman@gmail.com'> <h2 className='mb-4 hover:cursor-pointer hover:text-selected-text px-4 py-1'>Email</h2></a>
        <a href="mailto:jacobhandelman@gmail.com"><svg className= 'hover:fill-selected-text hover:scale-105 fill-pop inline-block hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 128 96"><path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z" data-name="Layer 2"/></svg></a>
        
        </div> 
        <div className='flex-col justify-center align-center text-center font-semibold'>
          <h2 onClick={(e) => {e.preventDefault(); window.open('https://www.linkedin.com/in/jacob-handelman/')}} className='mb-4 hover:cursor-pointer hover:text-selected-text px-4 py-1'>LinkedIn</h2>
        <svg onClick={(e) => {e.preventDefault(); window.open('https://www.linkedin.com/in/jacob-handelman/')}} className='hover:scale-105 inline-block fill-pop hover:fill-selected-text hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </div>
      </div>
  </div>
  )
}