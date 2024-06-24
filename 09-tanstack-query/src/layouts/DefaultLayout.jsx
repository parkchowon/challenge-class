import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Page from "../components/Page";

function DefaultLayout() {
  return (
    <>
      <Header />
      <Page>
        <Outlet />
      </Page>
      <Footer />
    </>
  );
}

export default DefaultLayout;
