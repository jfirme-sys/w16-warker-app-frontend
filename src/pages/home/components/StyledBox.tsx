import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

const Container = styled(Box)(() => ({
  height: '90vh',
  width: '90vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: '980px',
  maxWidth: '1440px',
  boxShadow: '3px 4px 20px 1px #00000050',
  borderRadius: '14px'
}))

export { Container }