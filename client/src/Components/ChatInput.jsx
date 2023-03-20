import { Box, Button, Img, Input } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { getQuestion } from '../Api';

function ChatInput({ Question, setLoading, data, setdata }) {
    const ref = useRef(null);
    const handleSubmit = async () => {
        var obj = {
            name: ref.current.value,
            send: "man",
        }
         setdata([...data, obj])
         setLoading(true);
        // setQuestion(ref.current.value)
        var msg = {
            message: ref.current.value
        }
        
        ref.current.value = "";
         var res = await getQuestion(msg);
        var receiver = {
            name: res,
            send: "ai"
        }
        console.log(data, "show")
        setdata([...data,obj, receiver])
        setLoading(false);
        console.log(data, "final");


    }




    return (
        <Box fontFamily={'Lora'} w="80%" display={'flex'} h="10vh" m="auto" boxShadow='dark-lg' mt="10px" p="15px" borderRadius={'10px'}>
            <Input h="40px" color={'blue'} type="text" ref={ref} placeholder="Type whatever you want" />
            <Img _hover={{ cursor: "pointer" }} onClick={handleSubmit} pl="5px" h="38px" src="https://w7.pngwing.com/pngs/891/367/png-transparent-computer-icons-symbol-send-email-button-miscellaneous-blue-angle.png" alt="" />
        </Box>
    );
}

export default ChatInput;