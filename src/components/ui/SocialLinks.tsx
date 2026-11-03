import { socialLinks } from "@/lib/site";
import Icon from "./Icon";

interface SocialLinksProps {
  className?: string;
}

/** Renders only profiles that have a verified URL in lib/site.ts. */
export default function SocialLinks({ className }: SocialLinksProps) {
  const available = socialLinks.filter((link) => link.href);
  if (available.length === 0) return null;

  return (
    <ul className={className} aria-label="Social profiles">
      {available.map((link) => (
        <li key={link.name}>
          <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${link.name} (opens in a new tab)`} title={link.name}>
            <Icon name={link.icon} size={18} />
          </a>
        </li>
      ))}
    </ul>
  );
}
