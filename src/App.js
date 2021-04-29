import React, { useState } from 'react';
import data from './data';
import List from './List';
import styled from 'styled-components'


function App() {
  const [person, setPerson] = useState(data)

  return <Main>
    <section className="container">
      <h3>{person.length} birthdays today</h3>
      <List person={person} />
      <button type="button" onClick={() => setPerson([])}>
        clear all
      </button>
    </section>
  </Main>
}

const Main = styled.section`
  min-height: 100vh;
  display: flex;
  align-items:center;
  justify-content:center;

.container{
  padding: 1.5rem 2rem;
  border-radius: var(--radius);
  background: var(--clr-white);
  width: var(--fixed-width);
  box-shadow: var(--dark-shadow);
h3{
  font-weight: normal;
  text-transform: none;
  margin-bottom: 2rem;
}
button{
  display: block;
  width: 100%;
  border-color: transparent;
  padding: 0.5rem 0;
  text-transform: capitalize;
  font-size: 1.2rem;
  letter-spacing: var(--spacing);
  cursor: pointer;
  border-radius: var(--radius);
  outline: 1px solid rgba(242, 138, 178, 0.8);
  background: var(--clr-pink);
  margin: 2rem auto 0 auto;
  color: var(--clr-white);
}
}

`

export default App;
