/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box } from "@theme-ui/components";

export const Section: React.SFC = ({ children, ...props }) => (
  <Box {...props}>
    <Box
      sx={{
        my: 5,
        mx: "auto",
        maxWidth: 940,
        textAlign: "center",
      }}
    >
      {children}
    </Box>
  </Box>
);
