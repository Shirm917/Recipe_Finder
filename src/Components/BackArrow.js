import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackArrow = () => {
  const navigate = useNavigate();
  return (
    <IconButton sx={{ alignSelf: "flex-start" }} onClick={() => navigate("/")}>
      <ArrowBackIcon />
    </IconButton>
  );
};

export default BackArrow;
