import ListWithLinks from "./ListWithLinks";
import RegisterButton from "./RegisterButton";

const MainContent = () => {
  return (
    <main className="rounded-2xl p-12 my-12 w-full md:w-1/2 mx-auto md:text-xl md:shadow-2xl">
      <Section
        title="Coding is cruical"
        content={
          <>
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
              <span className="text-[red] font-bold">as low as Grade 1</span>{" "}
              and continues throughout high school as of 2022.
            </p>
            <br />
            <p>
              Getting a head start in coding fundamentals can enable your child
              to succeed in this new curriculum and beyond.
            </p>
          </>
        }
      />

      <Section
        title="Is your child in grades 4-8?"
        content={
          <>
            <p>
              I teach the basics of <b>Python</b> — a versatile programming
              language taught in many schools and universities.
            </p>
            <br />
            <p>
              Interested? This is a limited offer, there&apos;s no time to
              waste.
            </p>
            <RegisterButton />
          </>
        }
      />

      <Section
        title="What makes me qualified?"
        content={
          <ListWithLinks
            items={[
              "6+ years of coding experience",
              "Knowledgeable in Python, JavaScript/TypeScript, Java, and SQL",
              "Teaching experience through the GPP3O course",
              <>
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
              </>,
              <>
                Published author for various computer science related articles
                on{" "}
                <a
                  href="https://www.freecodecamp.org/news/author/eesazahed/"
                  target="_blank"
                  rel="noreferrer"
                >
                  freeCodeCamp.org
                </a>
              </>,
              <>
                Built a fully functioning{" "}
                <a
                  href="https://laser.vercel.app/feed"
                  target="_blank"
                  rel="noreferrer"
                >
                  social media
                </a>{" "}
                platform as a hobby project
              </>,
            ]}
          />
        }
      />

      <Section
        title="Find me online"
        content={
          <ListWithLinks
            items={[
              <a
                href="https://linkedin.com/in/eszhd"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>,
              <a
                href="https://github.com/eesazahed"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>,
            ]}
          />
        }
      />
    </main>
  );
};

const Section = ({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) => (
  <section className="mb-12">
    <h2 className="font-bold text-2xl mb-4">{title}</h2>
    {content}
  </section>
);

export default MainContent;
