import React from 'react';
import { Button } from '@material-ui/core';
import { fetchAll, fetchCountries } from './model';

function MainPage() {
    console.log(fetchAll(), fetchCountries());
    
  return <Button color="primary">Hello World</Button>;
}

export default MainPage;