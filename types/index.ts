export interface ProfileDataTypes {
  img: string;
  full_name: string;
  bio: string;
  following: number;
  followers: number;
}

export interface NewsDataTypes {
  date: Date | string;
  title: string;
  id: string;
  paragraph: string;
  img: string;
  category: string;
  author: string;
}

export interface LivestreamDataTypes {
  total_live: number;
  title: string;
  img: string;
  category: string;
}

export interface QuizDataTypes {
  img: string;
  category: string;
  title: string;
  total_play: number;
}
