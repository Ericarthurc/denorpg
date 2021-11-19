export interface IRole {
  health: number;
  attack: number;
}

export type IRoles = {
  [index in Roles]: IRole;
};

export type Roles = "warrior" | "wizard";

export const roles = {
  warrior: { health: 100, attack: 10 },
  wizard: { health: 80, attack: 12 },
};

export interface IRace {
  health: number;
  attack: number;
}

export type IRaces = {
  [index in Races]: IRace;
};

export type Races = "human" | "elf";

export const races: IRaces = {
  human: { health: 15, attack: 6 },
  elf: { health: 10, attack: 3 },
};
