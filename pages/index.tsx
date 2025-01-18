import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import RegisterButton from "../components/RegisterButton";
import MainContent from "../components/MainContent";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SenseNow Academy</title>
        <link
          className="mb-4"
          rel="shortcut icon"
          href="https://gist.github.com/user-attachments/assets/f2bb70c5-c62a-4dff-a50c-86bacaabb6bd.png"
          type="image/x-icon"
        />
      </Head>
      <Header />
      <div className="mx-12">
        <RegisterButton />
      </div>
      <MainContent />
    </div>
  );
};

export default Home;
