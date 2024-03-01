import React, { useState } from "react";
import { Box, Container, Heading, Text, Button, VStack, HStack, Progress, useToast } from "@chakra-ui/react";
import { FaPlay, FaPause, FaRedoAlt } from "react-icons/fa";

const Index = () => {
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState(0);
  const toast = useToast();

  const handleStart = () => {
    setIsCalculating(true);
    // TODO: Implement Mersenne prime calculation logic
    toast({
      title: "Calculation started.",
      description: "We've begun searching for Mersenne primes.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const handlePause = () => {
    setIsCalculating(false);
    // TODO: Pause Mersenne prime calculation logic
    toast({
      title: "Calculation paused.",
      description: "Mersenne prime search has been paused.",
      status: "warning",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleReset = () => {
    setIsCalculating(false);
    setProgress(0);
    // TODO: Reset Mersenne prime calculation logic
    toast({
      title: "Calculation reset.",
      description: "The search for Mersenne primes has been reset.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={5}>
        <Heading>Mersenne Prime Finder</Heading>
        <Text>Join the search for new Mersenne primes! Start the calculation and it will continue running even if you leave the page.</Text>

        <Progress width="full" value={progress} />

        <HStack spacing={4}>
          <Button leftIcon={<FaPlay />} colorScheme="green" onClick={handleStart} isDisabled={isCalculating}>
            Start
          </Button>

          <Button leftIcon={<FaPause />} colorScheme="orange" onClick={handlePause} isDisabled={!isCalculating}>
            Pause
          </Button>

          <Button leftIcon={<FaRedoAlt />} colorScheme="red" onClick={handleReset}>
            Reset
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
