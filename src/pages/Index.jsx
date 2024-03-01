import React, { useState, useEffect } from "react";
import { Container, Heading, Text, Button, VStack, HStack, Progress, useToast } from "@chakra-ui/react";
import { FaPlay, FaPause, FaRedoAlt } from "react-icons/fa";

const Index = () => {
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState(0);
  const toast = useToast();

  let worker = null;

  useEffect(() => {
    // Cleanup function to terminate the worker when the component unmounts
    return () => {
      if (worker) {
        worker.terminate();
      }
    };
  }, []);

  const handleStart = () => {
    setIsCalculating(true);
    worker = new Worker(new URL("../workers/calculateMersenne.js", import.meta.url));
    worker.postMessage("start");
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
    worker.terminate();
    worker = undefined;
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
    if (worker) {
      worker.terminate();
    }
    worker = undefined;
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
