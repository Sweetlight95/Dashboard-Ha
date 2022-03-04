import React from 'react'
import { Box, Image, Text, Button } from "@chakra-ui/react"
import Avart from "../img/avatar.svg"
import AdesuwaIcon from '../img/AdesuwaIcon'
import Sim from "../img/sim.svg"
import Person from "../img/Person.js"
import Menu from "../img/Menu"
import Menu2 from '../img/Menu2'
import Menu6 from '../img/Menu6'
import Menu5 from '../img/Menu5'
import Overview from '../body/Overview'


const Sidebar = () => {

  const fields = [
    {
      name: "Dashboard",
      image: AdesuwaIcon
    },
    { name: "Menu 1",
      image: Menu
    },
    { name: "Menu 2",
      image: Menu2
    },
    { name: "Menu 3",
      image: Person
    },
    { name: "Menu 4",
      image: AdesuwaIcon
    },
    { name: "Menu 5",
      image: Menu5
    },
    { name: "Menu 6",
      image: Menu6
    }
  ]

  return (
    <Box bg="#f8f8f8" height="124vh" width="35vw" align="center" paddingTop="14px">
        <Image src={Avart} alt="image" />
        <Text color="black" marginTop="7px">Prabhatsinh Rathod</Text>
        <Text color="#9b9b9b" >UI UX Designer</Text>
        <Button bg="#397ffe" color="#c2d7ff" leftIcon={<AdesuwaIcon/>} marginTop="15px" height="36px" width="169px" borderRadius="6px" border="none">Become a Pro</Button>
        <Box color="#c0c4ce" >
          {fields.map((field, index) => ( 
          <Button bg="transparent" marginTop="1rem" key={index} padding="1.53rem" leftIcon={<field.image/>}>{field.name}</Button> 
        ))}
        </Box>
        <Box bg="#ffffff" height="229px" width="198px" borderRadius="20px" marginTop="0.5rem">
          <Image src={Sim} p={5}/>
        <Text fontWeight="bold">Buy More Storage</Text>
        <Button bg="#397ffe" color="white" fontWeight="bold" height="36px" width="110px" borderRadius="6px" border="none" marginTop="1rem">Buy More</Button>
        </Box>
        <Button leftIcon={<Person/>} color="#c0c4ce" marginTop="1rem" fontWeight="bold" bg="transparent">Menu 7</Button>
    </Box>
  )
}

export default Sidebar