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
} from "@mui/material";


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
          bgcolor: "rgba(15,23,42,0.95)",
          border: "1px solid rgba(148,163,184,0.4)",
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
                  sx={{ color: "rgba(148,163,184,0.9)", mb: 1 }}
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
                    color: "white",
                    borderColor: "rgba(148,163,184,0.4)",
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
              InputLabelProps={{ sx: { color: "#cbd5e1" } }}
              InputProps={{
                sx: {
                  color: "white",
                },
              }}
            />

            {/* Email (read-only) */}
            <TextField
              label="Email"
              value={email}
              fullWidth
              InputProps={{
                readOnly: true,
                sx: {
                  color: "#94a3b8",
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
    </Box>
  );
}