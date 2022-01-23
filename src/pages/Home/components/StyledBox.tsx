import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

const Container = styled(Box)(() => ({
  height: '90vh',
  width: '1280px',
  minWidth: '980px',
  maxWidth: '1440px',
  boxShadow: '3px 8px 20px 3px #00000050'
}))

export { Container }