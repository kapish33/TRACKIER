import * as React from 'react';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { AlphaREgex, uuidv4 } from '../../utiils/constant';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const FIlters = () => {
  const [open, setOpen] = React.useState(false);
  const [project, SetProject] = React.useState({
    uuid: uuidv4(),
    title: '',
    description: '',
    url: '',
    tasks: [],
    endingData: dayjs(),
  });
  const ButtonIsDisableOrNot =
    !!project?.title?.match(AlphaREgex) && !!project?.url?.match(AlphaREgex);

  const handelChange = (event) => {
    const { value, name } = event.target;
    SetProject({
      ...project,
      [name]: value,
    });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handelSubmit = () => {};

  return (
    <div className='p-5'>
      <div>
        <Button variant='outlined' onClick={handleOpen}>
          Add A Project*
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'>
          <Box sx={style}>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              Details Of Project Screen*
              <hr /> UniqueID: {project.uuid}
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
                  label='For mobile'
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
    </div>
  );
};

export default FIlters;
