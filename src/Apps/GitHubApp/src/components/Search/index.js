import React from 'react';

import { Search} from './styles';

function Seearch({handleSearch, isDisabled}) {
  return (
    
    <Search 
          disabled={isDisabled}
          type="search" 
          placeholder="Digite aqui o Usuario"
          onKeyUp={handleSearch}
          
          />
        

  );
}

export default Seearch;