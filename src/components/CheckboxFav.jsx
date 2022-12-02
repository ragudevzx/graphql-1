import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import StarBorder from '@mui/icons-material/StarBorder';
import Star from '@mui/icons-material/Star';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CheckboxFav() {
  return (
    <div>
      <Checkbox {...label} icon={<StarBorder />} checkedIcon={<Star htmlColor="orange"></Star>} />
    </div>
  );
}