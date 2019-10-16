import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import { Button, Form, Grid, Header, Segment, Input } from 'semantic-ui-react';
import history from '../../../history';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.apiKeyRef = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setApiKey(this.apiKeyRef.inputRef.current.value);
    history.push('/');
  }

  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>Enter your API Key</Header>
          <Form size='large'>
            <Segment stacked>
              <Input
                value='NDE1NTQ2NTM4NDM0MTAxMjQ5.XYMYrA.5_NSUcXVOqABSDZBa0svRUDPysk'
                fluid
                ref={ref => this.apiKeyRef = ref}
                icon='lock'
                iconPosition='left'
                placeholder='API Key'
                type='password'
                style={{ marginBottom: '10px' }}
              />

              <Button onClick={this.handleSubmit} color='teal' fluid size='large'>Set Api Token</Button>
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