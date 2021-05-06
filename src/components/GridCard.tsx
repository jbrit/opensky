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
import React, { useState } from "react";

interface Props {
  place: string[];
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return <>{value === index && children}</>;
}

const GridCard = ({ place }: Props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [icao, name] = place;

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

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
          {"More Flight Information"}
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
                <TableCell>icao24</TableCell>
                <TableCell align="right">Call Sign</TableCell>
                <TableCell align="right">Time Position</TableCell>
                <TableCell align="right">Last Contact</TableCell>
                <TableCell align="right">Longitude</TableCell>
                <TableCell align="right">Latitude</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TabPanel value={value} index={0}>
                {/* Arrivals */}
                {[0, 1, 2, 3].map((detail) => (
                  <TableRow key={detail}>
                    <TableCell component="th" scope="row">
                      {detail}
                    </TableCell>
                    <TableCell align="right">detail 1</TableCell>
                    <TableCell align="right">detail 2</TableCell>
                    <TableCell align="right">detail 3</TableCell>
                    <TableCell align="right">detail 4</TableCell>
                    <TableCell align="right">detail 5</TableCell>
                  </TableRow>
                ))}
                <CircularProgress
                  style={{ margin: "auto", display: "none" }}
                  disableShrink
                />
              </TabPanel>
              <TabPanel value={value} index={1}>
                {[0, 1, 2, 3].map((detail) => (
                  <TableRow key={detail}>
                    <TableCell component="th" scope="row">
                      {detail}
                    </TableCell>
                    <TableCell align="right">depature 1</TableCell>
                    <TableCell align="right">depature 2</TableCell>
                    <TableCell align="right">depature 3</TableCell>
                    <TableCell align="right">depature 4</TableCell>
                    <TableCell align="right">depature 5</TableCell>
                  </TableRow>
                ))}
                <CircularProgress
                  style={{ margin: "auto", display: "none" }}
                  disableShrink
                />
              </TabPanel>
            </TableBody>
          </Table>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default GridCard;
