import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Conform({ open, close, conformFunction, rerender = null }) {

    const handelConform = () => {
        conformFunction()
        rerender && rerender()
        close()
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={close}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Confirm Delete
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to Delete ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={close}>Canal</Button>
                    <Button onClick={handelConform} autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}