import * as dayjs from 'dayjs';

import { Game } from '../interfaces';

import { platforms, tags } from '../data/properties';

export const parseGameToForm = (game: Game) => {
  return {
    name: game.name,
    description: game.description,
    publisher: game.publisher,
    developer: game.developer,
    releaseDate: dayjs(game.releaseDate).format('YYYY-MM-DD'),
    price: `${game.price}`,
    tags: tags
      .filter((tag) => game.tags.includes(tag.name))
      .map((t) => t.id) as never[],
    platforms: platforms
      .filter((platform) => game.platforms.includes(platform.name))
      .map((p) => p.id) as never[],
  };
};

export const parseGameFormToObject = (gameFormValues: {
  [key: string]: any;
}) => {
  return {
    ...gameFormValues,
    tags: gameFormValues['tags']?.map(
      (tag: number) => tags.find((t) => t.id === tag)!.name
    ),
    platforms: gameFormValues['platforms']?.map(
      (platform: number) => platforms.find((p) => p.id === platform)!.name
    ),
    coverImage: '',
    gamePlayImages: [],
    releaseDate: dayjs(gameFormValues['releaseDate']).toDate(),
  };
};
