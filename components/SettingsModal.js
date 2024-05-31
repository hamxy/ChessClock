import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";

const SettingsModal = ({ modalVisible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ScrollView style={{ width: "100%", backgroundColor: "green" }}>
            <Text style={styles.modalText}>Select Time:</Text>
            <Button title="Close" onPress={onClose} />
            <Text style={styles.modalText}>Select Time:</Text>
            <Button title="Close" onPress={onClose} />
            <Text style={styles.modalText}>Select Time:</Text>
            <Button title="Close" onPress={onClose} />
            <Text style={styles.modalText}>Select Time:</Text>
            <Button title="Close" onPress={onClose} />
            <Text style={styles.modalText}>Select Time:</Text>
            <Button title="Close" onPress={onClose} />
            <Text style={styles.modalText}>Select Time:</Text>
            <Button title="Close" onPress={onClose} />
            <Text style={styles.modalText}>Select Time:</Text>
            <Button title="Close" onPress={onClose} />
            <Text style={styles.modalText}>Select Time:</Text>
            <Button title="Close" onPress={onClose} />
            <Text style={styles.modalText}>Select Time:</Text>
            <Button title="Close" onPress={onClose} />
            <Text style={styles.modalText}>Select Time:</Text>
            <Button title="Close" onPress={onClose} />
            <Text style={styles.modalText}>Select Time:</Text>
            <Button title="Close" onPress={onClose} />
            <Text style={styles.modalText}>Select Time:</Text>
            <Button title="Close" onPress={onClose} />
            <Text style={styles.modalText}>Select Time:</Text>
            <Button title="Close" onPress={onClose} />
            <Text style={styles.modalText}>Select Time:</Text>
            <Button title="Close" onPress={onClose} />
            <Text style={styles.modalText}>Select Time:</Text>
            <Button title="Close" onPress={onClose} />
            <Text style={styles.modalText}>Select Time:</Text>
            <Button title="Close" onPress={onClose} />
            <Text style={styles.modalText}>Select Time:</Text>
            <Button title="Close" onPress={onClose} />
            <Text style={styles.modalText}>Select Time:</Text>
            <Button title="Close" onPress={onClose} />
            <Text style={styles.modalText}>Select Time:</Text>
            <Button title="Close" onPress={onClose} />
            <Text style={styles.modalText}>Select Time:</Text>
            <Button title="Close" onPress={onClose} />
            <Text style={styles.modalText}>Select Time:</Text>
            <Button title="Close" onPress={onClose} />
            <Text style={styles.modalText}>Select Time:</Text>
            <Button title="Close" onPress={onClose} />
            <Text style={styles.modalText}>Select Time:</Text>
            <Button title="Close" onPress={onClose} />
            <Text style={styles.modalText}>Select Time:</Text>
            <Button title="Close" onPress={onClose} />
            <Text style={styles.modalText}>Select Time:</Text>
            <Button title="Close" onPress={onClose} />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalView: {
    margin: 10,
    backgroundColor: "red",
    borderRadius: 20,
    padding: 20,
    width: "100%",
    height: "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default SettingsModal;
