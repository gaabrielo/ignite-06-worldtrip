import { Box, Text } from '@chakra-ui/react';

interface ContinentBannerProps {
  continent: {
    title: string;
    cover: string;
  };
}

export function ContinentBanner({ continent }: ContinentBannerProps) {
  return (
    <Box
      w="100%"
      maxWidth="1440px"
      h={{ base: '9.375rem', md: '31.25rem' }}
      bgImage={`linear-gradient(
                rgba(0, 0, 0, 0.35),
                rgba(0, 0, 0, 0.35)
              ), url("${continent.cover}")`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      position={{ base: 'initial', md: 'relative' }}
      display="flex"
      align="center"
      justify-content="center"
    >
      <Text
        position={{ base: 'initial', md: 'absolute' }}
        bottom="3.75rem"
        left="8.75rem"
        color="gray.50"
        alignSelf="center"
        marginX="auto"
        fontSize={{ base: '1.75rem', md: '3rem' }}
        lineHeight={{ base: '42px', md: '72px' }}
        fontWeight="600"
      >
        {continent.title}
      </Text>
    </Box>
  );
}
