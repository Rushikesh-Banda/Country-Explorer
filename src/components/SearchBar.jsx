import { useEffect, useRef } from "react";

function SearchBar({ onSearch }) {

  const inputRef = useRef(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {

    const value = e.target.value;

    clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      onSearch(value);
    }, 500);

  };

  return (

    <div className="flex justify-center mb-12">

      <input
        ref={inputRef}
        type="text"
        placeholder="Search countries..."
        onChange={handleChange}
        className="w-full max-w-xl px-6 py-4 rounded-full bg-white/80 backdrop-blur border border-white shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 text-gray-700 text-lg"
      />

    </div>

  );
}

export default SearchBar;