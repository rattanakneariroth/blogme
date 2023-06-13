import Image from 'next/image'


export default function MyProfilePic() {
  return (
    <section className='w-full mx-auto'>
        <Image className='border-4 text-emerald-300 drop-shadow-xl shadow-black rounded-full mx-auto mt-8 w-48 h-48' 
            src="/images/profile.jpeg" 
            width={200} 
            height={200} 
            alt="Roth"
            priority={true}  
        />

    </section>
  )
}
