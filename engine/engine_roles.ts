export interface IRole {
  health: number;
  mana: number;
  attack: number;
}

export type IRoles = {
  [index in Roles]: IRole;
};

export type Roles = "warrior" | "wizard";

export const roles: IRoles = {
  warrior: { health: 100, mana: 50, attack: 10 },
  wizard: { health: 80, mana: 100, attack: 12 },
};
