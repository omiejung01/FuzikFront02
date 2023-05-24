<template>
  <div class="lg:container lg:mx-auto px-2 py-4">
    <Categories :categories="categories" />
    
    <div class="w-3/5 lg:w-2/5 mx-auto py-6 lg:py-10">
      <div class="flex flex-row justify-center items-center  bg-black p-1 rounded-xl divide divide-white text-white">
        <div
          @click="onSelectMode('solo')"
          class="flex-1 text-center rounded-lg cursor-pointer"
          :class="currentMode == `solo` ? `bg-yellow text-black` : `` "
        >
          Solo
        </div>
        <div
          @click="onSelectMode('collab')"
          class="flex-1 text-center rounded-lg cursor-pointer"
          :class="currentMode == `collab` ? `bg-yellow text-black` : `` "
        >
          Collaboration
        </div>
      </div>
    </div>

    <div class="flex flex-col space-y-2">

      <div v-if="currentMode == `solo`">
        <VideosLandscape 
          :mode="currentMode"
          :videos="videos" 
          v-if="videos" 
        />
        <VideosPortrait 
          :mode="currentMode"
          :videos="videos" 
          v-if="videos" 
        />
      </div>
      <div v-else>
        <VideosLandscape 
          :mode="currentMode"
          :videos="videos" 
          v-if="videos" 
        />
      </div>

    </div> 
    
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      categories: [
        { q: "all", name: "ALL" },
        { q: "popular", name: "Popular music" },
        { q: "pop", name: "Pop" },
        { q: "rock", name: "Rock" },
        { q: "hiphop", name: "Hip-Hop" },
        { q: "guitar", name: "Guitar" },
        { q: "ukulele", name: "Ukulele" },
        { q: "piano", name: "Piano" },
        { q: "keyboard", name: "Keyboard" },
      ],

      currentMode: "solo",

      videosData: [],
    }
  },

  computed: {
    genre() {
      return this.$route.query.q || `all`
    },

    videos() {

      if (this.genre !== `all`) {
        return this.videosData[0].filter((e) => {
          return e.genre === this.genre
        })
      } else {
        return this.videosData[0]
      }
    }
  },

  mounted() {
    this.onSelectMode(`solo`)
  },

  methods: {
    async onSelectMode(mode) {

      this.currentMode = mode
      this.videosData = []

      if (mode == `solo`) {
        const resVideosLandscape = await this.$axios.$get(`https://fuzik03.tetraserver.com/plays_l/`)
        const resVideosPortrait = await this.$axios.$get(`https://fuzik03.tetraserver.com/plays_p/`)

        this.videosData.push(resVideosLandscape)
        this.videosData.push(resVideosPortrait)
      }

      if (mode == `collab`) {
        const res = await this.$axios.$get(`https://fuzik03.tetraserver.com/jams`)
        this.videosData.push(res)
      }


    },
  },


}
</script>
