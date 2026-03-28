import Hero from "@/components/sections/Hero";
import CourseGrid from "@/components/sections/CourseGrid";
import Syllabus from "@/components/sections/Syllabus";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <CourseGrid />
      <Syllabus />
      <Contact />
    </div>
  );
}