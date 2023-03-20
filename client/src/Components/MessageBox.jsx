import { Box } from '@chakra-ui/react';
import React from 'react';
import './messageBox.css'
function MessageBox() {
    return (
        <Box className='example' w="80%" h="76vh" m="auto" overflow={'scroll'} boxShadow='dark-lg' borderRadius={'10px'} mt="10px" p="15px"> 
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi modi velit rerum est eaque, expedita eligendi, sapiente vero saepe dolores necessitatibus, optio aliquid vel reiciendis dolor ab quisquam doloremque. Eaque?        </Box>
    );
}

export default MessageBox;