import { Box, Button, Img, Input } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { getQuestion } from '../Api';

function ChatInput({ Question, setLoading, data, setdata }) {
    const ref = useRef(null);
    const handleSubmit = async () => {
        ref.current.value && setLoading(true);
        var obj = {
            name: ref.current.value,
            send: "man",
        }
        setdata([...data, obj])
        
        var msg = {
            message: ref.current.value
        }

        var res = await getQuestion(msg);
        ref.current.value = "";
        var receiver = {
            name: res,
            send: "ai"
        }
        setdata([...data, obj, receiver])
        setLoading(false);
    }
    // by using click
    const ClickHandler = async (e) => {
        if (e.key == "Enter") {

            setLoading(true);
            var obj = {
                name: ref.current.value,
                send: "man",
            }
            setdata([...data, obj])
         
            var msg = {
                message: ref.current.value
            }

            var res = await getQuestion(msg);
            ref.current.value = "";
            var receiver = {
                name: res,
                send: "ai"
            }
            setdata([...data, obj, receiver])
            setLoading(false);
        }
    }



    return (
        <Box fontFamily={'Lora'} w={["95%", "80%"]} display={'flex'} h="10vh" m="auto" boxShadow='dark-lg' mt="10px" p="15px" borderRadius={'10px'}>
            <Input h="40px" color={'blue'} type="text" ref={ref} onKeyPress={ClickHandler} placeholder="Type whatever you want" />
            <Img _hover={{ cursor: "pointer" }} onClick={handleSubmit} pl="5px" h="38px" src="https://w7.pngwing.com/pngs/891/367/png-transparent-computer-icons-symbol-send-email-button-miscellaneous-blue-angle.png" alt="" />
        </Box>
    );
}

export default ChatInput;