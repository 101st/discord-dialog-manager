import React from 'react';
import { Comment, Header } from 'semantic-ui-react';

class GuildTable extends React.Component {
  render() {
    let { messages, total_results } = this.props.messages;
    messages = messages ? messages.flat(1) : [];
    messages = messages.map(message => {
      let { id, content } = message;
      return (
        <Comment key={message.id}>
          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Matt</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>
              {content}
            </Comment.Text>
          </Comment.Content>
        </Comment>
      )
    });
    return (
      <Comment.Group>
        <Header as='h2'>Comments</Header>
        {messages}
      </Comment.Group>
    )
  }
}

export default GuildTable;