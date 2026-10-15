import GoHomeBtn from "../../comps/general_UI/GoHomeBtn/GoHomeBtn.tsx";
import Page from "../../comps/general_UI/layout/Page/Page.tsx";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  // Define a function that finds my age
  const age = (birthDate: Date): number => {
    const today = new Date();

    // Get my approximate age
    let age = today.getFullYear() - birthDate.getFullYear();

    // Check if my birthday has passed
    const hasHadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

    // If my birthday hasn't passed
    if (!hasHadBirthdayThisYear) {
      // Subtract 1 from my age
      age--;
    }

    return age;
  }

  // Languages I'm good at
  const goodLangs = [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Bash"
  ].sort(); // Sort it alphabetically

  // Things I experimented with
  const experimentedWith = [
    "Bootstrap 4",
    "PostgreSQL",
    "Bootstrap 5",
    "GnuCOBOL",
    "C++",
    "C#",
    "C",
    "Fortran 90",
    "Perl",
    "Java",
    "PHP"
  ].sort();

  const concepts = [
    "Responsive Web Design (RWD)",
    "Accessibility in web development",
    "Good programming practices",
    "Version control with Git",
    "Object-oriented programming (OOP)"
  ].sort();

  return (
    <Page headerText="About Me">
      <section className={styles["body-section"]}>
        <header>
          <h2>Who am I?</h2>
        </header>
        <article>
          <p>
            I, Ethan Kletschke, am a(n) {age(new Date("2006-12-06"))}-year-old
            aspiring Web Developer with experience dating back to high school with
            both software and web applications and theory.<br />
            I'm mostly interested in web development, but am well-versed in
            a wide variety of concepts related to software applications,
            web pages, web applications, database design and development, and basic UI
            design.
          </p>

          <p>I am confident in using the following languages and frameworks:</p>
          <ul>
            {/* List the languages I'm good at */}
            {goodLangs.map((val, index) => {
              return <li key={index}>{val}</li>;
            })}
          </ul>

          <p>I have also previously experimented with the following to various degrees:</p>
          <ul>
            {experimentedWith.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>

          <p>Lastly, I am well-versed in the following concepts:</p>
          <ul>
            {concepts.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
        </article>
      </section>

      <hr />

      <section className={styles["body-section"]}>
        <article>
          <header>
            <h2>Facts About This Project</h2>
          </header>

          <ul>
            <li>
              This project is proudly open-source on&nbsp;
              <a href="https://github.com/ethanKletschke/TSX-Portfolio-App" target="_blank">
                GitHub
              </a>,
              and has been worked on extensively since September 2025.
            </li>
            <li>
              This project was started from scratch with Vite.
            </li>
          </ul>
        </article>
      </section>

      <hr />

      <section className={styles["body-section"]}>
        <header>
          <h2>Where to Find Me</h2>
        </header>
        <article>
          <ul>
            <li><a href="mailto:ethankletschke@outlook.com">Email Me (ethankletschke@outlook.com)</a></li>
            <li><a href="https://github.com/ethanKletschke">ethanKletsche (GitHub)</a></li>
            <li><a href="https://www.linkedin.com/in/ethan-kletschke-164a24384">LinkedIn</a></li>
          </ul>
        </article>
      </section>

      <GoHomeBtn />
    </Page>
  );
}
