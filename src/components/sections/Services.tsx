import { services } from "@/lib/content";
import Carousel from "@/components/ui/Carousel";
import Icon from "@/components/ui/Icon";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Services() {
  return (
    <section id="services" className="service-area section-padding" aria-labelledby="services-title">
      <div className="container">
        <SectionTitle id="services-title">What I Can Do For You</SectionTitle>
        <Carousel label="Areas of expertise">
          {services.map((service) => (
            <article key={service.title} className="service_content">
              <span aria-hidden="true">
                <Icon name={service.icon} size={30} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
