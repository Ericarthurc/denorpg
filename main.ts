import { roles, races, Roles, Races } from "./stats.ts";
import { attacks } from "./attacks.ts";

function input(message = ""): string {
  const buf = new Uint8Array(1024);
  Deno.stdout.writeSync(new TextEncoder().encode(`${message} `));
  const n = <number>Deno.stdin.readSync(buf);
  return new TextDecoder().decode(buf.subarray(0, n)).trim();
}

async function asyncInput(message = ""): Promise<string> {
  const buf = new Uint8Array(1024);
  await Deno.stdout.write(new TextEncoder().encode(`${message} `));
  const n = <number>await Deno.stdin.read(buf);
  return new TextDecoder().decode(buf.subarray(0, n)).trim();
}

class Player {
  constructor(_name: string, _race: Races, _role: Roles) {
    this.name = _name;
    this.race = _race;
    this.role = _role;

    this.health = roles[_role].health + races[_race].health;
    this.attack = roles[_role].attack + races[_race].attack;
  }

  public name;
  public race;
  public role;
  private health;
  private attack;

  public listSkills() {
    attacks.forEach((skill) => {
      if (skill.role == this.role) {
        console.log(
          `${skill.skillName.padEnd(10, " ")} [${skill.description}]`
        );
      }
    });
  }
}

const PlayerOne = new Player("Eric", "elf", "warrior");

console.log(PlayerOne);

PlayerOne.listSkills();
