import { ReactNode } from "react";
import AppSidebar from "../components/dashboard/forms/charts/sidebar/AppSidebar";

interface Props {
  children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex bg-slate-950 text-white min-h-screen">
      <AppSidebar />

      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;