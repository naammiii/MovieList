import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Router from 'next/router';

function SearchBar({ placeholder }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {

      const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=' + encodeURIComponent(wordEntered);
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '70d8ea326bmshebaeb2f22378e8dp15e6cajsn5ef1f0fef6f4',
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
      };
      const response = await fetch(url, options);
      const result = await response.json();
      const newFilter = result.d;
      
      if (wordEntered === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    }

  }

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  console.log(filteredData);

  return (
    <div className="search">
      <div className="searchInputs">
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
          <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onKeyUp={handleKeyPress}
            onChange={handleFilter}
          />
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <a className="dataItem"  style={{ cursor: 'pointer' }} onClick={() => {Router.push('/title/' + value.id); clearInput();}} target="_blank">
                <p>{value.l} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;