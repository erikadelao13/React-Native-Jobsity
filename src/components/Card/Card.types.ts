export type TCardVariant = 'Vertical' | 'Horizontal';

export type TCardProps = {
  title: string;
  image: string;
  description: string;
  rating: number;
  variant?: TCardVariant;
};
