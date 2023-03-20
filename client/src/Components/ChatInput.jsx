import { Box, Button, Img, Input } from '@chakra-ui/react';
import React from 'react';

function ChatInput() {
    return (
        <Box w="80%" display={'flex'} h="10vh" m="auto" boxShadow='dark-lg' mt="10px" p="15px" borderRadius={'10px'}> 
            <Input h="40px" color={'blue'} type="text" placeholder="Type whatever you want"/>
             <Img _hover={{cursor:"pointer"}} pl="5px" h="38px" src="https://w7.pngwing.com/pngs/891/367/png-transparent-computer-icons-symbol-send-email-button-miscellaneous-blue-angle.png" alt="" />
        </Box>
    );
}

export default ChatInput;