import Header from './header';
import React from 'react';
import Footer from './footer';
import AllNotes from './AllNotes';

function App() {
  return (
    <div>
      <Header heading="Note Maker"></Header>
      <AllNotes></AllNotes>
      <Footer heading="Make your notes on the go"></Footer>
      
    </div>
  );
}

export default App;
