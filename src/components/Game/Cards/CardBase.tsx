import { Box, Typography } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import cardBackground from "assets/images/card-background.jpg";
import "./CardBase.scss";

export function CardBase({
  title,
  era,
  children,
}: {
  title?: string;
  era?: number;
  children?: ReactNode;
}): ReactElement {
  return (
    <Box
      className={"card-base"}
      sx={{
        backgroundImage: `url(${cardBackground})`,
      }}
    >
      {title && (
        <Typography variant={"h5"} textAlign={"center"}>
          {title}
          {era && ` (${era})`}
        </Typography>
      )}
      <Box className={"center-box"}>{children}</Box>
    </Box>
  );
}
//TODO: fade when card is available next trade phase using filter: grayscale(100%);

export default CardBase;
