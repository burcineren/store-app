import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="m-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          voluptates nesciunt vel amet iste ratione quibusdam repudiandae, alias
          doloremque impedit dicta ut harum temporibus maiores ducimus adipisci,
          odio enim tenetur!
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/product">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}

export default Hero;
