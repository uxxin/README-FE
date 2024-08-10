export const SET_SHOW_DIVS = 'SET_SHOW_DIVS';
export const SET_FLIPPED = 'SET_FLIPPED';
export const SET_ISROTATED = 'SET_ISROTATED';
export const SET_PAGE = 'SET_PAGE';

export const setShowDivs = (showDivs) => ({
  type: SET_SHOW_DIVS,
  payload: showDivs,
});

export const setFlipped = (isFlipped) => ({
  type: SET_FLIPPED,
  payload: isFlipped,
});

export const setIsRotated = (isRotated) => ({
  type: SET_ISROTATED,
  payload: isRotated,
});

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});
