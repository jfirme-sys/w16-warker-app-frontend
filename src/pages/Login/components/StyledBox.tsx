import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

const LoginContainer = styled(Box)(() => ({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

const LoginCard = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '6rem 16px',
  background: '#1e1f29',
  borderRadius: '14px',
  boxShadow: '6px 6px 10px 1px #000'
}))

export { LoginContainer, LoginCard }