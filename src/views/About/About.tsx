import { Container } from "@chakra-ui/react";

import PersonalDescription from "../../components/PersonalDescription/PersonalDescription";

const About = () => {
    return (
        <Container maxW={"7xl"} px={"20"} py={"5"}>
            <PersonalDescription />
        </Container>
    );
};

export default About;
