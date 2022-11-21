import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { AppContextProvider } from "../../contexts/AppContext";

function App() {
  return (
    <AppContextProvider>
      <Fragment>
        <NavBar />
        <Container style={{ marginTop: "7em" }}>
          <ActivityDashboard />
        </Container>
      </Fragment>
    </AppContextProvider>
  );
}

export default App;
