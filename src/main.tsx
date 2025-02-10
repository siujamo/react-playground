import { BrowserRouter, Route, Routes } from "react-router"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import "@/index.scss"
import { DashboardLayout } from "@/layout/dashboard-layout"
import { Home } from "@/pages/home"
import { Personal } from "@/pages/personal"
import { store } from "@/store"

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="me" element={<Personal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)
