import { NextPage } from "next";

const email = {
  to: "sensenow.academy@gmail.com",
  subject: "Tutoring interest",
  body: "Hi, I'm interested in registering",
};

const RegisterButton: NextPage = () => (
  <a
    href={`https://forms.gle/kF5gvKZa6a8nU8vaA`}
    target="_blank"
    rel="noreferrer"
    className="w-full mx-auto md:w-1/3 font-sans uppercase block bg-green-500 hover:bg-green-600 text-white no-underline p-4 my-16 rounded-xl font-bold text-2xl text-center cursor-pointer duration-200"
  >
    Register
  </a>
);

export default RegisterButton;
