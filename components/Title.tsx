import { NextPage } from "next";
import Gradient from "./Gradient";

interface Props {
  text: string;
  emoji?: string;
}

const Title: NextPage<Props> = ({ text, emoji }) => {
  return (
    <h1 className="my-8 text-6xl md:text-8xl font-bold leading-normal md:leading-snug">
      <Gradient text={text} /> {emoji}
    </h1>
  );
};

export default Title;
