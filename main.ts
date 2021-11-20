import { asyncInput } from "./helpers.ts";
import { roles, Roles } from "./engine/engine_roles.ts";
import { races, Races } from "./engine/engine_races.ts";
import { skillDictionary, ISkill } from "./engine/engine_skills.ts";

class Player {
  constructor(_name: string, _race: Races, _role: Roles) {
    this.name = _name;
    this.race = _race;
    this.role = _role;

    this.health = roles[_role].health + races[_race].health;
    this.mana = roles[_role].mana + races[_race].mana;
    this.attack = roles[_role].attack + races[_race].attack;
  }

  private name;
  private race;
  private role;
  private experience = 0;
  private health;
  private mana = 0;
  private attack;
  private skills: Pick<ISkill, "id">[] = [];

  public addSkill(skillId: Pick<ISkill, "id">) {}

  public listSkills() {}
  // public listSkills() {
  //   skillDictionary[this.role].forEach((skill) => {
  //     console.log(`${skill.skillName.padEnd(10, " ")} [${skill.description}]`);
  //   });
  // }
}

// const name: string = await asyncInput("Whats your name? ");
// const race: string = await asyncInput("Whats your race? ");
// const role: string = await asyncInput("Whats your role? ");
// console.log(name);
// console.log(race);
// console.log(role);

const PlayerOne = new Player("Eric", "elf", "wizard");

console.log(PlayerOne);

// PlayerOne.listSkills();
