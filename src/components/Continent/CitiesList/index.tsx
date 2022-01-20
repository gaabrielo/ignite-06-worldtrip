import {
  Box,
  Heading,
  Stack,
  Grid,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { CityCard } from './CityCard';

interface CitiesListProps {
  cities: {
    id: number;
    country_id: number;
    name: string;
    cover: string;
  }[];
}

export function CitiesList({ cities }: CitiesListProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Box>
      <Heading>Cidades +100</Heading>

      <Box mt={{ base: '1.25rem', md: '2.5rem' }}>
        {isWideVersion ? (
          <Grid>
            {cities.map((city) => (
              <React.Fragment key={city.id}>
                <CityCard
                  data={{
                    country_id: city.country_id,
                    name: city.name,
                    cover: city.cover,
                  }}
                />
              </React.Fragment>
            ))}
          </Grid>
        ) : (
          <Stack></Stack>
        )}
      </Box>
    </Box>
  );
}
