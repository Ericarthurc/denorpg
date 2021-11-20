export interface IRace {
  health: number;
  mana: number;
  attack: number;
  armor: number;
  evade: number;
  speed: number;
  luck: number;
}

export type IRaces = {
  [index in URaces]: IRace;
};

export type URaces =
  | "human"
  | "elf"
  | "darkelf"
  | "undead"
  | "char"
  | "dwarf"
  | "orcs";

export const races: IRaces = {
  human: {
    health: 15,
    mana: 10,
    attack: 6,
    armor: 0,
    evade: 2,
    speed: 2,
    luck: 2,
  },
  elf: {
    health: 10,
    mana: 20,
    attack: 8,
    armor: 3,
    evade: 5,
    speed: 5,
    luck: 3,
  },
  darkelf: {
    health: 15,
    mana: 15,
    attack: 8,
    armor: 4,
    evade: 2,
    speed: 4,
    luck: 1,
  },
  undead: {
    health: -5,
    mana: 15,
    attack: 10,
    armor: 0,
    evade: 0,
    speed: 0,
    luck: 0,
  },
  char: {
    health: 20,
    mana: 5,
    attack: 3,
    armor: 5,
    evade: 0,
    speed: 0,
    luck: 10,
  },
  dwarf: {
    health: 7,
    mana: 7,
    attack: 4,
    armor: 3,
    evade: 2,
    speed: 2,
    luck: 5,
  },
  orcs: {
    health: 17,
    mana: 8,
    attack: 10,
    armor: 5,
    evade: 0,
    speed: 0,
    luck: 0,
  },
};

export const racesArray: string[] = Object.keys(races);
