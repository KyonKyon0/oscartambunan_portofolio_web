import fs from 'fs';
import path from 'path';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import GallerySection from '@/components/sections/GallerySection';
import SkillsSection from '@/components/sections/SkillsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  const imageCameraDir = path.join(process.cwd(), 'public', 'image_camera');
  let cameraImages: string[] = [];
  try {
    const files = fs.readdirSync(imageCameraDir);
    cameraImages = files.filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
  } catch (error) {
    console.error('Error reading gallery directory:', error);
  }

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <GallerySection initialImages={cameraImages} />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
