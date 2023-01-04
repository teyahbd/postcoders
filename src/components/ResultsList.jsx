import { Card, Typography } from "@mui/material";

import "./ResultsList.css";

const ResultsList = ({ areas }) => {
  return (
    <div id="card-container">
      {areas.map((area) => {
        return (
          <Card variant="outlined" sx={{ width: 200, p: 2, m: 2 }}>
            <Typography variant="h5">{`${area["place name"]}, ${area["state abbreviation"]}`}</Typography>
            <Typography sx={{ color: "text.secondary" }}>Latitude</Typography>
            <Typography>{area.latitude}</Typography>
            <Typography sx={{ color: "text.secondary" }}>Longitude</Typography>
            <Typography>{area.longitude}</Typography>
          </Card>
        );
      })}
    </div>
  );
};

export default ResultsList;
