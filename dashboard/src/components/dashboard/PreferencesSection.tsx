import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Cell, PieChart, Pie } from "recharts";
import { clothingPreferenceData, collegeWearData, shoppingMethodData, shoppingReasonData } from "@/data/dashboardData";
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

const PreferencesSection = () => (
  <div>
    <SectionHeader title="Fashion & Shopping Preferences" subtitle="What students wear, how they shop, and why" id="preferences" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Clothing Preference */}
      <div className="dashboard-card">
        <h3 className="text-xl font-bold text-muted-foreground mb-4">Most Preferred Clothing Type</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={clothingPreferenceData} margin={{ bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: "hsl(210, 20%, 85%)", fontSize: 16 }} angle={-20} textAnchor="end" />
            <YAxis tick={{ fill: "hsl(215, 12%, 55%)", fontSize: 16 }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={40}>
              {clothingPreferenceData.map((entry, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Shopping Method */}
      <div className="dashboard-card">
        <h3 className="text-xl font-bold text-muted-foreground mb-4">Shopping Method Preference</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart margin={{ top: 20, right: 40, bottom: 20, left: 40 }}>
            <Pie data={shoppingMethodData} cx="50%" cy="50%" innerRadius={50} outerRadius={75} dataKey="value" stroke="none" paddingAngle={4} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
              {shoppingMethodData.map((entry, i) => (
                <Cell key={i} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-4 mt-2">
          {shoppingMethodData.map((s, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: s.fill }} />
              <span className="text-muted-foreground">{s.name}: <span className="text-foreground font-semibold mono">{s.value}</span></span>
            </div>
          ))}
        </div>
      </div>

      {/* College Wear */}
      <div className="dashboard-card">
        <h3 className="text-xl font-bold text-muted-foreground mb-4">College Wear Preference</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={collegeWearData} layout="vertical" margin={{ left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" horizontal={false} />
            <XAxis type="number" tick={{ fill: "hsl(215, 12%, 55%)", fontSize: 16 }} />
            <YAxis type="category" dataKey="name" tick={{ fill: "hsl(210, 20%, 85%)", fontSize: 16 }} width={160} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={22}>
              {collegeWearData.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Shopping Reasons */}
      <div className="dashboard-card">
        <h3 className="text-xl font-bold text-muted-foreground mb-4">Why Students Choose Their Shopping Method</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={shoppingReasonData} layout="vertical" margin={{ left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" horizontal={false} />
            <XAxis type="number" tick={{ fill: "hsl(215, 12%, 55%)", fontSize: 16 }} />
            <YAxis type="category" dataKey="name" tick={{ fill: "hsl(210, 20%, 85%)", fontSize: 16 }} width={170} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={22}>
              {shoppingReasonData.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default PreferencesSection;
