import Hero from "@/components/Hero";
import Image from "next/image";
import Feature from "@/components/Feature";
import HomePooduct from "@/components/HomeProduct";
export default function Home() {
  return (
    <>
      <Hero />
      
        <Feature />
      
      <div className="items-center">
        <HomePooduct/>
      </div>
      
          </>
  );
}
