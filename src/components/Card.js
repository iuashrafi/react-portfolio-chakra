import { Heading, Link, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg="white" color="black" borderRadius={15}>
      <Image src={imageSrc} borderRadius={15} />
      <VStack padding={5}>
        <Text>
          <Heading as="h4" size="md" color="black" textAlign="left">
            {title}
          </Heading>
          <Text color="gray.600" my={2}>
            {description}
          </Text>
          <Link href="/" isExternal>
            See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Link>
        </Text>
      </VStack>
    </VStack>
  );
};

export default Card;
