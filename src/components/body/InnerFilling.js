import React, {useState} from 'react'
import  { Box, Text, Button, Image } from '@chakra-ui/react'
import Cop from '../img/cop.svg'
import Char from '../img/chart.svg'
import Tasks from '../img/task1.svg'


const InnerFilling = () => {

const [tabRoute, setTabRoute] = useState("Remaing")

function setTabIndex(field) { setTabRoute(field.name)}

    const layer = [
    {
      name: "Remaining",
    },
    { name: "Ongoing",
    },
    { name: "Completed",
    }
]
  return (
    <Box>
        <Box display="flex" marginLeft="2rem">
            <Box>
                <Text fontSize="1.3rem">Ongoing Projects</Text>
            </Box>
            <Box marginLeft="13rem">
            {layer.map((field, index) => (
                <Button onClick={() => setTabIndex(field)} bg="transparent" color="#c0c0c0" cursor="pointer" border="unset" 
                key={index} borderBottom={tabRoute === field.name ? "2px solid #397ffe" : "none"} fontWeight={tabRoute === field.name ? "bold" : "100"}
                fontSize="12px" >{field.name}</Button>
            ))}
            </Box>
        </Box>
        <Image marginLeft="2rem" marginBottom="2rem" src={Cop}/>
        <Image src={Tasks} position="relative" bottom="24.5rem" height="45rem" right="5rem"/>
        <Box display="flex" justifyContent="space-evenly" width="30%" position="relative" bottom="37rem">
          <Box>
            <Text marginLeft="2rem" color="black">Progress Stats</Text>
          </Box>
          <Text color="#a0a0a0" position="relative" right="-16rem">day</Text>
          <Text color="#a0a0a0" position="relative" right="-17rem">week</Text>
          <Text color="black" position="relative" right="-18rem">month</Text>
        </Box>
              <Image marginLeft="2rem" position="relative" bottom="36rem" src={Char}/>
          </Box>
  )
}

export default InnerFilling