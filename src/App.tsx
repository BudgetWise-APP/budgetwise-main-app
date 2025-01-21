import { Route, Routes, useLocation } from "react-router-dom";
import routes from "./utils/routes";
import { axiosSetup } from "./utils/axios";
import Sidebar from "./components/Sidebar";
import PageWrapper from "./components/PageWrapper";

function App() {
  axiosSetup()
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="bg-[#f7f9fc] min-h-full color-[#6f7182]">
      {!isLoginPage && <Sidebar />}
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              isLoginPage ? (
                route.element
              ) : (
                <PageWrapper>
                  {route.element}
                </PageWrapper>
              )
            }
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;