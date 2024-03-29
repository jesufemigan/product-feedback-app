import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-secondaryWhite md:pt-12 min-h-screen">
      <div className="md:w-[90%] lg:w-2/3 mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
