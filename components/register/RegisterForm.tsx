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

type RegisterFormProps = {
  action: (formData: FormData) => void | Promise<void>;
};

export default function RegisterForm({ action }: RegisterFormProps) {
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
                Create account
              </Typography>
              <Typography variant="body2" className="text-slate-400 mt-2">
                Start tracking your spending, subscriptions and get AI insights.
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
                  autoComplete="new-password"
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

                <TextField
                  label="Confirm Password"
                  name="confirm-password"
                  id="confirm-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
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

                <Typography variant="body2" className="text-slate-400 mt-2">
                  Password must be at least 6 characters long.
                </Typography>

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  className="mt-4 rounded-full normal-case font-semibold py-3"
                >
                  Create account
                </Button>
              </Stack>
            </Box>

            {/* Footer */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="caption" className="text-slate-400">
                Already have an account?{" "}
                <Link href="/login" underline="hover">
                  Sign in
                </Link>
              </Typography>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
