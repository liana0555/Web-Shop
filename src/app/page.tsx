import Image from "next/image";
import Hero from "./components/Hero";
import NewProducts from "./components/NewProducts";
import Feedback from "./components/Feedback";

export default function Home() {
  return (
    <main>
      <Hero/>
      <NewProducts/>
      <Feedback/>
    </main>
  )
}
