import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube,FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FooterWrap,
    FooterContainer,
    FooterLinkItems,
    FooterLink,
    FooterLinksContainer,
    FooterLinkTitle,
    FooterLinkWrapper,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink 
} from './FooterElements';
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
      }
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/" >Testimonials</FooterLink>
                            <FooterLink to="/" >How it works</FooterLink>
                            <FooterLink to="/" >Careers</FooterLink>
                            <FooterLink to="/" >Inventors</FooterLink>
                            <FooterLink to="/" >Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/" >Support</FooterLink>
                            <FooterLink to="/" >Contact</FooterLink>
                            <FooterLink to="/" >Destinations</FooterLink>
                            <FooterLink to="/" >Sponsorships</FooterLink>
                    </FooterLinkItems>
                </FooterLinkWrapper>

                <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/" >Ambassadors</FooterLink>
                            <FooterLink to="/" >Submit Vedio</FooterLink>
                            <FooterLink to="/" >Agency</FooterLink>
                            <FooterLink to="/" >Influencer</FooterLink>
                    </FooterLinkItems>
                    {/* <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/" >Instagram</FooterLink>
                            <FooterLink to="/" >Facebook</FooterLink>
                            <FooterLink to="/" >Youtube</FooterLink>
                            <FooterLink to="/" >Twitter</FooterLink>        
                    </FooterLinkItems> */}
                </FooterLinkWrapper>
            </FooterLinksContainer>
            <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to = '/' onClick={toggleHome}>
                    dolla
                </SocialLogo>
                <WebsiteRights>dolla © {new  Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
                <SocialIconLink  href="/"  target="_blank"
                aria-label="Facebook">
                    <FaFacebook/>
                </SocialIconLink>
                <SocialIconLink  href="/"  target="_blank"
                aria-label=" Instagram">
                    <FaInstagram/>
                </SocialIconLink>
                <SocialIconLink  href="/"  target="_blank"
                aria-label="Youtube">
                    <FaYoutube/>
                </SocialIconLink>
                <SocialIconLink  href="/"  target="_blank"
                aria-label="Twitter">
                    <FaTwitter/>
                </SocialIconLink>
                <SocialIconLink  href="/"  target="_blank"
                aria-label="Linkedin">
                    <FaLinkedin/>
                </SocialIconLink>
            </SocialIcons>
            </SocialMediaWrap>
            </SocialMedia>  
        </FooterWrap>
    </FooterContainer>
    
   )
}

export default Footer;