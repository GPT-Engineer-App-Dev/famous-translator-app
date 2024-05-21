import { useState } from "react";
import { Container, Text, VStack, Input, Button, Select, Box, Heading } from "@chakra-ui/react";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [selectedPerson, setSelectedPerson] = useState("");

  const handleTranslate = () => {
    // Placeholder for translation logic
    setTranslatedText(`Translated text as ${selectedPerson} would say: ${inputText}`);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Famous Speaker Translator</Heading>
        <Text>Enter some text and select a famous person to translate it into their speaking style.</Text>
        <Input
          placeholder="Enter text here"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          size="lg"
        />
        <Select placeholder="Select a famous person" value={selectedPerson} onChange={(e) => setSelectedPerson(e.target.value)} size="lg">
          <option value="Shakespeare">William Shakespeare</option>
          <option value="Yoda">Yoda</option>
          <option value="Einstein">Albert Einstein</option>
        </Select>
        <Button onClick={handleTranslate} colorScheme="blue" size="lg">Translate</Button>
        {translatedText && (
          <Box p={4} mt={4} borderWidth="1px" borderRadius="lg" width="100%">
            <Text fontSize="lg">{translatedText}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;