import { navItems, siteConfig, socialLinks } from "@/lib/site";
import Icon from "@/components/ui/Icon";

export default function Footer() {
  return (
    <footer className="footer-area section-padding">
      <div className="container footer_social">
        <p className="footer_logo">{siteConfig.name}</p>
        <nav aria-label="Footer">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <address className="footer_contacts">
          <a href={`mailto:${siteConfig.email}`}>
            <Icon name="mail" size={16} /> {siteConfig.email}
          </a>
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={16} /> WhatsApp: @{siteConfig.whatsappUsername}
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
          {socialLinks.map((link) =>
            link.href ? (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
                <Icon name={link.icon} size={16} /> {link.name}
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            ) : null,
          )}
          <span>
            <Icon name="pin" size={16} /> {siteConfig.location}
          </span>
        </address>
        <p className="copyright">© {new Date().getFullYear()} {siteConfig.name}. Built with Next.js and TypeScript.</p>
      </div>
    </footer>
  );
}
