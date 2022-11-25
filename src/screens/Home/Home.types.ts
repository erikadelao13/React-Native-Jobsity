export type TSearchShow = {
  show: TSeries;
};

export type TSerie = {
  id: number;
  season: number;
  number: number;
  name: string;
  rating?: {
    average: number;
  };
  image: {
    medium: string;
    original: string;
  };
  genres: Array<string>;
  summary: string;
  schedule: {
    time: string;
    days: Array<string>;
  };
};

export type TSeries = Array<TSerie>;
