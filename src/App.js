import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Layout = React.lazy(() => import("./layout"));
const HomePage = React.lazy(() => import("./pages/home"));
const CreateTicketPage = React.lazy(() => import("./pages/createTicket"));
const EditTicket = React.lazy(() => import("./pages/editTicket/editTicket"));
const Loader = React.lazy(() => import("./components/loader"));

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route
            index
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="create-ticket"
            element={
              <Suspense fallback={<Loader />}>
                <CreateTicketPage />
              </Suspense>
            }
          />
          <Route
            path="edit-ticket/:id"
            element={
              <Suspense fallback={<Loader />}>
                <EditTicket />
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
