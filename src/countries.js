import * as React from "react";
import {
  Typography,
  Container,
  Box,
} from "@mui/material";
import { gql, useQuery } from "@apollo/client";
import AlertDialogSlide from "../src/components/DialogPopup";
import CheckboxFav from './components/CheckboxFav'

const COUNTRIES = gql`
  query Countries {
    countries {
      code
      name
      phone
      languages {
        code
        name
        native
      }
      currency
      emoji
      emojiU
      states {
        name
        code
      }
    }
  }
`

const COUNTRY = gql`
  query Country($code: String!) {
    country(code: $code) {
      code
      name
      phone
      languages {
        code
        name
        native
      }
      currency
      emoji
      emojiU
      states {
        name
        code
      }
    }
  }
`

const Countries = () => {
  const { loading, error, data, refetch } = useQuery(COUNTRIES);
  if (loading) return <>loading...</>;
  if (error) return <>error...</>;

  const countries = data.countries;
  const countriesWithStates = countries.filter(
    (country) => country.states.length > 0
  );

  return (
    <Container>
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        Countries
      </Typography>
      <Box>
        <Box sx={{ textAlign: "center", padding: ".5rem" }}>
          {countries.length} Countries
        </Box>
        <Box sx={{ textAlign: "center", padding: ".5rem" }}>
          {countriesWithStates.length} Countries with states
        </Box>
        {countries.map((country) => (
          <Box
            key={country.code}
            sx={{
              padding: ".5rem 0rem",
              color: country.states.length > 0 ? "blue" : "#999",
            }}
          >
            <CheckboxFav />
            <AlertDialogSlide
              country={country}
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Countries;
