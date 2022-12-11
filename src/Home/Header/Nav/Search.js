/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function FreeSolo({data}) {
  if(data !== undefined && data !== null && data.length !== 0){
    console.log(data);
    return (
      <div style={{ width: "100%" }}>
        
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={data.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: 'search' }}
            />
          )}
        />
      </div>
    );
  }
  else{
    return(
      <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      options={[]}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search input"
          margin="normal"
          variant="outlined"
          InputProps={{ ...params.InputProps, type: 'search' }}
        />
      )}
    />
    )
    
  }
  
}
