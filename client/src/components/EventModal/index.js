import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import API from "../../utils/API";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [title, setTitle] = useState("")
  const [resource, setResource] = useState("")
  const [allDay, setAllDay] = useState(true)
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")



  const addEvents = async () => {
    try {
      await API.addEvents({
        title: title,
        allDay: allDay,
        resource: resource,
        start: start,
        end: end,
      }).then(() => {
          setTitle ("")
          setResource ("")
          setAllDay (true)
          setStart ("")
          setEnd ("")
      });
    } catch (err) {
      console.log(err);
    }
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Event</h2>
      <p id="simple-modal-description">
        <TextField 
        id="standard-basic" 
        label="Event Title"
        onChange={e => setTitle(e.target.value)}
        value={title}
         />
        <TextField 
        id="standard-basic" 
        label="Event Description"
        onChange={e => setResource(e.target.value)}
        value={resource} 
        />
        <TextField 
        id="standard-basic" 
        label="Start Date:"
        onChange={e => setStart(e.target.value)}
        value={start} 
        />
        <TextField 
        id="standard-basic" 
        label="End Date:"
        onChange={e => setEnd(e.target.value)}
        value={end} 
        />
      </p>
      <button type="button" onClick={addEvents}>
        Add Event
      </button>
      <SimpleModal />
    </div>
  );

  return (
    <div>
      <Modal
        open={props.handleOpen}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
