const skills = [
  {
    id: 1,
    skillName: "Head Butt",
    description: "Swing your head forward with mighty force!",
    damage: 5,
    levelRequirement: 0,
    manaRequirement: 5,
  },
  {
    id: 2,
    skillName: "Slash",
    description: "Slash your weapon forward striking whats in front of you!",
    damage: 12,
    levelRequirement: 0,
    manaRequirement: 8,
  },
];

const picked = "Slash";

const selection = skills.filter((skill) => skill.skillName == picked);

console.log(selection);
