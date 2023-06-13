import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-emerald-400 p-4 drop-shadow-xl z-10">
        <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row ">
            <h1 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
                <Link href="/" className='text-white/90 no-underline hover:text-black'>
                    Next-Blogs
                    
                    
                </Link>

            </h1>
            
        </div>
  </nav>
  )
}
