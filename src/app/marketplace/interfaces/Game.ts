export interface Game {
  id: number;
  name: string;
  description: string;
  price: number;
  coverImage: string;
  rating: number;
  developer: string;
  publisher: string;
  releaseDate: string;
  platforms: string[];
}
