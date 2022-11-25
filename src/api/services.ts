import instance from './apiConfig';
import { TVMazeUrls } from './urls';

export const getShows = () => instance.get(TVMazeUrls.shows);

export const getShowDetail = (id: number) => instance.get(`${TVMazeUrls.shows}/${id}`);

export const getSeasons = (id: number) => instance.get(`${TVMazeUrls.shows}/${id}/seasons`);

export const getEpisodesBySeason = (id: number) =>
  instance.get(`${TVMazeUrls.seasons}/${id}/episodes`);

export const getEpisodeDetail = (id: number) => instance.get(`${TVMazeUrls.episodes}/${id}`);

export const searchShow = (query: string) => instance.get(`${TVMazeUrls.search}/${query}`);
