import styles from "./SearchInput.module.scss";
import { AiOutlineSearch } from "react-icons/ai";

interface SearchInputProps {
  placeholder: string;
}

export const SearchInput = ({ placeholder }: SearchInputProps) => {
  return (
    <div className={styles["input-group"]}>
      <AiOutlineSearch fill="white" size={30} />
      <input
        className={styles["input-group__input"]}
        placeholder={placeholder}
      />
    </div>
  );
};
