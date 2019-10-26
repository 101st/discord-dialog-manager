import React from 'react';
import { Comment, Header, Segment } from 'semantic-ui-react';
import SingleComment from '../singleComment';

function getGroupMessages(messagesGroup, key) {
  return (
    <Segment>
      <Comment.Group key={key} size='mini'>
        {messagesGroup.map(message => <SingleComment message={message} />)}
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
        {messagesGroupsArray.map((messagesGroup, key) => {
          return getGroupMessages(messagesGroup, key);
        })}
      </div>
    )
  }
}

export default CommentsGroup;