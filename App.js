import { StyleSheet, Text, View } from "react-native";
import Clock from "./components/Clock";
import { useState } from "react";
import Bar from "./components/Bar";

export default function App() {
  const [active, setActive] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [topMoves, setTopMoves] = useState(0);
  const [bottomMoves, setBottomMoves] = useState(0);
  const [isMuted, setMuted] = useState(false);

  /**
   * Top Clock handler
   */
  const handleTopClock = () => {
    if (gameStarted && active === "top") {
      setTopMoves((moves) => (moves += 1));
    }
    setActive("bottom");
    setGameStarted(true);
  };

  /**
   * Bottom Clock handler
   */
  const handleBottomClock = () => {
    if (gameStarted && active === "bottom") {
      setBottomMoves((moves) => (moves += 1));
    }
    setActive("top");
    setGameStarted(true);
  };

  /**
   * Mute handler
   */

  const handleMuted = () => {
    setMuted(!isMuted);
  };

  return (
    <View style={styles.container}>
      <Clock
        initialTime={900000}
        upsideDown={true}
        isActive={active === "top" ? true : false}
        onPress={handleTopClock}
        moves={topMoves}
        isMuted={isMuted}
      />
      <Bar muted={isMuted} onMute={handleMuted} />
      <Clock
        initialTime={900000}
        isActive={active === "bottom" ? true : false}
        onPress={handleBottomClock}
        moves={bottomMoves}
        isMuted={isMuted}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
