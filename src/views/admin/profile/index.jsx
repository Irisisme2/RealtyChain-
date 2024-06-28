import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Card from "components/card/Card.js";

// Sample transaction data
const sampleTransactions = [
  {
    id: 1,
    name: "Luxury Apartment",
    location: "New York, NY",
    date: "2023-01-15",
    price: 1200000,
    type: "purchase",
  },
  {
    id: 2,
    name: "Suburban House",
    location: "Los Angeles, CA",
    date: "2023-02-20",
    price: 850000,
    type: "sale",
  },
  {
    id: 3,
    name: "Downtown Office Space",
    location: "Chicago, IL",
    date: "2023-03-10",
    price: 3500000,
    type: "purchase",
  },
  {
    id: 4,
    name: "Cozy Cottage",
    location: "Austin, TX",
    date: "2023-04-05",
    price: 450000,
    type: "sale",
  },
  {
    id: 5,
    name: "Modern Villa",
    location: "Miami, FL",
    date: "2023-05-25",
    price: 2300000,
    type: "purchase",
  },
  {
    id: 6,
    name: "Country Estate",
    location: "Nashville, TN",
    date: "2023-06-30",
    price: 1750000,
    type: "sale",
  },
];

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

const Transactions = () => {
  const [transactions, setTransactions] = useState(sampleTransactions);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle filter type change
  const handleFilterTypeChange = (e) => {
    setFilterType(e.target.value);
  };

  // Filtered transactions based on search query and filter type
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearchQuery =
      transaction.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilterType =
      filterType === "all" || transaction.type === filterType;
    return matchesSearchQuery && matchesFilterType;
  });

  // Function to render transaction card
  const renderTransactionCard = (transaction) => {
    const cryptoPrices = convertToCrypto(transaction.price);
    return (
      <Card key={transaction.id} p="20px">
        <Flex justify="space-between" mb="20px">
          <Text fontSize="xl" fontWeight="bold">
            {transaction.name}
          </Text>
          <Text color="gray.500">{transaction.date}</Text>
        </Flex>
        <Flex justify="space-between" mb="20px">
          <Text>{transaction.location}</Text>
          <Text>${transaction.price.toLocaleString()}</Text>
        </Flex>
        <Flex justify="space-between">
          <Text>BTC {cryptoPrices.btc}</Text>
          <Text>ETH {cryptoPrices.eth}</Text>
        </Flex>
      </Card>
    );
  };

  return (
    <Box pt={{ base: "120px", md: "80px", xl: "80px" }}>
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
            <Text fontSize="2xl" ms="24px" fontWeight="700">
              Transactions
            </Text>
          </Flex>
          <Flex mb="20px" justify="space-between">
            <InputGroup maxW="400px">
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input
                type="text"
                placeholder="Search transactions..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </InputGroup>
            <Select
              maxW="200px"
              value={filterType}
              onChange={handleFilterTypeChange}
            >
              <option value="all">All Transactions</option>
              <option value="purchase">Purchases</option>
              <option value="sale">Sales</option>
            </Select>
          </Flex>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap="20px">
            {filteredTransactions.map((transaction) =>
              renderTransactionCard(transaction)
            )}
          </SimpleGrid>
        </Flex>
      </Grid>
    </Box>
  );
};

export default Transactions;
