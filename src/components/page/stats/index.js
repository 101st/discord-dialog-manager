import React from 'react';
import { Statistic } from 'semantic-ui-react';

class Stats extends React.Component {
  render() {
    let { guildsCount, channelsCount } = this.props;
    const items = [
      { key: 'Guilds', label: 'Guilds', value: guildsCount },
      { key: 'Dialogs', label: 'Dialogs', value: channelsCount },
    ]
    return (
      <Statistic size='mini'><Statistic.Group size='mini' items={items} /></Statistic>

    )
  }
}

export default Stats;