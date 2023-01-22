


import { Box, Card, Flex, Heading, Image, Link , Text } from "@chakra-ui/react";
import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const GridProduct = ({ props }) => {
  const navigate = useNavigate();

  const handleproductpass = (id) => {
    console.log(id);
    let path = `/SingleProduct/${id}`;
    navigate(path);
  };
  let star = {
    green:
      "data:image/png;base64,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",
    lightGreen:
      "data:image/png;base64,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",
    orange:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOsAAADXCAMAAADMbFYxAAAAflBMVEX/////pQD/ngD/+fP/owD/oAD/nQD/58n//vr/7NT/+/P/tUr/+fD/tEb/05z/8+L/z5L/y4j/xXn/wnD/5MP/4b3/3rb/1qP/9ur/rjD/8d//qRr/sT3/tUj/7tj/zIz/wGv/vWP/ulr/2q3/lgD/yIH/u1z/xXj/1Z//qyUgA1z/AAAG50lEQVR4nO2d60LiMBBGt3FSyk25KgiCN1Te/wU3ssQttW2S5jLT0PN/1wk9lpgvmfz509HR0dHRETOP2AUE5IhdQDh27zvsEoKxZ3vsEoKxgQ12CaHYsYRdi8RTSGCKXUQgEjHWBLuIMPRZkiSsj11GEA4gxgoH7DKCkJzGehUSnxS+EolPCl+JxHAeK2AX4p+zwlch8QzOY4UZdinekUMVg8UuxTc99jNW1sMuxjOz3HONXeL/Q41e4pzC0Uv8efFcP7HL8Up+qJFLfKFw5BLPC891jl2QRy6HGrXEC1YYK1tgl+SN51/P9Rm7JG/wpAjHLskXy5KxLrGL8sRLUWEh8Qt2UX7Ifj9W8WAz7LK8UKJwtBKXKByrxKUKRypxqcKRSvxRprCQ+AO7MPdkxfmhhMUn8X25wkLie+zSnPNarrCQ+BW7NNdUKhyhxJUKRyhxpcLxSVyjcHQSv1UrLCR+wy7PKcNqhYXEQ+zyXDKoU1hIPMAu0CG1Ckcmca3CcUk8qldYSDzCLtEZCoWjknhcr7CQeIxdoiuUCkck8YNKYSHxA3aRjlAqHI/EK7XCQuIVdplO0FA4Gom3aoWFxFvsMl2gpXAkEn/pKCwk/sIu1AFaCschsabCUUh8q6ewkPgWu1Rr1noKC4nX2KXacqersJD4DrtYS7QVjkDio67CQuKWnwA2ULj1Ek/0FRYST7DLtWKjr7CQuNUngB9NFBYSt7k/wcTksYoH22aJjRRut8SGCrda4r3ZYxUPNlwvhmx045LMUOFviTOnFYxqkt35O3OJ6VDFYJ3+/Pfa8wQLbl4fVYArdtiPtiYzHcrwrTpLOKTYVToh1TojHoPHSn8lg9Z7zLf6uxKmDV6hdABm1G1mAe0dLIDhCaf2emzir2SatvHRQtqoW1Kvhe9j4A2PmbbP4yb+StrlcUN/Jb0WvY8BLI9JD8Zt8ZiP7Xc17lsxrwA3LRfb4LG1vxL6HrvwV7In/T6G1OkyFWWPnfkroeuxS38lE5LvY2BesgKKHjv3V3LzRM1j/nTjZ6iCCan3MaResy5KHnvzVzIg4zF/8n+qh4bHnv2V9Al4DBCoa2Y2xPaYD8MdrcSdV3iaP1SB6XEwfyV4Hof0V4LzPg70/i2C4XFwfyXZ0HSfiy0MwV/JbVCPIUXddRvSYzR/JeE8xvRXEsZjZH8l/cT/YCEh0jXev8cU/JXcep0fAyPhr8Snx2T8lWSvvjxmr3T8lfh5HxN5/xbZefAYEqqXgHkYK/aQqtA+/qkP2YOiWofwzSB7ZF/RzacJVDsA1fZUawrRXmwVzVntINrade7l+5XmdQd+Zokkv3X6fiaJJK8Am3p6rhRvFDU+ZKU5VoLnCY1Oa5tA8GS3ZtsXcwg2itFovtUMei27FF08bSDXAbSml7It5Hoxl17K4AZyVzt4XUfEHtwlPZ8rxMSuOzt4fa60rgD2NGk6j5XU1Mm4uYIZpFoxGHRpagKpzk6avfKaQqnHnkbTXTsItexV9o22hVDf6YprgNxB6EIh/1vYyNxPuAgwViqXbH4G2C9B5bpj4z1OYHw6HIjM/3em3zh82zc+Hc5o5LCmTdVOSblpCk+kFZtBa0sB3/yb3D5ujB4tjaaYK5O+QJDOfv7hzOjRphRSZ5NJ0+XxIaODTSSmTgYJM3u5TFOzF/3XGoXUWT9hhpIFwXv9bx8CqbN2wszGZX+sjMa6nxWB1FkzYQZWFVV8ae5lJJA66xXKj9UJ1N1RTw30qZNWwgyKRm8HrW8f9NRZJ2FWbxTV2qaKnjqrF0uBPWv8P8/q31rspVN1wgyg9/5cqicWyKmzclseG+omigPlTnrkDXuKhBmYSXkPCo9xU2dFwszXZhP21bpeE9TUuTZhbtKSpr7JDmrqXJcw80ZbundJzceHmjrXXEzMmk7p5jW/tYhTp+qE2bjPZo6a/qKIqXNlwmx3zqT6/Ati6lwxaQJmu4bwVuEx3tSpImHmW/uloVXFoipa6lyaMLtq/lDewgItdS5LmPnG1aL1rmxRFSt1LkmY80ui9pQtqiKlzr8XS113VCpZVEVaOv2VMLMP10t92UfRHaTUuVBG2ZKoPb8WVZmHH6KkkDDz0iVRe0aFxowoqfMs/4H7PGZ9eUAcXL79dMm/N/jR53f8Y35RFSN1ziXMqiVRe/KLqgip8/+EOcTZ+dyiKkLq/JMwszB/QP9EeuFTZ3mGGYJFSkv57RP8rPN50qS/JGqPXFQNPnU6JcxmS6L2/FtUDZ06nxJmvg69EH93WlQNnDovuektNY74vtkncOo8B47UpaWf8MCpM6R4Kfc8DTp16qWY+z4Xacil0zfcPekjCnudOjo6Ojo6Oq6Nv59tZzSbKDH5AAAAAElFTkSuQmCC",
    yellow:
      "data:image/jpeg;base64,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",
    red: "data:image/png;base64,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",
  };

  let backgrnd = props.rating >= 4.5
  ? "#038d63"
  : props.rating >= 4
  ? "green"
  : props.rating >= 3
  ? "#1fd655"
  : props.rating >= 2
  ? "orange"
  : "red"

  return (
    <Link to={`/product/${props.id}`}>

      <Card backgroundColor={"whitesmoke"}>
        <Box onClick={() => handleproductpass(props.id)} margin="0px 15px 0px 15px">
          <Image src={props.images[0]} width="100%" height="300px" />
        </Box>
        <Box margin={10} border="0px solid red">
          <Heading
            className="Productfont"
            style={{
              
              fontSize: "large",
            }}

            fontWeight={"medium"}
            color={"gray"}>
            {props.title}
          </Heading>
          <Flex>
            <Heading className="Productfont" style={{
              fontSize: "large",
            }} color={"blackAlpha.800"} mt={"5px"}>
              ₹ {props.discounted_price}
            </Heading>
            <Heading
              textDecoration={"line-through"}
              fontWeight={"medium"}
              ml={"8px"}
              mt={"6px"}
              style={{
                fontSize: "large",
              }}
              color={"grey"}>

              ₹{props.original_price}
            </Heading>
          </Flex>

          {/* <Flex
          border={"1px solid grey"}
          mt={"5px"}
          borderRadius="50%"
          width={"75px"}
          height={"40px"}>
          <Box
            width="30px"
            mt={"7px"}
            ml={"10px"}
            color={"gray"}
            fontSize={"3xl"}
            fontWeight={"bold"}>
            {props.rating}
          </Box>
          <Box width="30%">
            <Image
              mt={"9px"}
              ml={"3px"}
              src={
                props.rating >= 4.5
                  ? star.green
                  : props.rating >= 4
                  ? star.lightGreen
                  : props.rating >= 3
                  ? star.orange
                  : props.rating >= 2
                  ? star.yellow
                  : star.red
              }
            />
          </Box>
        </Flex> */}
        <Flex justifyContent={"space-between"} mt="5px">
        <Heading
            style={{
              backgroundColor: backgrnd,
              padding: "5px 10px",
              color: "white",
              fontSize: "large",
              borderRadius: "20px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "70px",
            }}>
            {props.rating} <FaStar fill="white" color="white" backgroundColor="white" />
            {/* <StarIcon /> */}
            {/* <FontAwesomeIcon icon="fa-solid fa-star" /> */}
          </Heading>
          <Text
          style={{
            fontSize: "medium",
            
          }}
        >
          1541 Reviews
        </Text>
        </Flex>
          
        </Box>
      </Card>
    </Link>
  );
};

export default GridProduct;
