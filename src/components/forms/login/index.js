import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.apiKeyRef = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setApiKey(this.apiKeyRef.current.value);
    
  }

  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='https://react.semantic-ui.com/logo.png' /> Enter your API Key
      </Header>
          <Form size='large'>
            <Segment stacked>
              <input
                ref={this.apiKeyRef}
                placeholder='API Key'
                type='password'
              />

              <Button onClick={this.handleSubmit} color='teal' fluid size='large'>
                Set Api Token
          </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    apiKey: state.formsLoginReducer.get('apiKey')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setApiKey: apiKey => dispatch(actions.setApiKey(apiKey))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);