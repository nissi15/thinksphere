import { Navbar } from "@/components/nav/navbar";
import { HeroSection } from "@/components/hero/hero-section";
import { VideoShowcase } from "@/components/video-showcase/video-section";
import { AboutSection } from "@/components/about/about-section";
import { DashboardDemo } from "@/components/dashboard/dashboard-demo";
import { TeamSection } from "@/components/team/team-section";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VideoShowcase />
      <DashboardDemo />
      <TeamSection />
      <Footer />
    </>
  );
}
