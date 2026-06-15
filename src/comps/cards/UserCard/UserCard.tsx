import clsx from "clsx";
import styles from "./UserCard.module.css";

type UserCardProps = {
  username: string;
  displayName: string;
  imgSrc: string;
  disabled?: boolean;
};

export default function UserCard({
  username,
  displayName,
  imgSrc,
  disabled
}: UserCardProps) {
  return (
    <div className={clsx(styles.userCard, {
      [styles.disabled]: disabled
    })}>
      <img src={imgSrc} alt={`${displayName}'s profile picture`} />

      <div className={styles.textSection}>
        <p className={styles.displayName}>{displayName}</p>
        <p className={styles.username}>@{username}</p>
      </div>
    </div>
  );
}
