import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({
  name = "Unknown",
  team = "Unknown",
  nationality = "Unknown",
  jerseyNumber = "Unknown",
  age = "Unknown",
  imageUrl = "",
}) => {
  return (
    <div className="card-container">
      <Card className="x" style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Text>
            <strong>Name:</strong> {name}
          </Card.Text>
          <Card.Text>
            <strong>Team:</strong> {team}
          </Card.Text>
          <Card.Text>
            <strong>Nationality:</strong> {nationality}
          </Card.Text>
          <Card.Text>
            <strong>Jersey Number:</strong> {jerseyNumber}
          </Card.Text>
          <Card.Text>
            <strong>Age:</strong> {age}
          </Card.Text>
          <Card.Img variant="top" src={imageUrl} alt={name} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Player;
