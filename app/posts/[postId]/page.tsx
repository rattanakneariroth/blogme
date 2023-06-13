import getFormattedDate from "@/lib/getFormattedDate"
import { getSortedPostsData, getPostData } from "@/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"
import CoverImage from "@/app/components/cover-image"

export function generateStaticParams() {
    const posts = getSortedPostsData()

    return posts.map((post) => ({
        postId: post.id
    }))
}

export function generateMetadata({ params }: { params: { postId: string } }) {

    const posts = getSortedPostsData()
    const { postId } = params

    const post = posts.find(post => post.id === postId)

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.title,
    }
}

export default async function Posts({ params }: { params: { postId: string } }) {

    const posts = getSortedPostsData()
    const { postId } = params

    if (!posts.find(post => post.id === postId)) notFound()

    const { title, date, contentHtml, coverImage, excerpt } = await getPostData(postId)

    const formattedDate = getFormattedDate(date)

    return (
        <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto ">
            <h1 className="text-3xl mt-4 mb-0">{title}</h1>
            <br />
            <div className="text-md mb-4">
                <svg className="w-7 h-7 inline-flex mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>

            {formattedDate}
          </div>
            <div className="bg-white rounded-lg p-5  ">
                <p className="text-md leading-relaxed mb-4 text-justify line-clamp-4 ">{excerpt}</p> 

                <div className="mb-8 md:mb-16 sm:mx-0">
                    <CoverImage title={title} src={coverImage} />
                </div>

                <article>
                    <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                    <p>
                        <Link href="/" className="text-emerald-300	">← Back to home</Link>
                    </p>
                </article>
            </div>
        </main>
    )
}