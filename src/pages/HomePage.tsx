import { CircularProgress, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import GridCard from "../components/GridCard";
import { BUSIEST_AIRPORTS } from "../constants";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchFlights = async () => {
      setLoading(false);
    };
    fetchFlights();
  }, []);
  return (
    <>
      <Carousel />
      <Typography style={{ margin: "3rem 0" }} variant="h5">
        Top 10 Airports with heavy air traffic
      </Typography>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={4}
      >
        {loading ? (
          <CircularProgress style={{ margin: "auto" }} disableShrink />
        ) : (
          BUSIEST_AIRPORTS.map((place) => (
            <GridCard place={place} key={place[0]}></GridCard>
          ))
        )}
      </Grid>
    </>
  );
};

export default HomePage;
