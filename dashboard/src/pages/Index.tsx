import { Database, Users, ShoppingCart, TrendingUp, BarChart3 } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import DashboardNav from "@/components/dashboard/DashboardNav";
import DemographicsSection from "@/components/dashboard/DemographicsSection";
import PreferencesSection from "@/components/dashboard/PreferencesSection";
import SpendingSection from "@/components/dashboard/SpendingSection";
import BehaviorSection from "@/components/dashboard/BehaviorSection";
import MLSection from "@/components/dashboard/MLSection";
import InsightsSection from "@/components/dashboard/InsightsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-12">
        {/* Hero */}
        <div id="overview" className="text-center py-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-3">
            <span className="section-title">Student Fashion Preferences</span>
            <br />
            <span className="text-foreground">& Spending Analysis</span>
          </h1>
          <p className="text-foreground max-w-2xl mx-auto text-sm md:text-base">
            Business Analytics Dashboard — Analyzing 5,006 student survey responses to uncover fashion preferences, spending behavior, and shopping habits using ML classification models.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <StatCard title="Total Responses" value="5,006" subtitle="Student survey data" />
          <StatCard title="Gender Split" value="65/35" subtitle="Female vs Male" />
          <StatCard title="Top Method" value="Both" subtitle="Hybrid shopping trend" />
          <StatCard title="Major Spend" value="15K-30K" subtitle="Massive segment (79%)" />
          <StatCard title="Best Model" value="86.5%" subtitle="SVM (Linear)" />
        </div>

        <DemographicsSection />
        <PreferencesSection />
        <SpendingSection />
        <BehaviorSection />
        <MLSection />
        <InsightsSection />
      </main>
    </div>
  );
};

export default Index;
