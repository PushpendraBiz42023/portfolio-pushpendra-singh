interface SectionTitleProps {
  id: string;
  children: React.ReactNode;
}

export default function SectionTitle({ id, children }: SectionTitleProps) {
  return (
    <div className="section-title">
      <h2 id={id}>{children}</h2>
    </div>
  );
}
