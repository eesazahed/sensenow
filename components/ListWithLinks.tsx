import { NextPage } from "next";

interface Props {
  items: React.ReactNode[];
}

const ListWithLinks: NextPage<Props> = ({ items }) => (
  <ul className="list-disc ml-6">
    {items.map((item, index) => (
      <li key={index} className="mb-4">
        {item}
      </li>
    ))}
  </ul>
);

export default ListWithLinks;
