export const SET_SHOW_DIVS = 'SET_SHOW_DIVS';
export const SET_FLIPPED = 'SET_FLIPPED';

export const setShowDivs = (showDivs) => ({
  type: SET_SHOW_DIVS,
  payload: showDivs,
});

export const setFlipped = (isFlipped) => ({
  type: SET_FLIPPED,
  payload: isFlipped,
});
