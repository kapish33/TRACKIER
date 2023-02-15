import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { style } from '../../utiils/constant';

const PatchAndViewTikket = ({
  boardId,
  commnet,
  description,
  endingData,
  statusId,
  title,
  url,
  uuid,
  developer,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='py-1'>
      <button onClick={handleOpen} className='flex flex-col'>
        <div className='w-[163px] rounded bg-gray-200 p-2 capitalize'>
          {title}
        </div>
        <img src={url} alt='Something went wrong' />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <strong className='capitalize'>Title - {title}</strong>
          </Typography>
          <div>
            <div className='rounded bg-gray-300 p-1'>
              <div className=' font-bold'>Descrition</div>
              <span className='break-words'>{description}</span>
              {url.includes('.') && <img src={url} alt='' />}
            </div>
            <div> Due Date : {endingData}</div>
            <div>
              <div className='font-bold capitalize'>Developer</div>
              {developer}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default PatchAndViewTikket;
