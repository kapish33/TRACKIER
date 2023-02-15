import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { formatDate, uuidv4 } from '../utiils/constant';
import Status from './Status/Status';
import StatusCards from './Status/StatusCards';

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [arrayOfStatus, setArrayOfStatus] = useState([]);
  // in all the array lets find our one's
  const { task } = useParams();
  // lets find details of the task
  const { totalCards } = useSelector((state) => state?.cards);
  const { statusArray } = useSelector((state) => state?.status);
  // lets find our array of tasks inside totalCards
  useEffect(() => {
    const targatedCard = totalCards.find((card) => card.uuid === task);
    // this is our Jeera Board in which we have to see tickets
    setTasks(targatedCard);
    // get all the status whhich we had to show
    const collectionOfCards = statusArray.filter(
      (status) => status.taskID === task
    );
    setArrayOfStatus(collectionOfCards);
  }, [tasks, task, totalCards, statusArray]);

  return (
    <div className='h-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-5 text-white'>
      <div className='flex justify-between'>
        <h2 className='text-2xl capitalize'>{tasks.title} </h2>
        <div>
          {/* This is For Adding Status */}
          <Status id={task} />
          {formatDate(task.endingData)}
        </div>
      </div>
      <br />
      <hr />
      {/* Showing Status at top like done in progress*/}
      <div className='flex'>
        {arrayOfStatus.map((status) => (
          <StatusCards {...status} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
};

export default Task;
