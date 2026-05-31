import { Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe/AboutMe.tsx";
import CardsDemo from "./pages/CardsDemo/CardsDemo.tsx";
import ConsecSum from "./pages/ConsecSum/ConsecSum.tsx";
import DescriptionListDemo from "./pages/DescriptionListDemo/DescriptionListDemo.tsx";
import DialogsDemo from "./pages/DialogsDemo/DialogsDemo.tsx";
import DiceRoll from "./pages/DiceRoll/DiceRoll.tsx";
import EmailValidate from "./pages/EmailValidate/EmailValidate.tsx";
import Home from "./pages/Home/Home.tsx";
import LetterRepetition from "./pages/LetterRepetition/LetterRepetition.tsx";
import NoPage from "./pages/NoPage/NoPage.tsx";
import Numeronyms from "./pages/Numeronyms/Numeronyms.tsx";
import ObjSort from "./pages/ObjSort/ObjSort.tsx";
import SentSort from "./pages/SentSort/SentSort.tsx";
import StopwatchPage from "./pages/StopwatchPage/StopwatchPage.tsx";
import TempConvert from "./pages/TempConvert/TempConvert.tsx";
import WordCounter from "./pages/WordCounter/WordCounter.tsx";
import HTMLCommentPage from "./pages/HTMLCommentPage/HTMLCommentPage.tsx";

export default function App() {
  return (
    // The different routes to the app's pages.
    <Routes>
      {/* Index Route */}
      <Route path="/" element={<Home />} />
      {/* About Me Page */}
      <Route path="/aboutMe" element={<AboutMe />} />
      {/* Sentence Sort */}
      <Route path="/sentenceSort" element={<SentSort />} />
      {/* Consecutive Summation */}
      <Route path="/consecutiveSum" element={<ConsecSum />} />
      {/* Sort Objects */}
      <Route path="/objSort" element={<ObjSort />} />
      {/* Email Validator */}
      <Route path="/email" element={<EmailValidate />} />
      {/* Dice Rolling */}
      <Route path="/dice" element={<DiceRoll />} />
      {/* Dialog Box Demo */}
      <Route path="/dialogs" element={<DialogsDemo />} />
      {/* Stopwatch page */}
      <Route path="/stopwatch" element={<StopwatchPage />} />
      {/* Letter Repetition */}
      <Route path="/letterRep" element={<LetterRepetition />} />
      {/* Numeronym Page */}
      <Route path="/numeronyms" element={<Numeronyms />} />
      {/* Cards Page */}
      <Route path="/cards" element={<CardsDemo />} />
      {/* Temperature conversion page */}
      <Route path="/temps" element={<TempConvert />} />
      {/* Description list page */}
      <Route path="/descLists" element={<DescriptionListDemo />} />
      {/* Word Counter page */}
      <Route path="/wordCount" element={<WordCounter />} />
      <Route path="/htmlComments" element={<HTMLCommentPage />} />
      {/* 404 Page */}
      <Route path="*" element={<NoPage />} />
    </Routes>
  )
}
