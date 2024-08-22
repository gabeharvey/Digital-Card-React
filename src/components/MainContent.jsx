import { Box, Flex, Image, Text, VStack, HStack, Icon, Link } from '@chakra-ui/react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

const MainContent = () => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg" p={6} bg="white">
      <Flex direction="column" align="center">
        <Image borderRadius="full" boxSize="150px" src="https://via.placeholder.com/150" alt="Profile Image" mb={4}/>
        <Text fontSize="2xl" fontWeight="bold">Gabe Harvey</Text>
        <Text fontSize="lg" color="gray.500" mb={4}>Full Stack Web Developer</Text>
        <VStack align="start" spacing={2}>
          <HStack>
            <Icon as={FaEnvelope} />
            <Link href="mailto:gabeharvey11@gmail.com">gabeharvey11@gmail.com</Link>
          </HStack>
          <HStack>
            <Icon as={FaPhone} />
            <Text>(210) 219-3117</Text>
          </HStack>
          <HStack>
            <Icon as={FaLinkedin} />
            <Link href="https://www.linkedin.com/in/gabe-harvey-37ab90308/" isExternal>linkedin.com/in/gabeharvey</Link>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default MainContent;
