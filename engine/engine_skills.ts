import { URoles } from "./engine_roles.ts";

export interface ISkill {
  id: number;
  role: URoles;
  skillName: string;
  description: string;
  damage: number;
  levelRequirement: number;
  manaRequirement: number;
}

export const skillDictionary: { [index in URoles]: ISkill[] | undefined } = {
  warrior: [
    {
      id: 1,
      role: "warrior",
      skillName: "Head Butt",
      description: "Swing your head forward with mighty force!",
      damage: 5,
      levelRequirement: 0,
      manaRequirement: 5,
    },
    {
      id: 2,
      role: "warrior",
      skillName: "Slash",
      description: "Slash your weapon forward striking whats in front of you!",
      damage: 12,
      levelRequirement: 1,
      manaRequirement: 8,
    },
  ],
  wizard: [
    {
      id: 1,
      role: "wizard",
      skillName: "Lightning Strike",
      description: "Lightning strikes from above!",
      damage: 12,
      levelRequirement: 0,
      manaRequirement: 10,
    },
  ],
  ranger: undefined,
  thief: undefined,
  guardian: undefined,
  necromancer: undefined,
};
