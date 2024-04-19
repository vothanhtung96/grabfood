import React, { useState } from "react";

import { Box, Text, VStack, Flex, Image, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import "./AddressForm.css";
import { Link } from "react-router-dom";

const AddressForm = ({ onSearchClick }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearchClick = () => {
    onSearchClick(inputValue);
  };

  return (
    <Flex
      className="FormContainer"
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box className="Form" zIndex={100} position={"relative"} width={"100%"}>
        <VStack
          width={{ base: "100%", md: "40%" }}
          gap={10}
          padding={"40px 24px"}
          fontWeight={"bold"}
          alignItems={"flex-start"}
          bg={"white"}
          borderRadius={4}
          border={"1px solid #f0efef"}
        >
          <Text fontSize={20}>Xin chào </Text>
          <Text fontSize={30}> Hôm nay chúng tôi nên giao đồ ăn cho bạn ở đâu?</Text>

          <Flex className="addressArea" w={"100%"}>
            <Flex fontSize={25} w={"20%"} justifyContent={"center"}>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#ee2b2b" }}
              />
            </Flex>
            <Box height={25} w={"60%"}>
              <input
                style={{ width: "100%", border: "none", outline: "none" }}
                placeholder="Nhập địa chỉ của bạn"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </Box>
            <Box w={"20%"}>
              <Image
                src="https://food.grab.com/static/images/icons/icon-geo-button.svg"
                w={"100%"}
                h={30}
              />
            </Box>
          </Flex>
          <Link style={{ width: "100%" }} to={"/restaurants"}>
            <Button
              w={"100%"}
              h={45}
              borderRadius={8}
              border={"none"}
              bg={"#00B14F"}
              fontSize={20}
              fontWeight={"bold"}
              color={"White"}
              cursor={"pointer"}
              onClick={handleSearchClick}
            >
              Tìm kiếm
            </Button>
          </Link>
        </VStack>
      </Box>
    </Flex>
  );
};

export default AddressForm;
