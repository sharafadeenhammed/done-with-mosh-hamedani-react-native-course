import { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListCard from "../components/ListCard";
import {
  orange,
  red,
  veryLightBlue,
  veryLightGray,
  veryLightRed,
} from "../config/colors";
import listingsApi from "../api/listingsApi";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppActivityIndicator from "../components/animations/ActivityIndicator";
import useApi from "../hooks/useApi";

const ListingsScreen = ({ navigation }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const getListingsApi = useApi(listingsApi.getListings);
  useEffect(() => {
    getListings();
  }, []);
  const getListings = async () => {
    await getListingsApi.request();
  };
  return (
    <Screen>
      {getListingsApi.isError && !getListingsApi.isLodading ? (
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
      ) : null}
      {/* <ActivityIndicator color={black} animating={isLoading} size={40} /> */}
      {getListingsApi.isLodading ? (
        <AppActivityIndicator animate={getListingsApi.isLodading} />
      ) : null}
      {getListingsApi?.data?.length > 0 &&
      getListingsApi.isLodading == false &&
      getListingsApi.isError == false ? (
        <FlatList
          onRefresh={() => {
            setIsRefreshing(true);
            getListings();
            setIsRefreshing(false);
          }}
          refreshing={isRefreshing}
          style={styles.container}
          data={getListingsApi.data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ListCard
              additionalCardStyles={styles.card}
              item={item}
              onPress={() => navigation.navigate("ListingsDetails", { item })}
            />
          )}
          ItemSeparatorComponent={() => <ListItemSeperator />}
        />
      ) : null}
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
    marginBottom: 5,
  },
});
export default ListingsScreen;
