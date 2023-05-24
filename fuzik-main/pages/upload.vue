<template>
  <div class="py-10">

    <div
      v-if="step === 'select_file'"
      class="flex flex-col"
    >
      <SelectFile />
      <div class="flex flex-col py-10">
        <div class="font-bold">Technical limitations:</div>
        <div class="flex flex-col text-sm">
          <div
            v-for="(condition, i) in conditions"
            :key="i"
          >
            &bull; {{ condition }}
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="step === 'video_information'" 
      class="flex flex-col"
    >
      <VideoInformation />
    </div>
    
  </div>
</template>

<script>

import SelectFile from "~/components/upload/SelectFile"
import VideoInformation from "~/components/upload/VideoInformation"
 
export default {
  components: { SelectFile, VideoInformation },

  data() {
    return {
      conditions: [
        "The maximum file size you can upload is 300 MB or 12 minutes whichever is less.",
        "Make sure that you are using the '.mp4' format.",
        "The recommended video resolution are 1080p (1920 x 1080 or 1080x1920) and 720p (1280 x 720 or 720x1280).",
        "Please synchronize your video with the one you want to collaborate with, this platform version allows up to 3-second timeline adjustments."
      ]
    }
  },
  
  computed: {
    step() {
      return this.$route.query.step
    }
  }
}
</script>

<style>

</style>