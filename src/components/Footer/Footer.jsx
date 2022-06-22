import {
    Box,
    Container,
    Image,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import SocialButton from "../Buttons/SocialButton";
import CopyButton from "../Buttons/CopyButton";
import { socialLinks } from "../../../data/pageLinks";

import styles from "./Footer.module.scss";

const Footer = ({ themes }) => {
    const [lightMode, darkMode] = themes;

    return (
        <Box
            className={styles.socialIconsBox}
            bg={useColorModeValue(lightMode, darkMode)}
            color={useColorModeValue(darkMode, lightMode)}
        >
            <Container as={Stack} maxW={"6xl"} className={styles.container}>
                <Stack direction={"row"} spacing={6}>
                    <CopyButton
                        label={"Mail"}
                        href={socialLinks.gmail}
                        themes={themes}
                    >
                        <MdEmail></MdEmail>
                    </CopyButton>
                    <SocialButton
                        label={"Github"}
                        href={socialLinks.gitHub}
                        themes={themes}
                    >
                        <BsGithub />
                    </SocialButton>
                    <SocialButton
                        label={"LinkedIn"}
                        href={socialLinks.linkedIn}
                        themes={themes}
                    >
                        <BsLinkedin />
                    </SocialButton>
                </Stack>
                <Box className={styles.FooterBox}>
                    <Image
                        className={styles.FooterImg}
                        src="/assets/default.png"
                        alt="Wolf Logo"
                    />
                    <Text>{new Date().getFullYear()} Frantisek Klucar</Text>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
