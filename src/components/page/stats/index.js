import React from 'react';
import { Statistic } from 'semantic-ui-react';

class Stats extends React.Component {
  render() {
    let { guildsCount } = this.props;
    const items = [
      { key: 'Guilds', label: 'Guilds', value: guildsCount },
      { key: 'Comments', label: 'Comments', value: '0' },
      { key: 'Dialogs', label: 'Dialogs', value: '0' },
    ]
    return (
      <Statistic.Group items={items} />
    )
  }
}

export default Stats;