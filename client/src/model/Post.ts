export interface Post {
  id?: string;
  email?: string;
  content?: string;
  authorId?: string;
  author?: {
    username?: string;
  };
}
