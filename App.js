
import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, Content,Card,Fab, Footer,
  FooterTab, Badge, CardItem, Button,DeckSwiper, 
  Thumbnail, Left,Right, Body, View, Text, Icon } from 'native-base';
import {Image} from 'react-native';
import { Font,AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import TabScreen from './src/screens/TabScreen';

export default class FABExample extends Component {
  /*constructor(props){
    super(props);
    this.state = {loading:true};
  }*/
  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    this.setState({ loading: false })
  }

  render() {
    return (
      <Container>
        <TabScreen />
        <Footer>
          <FooterTab>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button active badge vertical>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
        <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab>
      </Container>
    );
  }
  
}
