import React from 'react';
import { Comment, Header, Segment } from 'semantic-ui-react';
import Utils from '../../utils';
import SingleComment from '../singleComment';

function getGroupMessages(messagesGroup) {
  let messages = messagesGroup.map(message => <SingleComment message={message} />);
  return (
    <Segment>
      <Comment.Group key={Utils.generateRandomString(5)} size='mini'>
        {messages}
      </Comment.Group>
    </Segment>
  );
}

class GuildTable extends React.Component {
  render() {
    let { messages: messagesGroupsArray, total_results } = this.props.messages;
    messagesGroupsArray = messagesGroupsArray ? messagesGroupsArray : [];
    let result = messagesGroupsArray.map(messagesGroup => {
      return getGroupMessages(messagesGroup);
    });
    return (
      <div>
        <Header as='h2'>Comments {total_results && `/ ${total_results}`}</Header>
        {result}
      </div>
    )
  }
}

export default GuildTable;