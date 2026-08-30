import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/layout/Seo";
import { ResearchHeader } from "@/components/research/Header";
import { Metrics } from "@/components/research/Metrics";
import { Overview } from "@/components/research/Overview";
import { Areas } from "@/components/research/Areas";
import { Highlights } from "@/components/research/Highlights";
import { Publications } from "@/components/research/Publications";
import { Talks } from "@/components/research/Talks";
import { Experience } from "@/components/research/Experience";
import { Education } from "@/components/research/Education";
import { Awards } from "@/components/research/Awards";
import { QuickJumpNav } from "@/components/research/QuickJumpNav";

const Research = () => {
  return (
    <Layout>
      <Seo
        title="Research"
        description="Publications, talks, and research areas — integrable systems, quantum impurities, and the thermodynamic Bethe ansatz."
        path="/research"
      />
      <QuickJumpNav />
      <ResearchHeader />
      <Metrics />
      <Overview />
      <Areas />
      <Highlights />
      <Publications />
      <Talks />
      <Experience />
      <Education />
      <Awards />
    </Layout>
  );
};

export default Research;
