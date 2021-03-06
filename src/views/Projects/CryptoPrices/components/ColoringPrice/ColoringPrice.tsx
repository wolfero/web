import { Box, Td } from "@chakra-ui/react";

import styles from "./ColoringPrice.module.scss";
import { ColoringPriceProps } from "../../model/ColoringPrice/coloringPrice";

const ColoringPrice = ({ price }: ColoringPriceProps) => {
    if (price < 0) {
        return (
            <Td textAlign={"center"}>
                <Box className={styles.PriceLoss}>{price}%</Box>
            </Td>
        );
    }

    return (
        <Td textAlign={"center"}>
            <Box className={styles.PriceGain}>{price}%</Box>
        </Td>
    );
};
export default ColoringPrice;
