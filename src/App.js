import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';

import Menu from './Menu';
import Login from './Login';
import Contenedor from './Contenedor';

const App = () => (
  <Fragment>
    <Menu />
    <Container>
      <Contenedor/>
    </Container>
  </Fragment>
);

export default App;
