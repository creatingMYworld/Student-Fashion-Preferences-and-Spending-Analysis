import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Cell } from "recharts";
import { confidenceData, regretReasonsData, opinionSourceData, brandTrustData, brandLoyaltyData } from "@/data/dashboardData";
import SectionHeader from "./SectionHeader";

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-xl">
        <p className="text-foreground font-semibold text-lg">{payload[0].payload.name}</p>
        <p className="text-primary mono text-base font-bold">{payload[0].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

const COLORS = ["hsl(174, 72%, 50%)", "hsl(280, 60%, 55%)", "hsl(38, 92%, 60%)", "hsl(340, 70%, 55%)", "hsl(200, 80%, 55%)"];

const BehaviorSection = () => (
  <div>
    <SectionHeader title="Consumer Psychology & Trust" subtitle="Confidence, regret, opinions, and brand trust factors" id="behavior" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Confidence */}
      <div className="dashboard-card">
        <h3 className="text-xl font-bold text-muted-foreground mb-4">Shopping Confidence Level</h3>
        <div className="space-y-4 mt-6">
          {confidenceData.map((item, i) => {
            const pct = (item.value / 5006) * 100;
            return (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground">{item.name}</span>
                  <span className="mono text-primary">{pct.toFixed(0)}%</span>
                </div>
                <div className="w-full h-3 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: COLORS[i] }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Regret Reasons */}
      <div className="dashboard-card">
        <h3 className="text-xl font-bold text-muted-foreground mb-4">Reasons for Purchase Regret</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={regretReasonsData} layout="vertical" margin={{ left: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" horizontal={false} />
            <XAxis type="number" tick={{ fill: "hsl(215, 12%, 55%)", fontSize: 16 }} />
            <YAxis type="category" dataKey="name" tick={{ fill: "hsl(210, 20%, 85%)", fontSize: 16 }} width={160} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={18}>
              {regretReasonsData.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Opinion Source */}
      <div className="dashboard-card">
        <h3 className="text-xl font-bold text-muted-foreground mb-4">Whose Opinion Matters?</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={opinionSourceData} layout="vertical" margin={{ left: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" horizontal={false} />
            <XAxis type="number" tick={{ fill: "hsl(215, 12%, 55%)", fontSize: 16 }} />
            <YAxis type="category" dataKey="name" tick={{ fill: "hsl(210, 20%, 85%)", fontSize: 16 }} width={160} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={20}>
              {opinionSourceData.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Brand Trust */}
      <div className="dashboard-card">
        <h3 className="text-xl font-bold text-muted-foreground mb-4">What Builds Brand Trust?</h3>
        <div className="space-y-4 mt-6">
          {brandTrustData.map((item, i) => {
            const pct = (item.value / 5006) * 100;
            return (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground">{item.name}</span>
                  <span className="mono text-primary">{item.value.toLocaleString()}</span>
                </div>
                <div className="w-full h-3 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${pct}%`, background: COLORS[i] }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Brand Loyalty */}
      <div className="dashboard-card md:col-span-2">
        <h3 className="text-xl font-bold text-muted-foreground mb-4">What Drives Brand Loyalty?</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={brandLoyaltyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: "hsl(210, 20%, 85%)", fontSize: 16 }} />
            <YAxis tick={{ fill: "hsl(215, 12%, 55%)", fontSize: 16 }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={45}>
              {brandLoyaltyData.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default BehaviorSection;
