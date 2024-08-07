export type ArticleProps = {
  title: string;
  date: Date;
  pictureUrl: string;
  rate?: number;
  fullWidth?: boolean;
};

export type ArticleDb = {
  id: string;
  date: string;
  rate: number;
  title: string;
  content: {
    subtitle: string;
    content: string[];
  }[];
};
