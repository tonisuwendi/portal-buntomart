import Banner from "../src/components/Banner";
import Header from "../src/components/Header";
import HowToBuy from "../src/components/HowToBuy";
import Products from "../src/components/Products";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <HowToBuy />
      <Products />
      <div style={{ height: 500 }}></div>
    </>
  );
}
