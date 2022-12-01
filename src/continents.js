import { useState } from 'react'
import {
  Typography,
  Container,
  List,
  Box,
  ListItem
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { gql, useQuery, useLazyQuery } from '@apollo/client'

const CONTINENTS = gql`
  query Continents {
    continents {
      code
      name
    }
  }
`

const CONTINENT = gql`
  query Country($code: String!) {
    continent(code: $code) {
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

const Continents = () => {
  const { loading, error, data, refetch } = useQuery(CONTINENTS)
  if (loading) return <>loading...</>
  if (error) return <>error...</>

  const continents = data.continents

  return (
    <Container>
      <Typography variant='h1' sx={{ textAlign: 'center' }}>
        Continents
      </Typography>
      <Box>
        <Box sx={{ textAlign: 'center', padding: '.5rem' }}>
          {continents.length} Continents
        </Box>
        <List>
        {continents.map(continent => (
          <ListItem key={continent.code}>
            {continent.code} - {continent.name}
          </ListItem>
        ))}
      </List>
      </Box>

    </Container>
  )
}

export default Continents
