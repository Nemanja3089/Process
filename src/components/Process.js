import React from 'react';
import Action from "./Action";

export const Process = (props) => {
  const { process } = props;
  return (
    <div>
      <div style={style}>
          <div>
            {process.name}
            {process.actions.map(action =>
              <Action key={action.name} action={action}/>
            )}
          </div>
      </div>
    </div>
  )
}

Process.propTypes = {
  process: React.PropTypes.object.isRequired
}

export default Process;

const style = {
  border: '1px solid #e5e5e5',
  borderTop: '0',
  padding: '5px 10px'
}
