import hero from "../backgrounds/hero2.mp4";
import "../App.css";
import {
  Container,
  FormControl,
  Heading,
  Text,
  Input,
  Button,
  HStack,
  Card,
  CardBody,
  Image,
  Stack,
  Divider,
  CardFooter,
  ButtonGroup,
  Center
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Buy } from "./Buy";
import Buying from "../images/buy.svg"
import Leaseing from "../images/lease.svg"
import Renting from "../images/rent.svg"
// import AutoPlay  from "../components/Slick"

export const Home = () => {
  return (
    <div>


      <div className="ourHome" mb="22px">
        <video src={hero} autoPlay loop muted className="vid" />
        <Container maxW="4xl" align="center">
          <Heading color="#f1f1f1" mt="200px" size="2xl">
            Search Your Next Home
          </Heading>
          <Text p="12px" color="#fff" fontSize="md">
            A wide range of your Dream Accomodation.
          </Text>
        </Container>
        <Container maxWidth="4xl" mt="120px" className="bigE" mb="48">
          <FormControl className="homeForm" bg="039c94">
            <div className="inner">
              <Input type="text" placeholder="City/Street" />
            </div>
            <div className="inner">
              <Input type="text" placeholder="Property Type" />
            </div>
            <div className="inner">
              <Input type="number" placeholder="Price Range" />
            </div>
            <div className="inner">
              <Button colorScheme="teal" leftIcon={<SearchIcon />}>
                Search
              </Button>
            </div>
          </FormControl>
        </Container>
      </div>


    <Buy />



    <Container maxW="6xl" mt="29px">
      <HStack>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src={Buying}
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md' align="center">Buy a home</Heading>
              <Text align="center">
                Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else
              </Text>
            </Stack>
          </CardBody>
          <CardFooter align="center">
                <Button variant='outline' colorScheme='teal' align='center'>
                  Buy now
              </Button>
          </CardFooter>
        </Card>
         <Card maxW='sm'>
          <CardBody>
            <Image
              src={Renting}
              alt='Green double couch with wooden legs'
              borderRadius='lg'
              boxSize="200px"
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md' align="center">Rent a home</Heading>
              <Text align="center">
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='outline' colorScheme='teal'>
                Buy now
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
         <Card maxW='sm'>
          <CardBody>
            <Image
              src={Leaseing}
              alt='Green double couch with wooden legs'
              borderRadius='lg'
              // boxSize="450px"
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md' align="center">Home for lease</Heading>
              <Text align="center">
                We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='outline' colorScheme='teal'>
                Buy now
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </HStack>
    </Container>


    </div>
    // <p>Homepage</p>
  );
};
