import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

const Search = ({ businesses, onSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showClearIcon, setShowClearIcon] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [isMinimized, setIsMinimized] = useState(false); // State to control minimization

  const debouncedSearch = debounce((query) => {
    const filteredResults = businesses.filter((business) =>
      business.name.toLowerCase().includes(query.toLowerCase()) ||
      (business.location && business.location.toLowerCase().includes(query.toLowerCase())) ||
      (business.contactEmail && business.contactEmail.toLowerCase().includes(query.toLowerCase()))
    );

    setSuggestions(query ? filteredResults : []);
    onSearchResults(filteredResults);
  }, 300);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowClearIcon(query.length > 0);
    debouncedSearch(query);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setShowClearIcon(false);
    setSuggestions([]);
    onSearchResults(businesses);
    console.log("Search Query:", searchQuery);
    console.log("Suggestions:", suggestions);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const highlightMatch = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? <span key={index} className="text-blue-600 font-semibold">{part}</span> : part
    );
  };

  return (
    <section className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat h-[20rem] z-50" style={{ backgroundImage: "url('/images/background-image.jpg')" }}>
      <div className="w-full max-w-2xl p-8 rounded-xl shadow-lg text-center backdrop-blur-md bg-white/30 border border-white/20 relative z-50" style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' }}>
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Find Your Perfect Business</h1>
        <p className="text-lg text-gray-700 mb-6">Search for businesses, services, technologies, and more.</p>

        <div className="relative">
          <i className="bi bi-search absolute left-4 top-1/2 transform -translate-y-1/2 text-black"></i>
          <input
            type="text"
            id="search"
            className="w-full py-3 pl-10 pr-4 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/60 backdrop-blur-md border border-gray-300"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Search for businesses, keywords, technologies..."
          />
          {showClearIcon && (
            <i className="bi bi-x absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" onClick={handleClearSearch}></i>
          )}

          {/* Suggestions List */}
          {suggestions.length > 0 && !isMinimized && (
            <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg z-50 max-h-64 overflow-y-auto">
              <div className="flex justify-end p-2">
                <button
                  className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
                  onClick={toggleMinimize}
                >
                  <i className="bi bi-chevron-up"></i>
                </button>
              </div>
              {suggestions.map((business, index) => (
                <div key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <p>{highlightMatch(business.name, searchQuery)}</p>
                  <p className="text-sm text-gray-500">{business.location}</p>
                </div>
              ))}
            </div>
          )}

          {/* Minimized state */}
          {isMinimized && (
            <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg z-50">
              <div className="flex justify-end p-2">
                <button
                  className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
                  onClick={toggleMinimize}
                >
                  <i className="bi bi-chevron-down"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Search;
