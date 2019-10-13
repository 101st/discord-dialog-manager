import React from 'react'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'

const LoginForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='https://react.semantic-ui.com/logo.png' /> Enter your API Key
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='API Key'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
)

export default LoginForm