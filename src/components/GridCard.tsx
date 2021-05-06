import { Button, Grid } from "@material-ui/core";
import React from "react";

type responses = Array<string | number | null>;
type responsesArray = Array<responses>;
interface Props {
  place: [string, responsesArray];
}

const GridCard = ({ place }: Props) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Button
        style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
        fullWidth
        variant="contained"
      >
        {place[0]}({place[1].length})
      </Button>
    </Grid>
  );
};

export default GridCard;
