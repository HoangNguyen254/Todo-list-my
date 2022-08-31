import { XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import {
  add_todo,
  remove_todo,
  update_todo_name_input,
  update_todo_content,
  change_todo_content_color,
} from '../actionCreators';
function Modal({
  handleCloseModal,
  modalTitle,
  selectedTodo,
  notifySuccess,
  notifyUpdate,
  notifyDelete,
  openModal,
}) {
  const todoContent = useSelector((state) => state.modal.contentInput);
  const colorList = useSelector((state) => state.modal.colorList);
  const selectedColor = useSelector((state) => state.modal.selectedColor);
  const [validateBorder, setValidateBorder] = useState('transparent');
  const dispatch = useDispatch();
  return (
    <AnimatePresence>
      {openModal && (
        <motion.div
          key='modal'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='absolute top-14 inset-0 z-30 bg-gradient-to-br from-purple-gradient-1 to-purple-gradient-2 p-4 text-right rounded-lg'
        >
          <div className='flex mb-4'>
            <h2 className='text-center text-blue-500 font-bold text-xl flex-1'>
              {modalTitle}
            </h2>
            <div
              className='inline-block  rounded-full p-2 bg-pink-300'
              onClick={() => handleCloseModal(false)}
            >
              <XMarkIcon className='w-4 h-4 mx-auto cursor-pointer text-white' />
            </div>
          </div>
          <hr className='bg-gray-400 mb-4' />
          <div className='text-left mb-4'>
            <label
              htmlFor='todo-content'
              className='block mb-4 font-bold text-blue-500'
            >
              Todo Content
            </label>
            <input
              type='text'
              placeholder='Your content...'
              value={todoContent}
              onChange={(e) => dispatch(update_todo_name_input(e.target.value))}
              id='todo-content'
              style={{ color: `#${selectedColor}` }}
              className={`p-2 rounded-xl border-2 border-${validateBorder} focus:border-blue-300 focus:outline-none w-full mb-4 transition-colors`}
            />
            {todoContent === '' && validateBorder !== 'transparent' && (
              <div className='text-red-400 font-bold mb-4'>Empty content</div>
            )}
            <label
              htmlFor='color-content'
              className='block mb-4 font-bold text-blue-500'
            >
              Color
            </label>
            <div className='flex gap-2'>
              {colorList.map((color) => {
                return (
                  <span
                    onClick={() => dispatch(change_todo_content_color(color))}
                    key={color}
                    style={{ background: `#${color}` }}
                    className={`hover:scale-110 transition-all h-6 w-6 rounded-full border-4 inline-block cursor-pointer ${
                      color === selectedColor
                        ? 'border-blue-600'
                        : 'border-transparent'
                    }`}
                  ></span>
                );
              })}
            </div>
          </div>
          {modalTitle.trim() === 'Create a Todo' ? (
            <div className='text-center'>
              <button
                className='px-4 py-2 bg-purple-gradient-1 rounded-xl text-white border border-transparent hover:border-blue-600 transition-colors'
                onClick={() => {
                  if (todoContent !== '') {
                    notifySuccess();
                    dispatch(
                      add_todo({ todoContent, textColor: selectedColor })
                    );
                    handleCloseModal(false);
                  } else {
                    setValidateBorder('red-500');
                  }
                }}
              >
                Create
              </button>
            </div>
          ) : (
            <div className='flex justify-between'>
              <button
                className='px-4 py-2 bg-orange-500 rounded-xl text-white border border-transparent hover:border-blue-600 transition-colors'
                onClick={() => {
                  dispatch(remove_todo(selectedTodo.id));
                  handleCloseModal(false);
                  notifyDelete();
                }}
              >
                Delete
              </button>
              <button
                className='px-4 py-2 bg-red-500 rounded-xl text-white border border-transparent hover:border-blue-600 transition-colors'
                onClick={() => {
                  dispatch(
                    update_todo_content({
                      ...selectedTodo,
                      content: todoContent,
                      textColor: selectedColor,
                    })
                  );
                  handleCloseModal(false);
                  notifyUpdate();
                }}
              >
                Update
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default Modal;
