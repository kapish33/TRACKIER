import { useParams } from 'react-router-dom';

const Task = () => {
  // in all the array lets find our one's
  const { task } = useParams();
  console.log(task);
  return <div className='p-5'>{task}</div>;
};

export default Task;
