declare module "dayjs" {
  interface Dayjs {
    fromNow();
  }
}

export type User = {
  comments: Comment[];
  createdAt: string;
  email: string;
  id: string;
  image: string;
  projects: [Project];
  username: string;
  salt?: string;
  hash?: string;
};
export type Project = {
  createdAt: string;
  description: string;
  email: string;
  id: string;
  image: string;
  issues: Issue[];
  name: string;
  slug: string;
  url: string;
};
export type Issue = {
  comments: Comment[];
  createdAt: string;
  description: string;
  id: string;
  project: string;
  severity: string;
  slug: string;
  state: string;
  title: string;
  votes: number;
};

export type Comment = {
  content: string;
  createdAt: string;
  id: string;
  issueId: string;
  user: User;
  userId: string;
};