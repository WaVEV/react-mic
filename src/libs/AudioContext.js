let audioCtx;
let analyser;

const AudioContext  = {

  getAudioContext() {
    if(audioCtx === undefined){
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
  },

  getAnalyser() {
    if(audioCtx === undefined){
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if(analyser === undefined){
        analyser = audioCtx.createAnalyser();
    }
    return analyser;
  },

  resetAnalyser() {
    analyser = audioCtx.createAnalyser();
  },

  decodeAudioData() {
    audioCtx.decodeAudioData(audioData).then(function(decodedData) {
      // use the decoded data here
    });
  }

}

export default AudioContext;