type User = {
  id: string;
  username: string;
  reputation: number;
};

type VoteCount = {
  up: number;
  down: number;
};

type Comment = {
  id: string;
  body: string;
  author: User;
  created_at: string; // ISO 8601
  votes: VoteCount;
};

type Answer = {
  id: string;
  body: string;
  author: User;
  created_at: string;
  updated_at: string;
  votes: VoteCount;
  accepted: boolean;
  comments: Comment[];
};

export type QuestionAnswersProps = {
  id: string;
  title: string;
  body: string;
  tags: string[];
  author: User;
  created_at: string;
  updated_at: string;
  views: number;
  votes: VoteCount;
  answers: Answer[];
  comments: Comment[];
};
