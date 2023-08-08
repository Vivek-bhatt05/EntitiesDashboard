import {
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Text,
    IconButton,
    InputGroup,
    InputRightElement,
    useDisclosure
  } from '@chakra-ui/react'
  import { HiEye, HiEyeOff } from 'react-icons/hi'
  import { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

  
  export const Signup = () => {

    const { isOpen, onToggle } = useDisclosure()
    const usernameinputRef = useRef()
    const emailinputRef = useRef()
    const passwordinputRef = useRef()
    const navigate = useNavigate();

    const makeRegisterRequest=(registerData)=>{
        console.log(registerData);
        axios.post(`https://plv2.bizhueslabs.com/apis/user/register/`, registerData)
        .then(response => {
          console.log('Registration successful:', response.data);
          alert("Registration Success")
          navigate('/verify');
        })
        .catch((error) => {
          console.error('Registration failed', error);
          alert("Registration failed")
        });
      }

      const submitRegisterData=(e)=>{
        e.preventDefault();
        let data={
            username : usernameinputRef.current.value,
            email : emailinputRef.current.value,
            password : passwordinputRef.current.value
        };
        console.log(data)
      }

    const onClickReveal = () => {
        onToggle()
        if (passwordinputRef.current) {
            passwordinputRef.current.focus({ preventScroll: true })
        }
    }

    return (<>
    
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Stack spacing="6">
          {/* <Logo /> */}
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={{ base: 'xs', md: 'sm' }}> Register your account</Heading>
            <Text color="fg.muted">
              Already have an account? <Link href="/login">Login</Link>
            </Text>
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
              <form onSubmit={submitRegisterData}>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input id="username" type="text" ref={usernameinputRef} />
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" ref={emailinputRef} />
              {/* <PasswordField /> */}
                <FormLabel htmlFor="password">Password</FormLabel>
                <InputGroup>
                    <InputRightElement>
                    <IconButton
                        variant="text"
                        aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                        icon={isOpen ? <HiEyeOff /> : <HiEye />}
                        onClick={onClickReveal}
                    />
                    </InputRightElement>
                    <Input
                    id="password"
                    ref={passwordinputRef}
                    name="password"
                    type={isOpen ? 'text' : 'password'}
                    autoComplete="current-password"
                    />
                </InputGroup>

                <Stack marginTop='10px' spacing="6">
                 <Button type='submit'>Register</Button>
                </Stack>

            </form>
            </Stack>
            
          </Stack>
        </Box>
      </Stack>
    </Container>
    </>)
  }

  export default Signup