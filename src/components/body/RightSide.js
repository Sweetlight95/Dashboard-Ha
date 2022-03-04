import React from 'react'
import { Box, Text, Button, Image } from '@chakra-ui/react'
import Bike from '../img/bikeman.svg'
import Phone from '../img/Phone'
import Cal from '../img/calender.svg'

const RightSide = () => {
  return (
    <Box marginLeft="42rem" position="relative" bottom="84rem" >
        <Box bg="#65a2b1" borderRadius="20px" height="149px" width="409px" display="flex" >
            <Box>
                <Image src={Bike} marginLeft="1.2rem" />
            </Box>
            <Box color="white" fontSize="12px" margin="2.5rem 2.6rem">
            <Text fontWeight="bold" >Try PRO version</Text>
            <Text marginTop="0.4rem" fontWeight="light">Unlock full power of calender</Text>
            <Text>For 2 weeks for free!</Text>
            </Box>
        </Box>
        <Box >
          <Image src={Cal} marginTop="1.5rem"/>
{/* g="#f9f9f9" height="400px" width="409px" marginTop="1.4rem" borderRadius="20px" */}
        </Box>
        <Box bg="#f9f9f9" borderRadius="20px" height="177px" width="409px" marginTop="1.5rem">
          <Box display="flex" justifyContent="space-around">
            <Box marginTop="1.5rem">
              <Text color="#a3a3a3">Project Manager</Text>
              <Text color="black" fontWeight="bold" fontSize="23px">Client Meeting</Text>
            </Box>
            <Text color="#646464" fontSize="12px" marginTop="1.6rem">+ NEW </Text>
          </Box>
          <Button  bg="#edeff3" borderRadius="27px" height="54px" width="334px" position="absolute" left="35px" bottom="22px" color="#8d8e91">
            <Button bg="white" borderRadius="27px" height="42px" width="84px" position="absolute" left="0.3rem" leftIcon={<Phone/>}>
              </Button>Swipe To Call</Button>
        </Box>
    </Box>
  )
}

export default RightSide
