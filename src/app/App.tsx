import { Navigation } from '@/app/components/Navigation';
import { HeroSection } from '@/app/components/HeroSection';
import { AboutSection } from '@/app/components/AboutSection';
import { ExperienceSection } from '@/app/components/ExperienceSection';
import { SkillsSection } from '@/app/components/SkillsSection';
import { ProjectsSection } from '@/app/components/ProjectsSection';
import { PersonalProjectsSection } from '@/app/components/PersonalProjectsSection';
import { ContactSection } from '@/app/components/ContactSection';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <PersonalProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
