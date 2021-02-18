import React from 'react';

import { Author, Questions, Quiz, Text } from './style';

interface RegisteredProps {
  name: string;
  email: string;
}
const Registereds: React.FC<RegisteredProps> = ({
  name,
  email,
}: RegisteredProps) => {
  return (
    <>
      <Quiz>
        <Author>Quiz - Lorem Ipsum</Author>
        <Text>{name}</Text>
        <Text>{email}</Text>

        <Questions>
          Lorem ipsum dolor sit amet consectetur adipisicing elit?
        </Questions>
        <Text>
          Fugit facilis odio voluptatem error molestias atque voluptates!
        </Text>
        <Questions>
          Lorem ipsum dolor sit amet consectetur adipisicing elit?
        </Questions>
        <Text>
          Asperiores et itaque, ea inventore aliquid labore illum numquam
        </Text>
        <Questions>
          Lorem ipsum dolor sit amet consectetur adipisicing elit?
        </Questions>
        <Text>doloribus aut ut voluptatem atque!</Text>
      </Quiz>
    </>
  );
};

export default Registereds;
