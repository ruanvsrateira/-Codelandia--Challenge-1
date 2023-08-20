import { FaHeart, FaRegHeart } from "react-icons/fa";
import styles from "./Post.module.scss";
import { useState } from "react";

interface PostProps {
  title: string;
  description: string;
  date: string;
}

export const Post = ({ title, description, date }: PostProps) => {
  const [heartFilled, setHeartFilled] = useState(false);

  return (
    <div className={styles["post-group"]}>
      <div className={styles["post-group__headerline"]}>
        <p className={styles["post-group__date"]}>{date}</p>
        {heartFilled ? (
          <FaHeart
            size={18}
            color="#574AE8"
            onClick={() => setHeartFilled(!heartFilled)}
          />
        ) : (
          <FaRegHeart
            size={18}
            color="#574AE8"
            onClick={() => setHeartFilled(!heartFilled)}
          />
        )}
      </div>
      <h2 className={styles["post-group__title"]}>{title}</h2>
      <h3 className={styles["post-group__description"]}>{description}</h3>
    </div>
  );
};
