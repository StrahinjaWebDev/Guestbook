export interface Post {
  id?: string;
  email?: string;
  content?: string;
  authorId?: string;
  author?: {
    id?: string;
    username?: string;
  };
}
