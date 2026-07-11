import "@styles/common/SearchBox.css";

export default function SearchBox({ value, onChange, onSubmit, placeholder }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit?.(value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSubmit?.(value);
    }
  };

  return (
    <div className="search-box-body">
      <form className="search-box" onSubmit={handleSubmit}>
        <SearchIcon />
        <input
          type="search"
          inputMode="search"
          enterKeyHint="search"
          className="search-box-input text-body-1-regular"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
        />
      </form>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="search-box-icon">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
