import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Router from 'next/router';
import { Search } from "@mui/icons-material";
import Image from "next/image";

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
      let newFilter = result.d;

      newFilter.forEach(Search => {
        if (Search.id == '/imdbpicks/pride') newFilter.splice(0, 1)
      });


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
            if (!value.i) value.i = { imageUrl: '/images/404PosterNotFound.jpg'  }
            return (
              <div className="d-flex justify-content-between m-1">
                <a className="dataItem" style={{ cursor: 'pointer' }} onClick={() => { Router.push('/title/' + value.id); clearInput(); }} target="_blank">
                {value.l}
                </a>
                <Image className="rounded-circle" src={value.i.imageUrl} height={30} width={30} alt='asw' />
                
              </div>
            );
          })}
        </div>
      )}

      <style jsx>{`
      a{
          color: #3aa7aa;
          text-decoration: none;
      }
      a:hover {
          text-decoration: underline;
      }
      `}</style>
    </div>
  );
}

export default SearchBar;