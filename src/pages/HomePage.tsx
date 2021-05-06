import { CircularProgress, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import GridCard from "../components/GridCard";
import { API_URL } from "../constants";

type responses = Array<string | number | null>;
type responsesArray = Array<responses>;

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState<Array<[string, responsesArray]>>([]);
  useEffect(() => {
    const fetchFlights = async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
      const { states } = data;
      //   Convert to mapping with state to array of other params
      let stateMapping: {
        [key: string]: responsesArray;
      } = {};
      states.forEach(([a, b, country, ...fields]: Array<string>) => {
        if (country in stateMapping) {
          stateMapping[country] = [...stateMapping[country], [a, b, ...fields]];
        } else {
          stateMapping[country] = [[a, b, ...fields]];
        }
      });
      setPlaces(
        Object.entries(stateMapping)
          .sort((a, b) => b[1].length - a[1].length)
          .slice(0, 10)
      );

      setLoading(false);
    };
    fetchFlights();
  }, []);
  return (
    <>
      <Typography style={{ margin: "3rem 0" }} variant="h5">
        Top 10 Cities with heavy air traffic
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
          places.map((place) => (
            <GridCard place={place} key={place[0]}></GridCard>
          ))
        )}
      </Grid>
    </>
  );
};

export default HomePage;
