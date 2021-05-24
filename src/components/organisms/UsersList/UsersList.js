import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles.js';

const UsersList = () => (
  <Wrapper>
    <StyledList>
      <div>
        {users.map((userData) => (
          <UsersListItem userData={userData} />
        ))}
      </div>
    </StyledList>
  </Wrapper>
);

export default UsersList;
