<script setup>

</script>

<template>
  <div class="form-control">
    <label for="videoId">動画ID</label>
    <input type="text" class="form-control" id="videoId" placeholder="sm34359096" value="sm34359096" ref="videoId" />
    <label for="loopStart">ループ開始</label>
    <input type="number" class="form-control" id="loopStart" placeholder="秒" ref="loopStart" value="11" />
    <label for="loopEnd">ループ終了</label>
    <input type="number" class="form-control" id="loopEnd" placeholder="秒" ref="loopEnd" value="69.9" />
    <label for="speed">速度</label>
    <input type="number" class="form-control" id="speed" placeholder="倍" ref="speed" value="1.0" />
  </div>
  <div class="d-flex flex-row">
    <button type="button" class="btn btn-primary m-3" @click="playAudio">Play Audio</button>
    <button type="button" class="btn btn-primary m-3" @click="stopAudio">Stop Audio</button>
    <button type="button" class="btn btn-primary m-3" @click="playAudio_Loop">Play Audio Loop</button>
    <button type="button" class="btn btn-primary m-3" @click="playAudio_SeamlessLoop">Play Audio SeamlessLoop</button>
  </div>
  <div class="d-flex flex-row">
    <button type="button" class="btn btn-warning m-3" @click="changeAudioSpeed(this.$refs.speed.value)">Change Speed</button>
    <button type="button" class="btn btn-primary m-3" @click="this.changeAudioSpeed(2.0)">Change Speed ×2</button>
    <button type="button" class="btn btn-primary m-3" @click="changeAudioSpeed(3.0)">Change Speed ×3</button>
    <button type="button" class="btn btn-dark m-3" @click="changeAudioSpeed(1.0)">Reset Speed</button>
  </div>
  <button class="btn btn-danger" @click="NV_CorsBypass()">NV_CorsBypass</button>
  <button class="btn btn-danger" @click="YT_ABLoop()">YT_ABLoop</button>
</template>

<style scoped lang="scss">

</style>
<script lang="ts">
import {NodeNicoMusic} from "@/script/lib/node-nicomusic";
const audioContext = new AudioContext();
let audioSource:AudioBufferSourceNode = null;
export default {
  data() {
    return {
      audioSpeed: 1.0,
    }
  },
  methods: {
    YT_ABLoop: function () {
      let ytablFrm = document.getElementById('YT_ABLoop-IFrame')
      if (!ytablFrm) ytablFrm = document.createElement('iframe')
      ytablFrm.id = 'YT_ABLoop-IFrame'
      ytablFrm.src = 'https://www.youtube.com/embed/iKdHiLzBf34?si=cn0LvNda5w-iXwux&start='+this.$refs.loopStart.value+'&end='+this.$refs.loopEnd.value +
      '&autoplay=1&loop=1&mute=0&controls=0&disablekb=1&fs=0&playlist=iKdHiLzBf34'
      ytablFrm.allow = 'autoplay;'
      document.body.append(ytablFrm);
    },
    NV_CorsBypass: function () {
      let nvcbElm = document.getElementById('NV_CorsBypass');
      if (!nvcbElm) nvcbElm = document.createElement('iframe');
      nvcbElm.src = "https://www.nicovideo.jp/api/watch/v3_guest/sm34359096?_frontendId=0&_frontendVersion=0&actionTrackId=0_0";
      nvcbElm.id = "NV_CorsBypass";
      document.body.append(nvcbElm);
      document.getElementById("NV_CorsBypass").onload = () => {
        console.log(document.getElementById("NV_CorsBypass"))
      }
    },
    changeAudioSpeed: function (speed) {
      console.log("changeAudioSpeed")
      if (audioSource === null) return;
      audioSource.playbackRate.value = speed;
    },
    playAudio_SeamlessLoop: function () {
      console.log("playAudio_SeamlessLoop")
      this.stopAudio();
      this.loadAudio(this.$refs.videoId.value).then(() => {
        audioSource.loop = true;
        audioSource.loopStart = this.$refs.loopStart.value;
        audioSource.loopEnd = this.$refs.loopEnd.value;
        audioSource.start(0);
      });
    },
    playAudio_Loop: function () {
      console.log("playAudio_Loop")
      this.stopAudio();
      this.loadAudio('sm34359096').then(() => {
        audioSource.loop = true;
        audioSource.start(0);
      });
    },
    playAudio: function () {
      console.log("playAudio")
      this.loadAudio('sm34359096').then(() => {
        audioSource.start(0);
      });
    },
    stopAudio: function () {
      console.log("stopAudio")
      if (audioSource === null) return;
      audioSource.stop(0);
    },
    loadAudio: async function (videoId) {
      //参考記事: https://syachi.hatenablog.jp/entry/2019/07/17/080200
      console.log("loadAudio")
      const videoId_final = this.$refs.videoId.value;
      return new Promise(function (resolve, reject) {
        const idb_req = indexedDB.open('nico_audio');
        idb_req.onupgradeneeded = function (event) {
          const db = event.target.result;
          const store = db.createObjectStore('audio', {keyPath: 'id'});
          store.createIndex('id', 'id', {unique: true});
        };
        idb_req.onsuccess = function (event) {
          const db = event.target.result;
          const tx = db.transaction('audio', 'readonly');
          const store = tx.objectStore('audio');
          const req = store.get(videoId);
          req.onsuccess = async function (event) {
            let arrayBuffer;
            if (event.target.result === undefined) {
              console.log("audio not found")
              arrayBuffer = await new NodeNicoMusic(videoId_final, 'Compass-DeckMaker', true).get_audio(false);
              const tx = db.transaction('audio', 'readwrite');
              const store = tx.objectStore('audio');
              store.put({id: videoId, audio: arrayBuffer});
              console.log("audio saved")
            } else {
              console.log("audio found")
              arrayBuffer = event.target.result.audio;
            }
            const decodedAudioABuf = audioContext.decodeAudioData(arrayBuffer);
            audioSource = audioContext.createBufferSource();
            audioSource.buffer = await decodedAudioABuf;
            audioSource.connect(audioContext.destination);
            resolve();
          };
        };
      });
    },
  },
  computed: {
    changeAudioSpeed_Input: function () {
      console.log("changeAudioSpeed")
      if (audioSource === null) return;
      audioSource.playbackRate.value = this.audioSpeed;
    },
  },
}
</script>
