import { Authenticated, GitHubBanner, Refine, WelcomePage } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import {authProvider, dataProvider, liveProvider } from './providers'
import {Home, ForgotPassword, Login, Register, CompanyList} from './pages'
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { App as AntdApp } from "antd";
import Layout from "./components/layout";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { resources } from "./config/resources";
import Create from "./pages/company/create";


function App() {
  return (
    <BrowserRouter>
      <GitHubBanner/>
        <RefineKbarProvider>
        
          
              <AntdApp>
                <DevtoolsProvider>
                  <Refine
                    dataProvider={dataProvider}
                    liveProvider={liveProvider}
                    notificationProvider={useNotificationProvider}
                    routerProvider={routerBindings}
                     authProvider={authProvider}
                     resources={resources}
                    options={{
                      syncWithLocation: true,
                      warnWhenUnsavedChanges: true,
                      useNewQueryKeys: true,
                      projectId: "d1VIUA-tOgBXy-xnkvJP",
                      liveMode: "auto",
                    }}
                  >
                    <Routes>
                
                      <Route path="/register" element={<Register />}/>
                      <Route path="/login" element={<Login />}/>
                      <Route path="/forgot-password" element={<ForgotPassword />}/>
                      <Route
                        element={
                          <Authenticated
                            key="authenticated-layout"
                            fallback={<CatchAllNavigate to="/login" />}
                          >
                            <Layout>
                              <Outlet />
                            </Layout>
                          </Authenticated>
                        }
                      >
                         <Route index element={<Home />}/>
                         <Route path="/companies" >
                            <Route index element = {<CompanyList />} />
                            <Route path="new" element = {<Create />} />
                         </Route>

                      </Route>
                    </Routes>
                    <RefineKbar />
                    <UnsavedChangesNotifier />
                    <DocumentTitleHandler />
                  </Refine>
                  <DevtoolsPanel />
                </DevtoolsProvider>
              </AntdApp>
        
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
