import { CalendarStyled, Overlay } from 'components/Calendar/style';
import React, { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale/ko';
import { createPortal } from 'react-dom';
import { ReactComponent as ArrowRight } from 'assets/common/icon_chevron_right.svg';
import { ReactComponent as ArrowLeft } from 'assets/common/icon_chevron_left.svg';

export default function Calendar({ date, setDate, open, handleClose }) {
  date = new Date(date ?? new Date());
  const activeColor = () => {
    const outsideMonth = document.querySelectorAll(
      '.react-datepicker__day--outside-month',
    );
    Object.values(outsideMonth).map((day) => (day.style.color = '#A3A3A3'));
  };

  const handleSelectDate = (date) => {
    handleClose();
    setDate(date);
  };

  const handleReset = () => {
    handleClose(true);
  };

  useEffect(activeColor, []);

  return (
    open &&
    createPortal(
      <Overlay
        onTouchStart={(e) => {
          e.stopPropagation();
        }}
      >
        <CalendarStyled>
          <DatePicker
            onClickOutside={handleReset}
            dateFormatCalendar="yyyy년 MM월"
            selected={date}
            onChange={handleSelectDate}
            startDate={date ?? new Date()}
            locale={ko}
            inline
            onMonthChange={activeColor}
            minDate={new Date()}
            renderCustomHeader={({
              date,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div className="container">
                <button
                  type="button"
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                >
                  <ArrowLeft />
                </button>
                <div className="date-font">
                  {date.getFullYear()}년 {date.getMonth() + 1}월
                </div>
                <button
                  type="button"
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                >
                  <ArrowRight />
                </button>
              </div>
            )}
          />
        </CalendarStyled>
      </Overlay>,
      document.body,
    )
  );
}
