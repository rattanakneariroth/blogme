import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
    title: string
    src: string
    id?: string
  }
  
  const CoverImage = ({ title, src, id }: Props) => {
    const image = (
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        className={cn('shadow-sm w-full', {
          'hover:shadow-lg transition-shadow duration-200': id,
        })}
        width={650}
        height={435}
      />
    )
    return (
      <div className="sm:mx-0">
        {id ? (
          <Link as={`/posts/${id}`} href="/posts/[postId]" aria-label={title}>
            {image}
          </Link>
        ) : (
          image
        )}
      </div>
    )
  }
  
  export default CoverImage