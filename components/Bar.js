import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faClockRotateLeft,
  faClock,
  faPlay,
  faVolumeXmark,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Bar = ({ muted, onMute }) => {
  return (
    <View style={styles.container}>
      {/* Left column */}
      <View style={styles.left}>
        {/* Reset Clock */}
        <TouchableOpacity>
          <FontAwesomeIcon
            size={32}
            color={"#C4DAE9"}
            icon={faClockRotateLeft}
          />
        </TouchableOpacity>

        {/* Start / Pause */}
        <TouchableOpacity>
          <FontAwesomeIcon size={32} color={"#C4DAE9"} icon={faPlay} />
        </TouchableOpacity>
      </View>

      {/* Right column */}
      <View style={styles.right}>
        {/* Clock */}
        <TouchableOpacity>
          <FontAwesomeIcon size={32} color={"#C4DAE9"} icon={faClock} />
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
});

export default Bar;
