export interface IRole {
  health: number;
  mana: number;
  attack: number;
  armor: number;
  evade: number;
  speed: number;
  luck: number;
}

export type IRoles = {
  [index in URoles]: IRole;
};

export type URoles =
  | "warrior"
  | "wizard"
  | "ranger"
  | "thief"
  | "guardian"
  | "necromancer";

export const roles: IRoles = {
  warrior: {
    health: 100,
    mana: 50,
    attack: 10,
    armor: 15,
    evade: 5,
    speed: 5,
    luck: 5,
  },
  wizard: {
    health: 80,
    mana: 100,
    attack: 15,
    armor: 5,
    evade: 10,
    speed: 8,
    luck: 10,
  },
  ranger: {
    health: 70,
    mana: 70,
    attack: 8,
    armor: 5,
    evade: 15,
    speed: 15,
    luck: 13,
  },
  thief: {
    health: 60,
    mana: 60,
    attack: 12,
    armor: 10,
    evade: 25,
    speed: 20,
    luck: 17,
  },
  guardian: {
    health: 150,
    mana: 50,
    attack: 5,
    armor: 20,
    evade: 1,
    speed: 1,
    luck: 1,
  },
  necromancer: {
    health: 60,
    mana: 90,
    attack: 15,
    armor: 10,
    evade: 5,
    speed: 5,
    luck: -5,
  },
};

export const rolesArray: string[] = Object.keys(roles);
