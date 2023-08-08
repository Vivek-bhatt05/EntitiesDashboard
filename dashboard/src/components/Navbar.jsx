import React from 'react'
import {Box,Flex,Avatar,Button,Menu,MenuButton,MenuList,MenuItem,MenuDivider,useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Heading,
  } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const token = localStorage.getItem('token') || null
    console.log(token)

    const handleLogout=()=>{
      console.log("fdasdf")
      localStorage.removeItem('token')
    }
    return (
        <>
          <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
              <Box> <Link to='/'><Heading> Home </Heading></Link> </Box>
              <Box> <Link to='/create'><Heading> Create </Heading></Link> </Box>
    
              <Flex alignItems={'center'}>
                <Stack direction={'row'} spacing={7}>
                  <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  </Button>
    
    {token? <Menu>
                    <MenuButton
                      as={Button}
                      rounded={'full'}
                      variant={'link'}
                      cursor={'pointer'}
                      minW={0}>
                      <Avatar
                        size={'sm'}
                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                      />
                    </MenuButton>
                    <MenuList alignItems={'center'}>
                      <br />
                      <Center>
                        <Avatar
                          size={'2xl'}
                          src={'https://avatars.dicebear.com/api/male/username.svg'}
                        />
                      </Center>
                      <br />
                      <Center>
                        <p>Username</p>
                      </Center>
                      <br />
                      <MenuDivider />
                      <MenuItem>Account Settings</MenuItem>
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </MenuList>
                  </Menu>: <Menu>
                    <MenuButton
                      as={Button}
                      rounded={'full'}
                      variant={'link'}
                      cursor={'pointer'}
                      minW={0}>
                      <Avatar
                        size={'sm'}
                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                      />
                    </MenuButton>
                    <MenuList alignItems={'center'}>
                      <br />
                      <Center>
                        <Avatar
                          size={'2xl'}
                          src={'https://avatars.dicebear.com/api/male/username.svg'}
                        />
                      </Center>
                      <br />
                      <Center>
                        <p>Hello User</p>
                      </Center>
                      <br />
                      <MenuDivider />
                      <MenuItem><Link to='/login'>Login</Link></MenuItem>
                      <MenuItem><Link to='/signup'>Sign Up</Link></MenuItem>
                    </MenuList>
                  </Menu> }
                  
                </Stack>
              </Flex>
            </Flex>
          </Box>
        </>
      )
}

export default Navbar





