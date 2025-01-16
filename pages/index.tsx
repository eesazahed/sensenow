import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [reposCount, setReposCount] = useState<number>(0);

  useEffect(() => {
    fetch("https://api.github.com/users/eesazahed")
      .then((response) => response.json())
      .then((data) => setReposCount(data.public_repos));
  }, []);

  return (
    <div className="mx-8">
      <Head>
        <title>Eesa Zahed</title>
        <link
          rel="shortcut icon"
          href="https://avatars.githubusercontent.com/u/97064249?v=4"
          type="image/x-icon"
        />
      </Head>
      <main className="px-8 md:w-1/2 mx-auto my-48 md:text-xl">
        <h1 className="my-8 text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#b800ff] to-[#d4fc00] bg-clip-text text-transparent">
          Eesa Zahed
        </h1>
        <div className="m-1">
          <section className="mb-8">
            <p>
              My goal is to prepare high school students with little to no prior
              coding experience
            </p>
            <br />
            <p>
              I&apos;ll teach you the basics of Python, one of the most
              versatile programming languages of the 21st century
            </p>
            <br />
            <p>The best way to get in touch is by sending me an email</p>
            <br />
            <p>
              <a>eszhd1 (at) gmail.com</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-bold text-2xl mb-2">
              What makes me qualified?
            </h2>
            <ul className="list-disc ml-6 leading-8">
              <li>8+ years of coding experience</li>
              <li>
                Knowledgable in Python, Javascript/Typescript, Java and SQL
              </li>

              <li>
                3 CS certificates (one from{" "}
                <a
                  href="https://cs50.harvard.edu/certificates/2020086e-51d6-4098-9026-29048e0651c5.png"
                  target="_blank"
                >
                  Harvard
                </a>
                , two from{" "}
                <a
                  href="https://www.freecodecamp.org/eesazahed"
                  target="_blank"
                >
                  freeCodeCamp
                </a>
                )
              </li>
              <li>
                Published various CS-related articles{" "}
                <a
                  href="https://www.freecodecamp.org/news/author/eesazahed/"
                  target="_blank"
                >
                  {" "}
                  online
                </a>
              </li>
              <li>Teaching experience through the GPP3O course</li>
              <li>Earned a credit in ICD2O & ICS3U</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-bold text-2xl mb-2">Find me online </h2>
            <ul className="list-disc ml-6 leading-8">
              <li>
                <a href="https:/linkedin.com/in/eszhd" target="_blank">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https:/github.com/eesazahed" target="_blank">
                  GitHub
                </a>{" "}
                [{reposCount} public repos]
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
