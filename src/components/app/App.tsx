import React from 'react';
import Reminder from 'components/reminder';

function App() {
  return (
    <main>
      <aside>Nav</aside>
      <div className="main__body">
        <Reminder />
      </div>
    </main>
  );
}

export default App;
