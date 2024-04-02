import axios, { AxiosInstance } from "axios";

export interface Movie {
  id: string;
  poster_path: string;
  title: string;
  budget: number;
  original_language: string;
  popularity: number;
  overview: string;
}

export interface FetchMoviesResponseBody {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export class MoviesService {
  private static api: AxiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWI1MTJlOGE4MTg4N2ZkYTgzOTc5N2M2MWEyZDZkNSIsInN1YiI6IjY1ZWY4ZGEyNmJlYWVhMDE4NmQ1NzFmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HSz1vevA4HXmyCWoN7m3qK-i5YYrszQ-SLMKyfsUoCI",
    },
  });

  static async getMovies(): Promise<Movie[]> {
    const response = await this.api<FetchMoviesResponseBody>("movie/popular");
    return response.data.results;
  }

  static async getMovieDetail(id: string): Promise<Movie> {
    const response = await this.api<Movie>(`movie/${id}`);
    return response.data;
  }
}
