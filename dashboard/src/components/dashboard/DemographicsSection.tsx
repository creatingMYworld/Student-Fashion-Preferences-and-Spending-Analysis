import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { genderData, studyLevelData, uniformPolicyData } from "@/data/dashboardData";
import SectionHeader from "./SectionHeader";

const COLORS = ["hsl(174, 72%, 50%)", "hsl(280, 60%, 55%)", "hsl(38, 92%, 60%)", "hsl(340, 70%, 55%)", "hsl(200, 80%, 55%)", "hsl(150, 60%, 45%)", "hsl(30, 80%, 55%)"];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-xl">
        <p className="text-foreground font-semibold text-lg">{payload[0].name || payload[0].payload.name}</p>
        <p className="text-primary mono text-base font-bold">{payload[0].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

const DemographicsSection = () => (
  <div>
    <SectionHeader title="Demographics Overview" subtitle="Gender distribution and academic background of 5,006 respondents" id="demographics" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Gender */}
      <div className="dashboard-card">
        <h3 className="text-sm font-semibold text-muted-foreground mb-4">Gender Distribution</h3>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie data={genderData} cx="50%" cy="50%" innerRadius={55} outerRadius={85} dataKey="value" stroke="none" paddingAngle={4}>
              {genderData.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-6 mt-2">
          {genderData.map((g, i) => (
            <div key={i} className="flex items-center gap-2 text-xs">
              <div className="w-3 h-3 rounded-full" style={{ background: g.color }} />
              <span className="text-muted-foreground">{g.name}: <span className="text-foreground font-semibold mono">{g.value}</span></span>
            </div>
          ))}
        </div>
      </div>

      {/* Study Level */}
      <div className="dashboard-card md:col-span-2">
        <h3 className="text-sm font-semibold text-muted-foreground mb-4">Level of Study</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={studyLevelData} layout="vertical" margin={{ left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" horizontal={false} />
            <XAxis type="number" tick={{ fill: "hsl(215, 12%, 55%)", fontSize: 16 }} />
            <YAxis type="category" dataKey="name" tick={{ fill: "hsl(210, 20%, 85%)", fontSize: 16 }} width={160} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={20}>
              {studyLevelData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default DemographicsSection;
