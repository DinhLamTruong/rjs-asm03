import Footer from '../Footer/Footer';
import LiveChat from '../LiveChat/LiveChat';

const Layout = ({ children }) => {
  return (
    <>
      {children}

      {/* live chat */}
      <LiveChat />

      {/* footer */}
      <Footer />
    </>
  );
};

export default Layout;
