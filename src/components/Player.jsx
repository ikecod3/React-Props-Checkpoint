import { Card } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <Card
      style={{
        position: "relative",
        padding: 0,
        width: "28rem",
      }}
      className="shadow-lg flex-grow-1"
    >
      {/* Card image is here */}
      <Card.Img
        variant="top"
        src={image}
        style={{
          height: 450,
          width: "100wh",
          objectFit: "cover",
        }}
        alt={name}
      />
      {/* The jersey number and its  inline styling is here */}
      <div
        className="text-center"
        style={{ position: "absolute", left: "1.5rem", top: "1rem", zIndex: 3 }}
      >
        <h2
          className="rounded-circle shadow-lg d-grid text-center align-content-center"
          style={{
            fontSize: 40,
            height: 60,
            width: 60,
            zIndex: 4,
            backgroundColor: "violet",
            color: "#000",
            objectFit: "contain",
          }}
        >
          {jerseyNumber}
        </h2>
        <h3>
          <img
            src="https://www.citypng.com/public/uploads/preview/hd-football-t-shirt-orange-icon-transparent-background-11650679776enb89kdn16.png?v=2023080920"
            alt="Jersey"
            style={{
              position: "absolute",
              zIndex: 1,
              height: 70,
              left: -5,
            }}
          />
        </h3>
      </div>

      {/* The card body is here */}
      <div>
        <Card.Body className="p-3">
          <Card.Title
            style={{ fontSize: 40, fontFamily: "revert", fontWeight: 800 }}
          >
            {name}
          </Card.Title>
          <Card.Text className="pt-3 my-2 ">
            <span className="h3 lh-lg">Team: {team}</span> <br />
            <span className="h3 lh-lg">Nationality: {nationality}</span> <br />
            <span className="h3 lh-lg">Age: {age}</span>
          </Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
};

Player.defaultProps = {
  name: "Front End",
  team: "GoMyCode",
  nationality: "Web Engineer",
  jerseyNumber: "000",
  age: "00",
  image:
    "https://www.premierleague.com/resources/rebrand/v7.133.0/i/elements/pl-main-logo.png",
};

export default Player;
