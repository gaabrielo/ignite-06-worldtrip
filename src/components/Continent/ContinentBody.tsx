import {
  Flex,
  Text,
  Icon,
  Grid,
  GridItem,
  useBreakpointValue,
  Tooltip,
} from '@chakra-ui/react';
import { IoMdInformationCircleOutline } from 'react-icons/io';

interface BodyProps {
  body: {
    about: string;
    top_cities: number;
    countries: number;
    languages: number;
  };
}

export function ContinentBody({ body }: BodyProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      flexDir={{ base: 'column', md: 'row' }}
      w="fit-content"
      mx="auto"
      px="1rem"
      alignItems="center"
    >
      <Text
        maxWidth="600px"
        color="gray.800"
        fontSize={{ base: '0.875rem', md: '1.5rem' }}
        lineHeight={{ base: '21px', md: '36px' }}
        textAlign="justify"
        mr={{ base: 0, md: '4.375rem' }}
      >
        {body.about}
      </Text>

      <Grid
        maxWidth="490px"
        templateColumns={{
          base: 'repeat(4, 1fr)',
          md: 'repeat(3, 1fr)',
          xl: 'repeat(4, 1fr)',
        }}
        gap="2.625rem"
        mt={{ base: '1rem', md: 0 }}
      >
        <GridItem
          as={Text}
          alignSelf="center"
          textAlign={{ base: 'left', md: 'center' }}
          fontWeight={{ base: '400', md: '600' }}
          fontSize={{ base: '1.15rem', md: '1.5rem' }}
          colSpan={1}
        >
          <Text
            as="strong"
            display="block"
            fontWeight="600"
            color="yellow"
            fontSize={{ base: '1.5rem', md: '3rem' }}
            lineHeight="100%"
          >
            {body.countries}
          </Text>
          países
        </GridItem>

        <GridItem
          as={Text}
          alignSelf="center"
          textAlign={{ base: 'left', md: 'center' }}
          fontWeight={{ base: '400', md: '600' }}
          fontSize={{ base: '1.15rem', md: '1.5rem' }}
          colSpan={1}
        >
          <Text
            as="strong"
            display="block"
            fontWeight="600"
            color="yellow"
            fontSize={{ base: '1.5rem', md: '3rem' }}
            lineHeight="100%"
          >
            {body.languages}
          </Text>
          línguas
        </GridItem>

        <GridItem
          as={Text}
          alignSelf="center"
          textAlign={{ base: 'left', md: 'center' }}
          fontWeight={{ base: '400', md: '600' }}
          fontSize={{ base: '1.15rem', md: '1.5rem' }}
          colSpan={{ base: 2, md: 1, xl: 2 }}
        >
          <Text
            as="strong"
            display="block"
            fontWeight="600"
            color="yellow"
            fontSize={{ base: '1.5rem', md: '3rem' }}
            lineHeight="100%"
          >
            {body.top_cities}
          </Text>
          cidades +100{' '}
          {isWideVersion && (
            <Tooltip
              hasArrow
              label="As cidades +100 são aquelas que estão entre as 100 cidades mais visitadas do mundo."
              bg="gray.100"
              color="gray.800"
            >
              <span>
                <Icon
                  as={IoMdInformationCircleOutline}
                  color="rgba(153, 153, 153, 0.5)"
                  fontSize="1rem"
                />
              </span>
            </Tooltip>
          )}
        </GridItem>
      </Grid>
    </Flex>
  );
}
