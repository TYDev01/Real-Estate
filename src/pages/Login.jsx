import {
  Checkbox,
  Container,
  FormLabel,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
// import imgBg from "../images/logobg2.jpg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import styles from "../Login.module.css"

export const Login = () => {
  const {register, handleSubmit} = useForm();

  const onSubmit = (data)=>{
    console.log(data)
  }
  const submitHandler = ()=>{
    handleSubmit(onSubmit)
  }
  return (
    <div className={styles.loginFlex}>
      <Container align="left">
        <form className={styles.forLog} onSubmit={submitHandler}>
          <Heading mb="8px" color="GrayText">
            Welcome Back
          </Heading>
          <Text mb="42px" color="GrayText">
            Welcome back! Please enter your Details.
          </Text>
          <FormLabel>Email:</FormLabel>
          <input type="email" placeholder="E-mail Address" className={styles.log} {...register("email")} />
          <br />
          <FormLabel>Password:</FormLabel>
          <input type="password" placeholder="Password" {...register("password")} />
          <br />
          <HStack spacing="94px" mb="42px">
            <Checkbox>
              <Text fontSize="xs">Remember password for 30 Days.</Text>
            </Checkbox>
            <Link fontSize="xs" className={styles.linkCol}>
              Forgot Password?
            </Link>
          </HStack>
          {/* <Button bg="teal" color="white">
            Submit
          </Button> */}
          <input type='submit' value='Submit'/>
        </form>
      </Container>
      <Container
        className={styles.loginSide}
      >
        <Text as="b" fontSize="6xl" bg="teal" p="12px" className={styles.loginText}>
          Hello Chief!
        </Text>
        <Text fontSize="4xl" color="#ffffff" mt="22px" fontWeight="200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          tempore, provident illum praesentium commodi eum quae, officiis odio
          quia quos reiciendis quo?
        </Text>
      </Container>
    </div>
  );
};
