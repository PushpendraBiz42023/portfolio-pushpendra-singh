import { education, experience } from "@/lib/content";
import SectionTitle from "@/components/ui/SectionTitle";
import type { TimelineEntry } from "@/types";

function Timeline({ heading, entries }: { heading: string; entries: TimelineEntry[] }) {
  return (
    <div className="col-lg-6 col-sm-12">
      <h3 className="timeline-heading">{heading}</h3>
      {entries.map((entry) => (
        <article key={`${entry.title}-${entry.subtitle}`} className="single_timeline">
          <h4>{entry.title}</h4>
          <span className="active_year">{entry.period}</span>
          <span className="active_company">– {entry.subtitle}</span>
          <p>{entry.description}</p>
        </article>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="resume" className="timeline-area section-padding" aria-labelledby="resume-title">
      <div className="container">
        <SectionTitle id="resume-title">My Experience & Education</SectionTitle>
        <div className="row">
          <Timeline heading="Experience" entries={experience} />
          <Timeline heading="Education & Certifications" entries={education} />
        </div>
      </div>
    </section>
  );
}
