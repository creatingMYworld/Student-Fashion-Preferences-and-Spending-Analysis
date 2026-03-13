import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Cell } from "recharts";
import { modelPerformanceData, textMiningKeywords } from "@/data/dashboardData";
import SectionHeader from "./SectionHeader";

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-xl">
        <p className="text-foreground font-semibold text-lg">{payload[0].payload.name}</p>
        <p className="text-primary mono text-base">Accuracy: {payload[0].payload.accuracy}%</p>
        <p className="text-chart-2 mono text-base">F1 Score: {payload[0].payload.f1}%</p>
      </div>
    );
  }
  return null;
};

const MLSection = () => (
  <div>
    <SectionHeader title="Business Insights & Recommendations" subtitle="Actionable insights derived from the complete analysis" id="insights" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Model Performance */}
      <div className="dashboard-card">
        <h3 className="text-xl font-bold text-muted-foreground mb-4">ML Model Accuracy Comparison</h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={modelPerformanceData} layout="vertical" margin={{ left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" horizontal={false} />
            <XAxis type="number" domain={[0, 100]} tick={{ fill: "hsl(215, 12%, 55%)", fontSize: 16 }} tickFormatter={(v) => `${v}%`} />
            <YAxis type="category" dataKey="name" tick={{ fill: "hsl(210, 20%, 85%)", fontSize: 16 }} width={170} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="accuracy" radius={[0, 6, 6, 0]} barSize={22}>
              {modelPerformanceData.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/10">
          <p className="text-base text-muted-foreground">
            <span className="text-primary font-semibold">SVM (Linear)</span> achieved the best accuracy at <span className="mono text-primary">86.51%</span> for predicting shopping method preference.
          </p>
        </div>
      </div>

      {/* Text Mining Keywords */}
      <div className="dashboard-card">
        <h3 className="text-xl font-bold text-muted-foreground mb-4">TF-IDF Keywords from Student Feedback</h3>
        <div className="flex flex-wrap gap-2 mt-4">
          {textMiningKeywords.map((word, i) => {
            const sizes = ["text-xs", "text-sm", "text-base", "text-lg"];
            const colors = [
              "bg-primary/10 text-primary border-primary/20",
              "bg-chart-2/10 text-chart-2 border-chart-2/20",
              "bg-chart-3/10 text-chart-3 border-chart-3/20",
              "bg-chart-5/10 text-chart-5 border-chart-5/20",
            ];
            return (
              <span
                key={word}
                className={`${sizes[i % sizes.length]} ${colors[i % colors.length]} px-3 py-1.5 rounded-full border font-medium transition-transform hover:scale-110`}
              >
                {word}
              </span>
            );
          })}
        </div>
        <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/10">
          <p className="text-base text-muted-foreground">
            Keywords extracted using <span className="text-primary font-semibold">TF-IDF vectorization</span> from open-ended student feedback. Top concerns: <span className="text-chart-4">fit, quality, price</span>.
          </p>
        </div>
      </div>

      {/* PCA & Clustering Info */}
      <div className="dashboard-card">
        <h3 className="text-xl font-bold text-muted-foreground mb-4">PCA Dimensionality Reduction</h3>
        <div className="flex flex-col items-center justify-center h-48">
          <div className="relative w-40 h-40">
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse" />
            <div className="absolute inset-4 rounded-full border-2 border-chart-2/30" />
            <div className="absolute inset-8 rounded-full border-2 border-chart-3/30" />
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-4xl font-bold text-primary mono">2D</span>
              <span className="text-sm text-muted-foreground">Projection</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground text-center">PCA reduced high-dimensional features into 2 principal components, capturing the variance in shopping preferences across Online, Offline, and Both segments.</p>
      </div>

      {/* K-Means Clustering */}
      <div className="dashboard-card">
        <h3 className="text-xl font-bold text-muted-foreground mb-4">K-Means Student Segmentation</h3>
        <div className="grid grid-cols-2 gap-3 mt-4">
          {[
            { id: 0, label: "Budget Shoppers", desc: "Low spending, price-focused", color: "hsl(174, 72%, 50%)" },
            { id: 1, label: "Moderate Spenders", desc: "Mid-range, quality conscious", color: "hsl(280, 60%, 55%)" },
            { id: 2, label: "Premium Buyers", desc: "High spending, brand-loyal", color: "hsl(38, 92%, 60%)" },
            { id: 3, label: "Trend Followers", desc: "Festival shoppers, variety seekers", color: "hsl(340, 70%, 55%)" },
          ].map((cluster) => (
            <div key={cluster.id} className="p-3 rounded-lg bg-secondary/50 border border-border">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full" style={{ background: cluster.color }} />
                <span className="text-sm font-semibold text-foreground">Cluster {cluster.id}</span>
              </div>
              <p className="text-base font-bold text-foreground">{cluster.label}</p>
              <p className="text-sm text-muted-foreground">{cluster.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground text-center mt-4">4 distinct student segments identified using K-Means clustering in PCA space</p>
      </div>
    </div>
  </div>
);

export default MLSection;
