import { StyleSheet, Text, View, Modal } from "react-native";
import * as Progress from "react-native-progress";
import { orange } from "../config/colors";
import LottieView from "lottie-react-native";
import AppButton from "./AppButton";
const UploadScreen = ({
  progress = 0,
  visible = false,
  closeModalVisibility,
}) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar width={200} color={orange} progress={progress} />
        ) : (
          <>
            <LottieView
              autoSize={true}
              // style={styles.done}
              source={require("../animations/done.json")}
              autoPlay={true}
              loop={false}
            />
            <AppButton
              bgColor={orange}
              buttonAdditionalStyles={styles.button}
              title={"close"}
              onPress={closeModalVisibility}
            />
          </>
        )}
      </View>
    </Modal>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  done: {},
  button: {
    width: 100,
    marginTop: 30,
    height: 30,
    padding: 5,
    borderRadius: 10,
  },
});
