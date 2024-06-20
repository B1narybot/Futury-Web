import { Component, OnInit } from '@angular/core';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
}

interface Comment {
  text: string;
  author: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[] = [
    { id: 1, title: 'Post 1', excerpt: 'This is an excerpt for post 1...', image: '/assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' },
    { id: 2, title: 'Post 2', excerpt: 'This is an excerpt for post 2...', image: '/assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' },
    { id: 3, title: 'Post 3', excerpt: 'This is an excerpt for post 3...', image: '/assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' },
    { id: 4, title: 'Post 4', excerpt: 'This is an excerpt for post 4...', image: '/assets/data/images /professional-display-image-for-digital-products-simple-clean-cut-design-aesthetic-use-of-minimalis.jpeg' }
  ];

  comments: Comment[] = [
    { text: 'Great post!', author: 'User1' },
    { text: 'Very informative.', author: 'User2' },
    { text: 'Thanks for sharing!', author: 'User3' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  readMore(postId: number): void {
    // Logic to navigate to the full blog post
  }

  sharePost(postId: number): void {
    // Logic to share the post on social media
  }

  submitComment(): void {
    // Logic to submit a comment
  }
}
