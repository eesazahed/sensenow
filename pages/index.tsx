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
        <title>SenseNow Academy</title>
        <link
          className="mb-4"
          rel="shortcut icon"
          href="https://gist.github.com/user-attachments/assets/4aab369f-1ba7-4e03-9e6a-dc1d7c94213a.png"
          type="image/x-icon"
        />
      </Head>
      <main className="px-8 w-full md:w-1/2 mx-auto md:text-xl">
        <div className="px-8 mx-auto w-full md:w-2/3 my-16">
          <img
            src="https://gist.github.com/user-attachments/assets/4aab369f-1ba7-4e03-9e6a-dc1d7c94213a.png"
            className="w-full"
            alt="Logo for SenseNow Academy"
          />
        </div>

        {/* <h1 className="text-center my-8 text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#b800ff] to-[#d4fc00] bg-clip-text text-transparent py-4">
          Coding is important
        </h1> */}

        <div className="pb-24">
          <section className="mb-12">
            <h2 className="md:text-left text-center font-bold text-4xl md:text-6xl mb-4">
              Coding is cruical
            </h2>
            <p>
              The Ontario Ministry of Education&apos;s{" "}
              <a
                href="https://www.dcp.edu.gov.on.ca/en/curriculum/science-technology/context/strands#strand-a"
                target="_blank"
                rel="noreferrer"
              >
                updated curriculum
              </a>{" "}
              now includes coding in grades as low as Grade 2 and continues
              throughout high school as of 2022.
            </p>
            <br />
            <p>
              Getting a head start in coding fundamentals can enable your child
              to succeed in this new curriculum and beyond.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-bold text-2xl mb-4">
              Is your child in grades 4-8?
            </h2>
            <p>
              I teach the basics of <b>Python</b> — a versatile programming
              language taught in many schools and universities.
            </p>
            <br />
            <p>
              Interested?{" "}
              <a href="https://example.com" target="_blank" rel="noreferrer">
                Book me
              </a>{" "}
              and get the journey started!
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-bold text-2xl mb-4">
              What makes me qualified?
            </h2>
            <ul className="list-disc ml-6">
              <li className="mb-4">6+ years of coding experience</li>
              <li className="mb-4">
                Knowledgeable in Python, JavaScript/TypeScript, Java, and SQL
              </li>
              <li className="mb-4">
                Teaching experience through the GPP3O course
              </li>
              <li className="mb-4">
                3 CS certificates (one from{" "}
                <a
                  href="https://cs50.harvard.edu/certificates/2020086e-51d6-4098-9026-29048e0651c5.png"
                  target="_blank"
                  rel="noreferrer"
                >
                  Harvard
                </a>
                , two from{" "}
                <a
                  href="https://www.freecodecamp.org/eesazahed"
                  target="_blank"
                  rel="noreferrer"
                >
                  freeCodeCamp
                </a>
                )
              </li>
              <li className="mb-4">
                Published author for various computer science related articles
                on{" "}
                <a
                  href="https://www.freecodecamp.org/news/author/eesazahed/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  freeCodeCamp.org
                </a>
              </li>{" "}
              <li className="mb-4">
                Built a fully functioning{" "}
                <a
                  href="https://laser.vercel.app/feed"
                  target="_blank"
                  rel="noreferrer"
                >
                  social media
                </a>{" "}
                platform as a hobby project
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-bold text-2xl mb-4">Find me online </h2>
            <ul className="list-disc ml-6">
              <li className="mb-4">
                <a
                  href="https://linkedin.com/in/eszhd"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://github.com/eesazahed"
                  target="_blank"
                  rel="noreferrer"
                >
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
