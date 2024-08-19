import {
  SET_SHOW_DIVS,
  SET_FLIPPED,
  SET_ISROTATED,
  SET_ROOMTITLE,
} from './NoticeActions';

const initialState = {
  showDivs: false,
  isFlipped: false,
  isRotated: true,
  roomTitle: '',
};

const NoticeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOW_DIVS:
      return { ...state, showDivs: action.payload };
    case SET_FLIPPED:
      return { ...state, isFlipped: action.payload };
    case SET_ISROTATED:
      return { ...state, isRotated: action.payload };
    case SET_ROOMTITLE:
      return { ...state, roomTitle: action.payload };
    default:
      return state;
  }
};

export default NoticeReducer;
