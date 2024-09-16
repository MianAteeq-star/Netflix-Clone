// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import { useDispatch, useSelector } from 'react-redux';
// import VideoBackground from './VideoBackground';
// import { setOpen } from '../redux/movieSlice';


// export default function DialogVideo() {
//     const dispatch = useDispatch()
//   const {open, movieId} = useSelector(state=>state.movie)
//   console.log(open,movieId)



//   const handleClose = () => {
//     dispatch(setOpen(false))
//   };

//   return (
//     <React.Fragment>
      
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">
//           {"Use Google's location service?"}
//         </DialogTitle>
//         <DialogContent>
//          <VideoBackground movieId={movieId} bool={true}/>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Close</Button>
        
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }


import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import { setOpen } from '../redux/movieSlice';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function DialogVideo() {
    const dispatch = useDispatch()
    const {open, movieId} = useSelector(state=>state.movie)
    console.log(open,movieId)


  const handleClose = () => {
    dispatch(setOpen(false))
  };

  return (
    <React.Fragment>
   
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
            <VideoBackground movieId={movieId} bool={true}/>
        </DialogContent>
       
      </BootstrapDialog>
    </React.Fragment>
  );
}
