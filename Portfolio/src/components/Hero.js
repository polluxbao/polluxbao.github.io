import '../App.css';

export default function Hero(props) { 
  return (
    <div id='home'className='h-screen container mt-16 lg:flex justify-between items-center mx-auto px-8 md:px-24 lg:px-16 lg:px-24 w-full'>
      <div className='flex flex-wrap lg:ml-20 justify-center lg:justify-start max-w-xl mt-0 md:my-24 lg:my-36'>
        <h1 className='text-6xl font-bold  lg:text-6xl xl:text-7xl text-center lg:text-left'>I'm <span className='inline-block text-pop duration-200 ease-in-out hover:cursor-default'><span className='duration-100 ease-in-out hover:-translate-y-3 inline-block hover:text-blue-500 hover:scale-110'>J</span><span className='duration-100 ease-in hover:-translate-y-3 inline-block hover:text-blue-600'>a</span><span className='inline-block duration-100 ease-in-out hover:-translate-y-3 hover:text-blue-700 hover:scale-110'>c</span><span className='hover:text-blue-800 duration-100 ease-in-out hover:-translate-y-3 inline-block'>o</span><span className='duration-100 ease-in-out hover:-translate-y-3 inline-block hover:text-blue-900 hover:scale-110'>b</span>,</span> <br/> Web Developer</h1>
        <div className='w-full flex justify-center lg:justify-start'>
          <button className='px-6 py-4 bg-theme text-white font-bold mt-12 flex items-center space-x-3 hover:scale-105' onClick={(e) => {e.preventDefault(); window.location.href='#work'}}>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-12 w-12 fill-current mr-2 text-blue-300'>
              <path d="M7 42Q5.8 42 4.9 41.1Q4 40.2 4 39V14.35Q4 13.15 4.9 12.25Q5.8 11.35 7 11.35H16.5V7Q16.5 5.8 17.4 4.9Q18.3 4 19.5 4H28.5Q29.7 4 30.6 4.9Q31.5 5.8 31.5 7V11.35H41Q42.2 11.35 43.1 12.25Q44 13.15 44 14.35V39Q44 40.2 43.1 41.1Q42.2 42 41 42ZM19.5 11.35H28.5V7Q28.5 7 28.5 7Q28.5 7 28.5 7H19.5Q19.5 7 19.5 7Q19.5 7 19.5 7ZM7 39H41Q41 39 41 39Q41 39 41 39V14.35Q41 14.35 41 14.35Q41 14.35 41 14.35H7Q7 14.35 7 14.35Q7 14.35 7 14.35V39Q7 39 7 39Q7 39 7 39ZM7 39Q7 39 7 39Q7 39 7 39V14.35Q7 14.35 7 14.35Q7 14.35 7 14.35Q7 14.35 7 14.35Q7 14.35 7 14.35V39Q7 39 7 39Q7 39 7 39Z"/>
              </svg>
            <span>My Work</span>
            </button>
          </div>
          
      </div>
      <div className='w-full xs:w-3/4 lg:w-full 2xl:w-1/2 flex justify-center md:justify-start lg:ml-16 sm:space-y-4 lg:mx-0 mx-auto'>
        <img className='lg:p-16  mt-8 m:mt-0' src={require('../images/me2.jpeg')} alt ="A person called Jacob Handelman wearing a red flannel with a pink Levi's shirt"></img>
      </div>
    </div>
  )
}