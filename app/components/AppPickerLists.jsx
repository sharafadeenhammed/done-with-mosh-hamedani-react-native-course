import { FlatList, View, StyleSheet, Modal } from "react-native";
import ListItemSeperator from "./ListItemSeperator";
import PickerItem from "./PickerItem";
import AppText from "./AppText";
import { blue } from "../config/colors";
const AppPickerList = ({
  listData,
  modalAdditionalStyles,
  modalVisibility = false,
  closeModal,
  setPickervalue,
  title,
  pickerValueField,
}) => {
  return (
    <Modal animationType="slide" visible={modalVisibility}>
      <AppText text={title} style={styles.title} />
      <View style={[styles.container, modalAdditionalStyles]}>
        <FlatList
          data={listData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PickerItem
              title={item.title}
              onPress={() => {
                setPickervalue(item[pickerValueField]);
                closeModal();
              }}
            />
          )}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginVertical: 30,
    color: blue,
  },
});

export default AppPickerList;
