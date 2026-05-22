<<<<<<< HEAD
import type { ReactNode } from "react";
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

=======
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

>>>>>>> 2988c110b1e35e6b17f929dde7c3cea20b841a5d
export default DashboardLayout;