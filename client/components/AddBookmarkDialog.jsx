import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function TestDialog(props) {
    // use React hooks to manage/trigger dialog open/close
    const [open, setOpen] = React.useState(props.show);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Bookmark</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To add to your bookmarks, fill out the following data. Asides from the url itself, everything else is optional.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="url"
                        label="URL"
                        type="url"
                        fullWidth
                    />

                    <TextField
                        margin="dense"
                        id="title"
                        label="Title"
                        type="text"
                        fullWidth={true}
                    />
                    <TextField
                        margin="dense"
                        id="caption"
                        label="Caption"
                        type="text"
                        fullWidth={true}
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        fullWidth={true}
                    />
                    <TextField
                        margin="dense"
                        id="thumbnail_url"
                        label="Thumbnail URL"
                        placeholder="Insert URL to Thumbnail"
                        fullWidth={true}
                    >
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
