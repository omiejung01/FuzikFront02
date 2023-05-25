<template>
  <div class="lg:container lg:mx-auto px-0 lg:px-2 py-0 lg:py-4">

    <VideoPanel :video_location="video_location" />

    <VideoDescription
      v-if="video_location !== ''"
      :video_location="video_location"
      :profile="profile"
      :title="title"
      :views="view_count"
      :is_fans="is_fans"
      :is_liked="is_liked"
      :desc="desc"
      :url="url"
      :updated_time="updated_time"
      :created_time="created_time"
    />

  </div>
</template>

<script>
export default {
  
  data() {
    return {
      profile: {
        username: "Lorem Ipsum",
        thumbnail: "/profile.webp",
        rank: "Artist",
      },
      title: "",
      video_location: "",
      desc: "",
      view_count: "",
      url: "",
      status: "",
      music_title: "",
      original_performer: "",
      instrument: "",
      dimension: "",
      musician_name: "",
      is_fans: false,
      is_liked: false,
      updated_time: "",
      created_time: "",
    }
  },

  computed: {

    currentMode() {
      return this.$route.query.mode
    },

    video_url() {
      return this.$route.query.p
    }
  },

  async fetch() {
    
    // this.profile.username = this.$store.state.auth.username
    // this.profile.thumbnail = this.$store.state.auth.thumbnail
    // this.profile.rank = this.$store.state.auth.rank
    const api = this.currentMode == `solo` ? `play_watch` : `jam_watch`
    const res = await this.$axios.$get(`https://fuzik03.tetraserver.com/${api}?p=${this.video_url}`)
    const videoData = res[0]

    if (this.currentMode == `solo`) {
      this.title = videoData.video_title
      this.video_location = videoData.video_location
      this.desc = videoData.description
      this.view_count = videoData.view_count
      this.status = videoData.status
      this.url = videoData.url
      this.music_title = videoData.music_title
      this.original_performer = videoData.original_performer
      this.instrument = videoData.instrument
      this.dimension = videoData.dimension
      this.profile.username = videoData.musician_name
      this.is_fans = false
      this.is_liked = false
      this.updated_time = videoData.updated_time
      this.created_time = videoData.created_time
    }

    if (this.currentMode == `collab`) {
      this.title = videoData.description
      this.video_location = videoData.media_location
      this.desc = ""
      this.view_count = videoData.view_count
      this.status = ""
      this.url = ""
      this.music_title = ""
      this.original_performer = ""
      this.instrument = ""
      this.dimension = ""
      this.profile.username = videoData.owner_name
      this.is_fans = false
      this.is_liked = false
      this.updated_time = videoData.updated_time
      this.created_time = videoData.created_time
    }
    
  }


}
</script>

<style>

</style>