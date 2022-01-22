import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

const SearchSection = styled(Box)(() => ({
  width: "100%",
  height: "250px",
  display: "flex", 
  alignItems: "center",
  flexDirection: "column",
  backgroundImage: `url(https://i.ibb.co/4YyyJwj/pattern-Bg.png)`,
  padding: '24px 0',
}))

const Container = styled(Box)(() => ({
  height: '90vh',
  width: '1280px',
  minWidth: '980px',
  maxWidth: '1440px',
  boxShadow: '3px 8px 20px 3px #00000050'
}))

export { SearchSection, Container }