import { Box, Flex, Text, Heading, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import db from '../../../../db.json';
import { Flag } from './Flag';

interface CityCardProps {
  data: {
    country_id: number;
    name: string;
    cover: string;
  };
}

interface Country {
  id: number;
  abbreviation: string;
  title: string;
}

export function CityCard({ data }: CityCardProps) {
  const [country, setCountry] = useState<Country>();

  useEffect(() => {
    const countryId = data.country_id;

    const country = db.countries.find((country) => country.id === countryId);

    setCountry(country);
  }, [data.country_id]);

  return (
    <Box>
      <Image src={data.cover} alt={data.name} />

      <Flex>
        <Box>
          <Heading>{data.name}</Heading>
          <Text>{country?.title}</Text>
        </Box>

        {!!country && <Flag abbreviation={country?.abbreviation} />}
      </Flex>
    </Box>
  );
}
