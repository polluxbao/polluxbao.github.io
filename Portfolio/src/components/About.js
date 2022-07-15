import '../App.css';
export default function About(props) {
  return (
    <div id='about' className='p-16 container sm:mt-56 lg:flex-col justify-between items-center mx-auto px-8 md:px-24 lg:px-24 w-full bg-black pb-56'>
      <h2 className='mt-6 text-3xl font-bold md:text-6xl lg:text-5xl text-center mb-12 underline decoration-pop'> About Me </h2>
      <div className='mx-auto w-3/4 md:w-2/4'>{props.description}</div>
      <h2 className='text-center mt-12 font-semibold text-xl'>Some stuff I do for fun</h2>
      <div className='flex card-list'>
        <article className='card'>
          <h3 className='text-pop  mt-2 mb-4 p-1 text-center font-semibold'>Reading</h3>
          <p className='ml-2'>Here are 3 of my <span className='bg-pop px-1'> favourite books</span> I've read <span className='bg-pop px-1'>this year</span>.</p>
          <div className='lg:p-2'>
            <p className='mt-2'><a className='text-selected-text hover:text-selected-text/[0.7]' href="https://www.brandonsanderson.com/the-mistborn-saga-the-original-trilogy/" rel='noreferrer' target={'blank'}>Mistborn<span className='text-sm'> by Brandon Sanderson</span></a>
            <br/><span className='ml-4 text-sm text-slate-600'>- Fantasy</span></p>
            <p className='mt-2'><a className='text-selected-text hover:text-selected-text/[0.7]' href="https://www.goodreads.com/book/show/52668915-entangled-life" rel='noreferrer' target={'blank'}>Entangled Life<span className='text-sm'> by Merlin Sheldrake</span></a>
            <br/><span className='ml-4 text-sm text-slate-600'>- Mycology/Botany</span></p>
            <p className='mt-2'><a className='text-selected-text hover:text-selected-text/[0.7]' href="https://dune.fandom.com/wiki/Chapterhouse:_Dune" rel='noreferrer' target={'blank'}>Chapterhouse: Dune<span className='text-sm'> by Frank Herbert</span></a>
            <br/><span className='ml-4 text-sm text-slate-600'>- Science Fiction</span></p>
          </div>
         </article>
         <article className='card'>
          <h3 className='text-pop mt-2 mb-4 p-1 text-center font-semibold'>Snowboarding</h3>
          <p className='ml-2'>I've been an avid snowboarder for about 10 years. I teach beginners how to gain confidence, and I teach my friends how to do tricks!</p>
          <p className='mt-2'><span className='bg-pop px-1'>Favourite Mountains</span> <br/></p>
          <ul className='list-disc p-4 ml-2'><li>Fernie BC</li><li>Jay Peak VT</li>  <li>Bromont QC</li> </ul>
          </article>
          <article className='card'>
          <h3 className='text-pop  mt-2 mb-4 p-1 text-center font-semibold'>Gaming</h3>
          <p className='ml-2'>I like casually gaming every once in a while. Co-op games are my bread and butter.</p>
          <p className='mt-4 lg:mt-8'><span className='bg-pop px-1'>Games I like to play</span> <br/></p>
          <ul className='list-disc p-4 ml-2'><li>Deep Rock Galactic</li><li>Left 4 dead 2</li><li>Valheim</li> </ul>
          </article>
          <article className='card'>
          <h3 className='text-pop  mt-2 mb-4 p-1 text-center font-semibold'>Camping</h3>
          <p className='ml-2'>Sometimes I bike to my destination, carrying my tent and equipment in saddlebags. Sometimes I canoe, carrying my gear in drybags. <br/><br/><span className='bg-pop px-1'>Fun fact</span> <br/><span>My longest camping trip was a 12 day canoe trip!</span></p>
          </article>
    </div>
    </div>
  )
}