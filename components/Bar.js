import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faClockRotateLeft,
  faClock,
  faPlay,
  faVolumeXmark,
  faVolumeHigh,
  faPause,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const Bar = ({
  muted,
  onMute,
  gameStarted,
  gamePaused,
  gameEnded,
  onPause,
  onReset,
  onSettings,
}) => {
  return (
    <View style={styles.container}>
      {/* Left column */}
      <View style={styles.left}>
        {/* Reset Clock */}
        <TouchableOpacity
          style={gameStarted ? { display: "flex" } : { display: "none" }}
          onPress={onReset}
        >
          <FontAwesomeIcon
            size={32}
            color={"#C4DAE9"}
            icon={faClockRotateLeft}
          />
        </TouchableOpacity>

        {/* Start / Pause */}
        <TouchableOpacity
          style={
            gameStarted && !gameEnded
              ? { display: "flex" }
              : { display: "none" }
          }
          onPress={onPause}
        >
          {gamePaused ? (
            <FontAwesomeIcon size={32} color={"#C4DAE9"} icon={faPlay} />
          ) : (
            <FontAwesomeIcon size={32} color={"#C4DAE9"} icon={faPause} />
          )}
        </TouchableOpacity>
      </View>

      {/* Right column */}
      <View style={styles.right}>
        {/* Settings */}
        <TouchableOpacity onPress={onSettings}>
          <FontAwesomeIcon size={32} color={"#C4DAE9"} icon={faGear} />
        </TouchableOpacity>

        {/* Mute */}
        <TouchableOpacity onPress={onMute}>
          {muted ? (
            <FontAwesomeIcon size={32} color={"#C4DAE9"} icon={faVolumeXmark} />
          ) : (
            <FontAwesomeIcon size={32} color={"#C4DAE9"} icon={faVolumeHigh} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#43494E",
  },
  left: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 40,
    marginLeft: 30,
  },
  right: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 40,
    marginRight: 30,
  },
  icon: {
    fontSize: 30,
  },
  gameStarted: {
    opacity: 1,
  },
});

export default Bar;
