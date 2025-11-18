"use client";

import * as React from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Link,
  InputAdornment,
  IconButton,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type LoginFormProps = {
  action: (formData: FormData) => void | Promise<void>;
};

export default function LoginForm({ action }: LoginFormProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Box
      component="main"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-600 via-slate-950 to-emerald-500 px-2"
    >
      <Container maxWidth="sm">
        <Paper
          elevation={10}
          sx={{
            borderRadius: 4,
            p: { xs: 3, sm: 4 },
            backdropFilter: "blur(18px)",
            backgroundColor: "#0f172afa",
            border: "1px solid rgba(148,163,184,0.4)",
          }}
        >
          <Stack spacing={3}>
            {/* Header */}
            <Box>
              <Typography
                variant="overline"
                className="tracking-widest text-blue-400"
              >
                FINANCE TRACKER
              </Typography>
              <Typography
                variant="h4"
                component="h1"
                className="font-semibold mt-2"
              >
                Welcome back
              </Typography>
              <Typography
                variant="body2"
                className="text-slate-400 mt-2"
              >
                Sign in to see your spending, subscriptions and AI insights.
              </Typography>
            </Box>

            {/* Form */}
            <Box component="form" action={action} noValidate className="mt-4">
              <Stack spacing={2.5}>
                <TextField
                  label="Email"
                  name="email"
                  id="email"
                  type="email"
                  autoComplete="email"
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& input:-webkit-autofill": {
                      WebkitBoxShadow: "0 0 0 1000px #0f172afa inset",
                      WebkitTextFillColor: "#f1f5f9",
                      transition: "background-color 5000s ease-in-out 0s",
                    },
                    "& input:-webkit-autofill:hover": {
                      WebkitBoxShadow: "0 0 0 1000px #0f172afa inset",
                      WebkitTextFillColor: "#f1f5f9",
                    },
                    "& input:-webkit-autofill:focus": {
                      WebkitBoxShadow: "0 0 0 1000px #0f172afa inset",
                      WebkitTextFillColor: "#f1f5f9",
                    },
                  }}
                />

                <TextField
                  label="Password"
                  name="password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon fontSize="small" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          onClick={() => setShowPassword((prev) => !prev)}
                          aria-label={
                            showPassword ? "Hide password" : "Show password"
                          }
                        >
                          {showPassword ? (
                            <VisibilityOff fontSize="small" />
                          ) : (
                            <Visibility fontSize="small" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& input:-webkit-autofill": {
                      WebkitBoxShadow: "0 0 0 1000px #0f172afa inset",
                      WebkitTextFillColor: "#f1f5f9",
                      transition: "background-color 5000s ease-in-out 0s",
                    },
                    "& input:-webkit-autofill:hover": {
                      WebkitBoxShadow: "0 0 0 1000px #0f172afa inset",
                      WebkitTextFillColor: "#f1f5f9",
                    },
                    "& input:-webkit-autofill:focus": {
                      WebkitBoxShadow: "0 0 0 1000px #0f172afa inset",
                      WebkitTextFillColor: "#f1f5f9",
                    },
                  }}
                />

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  className="mt-2"
                >
                  <Typography variant="body2" className="text-slate-400">
                    Use your registered email and password.
                  </Typography>
                  <Link
                    href="#"
                    underline="hover"
                    className="text-xs text-blue-300"
                  >
                    Forgot password?
                  </Link>
                </Stack>

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  className="mt-4 rounded-full normal-case font-semibold py-3"
                >
                  Continue
                </Button>
              </Stack>
            </Box>

            {/* Footer */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", sm: "center" }}
            >
              <Typography variant="caption" className="text-slate-400">
                New here?{" "}
                <Link href="/register" underline="hover">
                  Create account
                </Link>
              </Typography>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
