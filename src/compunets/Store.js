import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    background,
  } from '@chakra-ui/react';
  
  export default function SocialProfileWithImage(props) {
    function isAvl(){
        const min = new Date();  
        
        if(min.getMinutes() % 2===0){
            return ( <Button  w={'full'}  mt={8} color={'white'}rounded={'md'}bg={'green'}
        
                       >
              Register
            </Button>)
        }
        else{
            return (<Button  w={'full'}  mt={8} color={'white'}rounded={'md'}bg={'red'}
        
                    >
           closed
         </Button>)

        }
     }
       return (
        
      <Center py={6}>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={props.pic }
            objectFit={'cover'}
          />
            
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {props.name}
              </Heading>
              <Text color={'gray.500'}>{props.des}</Text>
            </Stack>
            
            {isAvl()}
    
             
           
            
            
    
          </Box>
        </Box>
      </Center>
    );}