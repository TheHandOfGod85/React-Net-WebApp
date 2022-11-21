import React, { useContext } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import AppContext from "../../../contexts/AppContext";

const { selectedActivity, handleCancelSelectActivity } = useContext(AppContext);

export default function ActivityDetails() {
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${selectedActivity?.category}.jpg`} />
      <Card.Content>
        <Card.Header>{selectedActivity?.title}</Card.Header>
        <Card.Meta>
          <span>{selectedActivity?.date.toString()}</span>
        </Card.Meta>
        <Card.Description>{selectedActivity?.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button basic color="blue" content="Edit" />
          <Button
            onClick={handleCancelSelectActivity}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
}
