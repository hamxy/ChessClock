import { Audio } from "expo-av";

const audioFiles = {
  moves: {
    modern: require("../assets/audio/modernMove.mp3"),
  },
  start: require("../assets/audio/classicMove.mp3"),
  tenSecondsLeft: require("../assets/audio/tenSecondsLeft.mp3"),
  loose: require("../assets/audio/loose.mp3"),
};

class Sound {
  constructor(style) {
    this.soundObject = new Audio.Sound();
    this.style = style;
    this.initAudioMode();
  }

  async initAudioMode() {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: false,
        staysActiveInBackground: false,
      });
    } catch (error) {
      console.error("Failed to set audio mode:", error);
    }
  }

  async start() {
    try {
      await this.soundObject.loadAsync(audioFiles.start);
      await this.soundObject.playAsync();
    } catch (error) {
      // An error occurred!
    }
  }

  async move() {
    try {
      await this.soundObject.loadAsync(audioFiles.moves[this.style]);
      await this.soundObject.playAsync();
    } catch (error) {
      // An error occurred!
    }
  }

  async tenSecondsLeft() {
    try {
      await this.soundObject.loadAsync(audioFiles.tenSecondsLeft);
      await this.soundObject.playAsync();
    } catch (error) {
      // An error occurred!
    }
  }

  async loose() {
    try {
      await this.soundObject.loadAsync(audioFiles.loose);
      await this.soundObject.playAsync();
    } catch (error) {
      // An error occurred!
    }
  }
}

export default Sound;
