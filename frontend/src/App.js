// Importation des composants nécessaires depuis Chakra UI pour la mise en page et le design
import {
    Center,                         // Un composant pour centrer son contenu
    Heading,                        // Un composant pour les titres (h1, h2, etc.)
    VStack,                         // Un composant de stack vertical pour aligner les éléments en colonne
    Container,                      // Un composant conteneur pour contrôler la largeur max de son contenu
    SimpleGrid,                     // Un composant pour créer des grilles simples et responsives
    ChakraProvider,                 // Le fournisseur de contexte pour Chakra UI
} from "@chakra-ui/react";

// Importation des hooks de React pour l'état local et les effets de bord
import { useState, useEffect } from "react";

function App() {
    // Déclaration d'un état local pour stocker toutes les vidéos
    const [allVideos, setAllVideos] = useState([]);

    // useEffect pour charger les données des vidéos depuis le backend au chargement du composant
    useEffect(() => {
        // Appel à l'API pour obtenir les vidéos
        console.log('API URL:', process.env.REACT_APP_API_URL);
        fetch(`${process.env.REACT_APP_API_URL}/videos`)
            .then((response) => response.json())        // Conversion de la réponse en JSON
            .then((data) => {
                setAllVideos(data);                     // Mise à jour de l'état avec les données des vidéos
            });
    }, []);                                             // Le tableau vide signifie que cet effet s'exécutera une seule fois après le premier rendu

    return (
        // Fournisseur Chakra UI pour activer le style Chakra dans l'application
        <ChakraProvider>
            <Center bg="black" color="white" padding={8}> 
                <VStack spacing={7}>
                    <Heading> Votre galerie vidéos</Heading>
                    <Heading>Vos vidéos</Heading>
                    <SimpleGrid columns={3} spacing={8}>
                        {allVideos.length !== 0 &&
                            // Mapping de l'array pour retourner un élément vidéo pour chaque vidéo
                            allVideos.map(video => {
                                return (
                                    <video
                                        src={video["video_url"]}        // URL de la vidéo
                                        autoPlay                        // Joue automatiquement la vidéo
                                        controls                        // Affiche les contrôles de la vidéo
                                        loop                            // Boucle la vidéo
                                        preload="auto"                  // Indique comment la vidéo doit être préchargée
                                        muted                           // Coupe le son par défaut
                                        key={video["id"]}               // Assurez-vous que 'id' est la clé unique pour chaque vidéo
                                    ></video>
                                )
                            })}
                    </SimpleGrid>
                </VStack>
            </Center>
        </ChakraProvider>
    );
}

// Export par défaut du composant App pour une utilisation dans d'autres parties de l'application
export default App;