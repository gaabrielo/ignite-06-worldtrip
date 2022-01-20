import { Box, Flex, Text } from '@chakra-ui/react';

import { Carousel } from '../components/Carousel';
import { Categories } from '../components/Categories';
import { Logo } from '../components/Header/Logo';
import { HomeBanner } from '../components/HomeBanner';

export default function Home() {
  return (
    <Box
      flexDirection="column"
      w="100%"
      maxWidth="1440px"
      mx="auto"
      pb="2.5rem"
    >
      <Flex
        w="100%"
        h={{ base: '50px', md: '100px' }}
        justifyContent="center"
        align="center"
        mx="auto"
      >
        <Logo />
      </Flex>
      <HomeBanner />
      <Categories />
      <Flex
        w="100%"
        justifyContent="center"
        h="1px"
        mt={{ base: '2.25rem', md: '5rem' }}
      >
        <Box w="100%" maxWidth="90px" bgColor="gray.800" />
      </Flex>
      <Text
        fontWeight="500"
        color="gray.800"
        textAlign="center"
        fontSize={{ base: '1.25rem', md: '2.25rem' }}
        mt={{ base: '1.5rem', md: '3.25rem' }}
        px="1rem"
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Text>

      <Box
        w="100%"
        maxWidth="1240px"
        mx="auto"
        h="450px"
        mt={['1.25rem', '3.25rem']}
      >
        <Carousel />
      </Box>
    </Box>
  );
}
