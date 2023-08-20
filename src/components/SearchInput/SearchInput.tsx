import styles from "./SearchInput.module.scss";
import { AiOutlineSearch } from "react-icons/ai";

interface SearchInputProps {
  placeholder: string;
}

export const SearchInput = ({ placeholder }: SearchInputProps) => {
  function setFocusOnInput() {
    const input = document.querySelector("input") as HTMLInputElement;
    input.focus();
  }

  return (
    <div className={styles["input-group"]} onClick={setFocusOnInput}>
      <AiOutlineSearch fill="white" size={30} style={{}} />
      <input
        className={styles["input-group__input"]}
        placeholder={placeholder}
      />
    </div>
  );
};
