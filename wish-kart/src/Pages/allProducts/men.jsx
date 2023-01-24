import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Heading,
  Hide,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
  MenuOptionGroup,
  Show,
  SimpleGrid,
  Stack,
  Checkbox as ChakraCheckBox,
} from "@chakra-ui/react";
import { Checkbox, Pagination } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GridProduct from "../../components/allProducts/gridProduct.jsx";
import Loader from "../../components/Loader.jsx";
import { getProducts } from "../../redux/Products/product.action.js";

const Men = () => {
  let { loading, error, data } = useSelector((store) => store.ProductsManager);
  let dispatch = useDispatch();
  let [filtCred, setFiltCred] = useState({});
  // const [page, setPage] = useState(1)
  // const [paginationData, setPaginationData] = useState([])

  let menData = data.filter((el) => el.category == "Mens Top Were");
  console.log(menData);

  let filtData = menData.filter(
    (el) =>
      (filtCred.above100 ? el.discounted_price > 1000 : "") ||
      (filtCred.a1000_500
        ? el.discounted_price < 1000 && el.discounted_price > 500
        : "") ||
      (filtCred.a500_300
        ? el.discounted_price < 500 && el.discounted_price > 300
        : "") ||
      (filtCred.below300 ? el.discounted_price < 300 : "")
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (data.length == 0) {
      getProducts(dispatch);
    }
    // setpageData()                               // part of pagination
  }, []);
  // console.log(filtData);

  const check = (e) => {
    // console.log(e.target)

    const { name, checked } = e.target;
    setFiltCred({
      ...filtCred,
      [name]: checked,
    });
    // setpageData()                             //part of pagination
  };
  if (loading) {
    <Loader />;
  }

  return (
    <Box mt={["100px", "100px", "200px"]}>
      <Box mb={"20px"} ml={"20px"}>
        <Show below="md">
          <Menu>
            <MenuButton as={Button} fontSize={"16px"} padding={"10px"}>
              Filter
            </MenuButton>
            <MenuList>
              <MenuOptionGroup title="Price">
                <Stack direction={"column"} ml="15%">
                  <ChakraCheckBox
                    onChange={(e) => check(e)}
                    name="above100"
                    size={"lg"}>
                    Above 1000
                  </ChakraCheckBox>
                  <ChakraCheckBox
                    onChange={(e) => check(e)}
                    name="a1000_500"
                    size={"lg"}>
                    1000 - 500
                  </ChakraCheckBox>
                  <ChakraCheckBox
                    onChange={(e) => check(e)}
                    name="a500_300"
                    size={"lg"}>
                    500 - 300
                  </ChakraCheckBox>
                  <ChakraCheckBox
                    onChange={(e) => check(e)}
                    name="below300"
                    size={"lg"}>
                    Below 300
                  </ChakraCheckBox>
                </Stack>
              </MenuOptionGroup>
              <MenuDivider />
              <MenuOptionGroup title="Category">
                <Stack direction={"column"} ml="15%">
                  <ChakraCheckBox
                    onChange={(e) => check(e)}
                    name="ratingTop"
                    size={"lg"}>
                    Above 4.5
                  </ChakraCheckBox>
                  <ChakraCheckBox
                    onChange={(e) => check(e)}
                    name="ratingTop2"
                    size={"lg"}>
                    4.5 - 4
                  </ChakraCheckBox>
                  <ChakraCheckBox
                    onChange={(e) => check(e)}
                    name="a4_3"
                    size={"lg"}>
                    4 - 3
                  </ChakraCheckBox>
                  <ChakraCheckBox
                    onChange={(e) => check(e)}
                    name="a3-2"
                    size={"lg"}>
                    3 - 2
                  </ChakraCheckBox>
                  <ChakraCheckBox
                    onChange={(e) => check(e)}
                    name="below2"
                    size={"lg"}>
                    below 2
                  </ChakraCheckBox>
                </Stack>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </Show>
      </Box>
      <Flex>
        <Hide below="md" width={"20%"}>
          <Heading>Filter</Heading>
          <Box>
            <Accordion>
              <AccordionItem>
                <AccordionButton>
                  <Box as="span" flex="1" fontSize={20} textAlign="left">
                    {" "}
                    Price
                  </Box>
                </AccordionButton>
                {/* <AccordionPanel> */}
                <Stack direction={"column"} ml="5%">
                  <Checkbox
                    onChange={(e) => check(e)}
                    name="above100"
                    size={"lg"}
                    style={{ marginLeft: "5px" }}>
                    Above 1000
                  </Checkbox>
                  <Checkbox
                    onChange={(e) => check(e)}
                    name="a1000_500"
                    size={"lg"}>
                    1000 - 500
                  </Checkbox>
                  <Checkbox
                    onChange={(e) => check(e)}
                    name="a500_300"
                    size={"lg"}>
                    500 - 300
                  </Checkbox>
                  <Checkbox
                    onChange={(e) => check(e)}
                    name="below300"
                    size={"lg"}>
                    Below 300
                  </Checkbox>
                </Stack>
                {/* </AccordionPanel> */}
              </AccordionItem>
            </Accordion>
          </Box>
        </Hide>
        <Box style={{ width: "90%", margin: "auto" }} border="0px solid red">
          <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
            {(filtData.length == 0 ? menData : filtData).map((el) => {
              return <GridProduct key={el.id} props={el} />;
            })}
          </SimpleGrid>
        </Box>
      </Flex>
      {/* <Box textAlign={"center"} marginTop="50px">
        <Pagination page={page} changePage={changePage} data={filtData.length==0?menData:filtData} />
        </Box> */}
    </Box>
  );
};

export default Men;
