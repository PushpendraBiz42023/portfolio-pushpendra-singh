import { skillGroups } from "@/lib/content";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className="about-area section-padding" aria-labelledby="skills-title">
      <div className="container">
        <SectionTitle id="skills-title">My Skills</SectionTitle>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article key={group.title} className="skill-group">
              <header>
                <span className="skill-group__num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{group.title}</h3>
              </header>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
