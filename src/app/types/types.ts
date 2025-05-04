export interface ServiceType {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export interface DocType {
  image: string;
  name: string;
  spec: string;
  link: string;
}

export interface HeroType {
  imgUrl: string;
  alt: string;
}

export interface ArticleType {
  image: string;
  heroImg?: string;
  date: string;
  title: string;
  link?: string;
}

export interface TitleType {
  title: string;
  subtitle: string;
}

export interface HeadingType {
  title: string;
  subtitle: string;
}

export interface FaqType {
  question: string;
  answer: string;
}
