import styled from 'styled-components';

export const Overlay = styled.div`
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  width: 100vw;
  height: 100vh;
`;

export const CalendarStyled = styled.div`
  max-width: 20.5rem;
  border-radius: 0.625rem;
  overflow: hidden;

  .react-datepicker__aria-live {
    display: none;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem 1.13rem;

    button {
      cursor: pointer;
      padding: 0;
      border: none;
      background-color: #ffffff;

      &:disabled {
        color: var(--color-disabled);
      }
    }
  }

  /* Calendar CSS */
  .react-datepicker {
    .react-datepicker__day-names {
      padding: 0 1rem;
      display: flex;
      gap: 1.33rem;

      .react-datepicker__day-name {
        flex: 1;
        text-align: center;
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 100%;
        max-width: 1.375rem;

        &:first-child {
          color: var(--color-danger);
        }
        &:last-child {
          color: var(--color-primary-normal);
        }
      }
    }
    .react-datepicker__header {
      background-color: white;
      border-radius: 0.625rem 0.625rem 0 0;
      border-bottom: none;
    }
    .react-datepicker__month-container {
      .react-datepicker__day--outside-month {
        color: rgb(163, 163, 163);
      }
      .react-datepicker__day--outside-month.react-datepicker__day--disabled,
      .react-datepicker__day--disabled {
        color: #ccc !important;
      }
      .react-datepicker__month {
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        border-radius: 0 0 0.625rem 0.625rem;
        padding: 1rem;
        gap: 1rem;

        .react-datepicker__week {
          display: flex;
          gap: 1.33rem;
        }
        .react-datepicker__day {
          cursor: pointer;
          font-size: 1.125rem;
          font-weight: 500;
          line-height: 100%;
          width: 1.375rem;
          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            border-radius: 100%;
            background-color: var(--color-yellow-2);
          }
        }
        .react-datepicker__day--today,
        .react-datepicker__day--keyboard-selected {
          border-radius: 100%;
          font-weight: 400;
        }
        .react-datepicker__day--selected,
        .react-datepicker__day--in-range,
        .react-datepicker__day--in-selecting-range {
          border-radius: 100%;
          background-color: var(--color-yellow-2);
        }
      }
    }
  }
`;
