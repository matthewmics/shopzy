import { Button, Link, Stack, TextField } from "@mui/material";
import React from "react";
import NextLink from "next/link";

const page = () => {
  return (
    <Stack spacing={2} className="w-full max-w-xs">
      <TextField label={"Email"} variant={"outlined"} type="email"></TextField>
      <TextField
        label={"Password"}
        variant={"outlined"}
        type="password"
      ></TextField>
      <Button variant={"contained"}>Login</Button>
      <Link component={NextLink} href="/auth/signup" className="self-center">
        Signup
      </Link>
    </Stack>
  );
};

export default page;
