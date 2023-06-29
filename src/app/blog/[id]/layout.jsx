import React from "react";

export const metadata = {
  title: "Portfolio",
  description: "Builted by Le Hoang Vinh",
};

const BlogLayout = ({ children }) => {
  return (
    <div>
      <h1 className="text-red-600"></h1>
      {children}
    </div>
  );
};

export default BlogLayout;
