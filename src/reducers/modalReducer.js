const intialState = {
  contentInput: '',
  modalTitle: '',
  isOpenModal: false,
  colorList: [
    '000000',
    '5E72EB',
    'FF9190',
    'FDC094',
    'FFCAD4',
    '1CA7EC',
    '1F2F98',
    '7BE495',
  ],
  selectedColor: '000000',
};
const reducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE_TODO_NAME_INPUT':
      return {
        ...state,
        contentInput: payload,
      };
    case 'UPDATE_MODAL_TITLE':
      return {
        ...state,
        contentInput: payload,
      };
    case 'CHANGE_TODO_CONTENT_COLOR':
      return { ...state, selectedColor: payload };
    default:
      return state;
  }
};
export default reducer;
