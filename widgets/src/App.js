import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why do you use React?",
    content: "You use React by creating components",
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
