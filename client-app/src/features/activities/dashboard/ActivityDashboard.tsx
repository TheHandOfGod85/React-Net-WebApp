import React, { useContext } from "react";
import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import AppContext from "../../../contexts/AppContext";

const { selectedActivity } = useContext(AppContext);

export default function ActivityDashboard() {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList />
      </Grid.Column>
      <Grid.Column width="6">
        {selectedActivity && <ActivityDetails />}
        <ActivityForm />
      </Grid.Column>
    </Grid>
  );
}
