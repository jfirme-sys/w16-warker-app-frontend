import { Box, OutlinedInput } from "@mui/material";

interface InputProps {
  placeholder: string;
  onChange: () => void;
  sx?: any;
}

function Input({ placeholder, onChange, sx }: InputProps) {

  return (
    <Box data-testid="input-box" sx={{ display: "flex", alignItems: "center" }}>
      <OutlinedInput
        data-testid="input"
        sx={sx}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Box>
  );
};

export default Input;
