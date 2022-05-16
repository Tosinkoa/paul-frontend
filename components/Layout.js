import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative">
        <NavBar />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "Title",
  description: "App description",
  keywords: "app, keyword",
};
