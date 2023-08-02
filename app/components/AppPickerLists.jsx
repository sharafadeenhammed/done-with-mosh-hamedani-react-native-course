import { FlatList, View, StyleSheet, Modal } from "react-native";
import ListItemSeperator from "./ListItemSeperator";
import PickerItem from "./PickerItem";
import AppText from "./AppText";
import { blue, green } from "../config/colors";
import CatetegoryPickerItem from "./CatetegoryPickerItem";
const AppPickerList = ({
  listData,
  modalAdditionalStyles,
  modalVisibility = false,
  closeModal,
  setPickedvalue,
  numofColumn = 1,
  categoryPickerItem,
  title,
  pickerValueField,
}) => {
  return (
    <Modal animationType="slide" visible={modalVisibility}>
      <AppText text={title || "select item category"} style={styles.title} />
      <View style={[styles.container, modalAdditionalStyles]}>
        <FlatList
          data={listData}
          numColumns={numofColumn}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return categoryPickerItem && numofColumn > 1 ? (
              <CatetegoryPickerItem
                item={item}
                onPress={() => {
                  setPickedvalue(item[pickerValueField]);
                  closeModal();
                }}
              />
            ) : (
              <PickerItem
                item={item}
                onPress={() => {
                  setPickedvalue(item[pickerValueField]);
                  closeModal();
                }}
              />
            );
          }}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginVertical: 30,
    color: green,
  },
});

export default AppPickerList;
