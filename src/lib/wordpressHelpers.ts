/* eslint-disable @typescript-eslint/no-explicit-any */
// Minimal WordPress helper utilities used by the blog pages.
// Configure WordPress base URL via NEXT_PUBLIC_WORDPRESS_API or WORDPRESS_API_URL.

const WP_BASE = process.env.NEXT_PUBLIC_WORDPRESS_API || process.env.WORDPRESS_API_URL || "";

function buildWpApiUrl(path: string) {
    // Accept either site root (e.g. https://site.com) or explicit /wp-json base.
    if (!WP_BASE) return "";
    const base = WP_BASE.replace(/\/$/, "");
    if (base.includes("/wp-json")) {
        return `${base}${path.startsWith("/") ? "" : "/"}${path}`;
    }
    // If user provided site root, prepend /wp-json
    return `${base}/wp-json${path.startsWith("/") ? "" : "/"}${path}`;
}

/**
 * Fetch helper that defaults to no-store so data is always fresh.
 * If you want caching, pass `{ cache: 'force-cache' }` in options.
 */
async function safeFetch(url: string | null, options?: RequestInit) {
    if (!url) return null;
    try {
        const fetchOptions = { cache: "no-store", ...options } as RequestInit;
        const res = await fetch(url, fetchOptions);
        if (!res.ok) return null;
        return await res.json();
    } catch (err) {
        console.error("wordpressHelpers fetch error:", err);
        return null;
    }
}

export const getPosts = async (options?: RequestInit): Promise<any[]> => {
    const url = buildWpApiUrl("/wp/v2/posts?_embed&per_page=100");
    const data = await safeFetch(url, options);
    return Array.isArray(data) ? data : [];
};

export const getPost = async (id: string | number, options?: RequestInit): Promise<any | null> => {
    const url = buildWpApiUrl(`/wp/v2/posts/${id}?_embed`);
    return await safeFetch(url, options);
};

export const getRelatedPosts = async (categoryId: number, perPage = 3, options?: RequestInit): Promise<any[]> => {
    const url = buildWpApiUrl(`/wp/v2/posts?_embed&categories=${categoryId}&per_page=${perPage}`);
    const data = await safeFetch(url, options);
    return Array.isArray(data) ? data : [];
};

export default {
    getPosts,
    getPost,
    getRelatedPosts,
};
