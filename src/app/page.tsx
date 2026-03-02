import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { VibeCoding } from "@/components/VibeCoding";
import { Testimonials } from "@/components/Testimonials";
import { Courses } from "@/components/Courses";
import { JoinBanner } from "@/components/JoinBanner";
import { FreeCourse } from "@/components/FreeCourse";
import { Programs } from "@/components/Programs";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <VibeCoding />
      <Testimonials />
      <Courses />
      <JoinBanner />
      <FreeCourse />
      <Programs />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
}
