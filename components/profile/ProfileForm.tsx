"use client";

import * as React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Stack,
  Paper,
  Card,
  CardContent,
  Switch,
  FormControlLabel,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "@/contexts/ThemeContext";


type ProfileFormProps = {
  email: string;
  initialName: string;
  initialAvatarUrl: string;
  action: (formData: FormData) => void | Promise<void>;
};

export default function ProfileForm({
  email,
  initialName,
  initialAvatarUrl,
  action,
}: ProfileFormProps) {
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(
    initialAvatarUrl || null
  );
  const { mode, toggleTheme } = useTheme();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
      }}
    >
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
        Profile Settings
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 3,
          bgcolor: mode === 'dark' ? "rgba(15,23,42,0.95)" : "rgba(248,250,252,0.95)",
          border: mode === 'dark' ? "1px solid rgba(148,163,184,0.4)" : "1px solid rgba(226,232,240,0.4)",
          backdropFilter: "blur(12px)",
        }}
      >
        <form action={action}>
          <Stack spacing={3}>
            {/* Avatar Section */}
            <Stack direction="row" spacing={3} alignItems="center">
              <Avatar
                src={previewUrl ?? undefined}
                alt={initialName || email}
                sx={{
                  width: 72,
                  height: 72,
                  fontSize: 28,
                  bgcolor: "primary.main",
                }}
              >
                {(initialName || email)?.[0]?.toUpperCase() ?? "U"}
              </Avatar>

              <Box>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Profile photo
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: mode === 'dark' ? "rgba(148,163,184,0.9)" : "rgba(100,116,139,0.9)", mb: 1 }}
                >
                  JPG, PNG, up to 5MB.
                </Typography>

                <Button
                  variant="outlined"
                  component="label"
                  size="small"
                  sx={{
                    textTransform: "none",
                    borderRadius: 999,
                    px: 3,
                    py: 0.6,
                    color: mode === 'dark' ? "white" : "inherit",
                    borderColor: mode === 'dark' ? "rgba(148,163,184,0.4)" : "rgba(203,213,225,0.4)",
                  }}
                >
                  Upload new
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    hidden
                    onChange={handleFileChange}
                  />
                </Button>
              </Box>
            </Stack>

            {/* Full Name Input */}
            <TextField
              name="full_name"
              label="Full Name"
              defaultValue={initialName}
              fullWidth
              InputLabelProps={{ sx: { color: mode === 'dark' ? "#cbd5e1" : "#64748b" } }}
              InputProps={{
                sx: {
                  color: mode === 'dark' ? "white" : "inherit",
                },
              }}
            />

            {/* Email (read-only) */}
            <TextField
              label="Email"
              value={email}
              fullWidth
              InputLabelProps={{ sx: { color: mode === 'dark' ? "#cbd5e1" : "#64748b" } }}
              InputProps={{
                readOnly: true,
                sx: {
                  color: mode === 'dark' ? "#94a3b8" : "#64748b",
                },
              }}
            />

            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  textTransform: "none",
                  borderRadius: 999,
                  px: 4,
                  py: 1,
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                Save changes
              </Button>
            </Box>
          </Stack>
        </form>
      </Paper>

      {/* Theme Settings */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 3,
          bgcolor: mode === 'dark' ? "rgba(15,23,42,0.95)" : "rgba(248,250,252,0.95)",
          border: mode === 'dark' ? "1px solid rgba(148,163,184,0.4)" : "1px solid rgba(226,232,240,0.4)",
          backdropFilter: "blur(12px)",
          mt: 3,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Appearance
        </Typography>
        
        <Card
          elevation={0}
          sx={{
            bgcolor: mode === 'dark' ? "rgba(30,41,59,0.5)" : "rgba(241,245,249,0.5)",
            border: mode === 'dark' ? "1px solid rgba(148,163,184,0.2)" : "1px solid rgba(203,213,225,0.2)",
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {mode === 'dark' ? (
                  <DarkModeIcon sx={{ color: 'primary.main' }} />
                ) : (
                  <LightModeIcon sx={{ color: 'primary.main' }} />
                )}
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: mode === 'dark' ? "rgba(148,163,184,0.9)" : "rgba(100,116,139,0.9)",
                      fontSize: 13 
                    }}
                  >
                    Switch between light and dark appearance
                  </Typography>
                </Box>
              </Box>
              
              <FormControlLabel
                control={
                  <Switch
                    checked={mode === 'dark'}
                    onChange={toggleTheme}
                    color="primary"
                  />
                }
                label=""
                sx={{ m: 0 }}
              />
            </Stack>
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
}