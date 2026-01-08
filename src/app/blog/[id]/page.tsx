/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import { getPost, getRelatedPosts } from "@/lib/wordpressHelpers";
import QuickQuoteForm from "./QuickQuoteForm";

interface Params {
  id: string;
}

const BlogDetailPage = async (props: { params: Promise<Params> }) => {
  const params = await props.params;
  const { id } = params;
  const post = await getPost(id);
  const relatedPosts = await getRelatedPosts(post?.categories[0] || 1);

  if (!post) {
    notFound();
  }

  // Extract featured image
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  // Format date
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // Get category name
  const categoryName =
    post.categories[0] === 1 ? "uncategorized" : post.categories[0];

  // Reading time estimate
  const readingTime = Math.ceil(post.content.rendered.split(" ").length / 200);

  return (
    <Container className="flex flex-col md:flex-row gap-8">
      {/* Main Content */}
      <div className="flex-1">
        {featuredImage && (
          <div className="mb-8 rounded-lg overflow-hidden shadow-md relative w-full h-96">
            <Image
              src={featuredImage}
              alt={post.title.rendered}
              className="object-cover"
              priority
              fill
            />
          </div>
        )}

        {/* Title & Meta */}
        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
            {post.title.rendered}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-8">
            <span>{date}</span>
            <span>by {post.author.name || "enginesmarket"}</span>
            <span>in {categoryName}</span>
            <span>• {readingTime} min read</span>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none text-gray-700 dark:text-gray-200 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </article>

        {/* Back Button */}
        <div className="mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200 border border-blue-600 dark:border-blue-400 px-4 py-2 rounded-md text-sm font-medium transition"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="w-full md:w-96">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 sticky">
          {/* Quick Quote Form */}
          <QuickQuoteForm />

          {/* Related Posts */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Related Posts
            </h3>
            <ul className="space-y-4">
              {relatedPosts.map((related: any) => {
                const relatedFeaturedImage =
                  related._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                const relatedDate = new Date(related.date).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  },
                );

                return (
                  <li
                    key={related.id}
                    className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0"
                  >
                    <div className="flex space-x-3">
                      {relatedFeaturedImage && (
                        <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded">
                          <Image
                            src={relatedFeaturedImage}
                            alt={related.title.rendered}
                            width={50}
                            height={50}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-800 dark:text-gray-100 text-sm leading-tight">
                          <Link
                            href={`/blog/${related.id}`}
                            className="hover:text-blue-600 dark:hover:text-blue-300"
                          >
                            {related.title.rendered}
                          </Link>
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-300">{relatedDate}</p>
                        <Link
                          href={`/blog/${related.id}`}
                          className="text-xs text-blue-600 dark:text-blue-300 hover:underline inline-block"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </aside>
    </Container>
  );
};
export default BlogDetailPage;
