import Image from "next/image";
import { Header, Footer, Herosection } from "./components/index";

export default function Home() {
  return (
    <div className="overflow-hidden">
  <Header />
  <Herosection />
  <Footer />
</div>
  );
}
