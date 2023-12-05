import Heading from "./_components/Heading";
import Hero from "./_components/Hero";
import Footer from "./_components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-full flex flex-col">
      
      <div className="flex flex-col items-center justify-center text-center gap-y-8 md:justify-start flex-1 px-6 pb-10">
        <Heading />
        <Hero />
      </div>
      <Footer />
    </div>
  );
}
