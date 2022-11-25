import axios from 'axios';
import { API_TV_MAZE_BASE_URL } from '../../environment';

const instance = axios.create({
  baseURL: API_TV_MAZE_BASE_URL,
});

export default instance;
