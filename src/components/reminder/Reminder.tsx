import React, { useState, useReducer } from 'react';

const reminderReducer = (reminders: Array<Reminder>, action: any) => {
  switch (action.key) {
    case 'ADD':
      return [...reminders, action.payload];
    default:
      return reminders;
  }
};

const Reminder = () => {
  const [newReminder, handleChangeReminder] = useReducer(
    (state: Reminder, { target }: React.ChangeEvent<HTMLInputElement>) => ({
      ...state,
      [target.name]: target.value,
    }),
    {
      remindTo: '',
      remindIn: 0,
    }
  );

  return (
    <>
      <h2>Reminder</h2>
      <div>
        <input
          onChange={handleChangeReminder}
          name="remindTo"
          type="text"
          placeholder="remind to..."
        />
        <input
          onChange={handleChangeReminder}
          name="remindIn"
          type="text"
          placeholder="in ... mins"
        />
        <button onClick={() => console.log(newReminder)}>Set Reminder</button>
      </div>
    </>
  );
};

export interface Reminder {
  remindTo: string;
  remindIn: number;
}
export type ReminderReducer = {
  reminders: Array<Reminder & { clearInterval: number }>;
};

export interface NewReminderReducer = {
  
}
export default Reminder;
