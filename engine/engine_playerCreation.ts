import { Colors } from "../deps.ts";

import { asyncInput } from "../helpers.ts";
import { Player } from "../main.ts";
import { roles, rolesArray, URoles } from "./engine_roles.ts";
import { races, racesArray, URaces } from "./engine_races.ts";

export async function playerCreation(): Promise<Player> {
  let name = "";
  while (name.length == 0) {
    name = await asyncInput("Whats your name?");
  }
  let race = "";
  while (!racesArray.includes(race)) {
    race = await asyncInput(
      `Whats your race? [${racesArray.map((race) =>
        Colors.brightGreen(
          ` ${race.slice(0, 1).toUpperCase() + race.slice(1)} `
        )
      )}]:`
    );
    race = race.toLowerCase();
  }
  let role = "";
  while (!rolesArray.includes(role)) {
    role = await asyncInput(
      `Whats your role? [${rolesArray.map((role) =>
        Colors.brightCyan(` ${role.slice(0, 1).toUpperCase() + role.slice(1)} `)
      )}]:`
    );
    role = role.toLowerCase();
  }
  return new Player(name, <URaces>race, <URoles>role);
}
