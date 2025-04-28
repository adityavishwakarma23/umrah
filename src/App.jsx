import { Route, Routes, useLocation } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import {
  LoginPage,
  Homepage,
  PackageMainPage,
  PackageDetailPAge,
  Paypagefrom,
  PayDtlsMain,
  ComperMain,
  AcntPasswordMainPage,
  Grouppage,
  Grouppagesec,
  Mainaccount,
  NotificationPage,
  HelpMain,
  SignInPage,
  ForgotPasswordPage,
  ChangePasswordPage,
  EmailConfirmationPage,
} from "./RoutesMain";
import { Footer, Header } from "./components/common";
import { AadabMain } from "./components/Congratula/subcomponenta";
import { Policypage } from "./components/Privacy/subcomponent";
import { useEffect, useState } from "react";

const App = () => {
  const location = useLocation();
  const [classname,setclassname] = useState('')

  useEffect(() => {
    const path = location.pathname;


    switch (path) {
        case "/":
          setclassname(true);
         
        break;
      default:
        setclassname(false);
        break;
    }
  }, [location]);

  const routes = useRoutes([
    {
      path: "/sign-up",
      element: <SignInPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPasswordPage />,
    },
    {
      path: "/change-password",
      element: <ChangePasswordPage />,
    },
    {
      path: "/email-confirmation",
      element: <EmailConfirmationPage />,
    },
    {
      path: "/*",
      element: (
        <>
          <Header checkClass={classname}/>
          <main className="main">
            <Routes>
              <Route path="/" index element={<Homepage />} />
              <Route path="/packagemain" index element={<PackageMainPage />} />
              <Route
                path="/packagedatal"
                index
                element={<PackageDetailPAge />}
              />
              <Route path="/Paypage" index element={<Paypagefrom />} />
              <Route path="/paydtls" index element={<PayDtlsMain />} />
              <Route path="/adab" index element={<AadabMain />} />
              <Route path="/add-package" index element={<ComperMain />} />
              <Route path="/add-account" index element={<Mainaccount />} />
              <Route path="/acnt-pswrd" index element={<AcntPasswordMainPage />} />
              <Route path="/group" index element={<Grouppage />} />
              <Route path="/groupsec" index element={<Grouppagesec/>} />
              <Route path="/notify" index element={<NotificationPage/>} />
              <Route path="/policy" index element={<Policypage/>} />
              <Route path="/help" index element={<HelpMain/>} />
            </Routes>
          </main>
          <Footer />
        </>
      ),
    },
  ]);
  return <>{routes}</>;
};

export default App;
