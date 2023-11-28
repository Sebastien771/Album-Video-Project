import {
    Center,
    Heading,
    VStack,
    Container,
    SimpleGrid,
    ChakraProvider,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";

function App() {
    const [allVideos, setAllVideos] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/videos")
            .then((response) => response.json())
            .then((data) => {
                setAllVideos(data);
            });
    }, []);

    return (
        <ChakraProvider>
            <Center bg="black" color="white" padding={8}>
                <VStack spacing={7}>
                    <Heading> Votre galerie vidéos</Heading>
                    <Heading>Vos vidéos</Heading>
                    <SimpleGrid columns={3} spacing={8}>
                        {allVideos.length !== 0 &&
                            allVideos.map(video => {
                                return (
                                    <video
                                        src={video["video_url"]}
                                        autoPlay
                                        controls
                                        loop
                                        preload="auto"
                                        muted
                                        key={video["id"]} // Assurez-vous que 'id' est la clé unique pour chaque vidéo
                                    ></video>
                                )
                            })}
                    </SimpleGrid>
                </VStack>
            </Center>
        </ChakraProvider>
    );
}

export default App;
