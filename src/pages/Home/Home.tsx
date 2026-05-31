import type { CardObj } from "../../comps/general_UI/layout/ContentsTable/ContentsTable.tsx";
import ContentsTable from "../../comps/general_UI/layout/ContentsTable/ContentsTable.tsx";
import Page from "../../comps/general_UI/layout/Page/Page.tsx";
import sortObjects from "../../funcs/sortObjects";
import styles from "./Home.module.css";

export default function Home() {
  // The cards to display
  const links: CardObj[] = [
    {
      route: "/aboutMe",
      title: "About Me",
      icon: "⚉",
      subtitle: "About Ethan Kletschke"
    },
    {
      route: "/consecutiveSum",
      title: "Consecutive Summation",
      icon: "+",
      subtitle: "Add numbers consecutively"
    },
    {
      route: "/dialogs",
      title: "Dialog Box Demo",
      icon: "██",
      subtitle: "A short demo for dialog boxes"
    },
    {
      route: "/dice",
      title: "Dice Rolling",
      icon: "⚂",
      subtitle: "Roll dice, just for fun"
    },
    {
      route: "/email",
      title: "Email Validator",
      icon: "✉",
      subtitle: "Validate email format"
    },
    {
      route: "/letterRep",
      title: "Letter Repetition",
      icon: "🄐🄐🄑",
      subtitle: "Repeat a sentence's letters"
    },
    {
      route: "/numeronyms",
      title: "Numeric Acronyms",
      icon: "🄰⑾🅈",
      subtitle: "Generate a numeric acronym"
    },
    {
      route: "/temps",
      title: "Temperature Conversions",
      icon: "☀",
      subtitle: "Convert temperatures"
    },
    {
      route: "/sentenceSort",
      title: "Sentence Sort",
      icon: "☷",
      subtitle: "Sort a sentence alphabetically"
    },
    {
      route: "/objSort",
      title: "Sort Objects",
      icon: "⚍",
      subtitle: "Sort person data by ID, name, or surname"
    },
    {
      route: "/stopwatch",
      title: "Stopwatch",
      icon: "🕑",
      subtitle: "A simple stopwatch"
    },
    {
      route: "/cards",
      title: "Cards Demo",
      icon: "🂡",
      subtitle: "A demo of simple user cards"
    },
    {
      route: "/descLists",
      title: "Description List Demo",
      icon: "⠇",
      subtitle: "A styled list of key-value pairs"
    },
    {
      route: "/wordCount",
      title: "Word Counter",
      icon: "⒲⒞=②",
      subtitle: "Counts a specified word in a provided paragraph"
    },
    {
      route: "/htmlComments",
      title: "HTML Comment Extractor",
      icon: "← ⒶⒷⒸ →",
      subtitle: "Extracts the text from a provided HTML comment"
    }
  ];

  // Sort the links alphabetically by title
  const sortedLinks = sortObjects(links, "title");

  return (
    <Page headerText="Ethan Kletschke's Portfolio">
      {/* Heading with instruction */}
      <h2 className={styles.heading}>Select a page to go to</h2>

      {/* Create the table of contents with the sorted links */}
      <ContentsTable cards={sortedLinks} />
    </Page>
  );
}
