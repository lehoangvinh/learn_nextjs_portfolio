import React from "react";

export const metadata = {
  title: "My Blog Page",
  description: "Builted by Le Hoang Vinh",
};

const Layout = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
