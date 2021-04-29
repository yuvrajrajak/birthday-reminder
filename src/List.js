import React from 'react';
import styled from 'styled-components'

const List = ({ person }) => {
  return (
    <Wrapper>
      {
        person.map((persons) => {
          const { id, name, image, age } = persons;
          return (
            <article key={id} className="person-container">
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age}</p>
              </div>
            </article>
          )
        })
      }
    </Wrapper>
  );
};

const Wrapper = styled.section`
.person-container{
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 0.75rem;
  margin-bottom: 1.5rem;
  align-items: center;
  img{
    object-fit: cover;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    box-shadow: var(--light-shadow);
  }
}


`

export default List;
