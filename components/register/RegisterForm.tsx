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
import { useTheme } from "@/contexts/ThemeContext";

type RegisterFormProps = {
  action: (formData: FormData) => void | Promise<void>;
};

export default function RegisterForm({ action }: RegisterFormProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const { mode } = useTheme();

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        background: mode === 'dark' 
          ? "linear-gradient(135deg, #2563eb 0%, #0f172a 50%, #059669 100%)"
          : "linear-gradient(135deg, #3b82f6 0%, #f1f5f9 50%, #10b981 100%)",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={10}
          sx={{
            borderRadius: 4,
            p: { xs: 3, sm: 4 },
            backdropFilter: "blur(18px)",
            backgroundColor: mode === 'dark' ? "#0f172afa" : "rgba(255,255,255,0.95)",
            border: mode === 'dark' 
              ? "1px solid rgba(148,163,184,0.4)" 
              : "1px solid rgba(203,213,225,0.4)",
            color: mode === 'dark' ? '#f8fafc' : '#0f172a',
          }}
        >
          <Stack spacing={3}>
            {/* Header */}
            <Box>
              <Typography
                variant="overline"
                sx={{ 
                  letterSpacing: 2, 
                  color: "primary.main",
                  fontWeight: 600 
                }}
              >
                FINANCE TRACKER
              </Typography>
              <Typography
                variant="h4"
                component="h1"
                sx={{ 
                  fontWeight: 600, 
                  mt: 2,
                  color: mode === 'dark' ? '#f8fafc' : '#0f172a'
                }}
              >
                Create account
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: mode === 'dark' ? "rgba(148,163,184,0.9)" : "rgba(100,116,139,0.9)",
                  mt: 2 
                }}
              >
                Start tracking your spending, subscriptions and get AI insights.
              </Typography>
            </Box>

            {/* Form */}
            <Box component="form" action={action} noValidate sx={{ mt: 4 }}>
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
                      WebkitBoxShadow: mode === 'dark' 
                        ? "0 0 0 1000px #0f172afa inset"
                        : "0 0 0 1000px rgba(255,255,255,0.95) inset",
                      WebkitTextFillColor: mode === 'dark' ? "#f1f5f9" : "#0f172a",
                      transition: "background-color 5000s ease-in-out 0s",
                    },
                    "& input:-webkit-autofill:hover": {
                      WebkitBoxShadow: mode === 'dark' 
                        ? "0 0 0 1000px #0f172afa inset"
                        : "0 0 0 1000px rgba(255,255,255,0.95) inset",
                      WebkitTextFillColor: mode === 'dark' ? "#f1f5f9" : "#0f172a",
                    },
                    "& input:-webkit-autofill:focus": {
                      WebkitBoxShadow: mode === 'dark' 
                        ? "0 0 0 1000px #0f172afa inset"
                        : "0 0 0 1000px rgba(255,255,255,0.95) inset",
                      WebkitTextFillColor: mode === 'dark' ? "#f1f5f9" : "#0f172a",
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
                      WebkitBoxShadow: mode === 'dark' 
                        ? "0 0 0 1000px #0f172afa inset"
                        : "0 0 0 1000px rgba(255,255,255,0.95) inset",
                      WebkitTextFillColor: mode === 'dark' ? "#f1f5f9" : "#0f172a",
                      transition: "background-color 5000s ease-in-out 0s",
                    },
                    "& input:-webkit-autofill:hover": {
                      WebkitBoxShadow: mode === 'dark' 
                        ? "0 0 0 1000px #0f172afa inset"
                        : "0 0 0 1000px rgba(255,255,255,0.95) inset",
                      WebkitTextFillColor: mode === 'dark' ? "#f1f5f9" : "#0f172a",
                    },
                    "& input:-webkit-autofill:focus": {
                      WebkitBoxShadow: mode === 'dark' 
                        ? "0 0 0 1000px #0f172afa inset"
                        : "0 0 0 1000px rgba(255,255,255,0.95) inset",
                      WebkitTextFillColor: mode === 'dark' ? "#f1f5f9" : "#0f172a",
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
                      WebkitBoxShadow: mode === 'dark' 
                        ? "0 0 0 1000px #0f172afa inset"
                        : "0 0 0 1000px rgba(255,255,255,0.95) inset",
                      WebkitTextFillColor: mode === 'dark' ? "#f1f5f9" : "#0f172a",
                      transition: "background-color 5000s ease-in-out 0s",
                    },
                    "& input:-webkit-autofill:hover": {
                      WebkitBoxShadow: mode === 'dark' 
                        ? "0 0 0 1000px #0f172afa inset"
                        : "0 0 0 1000px rgba(255,255,255,0.95) inset",
                      WebkitTextFillColor: mode === 'dark' ? "#f1f5f9" : "#0f172a",
                    },
                    "& input:-webkit-autofill:focus": {
                      WebkitBoxShadow: mode === 'dark' 
                        ? "0 0 0 1000px #0f172afa inset"
                        : "0 0 0 1000px rgba(255,255,255,0.95) inset",
                      WebkitTextFillColor: mode === 'dark' ? "#f1f5f9" : "#0f172a",
                    },
                  }}
                />

                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: mode === 'dark' ? "rgba(148,163,184,0.9)" : "rgba(100,116,139,0.9)",
                    mt: 2 
                  }}
                >
                  Password must be at least 6 characters long.
                </Typography>

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    mt: 4,
                    borderRadius: 999,
                    textTransform: "none",
                    fontWeight: 600,
                    py: 1.5,
                  }}
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
              <Typography 
                variant="caption" 
                sx={{ 
                  color: mode === 'dark' ? "rgba(148,163,184,0.9)" : "rgba(100,116,139,0.9)" 
                }}
              >
                Already have an account?{" "}
                <Link 
                  href="/login" 
                  underline="hover"
                  sx={{ 
                    color: mode === 'dark' ? "#93c5fd" : "#3b82f6" 
                  }}
                >
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
