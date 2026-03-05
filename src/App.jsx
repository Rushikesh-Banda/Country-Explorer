import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";

function App() {

  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [query, setQuery] = useState("");

  useEffect(() => {

    const fetchCountries = async () => {

      try {

        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch countries");
        }

        const data = await res.json();

        setCountries(data);
        setFilteredCountries(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }

    };

    fetchCountries();

  }, []);

  useEffect(() => {

    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredCountries(filtered);

  }, [query, countries]);

  return (

<div className="min-h-screen bg-gradient from-pink-300 to-pink-300 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">
           Country Explorer
        </h1>

        <SearchBar onSearch={setQuery} />

        {loading && (
          <p className="text-center text-lg text-gray-600 mt-10">
            Loading countries...
          </p>
        )}

        {error && (
          <p className="text-center text-red-500 mt-10">
            {error}
          </p>
        )}

        {!loading && !error && (
          <CountryList countries={filteredCountries} />
        )}

      </div>

    </div>

  );
}

export default App;