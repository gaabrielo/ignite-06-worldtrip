import { Flex, Text, Img, useBreakpointValue, Box } from '@chakra-ui/react';

interface CategoryProps {
  image: string;
  title: string;
}

export function Category({ image, title }: CategoryProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      flexDir={['row', 'row', 'column']}
      align="center"
      justifyContent={['center', 'center', 'flex-start']}
      pl={['1rem', 0]}
    >
      {isWideVersion ? (
        <Img src={image} alt={title} w="5.35rem" />
      ) : (
        <Box w="8px" h="8px" bg="yellow" borderRadius="4px" mr="0.5rem" />
      )}
      <Text
        mt={['0', '0', '1.5rem']}
        fontSize={['1.125rem', '1.125rem', '1.5rem']}
        fontWeight="600"
        color="gray.800"
        textAlign="center"
        px={[0, 0, '1rem']}
      >
        {title}
      </Text>
    </Flex>
  );
}
