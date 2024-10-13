import React, { useState } from "react";
import bip39 from "bip39"; // Make sure to install this package using `npm install bip39`

const Fields = () => {
  const [phrase, setPhrase] = useState(Array(24).fill(""));
  const [suggestions, setSuggestions] = useState(Array(24).fill([]));

  const handleInputChange = (index, value) => {
    const newPhrase = [...phrase];
    newPhrase[index] = value;
    setPhrase(newPhrase);

    // Generate word suggestions using bip39 library
    if (value.length > 0) {
      const filteredSuggestions = bip39.wordlists.english.filter((word) =>
        word.startsWith(value.toLowerCase())
      );
      const newSuggestions = [...suggestions];
      newSuggestions[index] = filteredSuggestions;
      setSuggestions(newSuggestions);
    } else {
      const newSuggestions = [...suggestions];
      newSuggestions[index] = [];
      setSuggestions(newSuggestions);
    }
  };

  const handleSuggestionClick = (index, suggestion) => {
    const newPhrase = [...phrase];
    newPhrase[index] = suggestion;
    setPhrase(newPhrase);

    const newSuggestions = [...suggestions];
    newSuggestions[index] = [];
    setSuggestions(newSuggestions);
  };

  return (
    <div className="bg-[#131415] text-white p-8 ">
      <h1 className="text-2xl font-bold mb-4">Crypto Recovery Phrase</h1>
      <div className="grid grid-cols-4 gap-4 mt-10">
        {phrase.map((word, index) => (
          <div key={index} className="relative">
            <label className="block text-sm mb-2 text-gray-400">
              Word {index + 1}
            </label>
            <input
              type="text"
              value={word}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="w-full px-4 py-2 bg-transparent text-white border-b border-gray-600 focus:outline-none"
              placeholder={`Enter word ${index + 1}`}
            />
            {suggestions[index].length > 0 && (
              <ul className="absolute z-10 bg-gray-800 border border-gray-600 mt-1 w-full max-h-32 overflow-y-auto rounded shadow-lg">
                {suggestions[index].map((suggestion, suggestionIndex) => (
                  <li
                    key={suggestionIndex}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-700"
                    onClick={() => handleSuggestionClick(index, suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fields;
