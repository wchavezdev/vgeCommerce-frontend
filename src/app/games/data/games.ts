import { Game } from '../../games/interfaces';

export const games: Game[] = [
  {
    id: 1,
    name: 'Rainbow Six Siege',
    description:
      "Tom Clancy's Rainbow Six® Siege features evolving gameplay and limitless strategic options to lead your team to victory.",
    price: 19.99,
    coverImage: 'assets/covers/rainbow-six-siege.jpeg',
    rating: 2.6,
    releaseDate: new Date('12/01/15'),
    developer: 'Ubisoft',
    publisher: 'Ubisoft',
    platforms: ['PC'],
    tags: ['Action', 'Strategy', 'Shooter'],
  },
  {
    id: 2,
    name: "Assassin's Creed® Valhalla",
    description:
      'Become a legendary Viking on a quest for glory. Raid your enemies, grow your settlement, and build your political power.',
    price: 23.99,
    coverImage: 'assets/covers/assassins-creed-valhalla.jpeg',
    rating: 4.6,
    releaseDate: new Date('11/17/20'),
    developer: 'Ubisoft Montreal',
    publisher: 'Ubisoft',
    platforms: ['PC'],
    tags: ['Action', 'RPG', 'Open World'],
  },
  {
    id: 3,
    name: 'God of War',
    description:
      'His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.',
    price: 31.99,
    coverImage: 'assets/covers/god-of-war.jpeg',
    rating: 4.9,
    releaseDate: new Date('01/14/22'),
    developer: 'Santa Monica Studio',
    publisher: 'PlayStation PC LLC',
    platforms: ['PC'],
    tags: ['Action', 'RPG', 'Adventure'],
  },
  {
    id: 4,
    name: 'Ruggnar',
    description:
      'Ruggnar is a platformer without enemies, but many traps are hidden in the darkness. Help Ruggnar explore gloomy places with his bag and a few candles as his sole equipment.',
    price: 5.39,
    coverImage: 'assets/covers/ruggnar.jpeg',
    rating: 4.1,
    releaseDate: new Date('06/23/22'),
    developer: "Sword N' Wands",
    publisher: 'PID Games',
    platforms: ['PC'],
    tags: ['Action-Adventure'],
  },
  {
    id: 5,
    name: 'The Caligula Effect 2',
    description:
      'Redo is a world without sorrow built by the virtuadoll Regret. Virtuadoll songs give Redo citizens respite from their struggles. Our heroes discover the truth and form the Go-Home Club to return to reality. Return home with companions full of regrets in this school-themed RPG.',
    price: 13.99,
    coverImage: 'assets/covers/the-caligula-effect-2.jpeg',
    rating: 4.1,
    releaseDate: new Date('06/22/22'),
    developer: 'historia Inc. / FURYU Corporation.',
    publisher: 'historia Inc.',
    platforms: ['PC'],
    tags: ['RPG'],
  },
  {
    id: 6,
    name: 'Genshin Impact',
    description:
      'Embark on a journey across Teyvat to find your lost sibling and seek answers from The Seven — the gods of each element. Explore this wondrous world, join forces with a diverse range of characters, and unravel the countless mysteries that Teyvat holds...',
    price: 23.99,
    coverImage: 'assets/covers/genshin-impact.jpeg',
    rating: 4.1,
    releaseDate: new Date('06/08/21'),
    developer: 'COGNOSPHERE PTE. LTD.',
    publisher: 'COGNOSPHERE PTE. LTD.',
    platforms: ['PC'],
    tags: ['RPG', 'Adventure', 'Open World'],
    gamePlayImages: [
      'assets/gameplays/genshin-impact/image1.jpeg',
      'assets/gameplays/genshin-impact/image2.jpeg',
      'assets/gameplays/genshin-impact/image3.jpeg',
      'assets/gameplays/genshin-impact/image4.jpeg',
    ],
  },
];
