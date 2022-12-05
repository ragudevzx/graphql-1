import * as React from 'react';
import {
  Typography,
  Container,
  List,
  Box,
  ListItem
} from '@mui/material'
import { DataContext } from './context/DataContext';

const Home = () => {
  const { 
    countriesFav,
    languagesFav,
    continentsfav
  } = React.useContext(DataContext);

  return (
    <Container>
      <Typography variant='h1' sx={{ textAlign: 'center' }}>
        Home page
      </Typography>

      <Box>
        <Box sx={{ textAlign: 'center', padding: '.5rem' }}>
          {countriesFav.length + languagesFav.length + continentsfav.length} Favorites
        </Box>
        <div className="flexbox-container-home">
          <div className="flexbox-item">
        <Box sx={{ textAlign: 'center', padding: '.5rem' }}>
          Countries
        </Box>
        <List>
        {countriesFav.map((countries, c) => (
          <ListItem key={c}>
            - {countries.Countries.name}
          </ListItem>
        ))}
      </List>
      </div>
      <div className="flexbox-item">
      <Box sx={{ textAlign: 'center', padding: '.5rem' }}>
      Languages
        </Box>
      <List>
        {languagesFav.map((languages, l) => (
          <ListItem key={l}>
            - {languages.Languages.name}
          </ListItem>
        ))}
      </List>
      </div>
      <div className="flexbox-item">
      <Box sx={{ textAlign: 'center', padding: '.5rem' }}>
      Continents
        </Box>
      <List>
        {continentsfav.map((continents, l) => (
          <ListItem key={l}>
            - {continents.Continents.name}
          </ListItem>
        ))}
      </List>
      </div>
      </div>
      </Box>
      </Container>
  )
}

export default Home
