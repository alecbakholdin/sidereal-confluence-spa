import { Box } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import cardBackground from "assets/images/card-background.jpg";
import "./CardBase.scss";

export function CardBase({ children }: { children?: ReactNode }): ReactElement {
  return (
    <Box
      className={"card-base"}
      sx={{
        backgroundImage: `url(${cardBackground})`,
      }}
    >
      {children}
    </Box>
  );
}

export default CardBase;