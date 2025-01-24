import { Route, Routes, useLocation } from 'react-router-dom'

import PageWrapper from './components/PageWrapper'
import Sidebar from './components/Sidebar'
import { axiosSetup } from './utils/axios'
import routes from './utils/routes'
import { ModalProvider } from './context/ModalProvider'

function App() {
  axiosSetup()
  const location = useLocation()
  const isLoginPage = location.pathname === '/login'

  return (
    <ModalProvider>
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
                  <PageWrapper>{route.element}</PageWrapper>
                )
              }
            />
          ))}
        </Routes>
      </div>
    </ModalProvider>
  )
}

export default App
