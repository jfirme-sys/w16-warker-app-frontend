import { Box, Button } from "@mui/material";
import Input from "components/Input";
import { LoginCard, LoginContainer } from "./components";

function Login() {
  return (
    <LoginContainer>
      <form className="form">
        <LoginCard>

          <Input
            placeholder="Email"
            onChange={() => { }}
            sx={{
              background: "#FFF",
              borderRadius: "14px",
              width: "420px",
              marginBottom: "2rem"
            }}
          />
          <Input
            placeholder="Password"
            onChange={() => { }}
            sx={{
              background: "#FFF",
              borderRadius: "14px",
              width: "420px"
            }}
          />

          <Button variant="contained" color="primary" sx={{
            marginTop: "6rem",
            background: "#2C5282"
          }}>
            Log in
          </Button>
        </LoginCard>
      </form >
    </LoginContainer >
  );
}

export default Login;
