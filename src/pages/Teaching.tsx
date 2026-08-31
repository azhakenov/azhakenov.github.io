import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/layout/Seo";
import { QuickJumpNav } from "@/components/teaching/QuickJumpNav";
import { TeachingHero } from "@/components/teaching/TeachingHero";
import { CoursesSection } from "@/components/teaching/CoursesSection";
import { TeachingHistorySection } from "@/components/teaching/TeachingHistorySection";
import { TutoringSection } from "@/components/teaching/TutoringSection";

const Teaching = () => {
  return (
    <Layout>
      <Seo path="/teaching" />
      <QuickJumpNav />
      <TeachingHero />
      <CoursesSection />
      <TeachingHistorySection />
      <TutoringSection />
    </Layout>
  );
};

export default Teaching;
