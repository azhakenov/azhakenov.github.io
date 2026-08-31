import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/layout/Seo";
import { Hero } from "@/components/home/Hero";
import { SelectedWork } from "@/components/home/SelectedWork";
import { SectionLinks } from "@/components/home/SectionLinks";

const Index = () => {
  return (
    <Layout>
      <Seo path="/" />
      <Hero />
      <SelectedWork />
      <SectionLinks />
    </Layout>
  );
};

export default Index;
