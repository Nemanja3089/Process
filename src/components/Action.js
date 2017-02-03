import React from 'react';

export const Action = (props) => {
  const { action } = props;
  return (
    <div>
      <div style={style.div}>
          <div>
          <ul style={style.ul}>
            <li>{action.name}</li>
            <li>{action.type}</li>
          </ul>
          </div>
      </div>
    </div>
  )
}

Action.propTypes = {
  action: React.PropTypes.object.isRequired
}

export default Action;

const style = {
  div: {
    border: '1px solid #e5e5e5',
    borderTop: '0',
    padding: '5px 10px'
  },
  ul: {
    listStyleType: 'none'
  }
}
