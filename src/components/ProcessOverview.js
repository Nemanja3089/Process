import React from 'react';

export const ProcessOverview = (props) => {
  const { processes,fetchProcesses } = props;
  return (
    <div>
      <button onClick={fetchProcesses}>fetch</button>
      <div style={style}>
        {processes.map(process =>
          <div key={process.name} >
            {process.name}
          </div>
        )}
      </div>
    </div>
  )
}

ProcessOverview.propTypes = {
  processes: React.PropTypes.array.isRequired
}

export default ProcessOverview;

const style = {
  display: 'flex',
  flexDirection: 'row',
  flexFlow: 'row wrap',
  justifyContent: 'flex-start'
}
