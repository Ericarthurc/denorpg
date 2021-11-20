export interface IRace {
  health: number;
  mana: number;
  attack: number;
}

export type IRaces = {
  [index in Races]: IRace;
};

export type Races = "human" | "elf";

export const races: IRaces = {
  human: { health: 15, mana: 10, attack: 6 },
  elf: { health: 10, mana: 20, attack: 3 },
};
