import AddAStatus from './AddAStatus';
import TicketCard from './TicketCard';

const StatusCards = ({ taskID, uuid, title }) => {
  // i had take it as input so that we can shift it from one place to another
  return (
    <div className='flex flex-col'>
      <div className='m-1 block w-52 max-w-sm rounded-lg border border-gray-200 bg-white p-6 text-center font-bold capitalize text-green-500 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 '>
        {title} <AddAStatus boardId={taskID} statusId={uuid} />
      </div>
      <div className='m-1 block w-52 max-w-sm rounded-lg border border-gray-200 bg-white p-6 text-center font-bold capitalize text-green-500 shadow  dark:border-gray-700 dark:bg-gray-800'>
        <TicketCard statusId={uuid} />
      </div>
    </div>
  );
};

export default StatusCards;
