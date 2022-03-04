import React from 'react'
import { Box, Text, Input, InputGroup, Button, InputLeftElement, Image } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import Plus from '../img/plusbox.svg'
import Bell from '../img/bell.svg'
import Wheel from '../img/wheel.svg'
import RightSide from './RightSide'
import InnerFilling from './InnerFilling'


const Overview = () => {
  return (
    <Box> 
        <Box display ="flex" padding="2rem">
            <Text fontWeight="bold" marginTop="16px" fontSize="1.3rem">Dashboard</Text>
            <InputGroup color="#e1e3e7" bg="#f4f6fa" marginLeft="2rem" width="30%">
            <InputLeftElement children={<SearchIcon />} marginTop="0.6rem" />
            <Input  placeholder="Search here..." border="none" width="330px" height="58px"/>
            </InputGroup>
          <Image src={Plus} paddingLeft="1.2rem" height="58px"/> 
        <Button boxShadow="0px 0px 15px rgba(0, 0, 0, 0.05)" bg="white" height="58px" width="56px" borderRadius="6px" position="absolute" right="185px"><Image src={Bell} /></Button>
        <Button borderRadius="6px" boxShadow="0px 0px 15px rgba(0, 0, 0, 0.05)" bg="white" height="58px" width="56px" position="absolute" right="100px"> <Image src={Wheel}/></Button>
        </Box>
        <InnerFilling />
                <RightSide/>
    </Box>
  )
}

export default Overview
