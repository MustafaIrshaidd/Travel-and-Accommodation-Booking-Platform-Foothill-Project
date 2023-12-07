import { Sidebar } from "@components/Sidebar";
import { Box } from "@mui/material";
import { Admin } from "@pages/Admin";
import { AdminDrawerProvider } from "@pages/Admin/contexts/AdminAsideDrawer";

const AdminRoute = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar username="Mustafa Irshaid" />
      <AdminDrawerProvider>
        <Admin />
      </AdminDrawerProvider>
    </Box>
  );
};

export default AdminRoute;
