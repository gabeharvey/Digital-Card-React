import React from 'react';
import { Flex, Image, Text, VStack, HStack, Icon, Link } from '@chakra-ui/react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';

const MainContent = () => {
  const [flipped, setFlipped] = React.useState(false);

  const { transform, boxShadow } = useSpring({
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    boxShadow: flipped
      ? '0px 4px 20px rgba(0, 0, 0, 0.2)'
      : '0px 4px 20px rgba(0, 0, 0, 0.1)',
    config: { mass: 6, tension: 800, friction: 60 },
  });

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      style={{ perspective: '1000px' }}
      onClick={handleFlip}
      cursor="pointer"
      backgroundColor='white'
    >
      <animated.div
        style={{
          transformStyle: 'preserve-3d',
          transform,
          boxShadow,
          width: '300px',
          height: '400px',
          position: 'relative',
          borderRadius: '10px',
          transition: 'box-shadow 0.3s',
          marginTop: "10px"
        }}
      >
        {/* Front Side of Business Card */}
        <animated.div
          style={{
            backfaceVisibility: 'hidden',
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundImage: 'url("/tech-photo.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10px',
            border: '3px solid #191970',
            padding: '16px',
            boxShadow: "gray 10px 10px 10px",
          }}
        >
          <Flex direction="column" align="center" justify="center" height="100%">
            <Image
              borderRadius="md"
              boxSize="150px"
              src="/gabe-photo.jpg"
              alt="Profile Image"
              mb={2}
            />
            <Text className='card-name' fontSize="3xl" fontWeight="bold" color="white" fontFamily="'Orbitron', cursive" marginBottom= '15px' sx={{
                textShadow: `
                    0px 3px 5px rgba(25, 25, 112, 0.9),
                    0px 6px 10px rgba(65, 105, 225, 0.8),
                    0px 9px 15px rgba(70, 130, 180, 0.7),
                    0px 12px 20px rgba(100, 149, 237, 0.6),
                    0px 15px 25px rgba(135, 206, 250, 0.5)`,
            }}>
              Gabe Harvey
            </Text>
            <Text fontSize="lg" color="beige" mb={4} fontFamily="'Marmelad', cursive">
              Full Stack Web Developer
            </Text>
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
        </animated.div>

        {/* Back Side of Business Card */}
        <animated.div
          style={{
            backfaceVisibility: 'hidden',
            position: 'absolute',
            width: '100%',
            height: '100%',
            transform: 'rotateY(180deg)',
            backgroundImage: 'url("/tech-photo.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#2a2a2a',
            borderRadius: '10px',
            border: '3px solid #191970',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            fontSize: '2.1rem',
            fontFamily: "'Orbitron', cursive",
            fontWeight: 'bold',
            boxShadow: "gray 10px 10px 10px",
            marginBottom: '5px',
            textShadow: `
                    0px 3px 5px rgba(25, 25, 112, 0.9),
                    0px 6px 10px rgba(65, 105, 225, 0.8),
                    0px 9px 15px rgba(70, 130, 180, 0.7),
                    0px 12px 20px rgba(100, 149, 237, 0.6),
                    0px 15px 25px rgba(135, 206, 250, 0.5)`,
          }}
        >
          <Flex direction="column" align="center" justify="center" height="100%">
            <Text>Gabe Harvey</Text>
            <Text fontSize={16} fontFamily="'Marmelad', cursive" color='beige' textShadow='none' marginTop={9}>©2024 All Rights Reserved</Text>
          </Flex>
        </animated.div>
      </animated.div>
    </Flex>
  );
};

export default MainContent;
