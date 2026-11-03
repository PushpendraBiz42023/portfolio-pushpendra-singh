import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} – Frontend Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#232a34", color: "#fff" }}>
        <div style={{ fontSize: 28, color: "#2ca46d", fontWeight: 600 }}>Portfolio</div>
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 16 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 40, marginTop: 24 }}>{siteConfig.jobTitle}</div>
        <div style={{ fontSize: 30, marginTop: 24, color: "#cfd6df" }}>React.js · Next.js · TypeScript · Jaipur, India</div>
      </div>
    ),
    size,
  );
}
