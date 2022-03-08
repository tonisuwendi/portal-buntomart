import Banner from "../src/components/Banner";
import Header from "../src/components/Header";
import HowToBuy from "../src/components/HowToBuy";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <HowToBuy />
      <div style={{ height: 500 }}></div>
    </>
  );
}
