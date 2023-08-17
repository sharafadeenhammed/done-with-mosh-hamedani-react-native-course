import { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListCard from "../components/ListCard";
import {
  green,
  orange,
  red,
  veryLightBlue,
  veryLightGray,
  veryLightRed,
} from "../config/colors";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/animations/ActivityIndicator";

const ListingsScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getListings();
  }, []);

  const getListings = async () => {
    setIsLoading(true);
    setIsError(false);
    const response = await listingsApi.getListings();
    setIsLoading(false);
    if (!response.ok) return setIsError(true);
    setListings(response.data);
  };
  return (
    <Screen>
      {isError && (
        <View
          style={{
            ...styles.container,
            justifyContent: "center",
            marginTop: 100,
            alignItems: "center",
          }}
        >
          <AppText
            style={{
              color: red,
              fontSize: 30,
              backgroundColor: veryLightRed,
              padding: 10,
              borderRadius: 5,
              marginBottom: 40,
            }}
            text="Failed to load listings"
          />
          <View style={{ width: "50%" }}>
            <AppButton bgColor={orange} title="retry" onPress={getListings} />
          </View>
        </View>
      )}
      {/* <ActivityIndicator color={black} animating={isLoading} size={40} /> */}
      {isLoading && <ActivityIndicator animate={isLoading} />}
      <FlatList
        onRefresh={() => {
          setIsRefreshing(true);
          getListings();
          setIsRefreshing(false);
        }}
        refreshing={isRefreshing}
        style={styles.container}
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListCard
            additionalCardStyles={styles.card}
            item={item}
            onPress={() => navigation.navigate("ListingsDetails", { item })}
          />
        )}
        ItemSeparatorComponent={() => (
          <ListItemSeperator additionalSeperatorStyles={styles.listSeperator} />
        )}
      />
    </Screen>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: veryLightBlue,
    borderRadius: 10,
  },
  container: {
    paddingHorizontal: 15,
    backgroundColor: veryLightGray,
    marginBottom: 70,
  },
  listSeperator: {
    backgroundColor: green,
  },
});
export default ListingsScreen;
