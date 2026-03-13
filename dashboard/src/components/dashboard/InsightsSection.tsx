import { businessInsights } from "@/data/dashboardData";
import SectionHeader from "./SectionHeader";

const InsightsSection = () => (
  <div>
    <SectionHeader title="Business Insights & Recommendations" subtitle="Strong business conclusions derived from behavioral analysis" id="insights" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {businessInsights.map((insight, i) => {
        return (
          <div key={i} className="insight-card group">
            <div className="mb-3">
              <h3 className="text-lg font-bold text-foreground leading-tight">{insight.title}</h3>
            </div>
            <div className="mb-3 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-primary mono glow-text">{insight.metric}</span>
              <span className="text-sm text-muted-foreground">{insight.metricLabel}</span>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">{insight.description}</p>
          </div>
        );
      })}
    </div>
  </div>
);

export default InsightsSection;
