import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
    console.log('HHERRRRE2', props)
  const {isOpen, country} = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <a href='#' onClick={handleClickOpen}>
              {country.emoji} {country.name}{" "}
              {country.states.length > 0 && country.states.length}{" "}
              {country.states.length > 1 && "States"}
              {country.states.length === 1 && "State"}
            </a>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Country Information"}</DialogTitle>
        <DialogContent>
        <List>
            <ListItem>
            Name: {country.name},
            </ListItem>
            <ListItem>
            Code: {country.code}
            </ListItem>
            <ListItem>
            Currency: {country.currency}
            </ListItem>
            <ListItem>
            Emoji: {country.emoji}
            </ListItem>
            <ListItem>
            Phone: {country.phone}
            </ListItem>
        </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}