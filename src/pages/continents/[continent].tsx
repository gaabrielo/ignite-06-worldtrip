import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Box, Flex, Button, Icon } from '@chakra-ui/react';

import { Logo } from '../../components/Header/Logo';
import { ContinentBanner } from '../../components/Continent/ContinentBanner';
import { FiChevronLeft } from 'react-icons/fi';

import api from '../../services/api';
import { ContinentBody } from '../../components/Continent/ContinentBody';
import { CitiesList } from '../../components/Continent/CitiesList';

interface Continent {
  id: number;
  name: string;
  title: string;
  cover: string;
  body: {
    about: string;
    top_cities: number;
    countries: number;
    languages: number;
  };
  cities: {
    id: number;
    country_id: number;
    name: string;
    cover: string;
  }[];
}

interface ContinentProps {
  data: Continent;
}

export default function Continent({ data }: ContinentProps) {
  const router = useRouter();

  console.log(data);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Box
      flexDirection="column"
      w="100%"
      maxWidth="1440px"
      mx="auto"
      pb="2.5rem"
    >
      <Flex
        position="relative"
        w="100%"
        h={{ base: '50px', md: '100px' }}
        justifyContent="center"
        align="center"
        mx="auto"
      >
        <Button
          variant="unstyled"
          position="absolute"
          top="auto"
          left={{ base: '1rem', md: '8.75rem' }}
          onClick={router.back}
        >
          <Icon as={FiChevronLeft} fontSize={{ base: '1rem', md: '2rem' }} />
        </Button>
        <Logo />
      </Flex>

      <ContinentBanner continent={data} />

      <Box w="100%" mt={{ base: '1.5rem', md: '5rem' }}>
        <ContinentBody body={data.body} />
      </Box>

      <Box w="100%" mt={{ base: '2rem', md: '5rem' }}>
        <CitiesList cities={data.cities} />
      </Box>
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const continentId = params.continent;

  const response = await api.get(`/continents/${continentId}`);

  return {
    props: {
      data: response,
    },
    revalidate: 60 * 30,
  };
};
