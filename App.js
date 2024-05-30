import { StyleSheet, Text, View } from "react-native";
import Clock from "./components/Clock";
import { useState } from "react";
import Bar from "./components/Bar";
import { StatusBar } from "expo-status-bar";
import { faL } from "@fortawesome/free-solid-svg-icons";

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

  /** On game End */
  const onGameEnd = () => {
    setGameEnded(true);
  };

  return (
    <>
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
          onReset={handleReset}
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
