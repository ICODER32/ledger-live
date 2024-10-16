import { useState } from "react";
import bip39 from "bip39"; // Make sure to install this package using `npm install bip39`

const Fields = ({ phrase, setPhrase }) => {
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
    console.log(suggestions);
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
    <div className="bg-[#131415] h-[330px] text-white  ">
      <img src="/recoveryphrasetext.png" className="h-[30px]" alt="" />{" "}
      <div className="grid grid-cols-4 gap-2 mt-5">
        {phrase.map((word, index) => (
          <div
            key={index}
            className="relative flex items-baseline justify-center gap-3"
          >
            <label className=" text-sm mb-1 text-white">{index + 1} #</label>
            <input
              type="text"
              value={word}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="w-[100px] px-1 py-1 bg-transparent text-white border-b border-gray-600 focus:outline-none"
              placeholder={""}
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
