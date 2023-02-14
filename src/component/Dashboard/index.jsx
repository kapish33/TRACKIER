import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Cards from '../common/Cards';
import { uuidv4 } from '../utiils/constant';
import FIlters from '../Layout/Header/FIlters';

const Dashboard = () => {
  const { totalCards } = useSelector((state) => state.cards);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [sliceproducts, setSliceproducts] = useState([]);

  const Prev = () => {
    setStart(Math.max(start - 10, 0));
    setEnd(Math.max(end - 10, 10));
  };
  const Next = () => {
    // add if end is less than length of products
    if (end < totalCards.length - 1) {
      setStart(start + 10);
      setEnd(Math.min(end + 10, totalCards.length));
    }
  };
  useEffect(() => {
    setSliceproducts(totalCards.slice(start, end));
  }, [start, end, totalCards]);

  return (
    <>
      <FIlters />
      <div className='relative h-[700px] p-5'>
        {/* Paginated start/ */}
        <div className='flex flex-wrap justify-evenly gap-6'>
          {sliceproducts.map((cardData) => (
            <Cards key={uuidv4()} {...cardData} />
          ))}
        </div>
        {/* Pagiated End */}

        <div className='absolute bottom-0 left-1/2 p-5'>
          <div className='flex flex-col items-center'>
            {/* Help text */}
            <span className='text-sm text-gray-700 dark:text-gray-400'>
              Showing{' '}
              <span className='font-semibold text-gray-900 dark:text-white'>
                {start + 1}{' '}
              </span>
              to{' '}
              <span className='font-semibold text-gray-900 dark:text-white'>
                {end}{' '}
              </span>
              of{' '}
              <span className='font-semibold text-gray-900 dark:text-white'>
                {totalCards?.length}{' '}
              </span>
              Entries
            </span>
            {/* Buttons  */}
            <div className='xs:mt-0 bg mt-2 inline-flex'>
              <button
                onClick={Prev}
                disabled={start === 0}
                className='rounded-l bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
                Prev
              </button>
              <button
                onClick={Next}
                className='rounded-r border-0 border-l border-gray-700 bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
