import React, { createContext, ReactNode } from "react";

interface AdminDrawerContextProps {
  isAdminDrawerOpen: boolean;
  toggleAdminDrawer: () => void;
}

export const AdminDrawerContext = createContext<AdminDrawerContextProps>(
  {} as AdminDrawerContextProps
);

export const AdminDrawerProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAdminDrawerOpen, setIsAdminDrawerOpen] = React.useState(false);

  const toggleAdminDrawer = () => {
    setIsAdminDrawerOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <AdminDrawerContext.Provider
      value={{ isAdminDrawerOpen, toggleAdminDrawer }}>
      {children}
    </AdminDrawerContext.Provider>
  );
};
