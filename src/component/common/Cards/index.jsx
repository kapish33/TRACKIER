import { Link } from 'react-router-dom';

const Cards = ({ uuid, url, title, tasks, description }) => {
  return (
    <>
      <Link
        to={`${uuid}`}
        className='flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row'>
        <img
          className='h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
          src={url}
          alt=''
        />
        <div className='flex flex-col justify-between p-4 leading-normal'>
          <h5 className='mb-2 text-2xl font-bold capitalize tracking-tight text-gray-900 dark:text-white'>
            Title : {title}
          </h5>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            <span>{tasks}</span>
            <br />
            <span className='break-all capitalize'>{description}</span>
          </p>
        </div>
      </Link>
    </>
  );
};

export default Cards;
