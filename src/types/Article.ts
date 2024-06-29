export type ArticleProps = {
  title: string;
  date: Date;
  pictureUrl: string;
  rate?: number;
  fullWidth?: boolean;
};

export type ArticleDb = {
  date: string;
  rate: number;
  title: string;
  content: {
    subtitle: string;
    content: string[];
  }[];
};
