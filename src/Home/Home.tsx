import React from "react"
import { Box, Button, Grid, IconButton } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from "react-router-dom";
import "./Home.css"

const Home = () => {
  const navigate = useNavigate();

  const handleInsta = () => {
    window.open("https://instagram.com/hyodomachine");
  }

  const handleBooking = () => {
    navigate("/form")
  }


  const Footer = () => (
    <Grid container className="footer">
      <Grid item xs={6}>
        <IconButton onClick={() => handleInsta()}><InstagramIcon sx={{ fontSize: '2rem' }} /></IconButton>
      </Grid>
    </Grid>
  )

  return (
    <Box sx={{ height: "100vh" }}>
      <div id="circle" >
        <svg xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="100vw" height="90vh" viewBox="0 0 200 200"
          enable-background="new 0 0 200 200" xmlSpace="preserve">
          <defs>
            <path id="circlePath" d=" M 100, 100 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
          </defs>
          <circle cx="100" cy="100" r="75" fill="none" />
          <g>
            <use href="#circlePath" fill="none" />
            <text fill="#000">
              <textPath href="#circlePath">Hyodomachine 🫵 Hyodomachine 🫵 Hyodomachine 🫵</textPath>
            </text>
          </g>
        </svg>
      </div>
      <div className="start-div">
        <Button onClick={() => handleBooking()} className="start-button" variant="contained">Booking 🗝</Button>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Box>
  )
}

export default Home 