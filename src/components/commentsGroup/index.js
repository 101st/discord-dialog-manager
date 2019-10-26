import React from 'react';
import { Comment, Header, Segment } from 'semantic-ui-react';
import SingleComment from '../singleComment';

function getGroupMessages(messagesGroup, key) {
  return (
    <Segment key={key}>
      <Comment.Group size='mini'>
        {messagesGroup.map((message, key) => <SingleComment key={key} message={message} />)}
      </Comment.Group>
    </Segment>
  );
}

class CommentsGroup extends React.Component {
  render() {
    let { messages: messagesGroupsArray, total_results } = this.props.messages;
    messagesGroupsArray = messagesGroupsArray ? messagesGroupsArray : [];
    return (
      <div>
        <Header as='h2'>Comments {total_results && `/ ${total_results}`}</Header>
        {messagesGroupsArray.map((messagesGroup, key) => getGroupMessages(messagesGroup, key))}
      </div>
    )
  }
}

export default CommentsGroup;