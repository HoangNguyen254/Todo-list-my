import { CheckIcon } from '@heroicons/react/24/solid';
import { update_todo_status } from '../actionCreators';
import { useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
function TodoItem({ id, isFinish, content, handleModal, textColor }) {
  const dispatch = useDispatch();
  return (
    <AnimatePresence>
      <motion.li
        className={`bg-white flex items-center cursor-pointer border border-transparent hover:border-blue-500 transition-colors shadow-lg rounded-3xl whitespace-nowrap mb-3 p-4

      `}
        key={id}
        transition={{ delay: 1 ,duration:1 }}
        initial={{ translateX: '-100%' }}
        animate={{ translateX: 0 }}
        exit={{ translateX: '-100%' }}
      >
        <div
          onClick={() => handleModal({ id, isFinish, content })}
          className='flex flex-col flex-1'
        >
          <span
            style={{ color: `#${textColor}` }}
            className={`whitespace-nowrap text-ellipsis max-w-[365px] overflow-hidden ${
              !isFinish ? '' : 'line-through text-gray-200 gap-2'
            }`}
          >
            {content}
          </span>
        </div>
        <label htmlFor={id} className='ml-2'>
          {isFinish ? (
            <span className='h-7 w-7 border bg-green-500 border-gray-200 rounded-full flex items-center cursor-pointer'>
              <CheckIcon className='w-4 h-4 text-white mx-auto' />
            </span>
          ) : (
            <span className='h-7 w-7 border border-gray-400 block rounded-full cursor-pointer'></span>
          )}
        </label>
        <input
          type='checkbox'
          id={id}
          checked={isFinish}
          className='hidden cursor-pointer'
          onChange={(e) => {
            dispatch(update_todo_status(id));
            e.stopPropagation();
          }}
        />
      </motion.li>
    </AnimatePresence>
  );
}
export default TodoItem;
