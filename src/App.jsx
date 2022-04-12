/* eslint-disable eqeqeq */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useSelector } from 'react-redux';
import Router from './Routes';
import { useEagerConnect, useInactiveListener } from './hooks';

// const isAdmin = localStorage.getItem('isAdmin') == 'true';

// console.log('isAdmin', isAdmin);

function App() {
  const [activatingConnector, setActivatingConnector] = useState();
  const { connector, active } = useWeb3React();
  const { isAdmin, isSuperAdmin } = useSelector((reducerState) => reducerState.Auth);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  if (active) {
    localStorage.setItem('shouldEagerConnect', true);
  }
  return (
    <>
      <Router isAdmin={isAdmin} isSuperAdmin={isSuperAdmin} />
    </>
  );
}

export default App;
