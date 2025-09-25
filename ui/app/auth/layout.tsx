import { Box } from "@mui/material";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box className="h-screen flex items-center justify-center">{children}</Box>
  );
};

export default layout;
