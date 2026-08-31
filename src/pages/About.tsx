import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/layout/Seo";
import { AboutHero } from "@/components/about/AboutHero";
import { Bio } from "@/components/about/Bio";
import { SportsSection } from "@/components/about/SportsSection";

const About = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    // Wait a tick so the section exists in the DOM before scrolling to it.
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <Layout>
      <Seo path="/about" />
      <AboutHero />
      <Bio />
      <SportsSection />
    </Layout>
  );
};

export default About;
