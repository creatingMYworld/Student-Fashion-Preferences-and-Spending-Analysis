import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: string;
}

const StatCard = ({ title, value, subtitle, trend }: StatCardProps) => (
  <div className="stat-card group">
    <div className="flex items-center justify-between">
      <span className="text-sm text-foreground font-medium">{title}</span>
    </div>
    <div className="mt-2">
      <span className="text-5xl font-bold glow-text text-primary mono">{value}</span>
      {trend && <span className="ml-2 text-xs text-chart-3 font-medium">{trend}</span>}
    </div>
    {subtitle && <span className="text-xs text-foreground">{subtitle}</span>}
  </div>
);

export default StatCard;
