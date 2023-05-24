<template>
  <div class="py-10">

    <div class="flex flex-row space-x-1 pb-4 px-4 sm:px-0">
      <div>Collaboration > Select Layout and Video</div>
      <div
        v-if="step == 'edit_video'"
      >
        &gt; Edit Video
      </div>
    </div>

    <div
      v-if="step === 'select_layout'"
      class="flex flex-col"
    >
      <SelectLayout />
    </div>

    <div
      v-if="step === 'edit_video'" 
      class="flex flex-col"
    >
      <EditVideo />
    </div>
    
  </div>
</template>

<script>

import SelectLayout from "~/components/collaboration/SelectLayout"
import EditVideo from "~/components/collaboration/EditVideo"
 
export default {
  components: { SelectLayout, EditVideo },

  computed: {
    step() {
      return this.$route.query.step
    }
  }
}
</script>

<style>

</style>