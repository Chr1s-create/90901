import { Flex } from "@chakra-ui/react";
import AppNavbar from "@components/AppNavbar";
import Banner from "@components/Banner";
import Footer from "@components/Footer";
import MetaTags from "@components/MetaTags";
import { FC } from "react";

interface LayoutProps {
  title: string;
}

const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <MetaTags title={title} />
      <Flex direction={{ base: "column" }}>
        <AppNavbar />
        <Banner />
        {children}
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
