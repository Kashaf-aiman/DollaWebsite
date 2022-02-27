import React from 'react'
import { Button } from '../ButtonElement'
import {InfoContainer,
    InfoWrapper,
    InfoRow,
    Heading,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Subtitle,
    BtnWrap,
    Img,
    ImgWrap
} from './InfoElements'


const InfoSection = ({
     lightBg,
     primary,
     dark,
     id, 
     imgStart, 
     topLine, 
     description,
     lightText,
     headline,
     buttonLabel,
     darkText,
     img,
     alt  }) => {
  return (
    <>
        <InfoContainer lightBg= {lightBg} id={id} >
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText = {lightText}>{headline} </Heading>
                        <Subtitle darkText = {darkText}>{description}</Subtitle>
                        <BtnWrap>
                            <Button 
                            to ='home'
                            smooth={true}
                            offset={-80}
                            duration={500}
                            spy={true}
                            exact="true"
                            primary={primary ? 1 : 0}
                            dark = {dark ? 1 : 0}
                            > {buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap >
                    <Img src={img} alt={alt}/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  );
};

export default InfoSection