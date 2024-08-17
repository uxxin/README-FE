import { CalendarStyled, Overlay } from './style';
import React, { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale/ko';
import { createPortal } from 'react-dom';
import { ReactComponent as ArrowLeft } from '../../../../../assets/svgs/back_button.svg';
import { ReactComponent as ArrowRight } from '../../../../../assets/svgs/arrow_right.svg';
import { addDays } from 'date-fns';

export default function Calendar({ date, type, setDate, open, handleClose }) {
  const isStartDate = type === 'startDate';
  const startDate = isStartDate ? date.startDate : date.endDate;
  const minDate = isStartDate
    ? new Date()
    : (date.startDate && addDays(`20${date.startDate}`, 1)) || new Date();
  const newDate = startDate ? new Date(`20${startDate}`) : new Date();
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

  useEffect(activeColor, []);

  return (
    open &&
    createPortal(
      <Overlay>
        <CalendarStyled>
          <DatePicker
            onClickOutside={handleClose}
            dateFormatCalendar="yyyy년 MM월"
            selected={newDate}
            onChange={handleSelectDate}
            startDate={newDate ?? new Date()}
            locale={ko}
            inline
            onMonthChange={activeColor}
            minDate={minDate}
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
                <div className="bold-20">
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
