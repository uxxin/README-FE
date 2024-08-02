import { SET_SHOW_DIVS, SET_FLIPPED } from './NoticeActions';

const initialState = {
  showDivs: false,
  isFlipped: false,
};

const NoticeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOW_DIVS:
      return { ...state, showDivs: action.payload };
    case SET_FLIPPED:
      return { ...state, isFlipped: action.payload };
    default:
      return state;
  }
};

export default NoticeReducer;
