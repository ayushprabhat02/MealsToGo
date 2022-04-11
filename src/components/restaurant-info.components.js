import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const InfoConatiner = styled.View`
  padding-horizontal: 20px;
  padding-bottom: 20px;
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const RestaurantInfo = (restaurant = {}) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 random street",
    isOpenNow = true,
    ratting = 4,
    isClosedTermporarly,
  } = restaurant;
  return (
    <RestaurantCard elevation={5} style={{ margin: 20 }}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <InfoConatiner>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </InfoConatiner>
    </RestaurantCard>
  );
};
