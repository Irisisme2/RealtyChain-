import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

// Importowanie istniejących komponentów i danych
import Banner from "views/admin/marketplace/components/Banner";
import HistoryItem from "views/admin/marketplace/components/HistoryItem";
import Property from "views/admin/marketplace/components/Property";
import Card from "components/card/Card.js";

// Importowanie obrazów nieruchomości
import Property1 from "assets/img/properties/Property1.png";
import Property2 from "assets/img/properties/Property2.png";
import Property3 from "assets/img/properties/Property3.png";
import Property4 from "assets/img/properties/Property4.png";
import Property5 from "assets/img/properties/Property5.png";
import Property6 from "assets/img/properties/Property6.png";

// Importowanie awatarów
import Avatar1 from "assets/img/avatars/avatar1.png";
import Avatar2 from "assets/img/avatars/avatar2.png";
import Avatar3 from "assets/img/avatars/avatar3.png";
import Avatar4 from "assets/img/avatars/avatar4.png";

// Konwersje do kryptowalut
const conversionRates = {
  BTC: 0.000025, // Przykładowe kursy wymiany, 1 USD = 0.000025 BTC
  ETH: 0.0004,   // Przykładowe kursy wymiany, 1 USD = 0.0004 ETH
  XRP: 0.005,    // Przykładowe kursy wymiany, 1 USD = 0.005 XRP
  LTC: 0.005,    // Przykładowe kursy wymiany, 1 USD = 0.005 LTC
  BCH: 0.01,     // Przykładowe kursy wymiany, 1 USD = 0.01 BCH
  BNB: 0.1       // Przykładowe kursy wymiany, 1 USD = 0.1 BNB
};

// Funkcja do konwersji ceny do kryptowaluty
const convertToCrypto = (usdPrice, crypto) => {
  return (usdPrice * conversionRates[crypto]).toFixed(6);
};

export default function Marketplace() {
  // Ustawienia kolorów Chakra
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");

  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Główne pola */}
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}
      >
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}
        >
          <Banner />
          <Flex direction="column">
            <Flex
              mt="45px"
              mb="20px"
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}
            >
              <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                Available Properties
              </Text>
              <Flex
                align="center"
                me="20px"
                ms={{ base: "24px", md: "0px" }}
                mt={{ base: "20px", md: "0px" }}
              >
                <Link
                  color={textColorBrand}
                  fontWeight="500"
                  me={{ base: "34px", md: "44px" }}
                  to="#apartments"
                >
                  Apartments
                </Link>
                <Link
                  color={textColorBrand}
                  fontWeight="500"
                  me={{ base: "34px", md: "44px" }}
                  to="#houses"
                >
                  Houses
                </Link>
                <Link
                  color={textColorBrand}
                  fontWeight="500"
                  me={{ base: "34px", md: "44px" }}
                  to="#commercial"
                >
                  Commercial
                </Link>
                <Link color={textColorBrand} fontWeight="500" to="#land">
                  Land
                </Link>
              </Flex>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px">
              {/* Komponenty Property z informacjami o tokenach */}
              <Property
                name="Luxury Apartment"
                location="New York, NY"
                agents={[Avatar1, Avatar2, Avatar3, Avatar4]}
                image={Property1}
                price="2.5 BTC"
                tokenPrice={convertToCrypto(2.5, "BTC")}
                details="#"
              />
              <Property
                name="Suburban House"
                location="Los Angeles, CA"
                agents={[Avatar1, Avatar2, Avatar3, Avatar4]}
                image={Property2}
                price="15 ETH"
                tokenPrice={convertToCrypto(15, "ETH")}
                details="#"
              />
              <Property
                name="Downtown Office Space"
                location="Chicago, IL"
                agents={[Avatar1, Avatar2, Avatar3, Avatar4]}
                image={Property3}
                price="1,500 XRP"
                tokenPrice={convertToCrypto(1500, "XRP")}
                details="#"
              />
            </SimpleGrid>
            <Text
              mt="45px"
              mb="36px"
              color={textColor}
              fontSize="2xl"
              ms="24px"
              fontWeight="700"
            >
              Recently Added
            </Text>
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              gap="20px"
              mb={{ base: "20px", xl: "0px" }}
            >
              <Property
                name="Cozy Cottage"
                location="Austin, TX"
                agents={[Avatar1, Avatar2, Avatar3, Avatar4]}
                image={Property4}
                price="5 LTC"
                tokenPrice={convertToCrypto(5, "LTC")}
                details="#"
              />
              <Property
                name="Modern Villa"
                location="Miami, FL"
                agents={[Avatar1, Avatar2, Avatar3, Avatar4]}
                image={Property5}
                price="10 BCH"
                tokenPrice={convertToCrypto(10, "BCH")}
                details="#"
              />
              <Property
                name="Country Estate"
                location="Nashville, TN"
                agents={[Avatar1, Avatar2, Avatar3, Avatar4]}
                image={Property6}
                price="100 BNB"
                tokenPrice={convertToCrypto(100, "BNB")}
                details="#"
              />
            </SimpleGrid>
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}
        >
          {/* Tutaj znajduje się komponent History */}
          <Card p="0px">
            <Flex
              align={{ sm: "flex-start", lg: "center" }}
              justify="space-between"
              w="100%"
              px="22px"
              py="18px"
            >
              <Text color={textColor} fontSize="xl" fontWeight="600">
                History
              </Text>
              <Button variant="action">See all</Button>
            </Flex>
            {/* HistoryItems tutaj */}
            <HistoryItem
              name="Modern Villa"
              location="Miami, FL"
              date="30s ago"
              image={Property5}
              price="15 ETH"
            />
            <HistoryItem
              name="Luxury Apartment"
              location="New York, NY"
              date="58s ago"
              image={Property1}
              price="2.5 BTC"
            />
            <HistoryItem
              name="Suburban House"
              location="Los Angeles, CA"
              date="1m ago"
              image={Property2}
              price="15 ETH"
            />
            <HistoryItem
              name="Cozy Cottage"
              location="Austin, TX"
              date="1m ago"
              image={Property4}
              price="5 LTC"
            />
            <HistoryItem
              name="Downtown Office Space"
              location="Chicago, IL"
              date="2m ago"
              image={Property3}
              price="1,500 XRP"
            />
            <HistoryItem
              name="Country Estate"
              location="Nashville, TN"
              date="3m ago"
              image={Property6}
              price="100 BNB"
            />
          </Card>
        </Flex>
      </Grid>
    </Box>
  );
}
