import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);



export default function Modalbox({count, user}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    {user ? <Link to='checkout'><button className='cart_btn'>Check Out ({count})</button></Link> : <button className='cart_btn' onClick={handleClickOpen}>Check Out ({count})</button>}
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <div className="text">
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          No account? No problem.
        </DialogTitle>
        <DialogContent dividers>
        <Link to='checkout'>
          <button className='cart_btn'>Continue Without account</button>
        </Link>
        <center>
        <h2>OR</h2>
        </center>
        <Link to='Sign-in'>
          <button className='cart_btn'>Sign In to your existing account</button>
        </Link>

        <Link to='Sign-up'>
          <button className='cart_btn'>Create an account</button>
        </Link>
        </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}
