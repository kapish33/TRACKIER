import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { uuidv4 } from '../../utiils/constant';
import PatchAndViewTikket from './PatchAndViewTikket';

const TicketCard = ({ statusId }) => {
  const [ticket, setTicker] = useState([]);
  const { taskArray } = useSelector((state) => state.task);

  useEffect(() => {
    // lets get all the tickets related to this statusId
    const relavantTicket = taskArray.filter((t) => t.statusId === statusId);
    setTicker(relavantTicket);
  }, [taskArray, statusId]);
  return (
    <div>
      cards 👇
      {ticket.map((data) => (
        <PatchAndViewTikket {...data} key={uuidv4()} />
      ))}
    </div>
  );
};

export default TicketCard;
