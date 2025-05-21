import Skill from "./Skill";

function SkillList() {
  const skills = [
    { skill: "React", emoji: "💪", color: "aqua" },
    { skill: "HTML+CSS", emoji: "💪", color: "orange" },
    { skill: "JavaScript", emoji: "💪", color: "yellow" },
    { skill: "Svelte", emoji: "👶", color: "orangered" },
    { skill: "Python", emoji: "🐍", color: "lightgreen" },
    { skill: "AWS", emoji: "☁️", color: "yellow" },
    { skill: "Linux", emoji: "🐧", color: "lightblue" },
    { skill: "Shell Scripting", emoji: "🐚", color: "orange" },
    { skill: "Perl", emoji: "🐫", color: "lightgreen" },
  ];

  // 1) Early return if empty
  if (skills.length === 0) {
    return (
      <div className="no-skills">
        <p>
          <strong>No skills added yet.</strong>
        </p>
        <p>Please add at least one skill to see your list.</p>
      </div>
    );
  }

  // 2) Normal rendering when non‐empty
  return (
    <div className="skill-list">
      {skills.map(({ skill, emoji, color }) => (
        <Skill key={skill} skill={skill} emoji={emoji} color={color} />
      ))}
    </div>
  );
}

export default SkillList;
