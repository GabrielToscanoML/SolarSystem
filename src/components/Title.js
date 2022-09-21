import React from 'react';

class Title extends React.Component {
  render() {
    const { headline } = this.props; // nao sei que erro é esse
    return (
      <div className="Title">
        <h2>{headline}</h2>
      </div>
    );
  }
}

export default Title;
