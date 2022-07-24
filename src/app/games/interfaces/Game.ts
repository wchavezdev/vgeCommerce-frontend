export interface Game {
  id: number | string;
  name: string;
  description: string;
  coverImage: string;
  gamePlayImages?: string[];
  releaseDate: Date;
  publisher: string;
  developer: string;
  price: number;
  rating: number;
  tags: string[];
  platforms: string[];
}

// TODO: Add the missing properties to the VideoGame interface.
export interface GameReview {
  id: number;
  videoGameId: number;
  content: string;
  rating: number;
}

export interface GameDeal {
  id: number;
  videoGameId: number;
  discount: number;
  deadline: Date;
}

interface GameProperty {
  id: number;
  name: string;
}

export interface GameTag extends GameProperty {}
export interface GamePlatform extends GameProperty {}
