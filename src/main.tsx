import { BrowserRouter, Route, Routes } from "react-router"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import "@/index.scss"
import { DashboardLayout } from "@/layout/dashboard-layout"
import { Home } from "@/pages/home"
import { Personal } from "@/pages/personal"
import { store } from "@/store"
import { ReduxProvider } from "@/provider/redux-provider"

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ReduxProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Home />} />
            <Route path="personal" element={<Personal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ReduxProvider>
  </Provider>
)
