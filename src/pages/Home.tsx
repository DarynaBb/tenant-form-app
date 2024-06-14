import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className='max-container padding-container flex h-screen'>
      <div className='basis-1/2 flex flex-col justify-center text-[1.8em] gap-5 p-[2em]'>
        <p className='text-gray-700'>Simply <strong>enter</strong> your details, <strong>review</strong> your information, and <strong>complete</strong> your booking — all seamlessly integrated for your convenience.</p>
        <div>
        <p className='text-gray-700'><strong>Ready to find your perfect apartment?</strong></p>
        <Link className='text-primary' to="/form">Click here to begin!</Link>
        </div>
      </div>
      <div className='bg-primary basis-1/2 flex items-center'>
        <h1 className='uppercase text-slate-50 opens-sans font-bold text-[3em] p-[2em]'>Welcome to Buena's Apartment Booking Service</h1>
      </div>
      
    </section>
    
  )
}

export default Home