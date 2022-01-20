import { useEffect, useState } from 'react';
import { Flex, Text, Stack } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { getContinents } from '../services/server';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SwiperCore, { Pagination, Navigation } from 'swiper';

interface Continent {
  id: number;
  name: string;
  title: string;
  description: string;
  cover: string;
  body: {
    about: string;
    countries: string;
    languages: string;
    top_cities: string;
  };
  covered: string;
  cities: {
    id: number;
    country_id: number;
    name: string;
    cover: string;
  }[];
}

SwiperCore.use([Pagination, Navigation]);

export function Carousel() {
  const [continents, setContinents] = useState<Continent[]>([]);

  useEffect(() => {
    try {
      getContinents().then((continents: Continent[]) => {
        setContinents(continents);
        console.log(continents);
      });
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="mySwiper"
    >
      {!!continents &&
        continents.map((continent) => (
          <SwiperSlide key={continent.id}>
            <Link href={`/continents/${continent.id}`} passHref>
              <Flex
                w="100%"
                h="100%"
                align="center"
                justifyContent="center"
                cursor="pointer"
                bg={`linear-gradient(
                rgba(0, 0, 0, 0.35),
                rgba(0, 0, 0, 0.35)
              ), url(${continent.cover})`}
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
              >
                <Stack flexDir="column">
                  <Text
                    fontSize={{ base: '1.5rem', md: '3rem' }}
                    fontWeight="bold"
                    color="gray.50"
                  >
                    {continent.title}
                  </Text>
                  <Text
                    fontSize={{ base: '0.875rem', md: '1.5rem' }}
                    fontWeight="bold"
                    color="gray.100"
                    maxWidth={['180px', '300px', 'unset']}
                  >
                    {continent.description}
                  </Text>
                </Stack>
              </Flex>
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
