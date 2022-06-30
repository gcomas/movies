const Layout = ({ children }) => {
  return (
    <div className="fixed overflow-auto bg-black w-full scroll-smooth">
      <div className="max-w-7xl mx-auto h-screen">{children}</div>
    </div>
  );
};

export default Layout;
