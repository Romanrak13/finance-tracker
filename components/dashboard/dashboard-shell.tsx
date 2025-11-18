"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  Avatar,
  Tooltip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/SpaceDashboardOutlined";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLongOutlined";
import SubscriptionsIcon from "@mui/icons-material/SubscriptionsOutlined";
import InsightsIcon from "@mui/icons-material/InsightsOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "rgba(15,23,42,0.98)", 
      }}
      className="border-r border-slate-800"
    >
      <Box className="px-4 pt-5 pb-4">
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

      <Box className="px-4 pb-4">
        <Box className="flex items-center gap-3 rounded-2xl bg-slate-900/80 px-3 py-2">
          <Avatar
            sx={{ width: 32, height: 32, fontSize: 14 }}
            alt="User avatar"
          >
            R
          </Avatar>
          <Box className="flex flex-col">
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Roman Rak
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "rgba(148,163,184,0.9)" }}
            >
              Personal plan
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{ display: "flex", minHeight: "100vh" }}
      className="bg-slate-950 text-slate-50"
    >

      {/* Sidebar: desktop */}
      {isDesktop && (
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
      )}

      {/* Sidebar: mobile */}
      {!isDesktop && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
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
      )}

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          bgcolor: "radial-gradient(circle at 0% 0%, rgba(37,99,235,0.18), transparent 55%), radial-gradient(circle at 100% 100%, rgba(34,197,94,0.14), transparent 55%), #020617",
        }}
      >
        {/* offset for AppBar */}
        <Toolbar />
        <Box className="p-4 md:p-6 max-w-6xl mx-auto">{children}</Box>
      </Box>
    </Box>
  );
}