import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControl,
    FormLabel,
    Heading,
    HStack,
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
  
  export const Login = () => {
    const { isOpen, onToggle } = useDisclosure()
    const usernameinputRef = useRef()
    const passwordinputRef = useRef()
    const navigate = useNavigate();

    const makeLoginRequest=(loginData)=>{
        console.log(loginData);
        axios.post(`https://plv2.bizhueslabs.com/apis/user/login/`, loginData)
        .then(response => {
    
          console.log('Login successful:', response.data);
    
          const token = response.data.token.access_token;
          
          if (token) {
            localStorage.setItem("token", JSON.stringify(token));
            localStorage.setItem("profile", JSON.stringify(response.data));
            navigate('/');
          } else {
            console.error('Login failed: No token received');
            alert("Login failed: No token received")
          }
        })
        .catch((error) => {
          console.error('Login failed:', error);
          alert("Incorrect Username or Password")
        });
      }

      const loginformSubmit=()=>{
        let data = {
            username : usernameinputRef.current.value,
            password : passwordinputRef.current.value,
        }
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
            <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
            <Text color="fg.muted">
              Don't have an account? <Link href="/signup">Sign up</Link>
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
              <form onSubmit={loginformSubmit}>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input id="username" type="text" ref={usernameinputRef}  />
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
                <HStack marginTop='10px' justify="space-between">
                <Checkbox defaultChecked>Remember me</Checkbox>
                <Button variant="text" size="sm">
                    Forgot password?
                </Button>
                </HStack>
                <Stack marginTop='10px' spacing="6">
                <Button>Sign in</Button>
                </Stack>
            </form>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
    </>)
  }

  export default Login