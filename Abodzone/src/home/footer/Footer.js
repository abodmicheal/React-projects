import React from "react";
import "./Footer.css";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <div className="footer">
      <Box>
        <Container>
          <Row>
            <Column>
              <Heading>Get to Know Us</Heading>
              <FooterLink href="#">Our Company</FooterLink>
              <FooterLink href="#">Advertise With Us</FooterLink>
              <FooterLink href="#">Sell With Us</FooterLink>
            </Column>
            <Column>
              <Heading>Services</Heading>
              <FooterLink href="#">Our Ads</FooterLink>
              <FooterLink href="#">Terms of Use</FooterLink>
              <FooterLink href="#">Tax Program</FooterLink>
              <FooterLink href="#">Privacy & Security</FooterLink>
            </Column>
            <Column>
              <Heading>Customer Services</Heading>
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">Returns</FooterLink>
              <FooterLink href="#">Store Pickups</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="https://dev.to/abodmicheal">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>Dev</span>
                </i>
              </FooterLink>
              <FooterLink href="https://www.instagram.com/abodmedia/">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>Instagram</span>
                </i>
              </FooterLink>
              <FooterLink href="https://twitter.com/abod_media">
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: "10px" }}>Twitter</span>
                </i>
              </FooterLink>
              <FooterLink href="https://github.com/abodmicheal">
                <i className="fab fa-youtube">
                  <span style={{ marginLeft: "10px" }}>GitHub</span>
                </i>
              </FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
      <div className="footer_seperator"></div>
      <div className="footer_end">
        © {new Date().getFullYear()} Store. All Rights Reserved.
      </div>
    </div>
  );
};
export default Footer;
