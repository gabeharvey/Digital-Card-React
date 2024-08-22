import { Box, Flex, Image, Text, VStack, HStack, Icon, Link } from '@chakra-ui/react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

const MainContent = () => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg" p={6} bg="gray.900">
      <Flex direction="column" align="center">
        <Image borderRadius="md" boxSize="150px" src="../src/assets/gabe-photo.jpg" alt="Profile Image" mb={4}/>
        <Text fontSize="2xl" fontWeight="bold" color="beige" fontFamily="'Bungee Tint', cursive">Gabe Harvey</Text>
        <Text fontSize="lg" color="beige" mb={4} fontFamily="'Marmelad', cursive">Full Stack Web Developer</Text>
        <VStack align="start" spacing={2} fontFamily="'Marmelad', cursive">
          <HStack>
            <Icon as={FaEnvelope} color='white'/>
            <Link href="mailto:gabeharvey11@gmail.com" color='beige'>gabeharvey11@gmail.com</Link>
          </HStack>
          <HStack>
            <Icon as={FaPhone} color='green.300'/>
            <Text color='beige'>(210) 219-3117</Text>
          </HStack>
          <HStack>
            <Icon as={FaLinkedin} color='royalblue' />
            <Link href="https://www.linkedin.com/in/gabe-harvey-37ab90308/" isExternal color='beige'>linkedin.com/in/gabeharvey</Link>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default MainContent;
