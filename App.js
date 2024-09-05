import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <View style={styles.container}>
        <Pressable
          style={styles.Pressable}
          onPress={() => setShowModal(true)}
        >
          <Text style={styles.message}>Show Modal Message</Text>
        </Pressable>
      </View>
      <Modal
        visible={showModal}
        transparent={false} 
        animationType="slide" 
        style={styles.modal}
      >
        <View style={styles.modal}>
          <Text style = {styles.modalText}>This is modal...</Text>
          <Pressable onPress={() => setShowModal(false)}>
            <Text style = {styles.modalTextButton}>Close</Text>
          </Pressable>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Pressable: {
    alignItems: "center",
    justifyContent: "center"
  },
  modal: {
    marginTop: 100,
    backgroundColor: "white",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 20,
    backgroundColor: "rgb(240, 240, 240)"
  },
  message: {
    fontSize: 18,
    margin: 16
  },
  modalText: {
    marginBottom: 30,
  },
  modalTextButton: {
    fontWeight: 'bold'
  }
});
