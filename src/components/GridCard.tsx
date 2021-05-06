import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@material-ui/core";
import React, { useState } from "react";

type responses = Array<string | number | null>;
type responsesArray = Array<responses>;
interface Props {
  place: [string, responsesArray];
}

const GridCard = ({ place }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Button
        onClick={() => setOpen(true)}
        style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
        fullWidth
        variant="contained"
      >
        {place[0]}({place[1].length})
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
          <DialogContentText>flight content here...</DialogContentText>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default GridCard;
