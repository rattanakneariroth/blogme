import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"
import CoverImage from "./cover-image"


type Props = {
    post: BlogPost
    
}

export default function ListItem({ post }: Props) {
    const { 
        id,
        title,
        coverImage,
        date,
        excerpt,    
        
         } = post
    const formattedDate = getFormattedDate(date)

    return (
        <div>
            <div className="relative max-w-md overflow-hidden bg-cover bg-no-repeat">
                <div className=" mb-3 mt-3 transition  ease-in-out hover:scale-110">
                    <CoverImage id={id} title={title} src={coverImage} />
                </div>
            </div>
            
          
          <div className="">
            <h3 className="text-2xl mb-3 leading-normal font-bold truncate">
                <Link
                as={`/posts/${id}`}
                href="/posts/[postId]" /// this place also get error
                className="hover:underline"
                >
                {title}
                </Link>
            </h3>

          </div>
          
          <div className="text-sm mb-4">
            <svg className="w-6 h-6 inline-flex mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>

            {formattedDate}
          </div>
          
          <p className="text-md leading-relaxed mb-4 text-justify line-clamp-4 ">{excerpt}</p> 
         
        </div>
      )
}