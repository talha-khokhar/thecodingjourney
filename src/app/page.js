import Banner from "./component/banner/page";
import Community from "./component/community/page";
import Footer from "./component/footer/page";
import Hero from "./component/hero/page";
import Serices from "./component/services/page";
import Subscribe from "./component/subcsribe/page";


export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Serices />
      <Banner />
      <Subscribe />
      <Community />
      <Footer />
    </main>
  );
}
