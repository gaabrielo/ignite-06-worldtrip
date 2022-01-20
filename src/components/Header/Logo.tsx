import { Image } from '@chakra-ui/react';

export function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="Worldtrip"
      w={{ base: '5.5rem', md: 'unset' }}
    />
  );
}
