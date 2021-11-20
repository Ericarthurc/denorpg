import { asyncInput } from "./helpers.ts";
import { roles, races, Roles, Races } from "./stats.ts";
import { skillBook, ISkill } from "./books.ts";

class Player {
  constructor(_name: string, _race: Races, _role: Roles) {
    this.name = _name;
    this.race = _race;
    this.role = _role;

    this.health = roles[_role].health + races[_race].health;
    this.attack = roles[_role].attack + races[_race].attack;
  }

  private name;
  private race;
  private role;
  private health;
  private attack;
  private skills: ISkill[] = [];

  public addSkill(skillId: number) {}

  public listSkills() {
    skillBook[this.role].forEach((skill) => {
      console.log(`${skill.skillName.padEnd(10, " ")} [${skill.description}]`);
    });
  }
}

const name: string = await asyncInput("Whats your name? ");
const race: string = await asyncInput("Whats your race? ");
const role: string = await asyncInput("Whats your role? ");
console.log(name);
console.log(race);
console.log(role);

// const PlayerOne = new Player("Eric", "elf", "wizard");

// console.log(PlayerOne);

// PlayerOne.listSkills();
