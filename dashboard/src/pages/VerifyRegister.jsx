import React from 'react'
import {
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    Input,
    Stack
  } from '@chakra-ui/react'
import {useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';



const Verifyregister = () => {

    let url=`https://plv2.bizhueslabs.com/apis/user/verify-account/`;

    const otpRef= useRef();
    const usernameRef= useRef();
    const navigate = useNavigate();

    const validateHandler=(e)=>{
        e.preventDefault();
        if (otpRef.current.value===""||usernameRef.current.value==="" ){
            alert("Please fill all details")
            return
          }else{
            let newPassData={
              otp : otpRef.current.value,
              username : usernameRef.current.value,
            }
            console.log(newPassData)
            axios.post(url, newPassData)
             .then(response => {
             console.log(' Registration Successfull', response.data);
             alert(' Registration Successfull');
             navigate("/login")
             
            })
             .catch(error => {
              alert("Enter Valid Details")
              console.error("Enter Valid Details",error);
            });
          }
    }

  return (
    <> 
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={{ base: 'xs', md: 'sm' }}>Verify your account</Heading>
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={{ base: 'transparent', sm: 'bg.surface' }}
          boxShadow={{ base: 'none', sm: 'md' }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <form onSubmit={validateHandler} >
                <FormLabel htmlFor="OTP">OTP</FormLabel>
                <Input id="OTP" type="number" ref={otpRef}  />
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input id="username" type="text" ref={usernameRef}  />
                <Stack marginTop='10px'  spacing="6">
                    <Button>Verify</Button>
                </Stack>
                </form>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
    </>
  )
}

export default Verifyregister
