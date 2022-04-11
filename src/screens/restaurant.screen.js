import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.components";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}`};
`;

const SearchBarContainer = styled.View`
  padding: 16px;
`;

export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchBarContainer>
        <Searchbar />
      </SearchBarContainer>
      <FlatList
        data={[{ name: 1 }, { name: 2 }]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 20 }}
      />
    </SafeArea>
  );
};
