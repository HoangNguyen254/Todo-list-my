import TodoList from './TodoList';
import Modal from './Modal';
import { XCircleIcon, CheckIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import {
  update_todo_name_input,
  ascend_todo_by_content,
  descend_todo_by_content,
  filter_todo_by_finish,
  filter_todo_by_unfinish,
} from '../actionCreators';
import { useDebouce } from '../hooks/useDebouce';
import { ToastContainer } from 'react-toastify';
import {
  notifySuccess,
  notifyDelete,
  notifyUpdate,
} from '../notify/notifySuccess';
import 'react-toastify/dist/ReactToastify.css';
function Wrapper() {
  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('Create a Todo');
  const [selectedTodo, setSelectedTodo] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const debounceSearchValue = useDebouce(searchValue, 3000);
  const [filter, setFilter] = useState(false);
  const dispatch = useDispatch();
  const handleModal = (todo) => {
    setOpenModal(true);
    setSelectedTodo(todo);
    dispatch(update_todo_name_input(todo.content));
    setModalTitle('Todo Detail');
  };
  return (
    <div className='h-[600px] bg-emerald-500 shadow-lg rounded-lg py-4 px-6 justify-between'>
      <div className='flex flex-col h-full relative'>
        <div className='flex items-center py-4 bg-clip-text relative'>
          <div
            onClick={() => setFilter(!filter)}
            className='border border-transparent hover:border-blue-400 transition-colors p-2 rounded-full'
          >
            {!filter ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='cursor-pointer text-white w-6 h-6'
              >
                <path
                  fillRule='evenodd'
                  d='M3.792 2.938A49.069 49.069 0 0112 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 011.541 1.836v1.044a3 3 0 01-.879 2.121l-6.182 6.182a1.5 1.5 0 00-.439 1.061v2.927a3 3 0 01-1.658 2.684l-1.757.878A.75.75 0 019.75 21v-5.818a1.5 1.5 0 00-.44-1.06L3.13 7.938a3 3 0 01-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836z'
                  clipRule='evenodd'
                />
              </svg>
            ) : (
              <div>
                <XCircleIcon className='cursor-pointer w-6 h-6 text-white' />
              </div>
            )}
          </div>
          <h1 className='text-center flex-1 text-[#1CA7EC] font-bold tracking-widest text-2xl text-fill'>
            My Todo List
          </h1>
          <div
            className={`absolute left-0 ${
              filter ? 'max-h-72' : 'max-h-0'
            } top-14 z-10 bg-gradient-to-br transition-all overflow-hidden from-blue-gradient-1 to-blue-gradient-2 text-white rounded-xl`}
          >
            <div
              onClick={() => {
                dispatch(ascend_todo_by_content());
                setFilter(false);
                setFilterStatus('');
              }}
              className='border-b-2 border-blue-300 text-white p-2 cursor-pointer'
            >
              A-Z
            </div>
            <div
              onClick={() => {
                dispatch(descend_todo_by_content());
                setFilter(false);
                setFilterStatus('');
              }}
              className='border-b-2 border-blue-300 text-white p-2 cursor-pointer'
            >
              Z-A
            </div>
            <div
              onClick={() => {
                dispatch(filter_todo_by_finish());
                setFilter(false);
                setFilterStatus(true);
              }}
              className='border-b-2 border-blue-300 text-white p-2 cursor-pointer'
            >
              <CheckIcon className='w-6 h-6 border border-white rounded-full p-1 mx-auto' />
            </div>
            <div
              onClick={() => {
                dispatch(filter_todo_by_unfinish());
                setFilter(false);
                setFilterStatus(false);
              }}
              className='border-b-2 border-blue-300 text-white p-2 cursor-pointer'
            >
              <span className='w-6 h-6 border border-white rounded-full p-1 mx-auto inline-block'></span>
            </div>
          </div>
        </div>
        <div className='bg-[#F3F4F6] rounded-lg flex-1 p-4 min-w-[472px] max-h-[500px]'>
          <TodoList
            filterStatus={filterStatus}
            handleModal={handleModal}
            searchValue={debounceSearchValue}
          />
        </div>
        <span
          onClick={() => {
            setModalTitle('Create a Todo');
            setOpenModal(true);
            setSelectedTodo('');
            dispatch(update_todo_name_input(''));
          }}
          className='cursor-pointer p-2 rounded-full bg-violet-gradient-1 inline-block absolute bottom-4 left-3 hover:shadow-lg hover:scale-125 transition-all'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 text-white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 4.5v15m7.5-7.5h-15'
            />
          </svg>
        </span>
        <span
          onClick={() => setShowSearch(!showSearch)}
          className='cursor-pointer p-2 rounded-full bg-violet-gradient-1 inline-block absolute bottom-4 right-3 hover:shadow-lg hover:scale-125 transition-all'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 text-white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
        </span>

        <Modal
          openModal={openModal}
          modalTitle={modalTitle}
          selectedTodo={selectedTodo}
          handleCloseModal={setOpenModal}
          notifySuccess={notifySuccess}
          notifyUpdate={notifyUpdate}
          notifyDelete={notifyDelete}
        />
        <AnimatePresence>
          {showSearch && (
            <motion.input
              key='search'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              type='text'
              placeholder='Search...'
              className='rounded-lg transition-colors absolute bottom-4 p-2 left-20 focus:outline-none border focus:border-blue-400 w-2/3'
            />
          )}
        </AnimatePresence>
      </div>
      <ToastContainer />
    </div>
  );
}
export default Wrapper;
