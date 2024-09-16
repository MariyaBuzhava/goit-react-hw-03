import c from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={c.searchBox}>
      <label className={c.label}>
        <span>Find contacts by name</span>
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={c.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
