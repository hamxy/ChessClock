import { Pressable, StyleSheet, Text } from "react-native";
import useTimer from "../customHooks/useTimer";
import { useEffect, useState } from "react";
import { useFonts, RobotoMono_500Medium } from "@expo-google-fonts/roboto-mono";
import Sound from "../helpers/Sound";

/**
 *
 * @param {*} param0
 * @returns
 */

const Clock = ({
  initialTime,
  isActive = false,
  upsideDown = false,
  onPress,
  moves,
  isMuted,
}) => {
  /**
   * Hooks
   */
  const [time, setIsActive] = useTimer(initialTime);
  const [moveCounter, setMoveCounter] = useState(0);

  /**
   * Font
   */
  const [fontsLoaded] = useFonts({
    RobotoMono_500Medium,
  });

  /**
   * Sound
   */
  const sound = new Sound("modern");

  /**
   * Use Efects
   */
  useEffect(() => {
    setIsActive(isActive);
  }, [isActive]);

  useEffect(() => {
    setMoveCounter(moves);
  });

  useEffect(() => {
    if (time === 10000 && !isMuted) sound.tenSecondsLeft();
    if (time === 0 && !isMuted) sound.loose();
  }, [time]);

  /**
   * Function that converts time in ms and displays it formatted
   * hh:mm:ss.ms
   * @param {*} timeInMs
   * @returns - Time
   */
  const displayTime = (timeInMs) => {
    let ms = (timeInMs % 1000) / 100;
    let seconds = Math.floor(timeInMs / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    // Adjust minutes and seconds to display correct time
    minutes = minutes % 60;
    seconds = seconds % 60;

    let hoursFormat = hours > 0 ? `${hours}:` : "";
    let minutesFormat = minutes < 10 ? `0${minutes}:` : `${minutes}:`;
    let secondsFormat = seconds < 10 ? `0${seconds}` : seconds;
    let msFormat = time < 10000 ? `.${ms}` : ``;

    return `${hoursFormat}${minutesFormat}${secondsFormat}${msFormat}`;
  };

  /**
   * Handle click
   */

  const handleClick = () => {
    if (time > 0) onPress();
    if (time > 0 && isActive && !isMuted) sound.move();
  };

  return (
    <Pressable
      style={[
        styles.pressable,
        upsideDown ? styles.upsideDown : {},
        isActive ? { backgroundColor: "green" } : {},
        isActive && time < 10000 ? { backgroundColor: "orange" } : {},
        time === 0 ? { backgroundColor: "red" } : {},
      ]}
      onPress={handleClick}
    >
      <Text
        style={[
          styles.clock,
          isActive ? { color: "white" } : { color: "black" },
        ]}
      >
        {displayTime(time)}
      </Text>
      <Text
        style={[styles.moves, moves > 0 ? { opacity: 1 } : { opacity: 0 }]}
      >{`Moves: ${moveCounter}`}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#91a3b0",
  },
  clock: {
    fontSize: 70,
    fontWeight: 600,
    textAlign: "center",
    fontFamily: "RobotoMono_500Medium",
  },
  moves: {
    textAlign: "center",
    marginTop: 30,
    fontWeight: 500,
    fontSize: 20,
    fontFamily: "RobotoMono_500Medium",
  },
  upsideDown: {
    transform: [{ rotate: "180deg" }],
  },
});

export default Clock;
