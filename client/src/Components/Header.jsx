import { Box, Text } from '@chakra-ui/react';
import React from 'react';

function Header() {
    return (
        <Box w={"100%"} bg="whatsapp.300" h="50px">
            <Text textAlign={'center'} fontFamily='Lora' fontSize={'29px'} color='black'>  Intelligent.AI</Text>
        </Box>
    );
}

export default Header;