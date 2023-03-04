// import { useForm } from "react-hook-form"
// import { Select } from "@chakra-ui/react"
// import { input } from '@chakra-ui/react'

import { Box, FormControl, FormLabel, Heading, VStack, Text, Container, Input, HStack, InputGroup, InputLeftElement, Select } from "@chakra-ui/react"
// import { Form } from "react-router-dom"
import { PhoneIcon } from "@chakra-ui/icons"

export const Signup = ()=>{
    // document.body.style = 'background: teal;';
    return(
        <div style={
                {backgroundColor: '#008080',
                height: "88.5vh"
            }
                }>
            <Container maxW="3xl" pt="12">
                <Box bg="white" pt="8" h="80vh" borderRadius="12">
                    <form>
                        <VStack>
                            <Heading as="h1" fontWeight="300" fontSize="22px" letterSpacing="0.5px">Create your account.</Heading>
                            <Text fontSize="sm">Let's get started by creating your account.</Text>
                        </VStack>
                        <Container mt="12">
                            <form>
                                <HStack spacing="12" mb="6">
                                    <FormControl isRequired>
                                        <FormLabel color="gray.400" fontSize="sm">First name:</FormLabel>
                                        <Input type="text" placeholder="Your first name" required />
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel color="gray.400" fontSize="sm">Last name:</FormLabel>
                                        <Input type="text" placeholder="Your last name" required />
                                    </FormControl>
                                </HStack>
                                <FormControl isRequired mb="6">
                                    <FormLabel color="gray.400" fontSize="sm">Email:</FormLabel>
                                    <Input type="email" placeholder="Your email here" required />
                                </FormControl>
                                <HStack spacing="12" mb="6">
                                    <FormControl isRequired>
                                        <FormLabel color="gray.400" fontSize="sm">Password:</FormLabel>
                                        <Input type="password" required />
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel color="gray.400" fontSize="sm">Retype Password:</FormLabel>
                                        <Input type="password" required />
                                    </FormControl>
                                </HStack>
                                <InputGroup mb="6">
                                    <InputLeftElement
                                    pointerEvents='none'
                                    children={<PhoneIcon color='gray.300' />}
                                    required />
                                    <Input type='tel' placeholder='Phone number' />
                                </InputGroup>
                                {/* <InputGroup>
                                    <InputLeftAddon children='+234' />
                                    <Input type='tel' placeholder='phone number' />
                                </InputGroup> */}
                                <HStack spacing="12" mb="8">
                                    <FormControl>
                                        <FormLabel color="gray.400" fontSize="sm">Gender</FormLabel>
                                        <Select placeholder='Select option'>
                                            <option value='option1'>Male</option>
                                            <option value='option2'>Female</option>
                                        </Select>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel color="gray.400" fontSize="sm">D.O.B</FormLabel>
                                        <Input
                                        placeholder="Select Date and Time"
                                        size="md"
                                        type="datetime-local"
                                        />
                                    </FormControl>
                                </HStack>
                                <Input type="submit" bg="#008080" color="white" />
                            </form>
                        </Container>
                    </form>
                </Box>
            </Container>
        </div>
    )
}
