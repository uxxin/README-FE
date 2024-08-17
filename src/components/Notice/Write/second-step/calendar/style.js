import styled from "styled-components";

export const Overlay = styled.div`
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
  width: max-content;
  border-radius: 1.6rem;
  overflow: hidden;

  .react-datepicker__aria-live {
    display: none;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    font-weight: 700;

    .date-font {
      font-size: 2.8rem;
    }

    button {
      cursor: pointer;
    }
  }

  /* Calendar CSS */
  .react-datepicker {
    .react-datepicker__day-names {
      padding: 0 2rem;
      display: flex;

      .react-datepicker__day-name {
        font-size: 2.8rem;
        flex: 1;
        text-align: center;
      }

      > :first-child {
        color: var(--color-error);
      }

      > :last-child {
        color: var(--color-green);
      }
    }
    .react-datepicker__header {
      background-color: white;
      border-radius: 1.6rem 1.6rem 0 0;
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
        border-radius: 0 0 1.6rem 1.6rem;
        padding: 2rem;
        gap: 1.6rem;

        .react-datepicker__week {
          display: flex;
        }
        .react-datepicker__day {
          cursor: pointer;
          font-size: 2.4rem;
          width: 4rem;
          height: 4rem;
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
