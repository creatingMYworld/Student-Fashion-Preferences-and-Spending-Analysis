import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Cell, PieChart, Pie } from "recharts";
import { spendingDistribution, priceRangeData, purchaseFrequencyData, discountImportanceData } from "@/data/dashboardData";
import SectionHeader from "./SectionHeader";

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-xl">
        <p className="text-foreground font-semibold text-lg">{payload[0].payload.name || payload[0].payload.range}</p>
        <p className="text-primary mono text-base font-bold">{payload[0].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

const COLORS = ["hsl(174, 72%, 50%)", "hsl(200, 80%, 55%)", "hsl(280, 60%, 55%)", "hsl(38, 92%, 60%)", "hsl(340, 70%, 55%)"];

const SpendingSection = () => (
  <div>
    <SectionHeader title="Spending & Purchase Behavior" subtitle="Annual spending patterns, price sensitivity, and purchase frequency" id="spending" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Spending Distribution */}
      <div className="dashboard-card">
        <h3 className="text-xl font-bold text-muted-foreground mb-4">Annual Spending Distribution (₹)</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={spendingDistribution}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" vertical={false} />
            <XAxis dataKey="range" tick={{ fill: "hsl(210, 20%, 85%)", fontSize: 16 }} />
            <YAxis tick={{ fill: "hsl(215, 12%, 55%)", fontSize: 16 }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="count" radius={[6, 6, 0, 0]} barSize={35}>
              {spendingDistribution.map((_, i) => (
                <Cell key={i} fill={`hsl(174, 72%, ${55 - i * 5}%)`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Price Range */}
      <div className="dashboard-card">
        <h3 className="text-xl font-bold text-muted-foreground mb-4">Preferred Price Range Per Item</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={priceRangeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: "hsl(210, 20%, 85%)", fontSize: 16 }} />
            <YAxis tick={{ fill: "hsl(215, 12%, 55%)", fontSize: 16 }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={40}>
              {priceRangeData.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Purchase Frequency */}
      <div className="dashboard-card">
        <h3 className="text-xl font-bold text-muted-foreground mb-4">Purchase Frequency</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={purchaseFrequencyData} layout="vertical" margin={{ left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" horizontal={false} />
            <XAxis type="number" tick={{ fill: "hsl(215, 12%, 55%)", fontSize: 16 }} />
            <YAxis type="category" dataKey="name" tick={{ fill: "hsl(210, 20%, 85%)", fontSize: 16 }} width={150} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={22}>
              {purchaseFrequencyData.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Discount Importance */}
      <div className="dashboard-card">
        <h3 className="text-xl font-bold text-muted-foreground mb-4">Are Discounts Important?</h3>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie data={discountImportanceData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" stroke="none" paddingAngle={4} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
              {discountImportanceData.map((entry, i) => (
                <Cell key={i} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        <p className="text-base text-center text-muted-foreground mt-4">84% of students consider discounts important or sometimes important</p>
      </div>
    </div>
  </div>
);

export default SpendingSection;
