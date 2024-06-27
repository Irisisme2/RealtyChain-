import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
  Divider,
  Input,
  IconButton,
  Stack,
  Select,
} from "@chakra-ui/react";
import { AddIcon, CloseIcon, CheckIcon } from "@chakra-ui/icons";
import Card from "components/card/Card.js";
import Property from "views/admin/marketplace/components/Property"; // Property component
import Property1 from "assets/img/properties/Property1.png";
import Property2 from "assets/img/properties/Property2.png";
import Property3 from "assets/img/properties/Property3.png";
import Property4 from "assets/img/properties/Property4.png";
import Property5 from "assets/img/properties/Property5.png";
import Property6 from "assets/img/properties/Property6.png";
import Avatar1 from "assets/img/avatars/avatar1.png";
import Avatar2 from "assets/img/avatars/avatar2.png";
import Avatar3 from "assets/img/avatars/avatar3.png";
import Avatar4 from "assets/img/avatars/avatar4.png";

// Function to convert prices to cryptocurrencies
const convertToCrypto = (price) => {
  const btcRate = 32000; // Example BTC rate
  const ethRate = 2100; // Example ETH rate
  const usdToBtc = price / btcRate;
  const usdToEth = price / ethRate;
  return {
    btc: usdToBtc.toFixed(4),
    eth: usdToEth.toFixed(4),
  };
};

const Portfolio = () => {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");

  // Sample data of owned properties
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "Luxury Apartment",
      location: "New York, NY",
      agents: [Avatar1, Avatar2, Avatar3, Avatar4],
      image: Property1,
      price: 1200000,
    },
    {
      id: 2,
      name: "Suburban House",
      location: "Los Angeles, CA",
      agents: [Avatar1, Avatar2, Avatar3, Avatar4],
      image: Property2,
      price: 850000,
    },
    {
      id: 3,
      name: "Downtown Office Space",
      location: "Chicago, IL",
      agents: [Avatar1, Avatar2, Avatar3, Avatar4],
      image: Property3,
      price: 3500000,
    },
    {
      id: 4,
      name: "Cozy Cottage",
      location: "Austin, TX",
      agents: [Avatar1, Avatar2, Avatar3, Avatar4],
      image: Property4,
      price: 450000,
    },
    {
      id: 5,
      name: "Modern Villa",
      location: "Miami, FL",
      agents: [Avatar1, Avatar2, Avatar3, Avatar4],
      image: Property5,
      price: 2300000,
    },
    {
      id: 6,
      name: "Country Estate",
      location: "Nashville, TN",
      agents: [Avatar1, Avatar2, Avatar3, Avatar4],
      image: Property6,
      price: 1750000,
    },
  ]);

  // State for managing property addition
  const [isAddingProperty, setIsAddingProperty] = useState(false);
  const [newPropertyName, setNewPropertyName] = useState("");
  const [newPropertyLocation, setNewPropertyLocation] = useState("");
  const [newPropertyPrice, setNewPropertyPrice] = useState("");

  // Function to add a new property
  const handleAddProperty = () => {
    const newProperty = {
      id: properties.length + 1,
      name: newPropertyName,
      location: newPropertyLocation,
      agents: [Avatar1, Avatar2, Avatar3, Avatar4], // Sample agents
      image: Property1, // Sample image
      price: parseFloat(newPropertyPrice),
    };
    setProperties([...properties, newProperty]);
    setIsAddingProperty(false);
    setNewPropertyName("");
    setNewPropertyLocation("");
    setNewPropertyPrice("");
  };

  // Function to delete a property
  const handleDeleteProperty = (id) => {
    const updatedProperties = properties.filter((property) => property.id !== id);
    setProperties(updatedProperties);
  };

  // Function to render property card
  const renderPropertyCard = (property) => {
    const cryptoPrices = convertToCrypto(property.price);
    return (
      <Property
        key={property.id}
        name={property.name}
        location={property.location}
        agents={property.agents}
        image={property.image}
        price={`$${property.price}`}
        btcPrice={`BTC ${cryptoPrices.btc}`}
        ethPrice={`ETH ${cryptoPrices.eth}`}
        onDelete={() => handleDeleteProperty(property.id)}
        details="#"
      />
    );
  };

  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      <Grid gap="20px">
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}
        >
          <Flex
            mt="45px"
            mb="20px"
            justifyContent="space-between"
            direction={{ base: "column", md: "row" }}
          >
            <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
              My Properties
            </Text>
            {!isAddingProperty ? (
              <IconButton
                aria-label="Add Property"
                icon={<AddIcon />}
                onClick={() => setIsAddingProperty(true)}
                variant="outline"
              />
            ) : (
              <Stack direction="row" spacing={4}>
                <Input
                  placeholder="Name"
                  value={newPropertyName}
                  onChange={(e) => setNewPropertyName(e.target.value)}
                />
                <Input
                  placeholder="Location"
                  value={newPropertyLocation}
                  onChange={(e) => setNewPropertyLocation(e.target.value)}
                />
                <Input
                  placeholder="Price"
                  value={newPropertyPrice}
                  onChange={(e) => setNewPropertyPrice(e.target.value)}
                />
                <IconButton
                  aria-label="Confirm Add Property"
                  icon={<CheckIcon />}
                  onClick={handleAddProperty}
                  variant="outline"
                />
                <IconButton
                  aria-label="Cancel Add Property"
                  icon={<CloseIcon />}
                  onClick={() => setIsAddingProperty(false)}
                  variant="outline"
                />
              </Stack>
            )}
          </Flex>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px">
            {properties.map((property) => renderPropertyCard(property))}
          </SimpleGrid>
          <Divider my="36px" borderColor="gray.300" />
          <Flex
            mt="45px"
            mb="20px"
            justifyContent="space-between"
            direction={{ base: "column", md: "row" }}
          >
            <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
              Transaction History
            </Text>
            <Button variant="action">See all</Button>
          </Flex>
          <SimpleGrid columns={1} gap="20px">
            <Card p="0px">
              {/* Additional transaction history entries can be added here */}
              <Flex
                align={{ sm: "flex-start", lg: "center" }}
                justify="space-between"
                w="100%"
                px="22px"
                py="18px"
              >
                <Text color={textColor} fontSize="xl" fontWeight="600">
                  Modern Villa
                </Text>
                <Text color="gray.500" fontSize="sm">
                  Miami, FL
                </Text>
                <Text color="gray.500" fontSize="sm">
                  30s ago
                </Text>
              </Flex>
              <Divider borderColor="gray.200" />
              {/* More transaction history entries can be added here */}
            </Card>
          </SimpleGrid>
        </Flex>
      </Grid>
    </Box>
  );
};

export default Portfolio;
