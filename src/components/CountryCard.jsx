function CountryCard({ country }) {

  return (

    <div className="bg-orange-300/80 backdrop-blur rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105 overflow-hidden">

      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-full h-40 object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {country.name.common}
        </h2>

        <p className="text-gray-600 text-sm">
          <span className="font-semibold">Capital:</span>{" "}
          {country.capital?.[0] || "N/A"}
        </p>

        <p className="text-gray-600 text-sm">
          <span className="font-semibold">Population:</span>{" "}
          {country.population.toLocaleString()}
        </p>

        <p className="text-gray-600 text-sm">
          <span className="font-semibold">Region:</span>{" "}
          {country.region}
        </p>

      </div>

    </div>

  );

}

export default CountryCard;
