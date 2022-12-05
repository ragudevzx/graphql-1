import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import StarBorder from '@mui/icons-material/StarBorder';
import Star from '@mui/icons-material/Star';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { DataContext } from '../context/DataContext';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CheckboxFav(prop) {
  const { data } = prop;
  const { 
    countriesFav,
    languagesFav,
    continentsfav,
    setCountriesFav,
    setLanguagesFav,
    setContinentsfav
  } = React.useContext(DataContext);

  const handleSetFavorite = () => {
    if (data.__typename === 'Country') {
      setCountriesFav([...countriesFav, {Countries: {name: data.name}}])
    }
    if (data.__typename === 'Language') {
      setLanguagesFav([...languagesFav, {Languages: {name: data.name}}])
    }
    if (data.__typename === 'Continent') {
      setContinentsfav([...continentsfav, {Continents: {name: data.name}}])
    }

  }

  return (
    <div>
      <Checkbox 
      {...label} 
      icon={<StarBorder />} 
      checkedIcon={<Star htmlColor="orange"></Star>}
      onClick={handleSetFavorite} />
    </div>
  );
}