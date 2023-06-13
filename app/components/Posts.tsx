import { getSortedPostsData } from "@/lib/posts"
import ListItems from "./ListItems"
import Pagination from "./Pagination"


export default function Posts() {
    const posts = getSortedPostsData()

    return (
        <section className=" mx-auto max-w-4xl bg-white rounded-lg p-5 ">
            <h2 className="text-4xl font-bold text-emerald-400 mb-3 " >Blog</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10">
                {posts.map(post => (
                    <ListItems key={post.id} post={post} />
                ))}
            </ul>
            <Pagination/>
        </section>
    )
}