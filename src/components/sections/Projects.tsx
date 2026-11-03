import { projects } from "@/lib/content";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectGallery from "./ProjectGallery";

export default function Projects() {
  return (
    <section id="portfolio" className="our_portfolio section-padding" aria-labelledby="portfolio-title">
      <div className="container">
        <SectionTitle id="portfolio-title">Selected Projects</SectionTitle>
        <ProjectGallery projects={projects} />
      </div>
    </section>
  );
}
