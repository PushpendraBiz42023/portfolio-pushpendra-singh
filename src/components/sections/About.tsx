import Image from "next/image";
import { about } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import Icon from "@/components/ui/Icon";

export default function About() {
  return (
    <section id="about" className="about-me-area section-padding" aria-labelledby="about-title">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-12">
            <div className="about_content">
              <h2 id="about-title">{about.heading}</h2>
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <a href={siteConfig.resumeUrl} download={siteConfig.resumeFileName} className="btn-pill">
                Download CV <Icon name="download" size={16} />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="about_content_img">
              <Image src="/images/about.png" alt="Illustration of a developer workspace" width={600} height={550} sizes="(max-width: 992px) 90vw, 540px" className="img-fluid" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
