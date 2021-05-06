import {
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { API_URL } from "../constants";

interface Props {
  place: string[];
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

type responseArray = {
  icao24: string;
  firstSeen: number;
  estArrivalAirport: string;
  lastSeen: number;
  estDepatureAirport: string;
}[];

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return <>{value === index && children}</>;
}

const GridCard = ({ place }: Props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [icao, name] = place;

  // Arrivals and Depatures
  const [arrivals, setArrivals] = useState<responseArray>([]);
  const [depatures, setDepatures] = useState<responseArray>([]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const date = (epochTime: number) => new Date(epochTime * 1000).toString();
  useEffect(() => {
    const MS_PER_MINUTE = 60000;
    const myEndDateTime = new Date();
    const myStartDate = new Date(
      myEndDateTime.getTime() - 1440 * MS_PER_MINUTE
    );
    // time in seconds since epoch
    const milliToSeconds = (milli: number) => Math.floor(milli / 1000);
    const [start, end] = [
      milliToSeconds(myStartDate.getTime()),
      milliToSeconds(myEndDateTime.getTime()),
    ];
    const fetchFlight = async (arrival: boolean) => {
      const mode = arrival ? "arrival" : "departure";
      const URL = `${API_URL}${mode}?airport=${icao}&begin=${start}&end=${end}`;
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      return data;
    };
    const fetchFlights = async () => {
      setArrivals((await fetchFlight(true)).splice(0, 20));
      setDepatures((await fetchFlight(false)).splice(0, 20));
    };
    fetchFlights();
  }, [icao]);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Button
        onClick={() => setOpen(true)}
        style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
        fullWidth
        variant="contained"
      >
        {name}({icao})
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Airport Flight Information (Last 24 hours)
        </DialogTitle>
        <DialogContent>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Arrivals" />
            <Tab label="Depatures" />
          </Tabs>

          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Plane ID</TableCell>
                <TableCell align="right">Depature Time</TableCell>
                <TableCell align="right">Depature Airport</TableCell>
                <TableCell align="right">Arrival Time (Est.)</TableCell>
                <TableCell align="right">Arrival Airport</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TabPanel value={value} index={0}>
                {/* Arrivals */}
                {arrivals ? (
                  arrivals.map(
                    (
                      {
                        icao24,
                        firstSeen,
                        estDepatureAirport,
                        lastSeen,
                        estArrivalAirport,
                      },
                      idx
                    ) => (
                      <TableRow key={idx}>
                        <TableCell component="th" scope="row">
                          {icao24}
                        </TableCell>
                        <TableCell align="right">{date(firstSeen)}</TableCell>
                        <TableCell align="right">
                          {estDepatureAirport}
                        </TableCell>
                        <TableCell align="right">{date(lastSeen)}</TableCell>
                        <TableCell align="right">{estArrivalAirport}</TableCell>
                      </TableRow>
                    )
                  )
                ) : (
                  <CircularProgress
                    style={{ margin: "auto", display: "none" }}
                    disableShrink
                  />
                )}
              </TabPanel>
              <TabPanel value={value} index={1}>
                {/* Depatures */}
                {depatures ? (
                  depatures.map(
                    (
                      {
                        icao24,
                        firstSeen,
                        estDepatureAirport,
                        lastSeen,
                        estArrivalAirport,
                      },
                      idx
                    ) => (
                      <TableRow key={idx}>
                        <TableCell component="th" scope="row">
                          {icao24}
                        </TableCell>
                        <TableCell align="right">{firstSeen}</TableCell>
                        <TableCell align="right">
                          {estDepatureAirport}
                        </TableCell>
                        <TableCell align="right">{lastSeen}</TableCell>
                        <TableCell align="right">{estArrivalAirport}</TableCell>
                      </TableRow>
                    )
                  )
                ) : (
                  <CircularProgress
                    style={{ margin: "auto", display: "none" }}
                    disableShrink
                  />
                )}
              </TabPanel>
            </TableBody>
          </Table>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default GridCard;
