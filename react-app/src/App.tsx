import { useMemo, useState } from "react";
import { Link as RouterLink, Route, Routes, Navigate, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import ViewOne from "./pages/ViewOne";
import ViewTwo from "./pages/ViewTwo";
import ViewThree from "./pages/ViewThree";
import NotFound from "./pages/NotFound";

const drawerWidth = 256;

export default function App() {
  const isDesktop = useMediaQuery("(min-width:900px)");
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const selected = useMemo(() => {
    if (location.pathname.startsWith("/view2")) return "view2";
    if (location.pathname.startsWith("/view3")) return "view3";
    return "view1";
  }, [location.pathname]);

  const drawer = (
    <Box role="presentation" sx={{ width: drawerWidth }}>
      <Toolbar />
      <List>
        <ListItemButton component={RouterLink} to="/view1" selected={selected === "view1"} onClick={() => setOpen(false)} sx={{ "&.Mui-selected": { backgroundColor: (t) => t.palette.action.selected } }}>
          <ListItemText primary="View One" />
        </ListItemButton>
        <ListItemButton component={RouterLink} to="/view2" selected={selected === "view2"} onClick={() => setOpen(false)} sx={{ "&.Mui-selected": { backgroundColor: (t) => t.palette.action.selected } }}>
          <ListItemText primary="View Two" />
        </ListItemButton>
        <ListItemButton component={RouterLink} to="/view3" selected={selected === "view3"} onClick={() => setOpen(false)} sx={{ "&.Mui-selected": { backgroundColor: (t) => t.palette.action.selected } }}>
          <ListItemText primary="View Three" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ zIndex: (t) => t.zIndex.drawer + 1 }}>
        <Toolbar>
          {!isDesktop && (
            <IconButton size="large" color="inherit" edge="start" onClick={() => setOpen(true)} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap component="div">My App</Typography>
        </Toolbar>
      </AppBar>

      {isDesktop ? (
        <Drawer variant="permanent" open sx={{ width: drawerWidth, flexShrink: 0, "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" } }}>
          {drawer}
        </Drawer>
      ) : (
        <Drawer variant="temporary" open={open} onClose={() => setOpen(false)} ModalProps={{ keepMounted: true }} sx={{ "& .MuiDrawer-paper": { width: drawerWidth } }}>
          {drawer}
        </Drawer>
      )}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Navigate to="/view1" replace />} />
          <Route path="/view1" element={<ViewOne />} />
          <Route path="/view2" element={<ViewTwo />} />
          <Route path="/view3" element={<ViewThree />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </Box>
  );
}
