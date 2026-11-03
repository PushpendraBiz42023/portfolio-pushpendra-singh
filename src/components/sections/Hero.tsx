import Image from "next/image";
import { hero } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import Icon from "@/components/ui/Icon";
import SocialLinks from "@/components/ui/SocialLinks";
import HeroImg from "../../../public/images/me.png";

export default function Hero() {
  return (
    <section id="home" className="welcome-area" aria-labelledby="hero-title">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-12 text-center">
            <div className="about_me">
              <Image
                src={HeroImg}
                alt="Profile portrait of Pushpendra Singh"
                width={400}
                height={627}
                className="portfolio-image"
                priority
                sizes="(max-width: 992px) 60vw, 400px"
                // className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="about_me_title">
              <span>{hero.greeting}</span>
              <h1 id="hero-title">{hero.heading}</h1>
              <p className="hero-role">{hero.role}</p>
              <p className="hero-intro">{hero.intro}</p>
            </div>
            <address className="profile_info">
              <span>
                <Icon name="pin" size={16} /> {siteConfig.location}
              </span>
              <span>
                <Icon name="whatsapp" size={16} />{" "}
                <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Message me on WhatsApp (@{siteConfig.whatsappUsername})
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </span>
              <span>
                <Icon name="mail" size={16} />{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </span>
            </address>
            <div className="hero-actions">
              <div href="#portfolio" className="btn-pill">
                View Projects
              </div>
              <a
                className="btn-pill btn-pill--outline"
                href="https://www.linkedin.com/in/pushpendra-singh-47aba3221"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
