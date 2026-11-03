import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import ScrollTop from "@/components/ui/ScrollTop";
import { socialLinks, siteConfig } from "@/lib/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Jaipur", addressRegion: "Rajasthan", addressCountry: "IN" },
    worksFor: { "@type": "Organization", name: "Biz4Group LLC" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "MSJG College, Bharatpur" },
    knowsAbout: ["React.js", "Next.js", "TypeScript", "JavaScript", "Web Accessibility", "Core Web Vitals", "Payload CMS", "React Native"],
    sameAs: socialLinks.flatMap((link) => (link.href ? [link.href] : [])),
  },
};

export default function HomePage() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
