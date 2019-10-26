import React from 'react';
import { Comment, Image } from 'semantic-ui-react';
import Utils from '../../utils';

function getImages(array) {
  return array.map(item => {
    return <Image key={item.id} src={item.url} size='medium' />
  })
}

class SingleComment extends React.Component {
  render() {
    let { id, content, author, timestamp, attachments } = this.props.message;
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
    )
  }
}

export default SingleComment;