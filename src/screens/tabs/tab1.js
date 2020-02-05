import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class ListThumbnailExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://img.etoday.co.kr/pto_db/2019/05/600/20190509101921_1327086_733_766.jpg' }} />
              </Left>
              <Body>
                <Text>ChampionsLeague Final</Text>
                <Text note numberOfLines={2}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://img.etoday.co.kr/pto_db/2019/05/600/20190509101921_1327086_733_766.jpg' }} />
              </Left>
              <Body>
                <Text>ChampionsLeague Final</Text>
                <Text note numberOfLines={2}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://img.etoday.co.kr/pto_db/2019/05/600/20190509101921_1327086_733_766.jpg' }} />
              </Left>
              <Body>
                <Text>ChampionsLeague Final</Text>
                <Text note numberOfLines={2}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://img.etoday.co.kr/pto_db/2019/05/600/20190509101921_1327086_733_766.jpg' }} />
              </Left>
              <Body>
                <Text>ChampionsLeague Final</Text>
                <Text note numberOfLines={2}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
