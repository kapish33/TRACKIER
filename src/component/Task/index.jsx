import { useEffect, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
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
  console.log('first', arrayOfStatus);

  const onDragEnd = (result, arrayOfStatus, setArrayOfStatus) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = arrayOfStatus[source.droppableId];
      const destColumn = arrayOfStatus[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setArrayOfStatus({
        ...arrayOfStatus,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = arrayOfStatus[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setArrayOfStatus({
        ...arrayOfStatus,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

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
      <DragDropContext
        onDragEnd={(result) =>
          onDragEnd(result, arrayOfStatus, setArrayOfStatus)
        }>
        <div className='flex'>
          {arrayOfStatus.map((status) => (
            <Droppable key={uuidv4()} droppableId={uuidv4()}>
              {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <StatusCards {...status} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Task;
