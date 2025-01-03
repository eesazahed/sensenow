import type { NextPage } from "next";
import PageHead from "../components/PageHead";
import Title from "../components/Title";
import Gradient from "../components/Gradient";
import Link from "../components/Link";

const Home: NextPage = () => {
  return (
    <div className="mx-8 text-center">
      <PageHead title="Home" />

      <main className="p-16 leading-8 text-xl min-h-screen">
        <Title text="next-auth-boilerplate" emoji="&#128075;" />
        <p>Hi</p>
      </main>

      <footer className="py-16">
        <p>
          Designed and developed by{" "}
          <Link text="Eesa Zahed" href="https://eesa.zahed.ca" />
        </p>
      </footer>
    </div>
  );
};

export default Home;
