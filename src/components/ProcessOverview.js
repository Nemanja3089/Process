import React from 'react';
import Process from "./Process";

export const ProcessOverview = (props) => {
  const { processes,fetchProcesses,stubProcesses,addProcesses,processNameChange } = props;
  console.log('dddd', processes);
  return (
    <div>
      <button onClick={fetchProcesses}>fetch</button>
      <button onClick={stubProcesses}>All datas</button>
      <div style={style}>
        {processes.map(process =>
          <Process key={process.name} process={process} />
        )}
      </div>
      <input type="text" onChange={(e)=>processNameChange(e.target.value)} />
      <button onClick={addProcesses}>Add new process</button>
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
