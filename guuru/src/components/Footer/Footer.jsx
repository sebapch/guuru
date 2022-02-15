import * as React from 'react';
import "./Footer.css";
import { Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LogoSinTexto from "../../assets/LogoSinTexto.svg";
import { Container } from "react-bootstrap";

export default function Footer() {
    return (
        <div className='footer'>
        <Container>
            <Grid
                container
                spacing={0}
                direction="row"

                alignItems="center"
                className='grid-container'
                wrap="nowrap"
            >
             
               {/*  <div className='divider' /> */}
                <Grid item={true} xs={3} sm={3} md={2} lg={2} className='footer-div'>
                <a href="https://twitter.com/DApp_Factory" target="_blank" rel="noreferrer"><TwitterIcon sx={{ color: "white", fontSize: '3rem', padding: '0 1rem', '&:hover': { color: '#8b79b3'} }} /></a>
                </Grid>
                <Grid item={true} xs={3} sm={3} md={2} lg={2} className='footer-div tercero'>
                    <a href="https://twitter.com/DApp_Factory" target="_blank" rel="noreferrer"><TwitterIcon sx={{ color: "white", fontSize: '3rem', padding: '0 1rem', '&:hover': { color: '#8b79b3'} }} /></a>
                </Grid>
               
                <Grid item={true} xs={3} sm={3} md={2} lg={2} className='footer-div primero'>
                    <a href="https://twitter.com/DApp_Factory" target="_blank" rel="noreferrer"><TwitterIcon sx={{ color: "white", fontSize: '3rem', padding: '0 1rem', '&:hover': { color: '#8b79b3'} }} /></a>
                </Grid>
                
                <Grid item={true} xs={3} sm={3} md={2} lg={2} className='footer-div primero'>
                    <a href="https://www.instagram.com/dappsfactory/" target="_blank" rel="noreferrer"><InstagramIcon sx={{ color: "white", fontSize: '3rem', padding: '0 1rem', '&:hover': { color: '#8b79b3'} }} /></a>
                </Grid>
                
                <Grid item={true} xs={3} sm={3} md={2} lg={2} className='footer-div primero'>
                    <a href="https://www.instagram.com/dappsfactory/" target="_blank" rel="noreferrer"><InstagramIcon sx={{ color: "white", fontSize: '3rem', padding: '0 1rem', '&:hover': { color: '#8b79b3'} }} /></a>
                </Grid>
            </Grid>
        </Container>
    </div>

    );
}

