/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPosts } from "@/lib/wordpressHelpers";
import Image from "next/image";
import Link from "next/link";

// Define how many posts per page
const POSTS_PER_PAGE = 6;

// app/blog/page.tsx

const decodeHTMLEntities = (text: string): string => {
  const entities: Record<string, string> = {
    "&amp;": "&",
    "<": "<",
    ">": ">",
    "&quot;": '"',
    "&#039;": "'",
    "&#8217;": "’",
    "&#8216;": "‘",
    "&#8220;": "“",
    "&#8221;": "”",
    "&#8211;": "–",
    "&#8212;": "—",
    "&nbsp;": " ",
    "&hellip;": "…",
    "&#8230;": "…",
  };
  return text.replace(/&[^;]+;/g, (match) => entities[match] || match);
};

// BlogPage now accepts searchParams
export default async function BlogPage(props: {
  searchParams: Promise<{ page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const currentPage = Math.max(1, parseInt(searchParams.page || "1", 10));

  const posts = await getPosts();

  // Duplicate posts for testing (3x)

  // Pagination logic
  const totalPosts = posts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(start, end);

  // Helper to generate page URL
  const createPageURL = (page: number) => {
    if (page <= 1) return "/blog";
    return `/blog?page=${page}`;
  };

  return (
    <div className="py-12 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
          Latest Articles
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedPosts.map((post: any) => {
            const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
            const date = new Date(post.date).toLocaleDateString();
            const time = new Date(post.date).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });

            const excerpt =
              post.excerpt?.rendered || post.content?.rendered || "";
            const plainExcerpt = decodeHTMLEntities(
              excerpt.replace(/<[^>]*>/g, ""),
            );
            const truncatedExcerpt =
              plainExcerpt.length > 120
                ? `${plainExcerpt.substring(0, 120)}...`
                : plainExcerpt;

            return (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="block bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                {/* Featured Image */}
                {image && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={image}
                      alt={post.title.rendered}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Date & Time */}
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                    </svg>
                    <span>{date}</span>
                    <svg
                      className="w-4 h-4 mx-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.106A1 1 0 008 8v4a1 1 0 001.555.894l3-2a1 1 0 000-1.788l-3-2z" />
                    </svg>
                    <span>{time}</span>
                  </div>

                  {/* Title */}
                  <h2
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    className="text-xl font-semibold text-blue-900 dark:text-gray-100 mb-3 line-clamp-2"
                  />

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {truncatedExcerpt}
                  </p>

                  {/* Read More Button */}
                  <button className="w-max bg-red-600 dark:bg-red-500 hover:bg-red-700 dark:hover:bg-red-600 text-white font-medium py-2 px-4 rounded-full flex items-center justify-center transition-colors duration-200">
                    <span>Read More</span>
                    <svg
                      fill="none"
                      className="w-4 h-4 ml-2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Pagination Controls */}
        <div className="mt-12 flex justify-center items-center space-x-6">
          {currentPage > 1 ? (
            <Link
              href={createPageURL(currentPage - 1)}
              className="text-red-600 dark:text-red-400 font-medium hover:underline"
            >
              ← Previous
            </Link>
          ) : (
            <span className="text-gray-400 dark:text-gray-600 cursor-not-allowed">← Previous</span>
          )}

          <span className="text-gray-500 dark:text-gray-300">
            Page {currentPage} of {totalPages}
          </span>

          {currentPage < totalPages ? (
            <Link
              href={createPageURL(currentPage + 1)}
              className="text-red-600 dark:text-red-400 font-medium hover:underline"
            >
              Next →
            </Link>
          ) : (
            <span className="text-gray-400 dark:text-gray-600 cursor-not-allowed">Next →</span>
          )}
        </div>
      </div>
    </div>
  );
}
