// post.interface.ts

// each post will have title and category
export interface Post {
    title: string,
    category: string
}

// grouped posted by category
export interface GroupPosts {
    category: string,
    posts: Post[]
}