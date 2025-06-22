import { useState, type FormEvent } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

interface SearchBarProps {
  onSearch: (inputValue: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        backgroundColor: "#1E1E1E",
        border: "1.5px solid  #FFEDF3",
        borderRadius: "9999px",
        overflow: "hidden",
        maxWidth: "800px",
        margin: "0 auto",
        height: "52px",
      }}
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="소환사 이름#태그"
        style={{
          flex: 1,
          backgroundColor: "transparent",
          border: "none",
          color: "white",
          padding: "0 20px",
          fontSize: "14px",
          outline: "none",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "0 18px",
          backgroundColor: "transparent",
          border: "none",
          color: "#999",
          cursor: "pointer",
        }}
      >
        <MagnifyingGlassIcon width={22} height={22} />
      </button>
    </form>
  );
}

export default SearchBar;
