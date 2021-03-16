import React from 'react';

import Summary from '../Summary';
import TransictionTable from '../TransictionTable';
import { Container } from './styles';

function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransictionTable />
    </Container>
  );
}

export default Dashboard;
