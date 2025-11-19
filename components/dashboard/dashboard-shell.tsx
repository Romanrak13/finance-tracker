"use client";

import { useState, useMemo, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  Avatar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DashboardIcon from "@mui/icons-material/SpaceDashboardOutlined";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLongOutlined";
import SubscriptionsIcon from "@mui/icons-material/SubscriptionsOutlined";
import InsightsIcon from "@mui/icons-material/InsightsOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import { createSupabaseBrowserClient } from "@/lib/supabase/ client";


const drawerWidth = 260;

const navItems = [
  { label: "Dashboard", href: "/", icon: <DashboardIcon fontSize="small" /> },
  {
    label: "Transactions",
    href: "/transactions",
    icon: <ReceiptLongIcon fontSize="small" />,
  },
  {
    label: "Subscriptions",
    href: "/subscriptions",
    icon: <SubscriptionsIcon fontSize="small" />,
  },
  {
    label: "AI Insights",
    href: "/insights",
    icon: <InsightsIcon fontSize="small" />,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: <SettingsIcon fontSize="small" />,
  },
];

export function DashboardShell({ children }: { children: ReactNode }) {
  const [profileMenuAnchor, setProfileMenuAnchor] =
    useState<null | HTMLElement>(null);

  const pathname = usePathname();
  const router = useRouter();

  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProfileMenuAnchor(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchor(null);
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      handleProfileMenuClose();
      router.push("/login");
    } catch (e) {
      console.error("Logout error:", e);
    }
  };

  const drawer = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "rgba(15,23,42,0.98)",
        borderRight: "1px solid rgb(30 41 59)",
      }}
    >
      {/* Logo / Title */}
      <Box sx={{ px: 4, pt: 5, pb: 4 }}>
        <Typography
          variant="overline"
          sx={{ letterSpacing: 2, color: "primary.main" }}
        >
          FINANCE TRACKER
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 600, mt: 0.5 }}>
          Overview
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "rgba(148,163,184,0.3)" }} />

      {/* Nav items */}
      <List sx={{ py: 1, flex: 1 }}>
        {navItems.map((item) => {
          const selected = pathname === item.href;
          return (
            <ListItemButton
              key={item.href}
              component={Link}
              href={item.href}
              selected={selected}
              sx={{
                mx: 1,
                mb: 0.5,
                borderRadius: 2,
                "&.Mui-selected": {
                  bgcolor: "rgba(56,189,248,0.16)",
                  color: "#e5faff",
                },
                "&.Mui-selected:hover": {
                  bgcolor: "rgba(56,189,248,0.24)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 36,
                  color: selected ? "primary.light" : "rgba(148,163,184,0.9)",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: selected ? 600 : 500,
                }}
              />
            </ListItemButton>
          );
        })}
      </List>

      {/* Profile block */}
      <Box sx={{ px: 4, pb: 4 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            borderRadius: 4,
            bgcolor: "rgba(15, 23, 42, 0.8)",
            px: 3,
            py: 2,
          }}
        >
          <Avatar
            sx={{ width: 32, height: 32, fontSize: 14 }}
            alt="User avatar"
          >
            R
          </Avatar>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              minWidth: 0,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 500 }} noWrap>
              Roman Rak
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "rgba(148,163,184,0.9)" }}
              noWrap
            >
              Personal plan
            </Typography>
          </Box>

          <IconButton
            size="small"
            onClick={handleProfileMenuOpen}
            sx={{ color: "rgba(148,163,184,0.9)" }}
          >
            <MoreVertIcon fontSize="small" />
          </IconButton>

          <Menu
            anchorEl={profileMenuAnchor}
            open={Boolean(profileMenuAnchor)}
            onClose={handleProfileMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem
              component={Link}
              href="/profile"
              onClick={handleProfileMenuClose}
            >
              Profile
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#020617",
        color: "#f8fafc",
      }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "transparent",
            border: "none",
          },
        }}
      >
        {drawer}
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          bgcolor:
            "radial-gradient(circle at 0% 0%, rgba(37,99,235,0.18), transparent 55%), radial-gradient(circle at 100% 100%, rgba(34,197,94,0.14), transparent 55%), #020617",
        }}
      >
        {/* offset for any future AppBar */}
        <Toolbar />
        <Box
          sx={{
            p: 6,
            maxWidth: "72rem",
            mx: "auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}