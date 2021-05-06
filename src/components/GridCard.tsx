import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useState } from "react";

type responses = Array<string | number | null>;
type responsesArray = Array<responses>;
interface Props {
  place: string[];
}

const GridCard = ({ place }: Props) => {
  const [open, setOpen] = useState(false);
  const [icao, name] = place;
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
      {/* <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"More Flight Information"}
        </DialogTitle>
        <DialogContent>
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
              {details.map((detail) => (
                <TableRow key={detail[0]}>
                  <TableCell component="th" scope="row">
                    {detail[0]}
                  </TableCell>
                  <TableCell align="right">{detail[1]}</TableCell>
                  <TableCell align="right">{detail[2]}</TableCell>
                  <TableCell align="right">{detail[3]}</TableCell>
                  <TableCell align="right">{detail[4]}</TableCell>
                  <TableCell align="right">{detail[5]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DialogContent>
      </Dialog>
     */}
    </Grid>
  );
};

export default GridCard;
