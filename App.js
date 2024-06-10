import { StyleSheet, Text, View, Alert } from "react-native";
import Clock from "./components/Clock";
import { useState } from "react";
import Bar from "./components/Bar";
import { StatusBar } from "expo-status-bar";
import SettingsModal from "./components/SettingsModal";

export default function App() {
  const [active, setActive] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gamePaused, setGamePaused] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [topMoves, setTopMoves] = useState(0);
  const [bottomMoves, setBottomMoves] = useState(0);
  const [isMuted, setMuted] = useState(false);
  const [time, setTime] = useState(15000);
  const [reset, setReset] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  /**
   * Top Clock handler
   */
  const handleTopClock = () => {
    if (!gamePaused) {
      if (gameStarted && active === "top") {
        setTopMoves((moves) => (moves += 1));
      }
      setActive("bottom");
    }
    if (!gameStarted) setGameStarted(true);
  };

  /**
   * Bottom Clock handler
   */
  const handleBottomClock = () => {
    if (!gamePaused) {
      if (gameStarted && active === "bottom") {
        setBottomMoves((moves) => (moves += 1));
      }
      setActive("top");
    }

    if (!gameStarted) setGameStarted(true);
  };

  /**
   * Mute handler
   */
  const handleMuted = () => {
    setMuted(!isMuted);
  };

  /**
   * Pause handler
   */
  const handlePause = () => {
    setGamePaused(!gamePaused);
  };

  /** Reset alert */
  const resetAlert = () => {
    if (gameStarted && !gameEnded) {
      Alert.alert(
        "Reset",
        "Do you want to reset timer?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => handleReset() },
        ],
        {
          cancelable: true,
          onDismiss: () => console.log("Alert dismissed"),
        }
      );
    } else {
      handleReset();
    }
  };

  /** Reset handler */
  const handleReset = () => {
    setReset((reset) => reset + 1);
    setGameStarted(false);
    setBottomMoves(0);
    setTopMoves(0);
    setActive(null);
    setGamePaused(false);
    setGameEnded(false);
  };

  /** Settings handler */
  const handleSettings = () => {
    setIsModalVisible(true);
  };

  /** Close Modal */
  const onClose = () => {
    setIsModalVisible(false);
  };

  /** On game End */
  const onGameEnd = () => {
    setGameEnded(true);
  };

  return (
    <>
      <SettingsModal visible={isModalVisible} onClose={onClose} />
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Clock
          initialTime={time}
          reset={reset}
          upsideDown={true}
          isActive={active === "top" && !gamePaused ? true : false}
          onPress={handleTopClock}
          gameStarted={gameStarted}
          onGameEnd={onGameEnd}
          moves={topMoves}
          isMuted={isMuted}
        />
        <Bar
          muted={isMuted}
          onMute={handleMuted}
          gameStarted={gameStarted}
          gameEnded={gameEnded}
          gamePaused={gamePaused}
          onPause={handlePause}
          onReset={resetAlert}
          onSettings={handleSettings}
        />
        <Clock
          initialTime={time}
          reset={reset}
          isActive={active === "bottom" && !gamePaused ? true : false}
          onPress={handleBottomClock}
          gameStarted={gameStarted}
          onGameEnd={onGameEnd}
          moves={bottomMoves}
          isMuted={isMuted}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
