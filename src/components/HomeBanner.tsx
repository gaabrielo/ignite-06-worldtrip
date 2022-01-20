import { Box, Flex, Text, Image } from '@chakra-ui/react';

export function HomeBanner() {
  return (
    <Box
      w="100%"
      h={['163px', '163px', '360px']}
      maxWidth="1440px"
      bgImage="url('/images/banner.png')"
      bgPosition={['center', 'center', 'top']}
      bgRepeat="no-repeat"
      px="1rem"
    >
      <Flex
        h="100%"
        align="center"
        justifyContent={['flex-start', 'flex-start', 'space-evenly']}
      >
        <Flex direction="column" mt={['0', '0', '-25px']}>
          <Text
            color="gray.50"
            fontWeight="500"
            fontSize={['1.25rem', '1.25rem', '2.25rem']}
          >
            5 Continentes,
            <br />
            infinitas possibilidades.
          </Text>
          <Text
            color="gray.100"
            fontWeight="400"
            fontSize={['0.875rem', '0.875rem', '1.25rem']}
            maxWidth="520px"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>

        <Image
          src="/images/airplane.svg"
          alt="Avião"
          w="100%"
          maxWidth="400px"
          mt="auto"
          display={['none', 'none', 'block']}
        />
      </Flex>
    </Box>
  );
}
