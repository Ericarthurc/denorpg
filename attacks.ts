import { Roles } from "./stats.ts";

interface ISkill {
  id: number;
  role: Roles;
  skillName: string;
  description: string;
  damage: number;
}

export const attacks: ISkill[] = [
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
  {
    id: 3,
    role: "wizard",
    skillName: "Lightning Strike",
    description: "Lightning strikes from above!",
    damage: 12,
  },
];
