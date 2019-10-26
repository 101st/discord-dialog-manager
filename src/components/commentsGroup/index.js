import React from 'react';
import { connect } from 'react-redux';
import { Comment, Segment } from 'semantic-ui-react';
import * as actions from './actions';

import SingleComment from '../singleComment';

class CommentsGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGroup: null
    }
  }
  render() {
    let { commentsGroup, commentsGroupId, selectedGroupId, setCommentsGroup } = this.props;
    return (
      <Segment key={commentsGroupId} onClick={() => setCommentsGroup(commentsGroupId)}>
        <Comment.Group size='mini'>
          {commentsGroup.map((comment, key) => {
            if (commentsGroupId === selectedGroupId) {
              return <SingleComment
                key={key}
                comment={comment}
              />
            } else {
              return comment.hit && <SingleComment
                key={key}
                comment={comment}
              />
            }
          })}
        </Comment.Group>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedGroupId: state.commentsGroupReducer.get('selectedGroupId')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCommentsGroup: id => dispatch(actions.setCommentsGroup(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsGroup);