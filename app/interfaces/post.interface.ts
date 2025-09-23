export interface PostData {
  id: number;
  title: string;
  content: string;
  author_id: number;
  likes: number;
  dislikes: number;
  rating: number;
  published_at: string;
  updated_at: string;
}

export interface GetPostDataResponce {
  page: number;
  posts: PostData[];
  total_pages: number;
}

export interface PostActions {
  id: number;
  action: string;
}
