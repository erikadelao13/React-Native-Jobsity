import { TSerie } from '../Home/Home.types';

export type TSerieDetailViewProps = {
  serieDetail: TSerie;
  seasons: Array<TSeason>;
  daysScheduled: string;
  formatHtml: string;
  renderSeason: () => void;
  genres: string;
};

export type TSeason = {
  id: number;
  season: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
};
