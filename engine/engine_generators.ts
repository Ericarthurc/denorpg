import { racesArray } from "./engine_races.ts";
import { rolesArray } from "./engine_roles.ts";
import { URaces } from "./engine_races.ts";
import { URoles } from "./engine_roles.ts";

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generateRandomPlayerRaceRole(): [race: URaces, role: URoles] {
  const race = racesArray[getRandomNumber(0, racesArray.length - 1)];
  const role = rolesArray[getRandomNumber(0, rolesArray.length - 1)];
  return [<URaces>race, <URoles>role];
}

export function rollDice(dieSides: number): number {
  return getRandomNumber(1, dieSides);
}
