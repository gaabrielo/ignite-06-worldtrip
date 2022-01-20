import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';

import { Category } from './Category';

export function Categories() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Grid
      templateColumns={isWideVersion ? 'repeat(5, 1fr)' : 'repeat(2, 1fr)'}
      templateRows={!isWideVersion && 'repeat(3, 1fr)'}
      mt={['2.25rem', '2.25rem', '5rem']}
      gap={!isWideVersion && '1.75rem'}
    >
      <Category image="/images/drink.svg" title="vida noturna" />
      <Category image="/images/beach.svg" title="praia" />
      <Category image="/images/building.svg" title="moderno" />
      <Category image="/images/museum.svg" title="clássico" />
      <GridItem colSpan={!isWideVersion && 2}>
        <Category image="/images/earth.svg" title="e mais..." />
      </GridItem>
    </Grid>
  );
}
