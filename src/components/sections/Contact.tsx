import ContactForm from "@/components/ui/ContactForm";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-area section-padding"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <SectionTitle id="contact-title">Get in Touch</SectionTitle>
        <div className="row">
          <div className="col-lg-10 offset-lg-1 col-sm-12">
            <p className="contact-intro">
              Have a project or opportunity in mind? Send a message below and
              let&apos;s build something great together.
            </p>
            <div className="contact">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
