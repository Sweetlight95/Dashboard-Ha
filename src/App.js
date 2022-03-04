import './App.css';
import { Box } from '@chakra-ui/react'
import Sidebar from './components/sidebar/Sidebar'
import { ChakraProvider } from '@chakra-ui/react'
import Overview from './components/body/Overview'

function App() {
  return (
    <ChakraProvider>
        <Box bg="#65A2B1" height="140vh" display="fixed" width="100vw">
          
        <Box bg="#ffffff" height="124vh" width="85vw" margin="40px 150px" display="flex" >
              <Sidebar />
              <Overview />
              
        </Box>
        </Box>
    </ChakraProvider>
  );
}

export default App;
