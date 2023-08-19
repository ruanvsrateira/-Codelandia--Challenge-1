import styles from "./SearchInput.module.scss";
import { FaSearch } from "react-icons/fa";

interface SearchInputProps {
  placeholder: string;
}

export const SearchInput = ({ placeholder }: SearchInputProps) => {
  return (
    <div className={styles["input-group"]}>
      <FaSearch fill="white" size={20} />
      <input
        className={styles["input-group__input"]}
        placeholder={placeholder}
      />
    </div>
  );
};
