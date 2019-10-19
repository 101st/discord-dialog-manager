import React from 'react';
import { Comment, Header, Image, Segment } from 'semantic-ui-react';
import Utils from '../../utils';

function getImages(array) {
  return array.map(item => {
    return <Image key={item.id} src={item.url} size='medium' />
  })
}

function getGroupMessages(messagesGroup) {
  let messages = messagesGroup.map(message => {
    console.log(message)
    let { id, content, author, timestamp, attachments } = message;
    let { discriminator, username } = author;
    let date = Utils.getFormattedDate(new Date(timestamp));
    return (
      <Comment key={id}>
        <Comment.Avatar src={author.avatar ?
          `https://cdn.discordapp.com/avatars/${author.id}/${author.avatar}.png?size=128` :
          `https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png`
        } />
        <Comment.Content>
          <Comment.Author as='a'>{`${username}#${discriminator}`}</Comment.Author>
          <Comment.Metadata>
            <div>{date}</div>
          </Comment.Metadata>
          <Comment.Text>
            {content ? content : getImages(attachments)}
          </Comment.Text>
        </Comment.Content>
      </Comment>
    );
  });
  return (
    <Segment>
      <Comment.Group key={Utils.generateRandomString(5)} size='mini'>
        {messages}
      </Comment.Group>
    </Segment>
  );
}

class GuildTable extends React.Component {
  constructor(props) {
    super(props);
    this.selectMessage = this.selectMessage.bind(this);
    this.state = {
      selectedMessage: ''
    }
  }

  selectMessage() {

  }

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