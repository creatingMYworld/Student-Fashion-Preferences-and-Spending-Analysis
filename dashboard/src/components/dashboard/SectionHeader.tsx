interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  id?: string;
}

const SectionHeader = ({ title, subtitle, id }: SectionHeaderProps) => (
  <div className="mb-6" id={id}>
    <h2 className="section-title text-xl md:text-2xl">{title}</h2>
    {subtitle && <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>}
  </div>
);

export default SectionHeader;
