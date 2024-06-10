import { useFonts, RobotoMono_500Medium } from "@expo-google-fonts/roboto-mono";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const SettingsModal = ({ visible, onClose }) => {
  /** Font */
  const [fontsLoaded] = useFonts({
    RobotoMono_500Medium,
  });

  /** */
  const data = [
    { key: "5", text: "5 min" },
    { key: "10", text: "10 min" },
    { key: "15", text: "15 min" },
    { key: "20", text: "20 min" },
    { key: "25", text: "25 min" },
    { key: "30", text: "30 min" },
    { key: "45", text: "45 min" },
    { key: "60", text: "60 min" },
  ];

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>Select Time:</Text>
          </View>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View style={styles.timeItem}>
                <Text style={styles.buttonText}>{item.text}</Text>
              </View>
            )}
            keyExtractor={(item) => item.key}
            numColumns={2}
            contentContainerStyle={styles.timeContainer}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    margin: 0,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalView: {
    margin: 10,
    backgroundColor: "#43494E",
    borderRadius: 25,
    padding: 40,
    width: "100%",
    height: "90%",
    alignItems: "center",
    marginBottom: 0,
  },
  titleView: {
    marginBottom: 10,
  },
  titleText: {
    color: "#C4DAE9",
    fontSize: 32,
    fontFamily: "RobotoMono_500Medium",
  },
  timeContainer: {
    backgroundColor: "green",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 30,
  },
  timeItem: {
    margin: 5,
  },
  buttonText: {
    fontFamily: "RobotoMono_500Medium",
    fontSize: 27,
    backgroundColor: "#C4DAE9",
    color: "#43494E",
    borderColor: "#C4DAE9",
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
});

export default SettingsModal;
