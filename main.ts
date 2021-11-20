import { asyncInput } from "./helpers.ts";
import { roles, rolesArray, URoles } from "./engine/engine_roles.ts";
import { races, racesArray, URaces } from "./engine/engine_races.ts";
import { skillDictionary, ISkill } from "./engine/engine_skills.ts";
import {
  generateRandomPlayerRaceRole,
  rollDice,
} from "./engine/engine_generators.ts";
import { playerCreation } from "./engine/engine_playerCreation.ts";

export class Player {
  constructor(_name: string, _race: URaces, _role: URoles) {
    this.name = _name;
    this.race = _race;
    this.role = _role;

    this.health = roles[_role].health + races[_race].health;
    this.mana = roles[_role].mana + races[_race].mana;
    this.attack = roles[_role].attack + races[_race].attack;

    this.armor = roles[_role].armor + races[_race].armor;
    this.evade = roles[_role].evade + races[_race].evade;
    this.speed = roles[_role].speed + races[_race].speed;
    this.luck = roles[_role].luck + races[_race].luck;

    skillDictionary[_role]?.map((skill) => {
      if (skill.levelRequirement == 0) {
        this.skills.push(skill.id);
      }
    });
  }

  private name;
  private race;
  private role;
  private playerExperience = 0;
  private playerLevel = 0;
  private health;
  private mana;
  private attack;
  private armor;
  private evade;
  private speed;
  private luck;

  private skills: number[] = [];

  // public addSkill(skillId: Pick<ISkill, "id">) {}

  public async useSkill() {
    const ready = skillDictionary[this.role].filter((skill) =>
      this.skills.includes(skill.id)
    );
    const skillNames = ready.map((skill) => skill.skillName);
    console.log(skillNames);

    let pickedSkill = "";
    while (!skillNames.includes(pickedSkill)) {
      pickedSkill = await asyncInput("Pick a skill:");
      console.log(pickedSkill);
    }
    // const prepSkill = ready.filter((skill) => skill.skillName == pickedSkill);
    // console.log(`Using ${prepSkill}!`);
  }

  public listSkills() {}
  // public listSkills() {
  //   skillDictionary[this.role].forEach((skill) => {
  //     console.log(`${skill.skillName.padEnd(10, " ")} [${skill.description}]`);
  //   });
  // }
}

const PlayerOne = await playerCreation();
console.log(PlayerOne);

// const [race, role] = generateRandomPlayerRaceRole();
// const BotOne = new Player("Botty", race, role);
// console.log(BotOne);
PlayerOne.useSkill();
