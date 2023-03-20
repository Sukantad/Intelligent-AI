import { Box, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import './messageBox.css'
function MessageBox({ loading, data }) {




    useEffect(() => {

        console.log(data, "data");

    }, [data])


    return (
        <Box fontFamily={'Lora'} className='example' w="80%" h="76vh" m="auto" overflow={'scroll'} boxShadow='dark-lg' borderRadius={'10px'} mt="10px" p="15px">

            {
                data?.map((ele, i) => (
                    <Box key={i}>
                        {ele.send == "man" ? <Text bg={'black'} color='white' borderRadius={'5px'} maxW={'50%'} w='fit-content' m='5px' p="5px" ml={'auto'} wordBreak='break-word'> {ele.name}</Text> : <> {
                            loading ? "Loading" :


                                <Text bg={'black'} color='white' borderRadius={'5px'} maxW={'50%'} w='fit-content' m='5px' p="5px" mr={'auto'} wordBreak='break-word'> {ele.name}
                                </Text>} </>
                        }
                    </Box>
                ))
            }
        </Box>
    );
}

export default MessageBox;