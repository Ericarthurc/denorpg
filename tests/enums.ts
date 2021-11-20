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
  [index in ERoles]: IRole;
};

enum ERoles {
  warrior = "warrior",
  wizard = "wizard",
  ranger = "ranger",
}

const roles: IRoles = {
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
    health: 100,
    mana: 50,
    attack: 10,
    armor: 15,
    evade: 5,
    speed: 5,
    luck: 5,
  },
  ranger: {
    health: 100,
    mana: 50,
    attack: 10,
    armor: 15,
    evade: 5,
    speed: 5,
    luck: 5,
  },
};
