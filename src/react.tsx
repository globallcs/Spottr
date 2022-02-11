import { ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import * as React from "react";
import { render } from "react-dom";

function App() {
  return <Flex w="100%" h="100%" align="center" justify="center" bgGradient='linear(to-r, #6a11cb, #2575fc)' color='white'>
      <Heading>SPOTTR</Heading>
    </Flex>;
}

const rootElement = document.getElementById("app");
render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  rootElement
);