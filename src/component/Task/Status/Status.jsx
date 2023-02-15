import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { AlphaREgex, style, uuidv4 } from '../../utiils/constant';
import { TextField } from '@mui/material';
import { setTask } from '../../../redux/statusSlice';
import { useDispatch } from 'react-redux';

const Status = ({ id }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [project, SetProject] = useState({
    taskID: id,
    uuid: uuidv4(),
    title: '',
  });
  const ButtonIsDisableOrNot = !!project?.title?.match(AlphaREgex);

  const handelChange = (event) => {
    const { value, name } = event.target;
    SetProject({
      ...project,
      [name]: value,
    });
  };

  const handleOpen = () => {
    setOpen(true);
    SetProject({ ...project, uuid: uuidv4() });
  };
  const handleClose = () => setOpen(false);
  const handelSubmit = () => {
    dispatch(setTask(project));
    setOpen(false);
  };
  return (
    <span>
      <Button
        variant='outlined'
        sx={{
          background: 'white',
          marginRight: '10px',
        }}
        onClick={handleOpen}>
        Create New Status
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            New Status Details *
          </Typography>
          <div className='grid gap-6 py-2'>
            <TextField
              id='outlined-multiline-flexible'
              label='New Status Display Text'
              name='title'
              onChange={handelChange}
              value={project.title}
              multiline
              maxRows={4}
            />

            <Button
              disabled={!ButtonIsDisableOrNot}
              variant='contained'
              onClick={() => handelSubmit()}
              disableElevation>
              Add This
            </Button>
          </div>
        </Box>
      </Modal>
    </span>
  );
};

export default Status;
