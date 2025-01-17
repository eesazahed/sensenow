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

      <header
        className="w-full py-16"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="m-auto w-72 h-72">
          <img
            src="https://gist.github.com/user-attachments/assets/f2bb70c5-c62a-4dff-a50c-86bacaabb6bd.png"
            className="w-full h-full"
            alt="Logo for SenseNow Academy"
          />
        </div>
      </header>

      <div className="mx-8">
        <a
          href="https://example.com"
          target="_blank"
          rel="noreferrer"
          className="w-full mx-auto md:w-1/3 font-sans uppercase block bg-green-500 hover:bg-green-600 text-white no-underline py-4 my-16 rounded-xl text-2xl text-center cursor-pointer duration-200"
        >
          Register now
        </a>
      </div>

      <main className="rounded-2xl p-12 my-12 w-full md:w-1/2 mx-auto md:text-xl md:shadow-2xl">
        {/* <h1 className="text-center my-8 text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#b800ff] to-[#d4fc00] bg-clip-text text-transparent py-4">
          Coding is important
        </h1> */}

        <div>
          <section className="mb-12">
            <h2 className="md:text-left text-center font-bold text-4xl md:text-6xl mb-8">
              Coding is cruical
            </h2>
            <p>
              The Ontario Ministry of Education&apos;s{" "}
              <a
                href="https://www.dcp.edu.gov.on.ca/en/curriculum/science-technology/grades/grade-1/a/a2"
                target="_blank"
                rel="noreferrer"
              >
                updated curriculum
              </a>{" "}
              now includes coding in grades{" "}
              <span className="text-[red] font-bold">as low as Grade 1</span>
              and continues throughout high school as of 2022.
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
              Interested? This is a limited offer, there&apos;s no time to
              waste.
            </p>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer"
              className="w-full mx-auto md:w-1/3 font-sans uppercase block bg-green-500 hover:bg-green-600 text-white no-underline py-4 mt-8 mb-16 rounded-xl text-2xl text-center cursor-pointer duration-200"
            >
              Register now
            </a>
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
                  freeCodeCamp.org
                </a>
              </li>
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
