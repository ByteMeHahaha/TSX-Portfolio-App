import Card from "../../comps/cards/Card/Card.tsx";
import CardGrid from "../../comps/cards/CardGrid/CardGrid.tsx";
import UserCard from "../../comps/cards/UserCard/UserCard.tsx";
import GoHomeBtn from "../../comps/general_UI/GoHomeBtn/GoHomeBtn.tsx";
import Page from "../../comps/general_UI/layout/Page/Page.tsx";
import styles from "./CardsDemo.module.css";

// A single user card represented as an object.
interface UserCardObj {
  username: string;
  displayName: string;
  imgSrc: string;
  disabled?: boolean;
}

export default function CardsDemo() {
  // The user cards to display
  const userCards: UserCardObj[] = [
    {
      username: "anon_129099801",
      displayName: "Anonymous",
      imgSrc: "/AnonPFP.webp"
    },
    {
      username: "ethanKletschke",
      displayName: "Ethan K.",
      imgSrc: "/EthanPFP.webp"
    },
    {
      username: "deleted_user_198021314",
      displayName: "Deleted User",
      imgSrc: "/AnonPFP.webp",
      disabled: true
    }
  ];

  return (
    <Page headerText="Cards Demo">
      <section className={styles.section}>
        <h2>Basic Cards</h2>

        {/* Basic cards */}
        <CardGrid>
          <Card
            title="Paris"
            footerText="Come to Paris today!"
            imgCaption="The Eiffel Tower"
            imgSrc="/Eiffel.webp"
          >
            <p>
              Paris is the capital (and most well-known) city in
              France. It is home to the world-renowned Eiffel Tower. Paris is also
              known as the city of love.
            </p>
          </Card>

          <Card
            title="Moscow"
            footerText="Come to Moscow today!"
            imgCaption="Saint Basil's Cathedral in Moscow"
            imgSrc="/Moscow.webp"
          >
            <p>
              Moscow is the capital city of Russia. The Saint Basil's Cathedral
              pictured above is situated in Moscow's Red Square, and is iconic
              for its unique and beautiful appearance.
            </p>
          </Card>

          <Card
            title="New York City"
            footerText="Come to New York today!"
            imgCaption="Statue of Liberty"
            imgSrc="/Liberty.webp"
          >
            <p>
              New York City is a major city in the USA. It is home to the
              Statue of Liberty, a copper statue gifted to the US by France.
              It has since corroded from a bronze colour to a dull green.
            </p>
          </Card>
        </CardGrid>
      </section>

      <hr />

      <section className={styles.section}>
        <h2>User Cards</h2>

        <CardGrid>
          {userCards.map((card, index) => (
            <UserCard
              key={index}
              username={card.username}
              displayName={card.displayName}
              imgSrc={card.imgSrc}
              disabled={card.disabled ?? false}
            />
          ))}
        </CardGrid>
      </section>

      <hr />

      <GoHomeBtn />
    </Page>
  );
}
