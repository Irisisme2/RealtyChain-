/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdHome,
  MdTimeline,
  MdTrendingUp,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
 <SimpleGrid columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }} gap='20px' mb='20px'>
    <MiniStatistics
      startContent={
        <IconBox
          w='56px'
          h='56px'
          bg={boxBg}
          icon={<Icon w='32px' h='32px' as={MdAttachMoney} color={brandColor} />}
        />
      }
      name='Total Portfolio Value'
      value='$350,000'
    />
    <MiniStatistics
      startContent={
        <IconBox
          w='56px'
          h='56px'
          bg={boxBg}
          icon={<Icon w='32px' h='32px' as={MdHome} color={brandColor} />}
        />
      }
      name='Individual Property Values'
      value='$50,000'
    />
    <MiniStatistics
      startContent={
        <IconBox
          w='56px'
          h='56px'
          bg={boxBg}
          icon={<Icon w='32px' h='32px' as={MdTimeline} color={brandColor} />}
        />
      }
      name='Portfolio Value Changes'
      value='Daily: +2%'
    />
    <MiniStatistics
      endContent={
        <Flex me='-16px' mt='10px'>
          <FormLabel htmlFor='balance'>
            <Avatar src='https://bit.ly/broken-link' /> {/* Example avatar */}
          </FormLabel>
          <Select
            id='balance'
            variant='mini'
            mt='5px'
            me='0px'
            defaultValue='usd'
          >
            <option value='usd'>USD</option>
            <option value='eur'>EUR</option>
            <option value='gba'>GBA</option>
          </Select>
        </Flex>
      }
      name='Tokens'
      value='700000'
    />
    <MiniStatistics
      startContent={
        <IconBox
          w='56px'
          h='56px'
          bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
          icon={<Icon w='28px' h='28px' as={MdTrendingUp} color='white' />}
        />
      }
      name='Value Changes'
      value='Daily: +$200'
    />
    <MiniStatistics
      startContent={
        <IconBox
          w='56px'
          h='56px'
          bg={boxBg}
          icon={<Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />}
        />
      }
      name='Number of Investments'
      value='15'
    />
  </SimpleGrid>



      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <TotalSpent />
        <WeeklyRevenue />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <DailyTraffic />
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
}
