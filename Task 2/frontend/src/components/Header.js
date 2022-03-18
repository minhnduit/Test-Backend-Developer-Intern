import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import styled from "styled-components";


const Wrapper = styled(Container)`
    padding-left: 25px;
    padding-right: 25px;
    display: flex;
`;

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top" style={{ marginBottom: '10px', display: 'block' }}>
            <Wrapper>
                <Navbar.Brand href="/">Task 2</Navbar.Brand>
                
            </Wrapper>
        </Navbar >
    );
}

export default Header;