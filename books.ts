import { Roles } from "./stats.ts";

export interface ISkill {
  id: number;
  role: Roles;
  skillName: string;
  description: string;
  damage: number;
}

export const skillBook: { [index in Roles]: ISkill[] } = {
  warrior: [
    {
      id: 1,
      role: "warrior",
      skillName: "Head Butt",
      description: "Swing your head forward with mighty force!",
      damage: 5,
    },
    {
      id: 2,
      role: "warrior",
      skillName: "Slash",
      description: "Slash your weapon forward striking whats in front of you!",
      damage: 12,
    },
  ],
  wizard: [
    {
      id: 1,
      role: "wizard",
      skillName: "Lightning Strike",
      description: "Lightning strikes from above!",
      damage: 12,
    },
  ],
};
