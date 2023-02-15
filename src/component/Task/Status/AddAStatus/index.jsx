import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AlphaREgex, style, uuidv4 } from '../../../utiils/constant';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import {
  LocalizationProvider,
  MobileDateTimePicker,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { addTask } from '../../../../redux/taskSlice';
import { useDispatch } from 'react-redux';

const AddAStatus = ({ statusId, boardId }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [project, SetProject] = useState({
    uuid: uuidv4(),
    title: '',
    description: '',
    url: '',
    endingData: dayjs(),
    statusId,
    boardId,
    commnet: [],
  });
  const ButtonIsDisableOrNot = !!project?.title?.match(AlphaREgex);

  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true);
    SetProject({ ...project, uuid: uuidv4() });
  };

  const handelChange = (event) => {
    const { value, name } = event.target;
    SetProject({
      ...project,
      [name]: value,
    });
  };
  const handelSubmit = () => {
    dispatch(addTask(project));
    setOpen(false);
  };
  return (
    <div>
      <Button variant='outlined' onClick={handleOpen}>
        + Add A Ticket
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            {project.uuid}
          </Typography>
          <div className='grid gap-6 py-2'>
            <TextField
              id='outlined-multiline-flexible'
              label='Title'
              name='title'
              onChange={handelChange}
              value={project.title}
              multiline
              maxRows={4}
            />
            <TextField
              id='outlined-multiline-static'
              label='Description'
              name='description'
              value={project.description}
              onChange={handelChange}
              multiline
              rows={4}
              cols={4}
            />
            <TextField
              id='outlined-multiline-flexible'
              label='url'
              name='url'
              value={project.url}
              onChange={handelChange}
              multiline
              maxRows={4}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDateTimePicker
                label='Select Date'
                value={project.endingData}
                onChange={(newValue) => {
                  SetProject({
                    ...project,
                    endingData: newValue,
                  });
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

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
    </div>
  );
};

export default AddAStatus;
