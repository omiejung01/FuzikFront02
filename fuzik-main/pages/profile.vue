<template>
  <div class="lg:container lg:mx-auto px-2 py-10">

    <div class="flex flex-col">

      <div class="text-3xl font-bold pb-10 px-2">Profile Setting</div>

      <div class="flex flex-col lg:flex-row justify-start items-start space-y-6">
  
        <div class="w-1/2 sm:w-1/6 mx-auto flex flex-col">
          <div class="bg-gray-200 rounded-full p-6 relative">
            <img src="/profile.webp">
            <div class="absolute top-0 right-0">
              <div 
                class="w-10 h-10 flex flex-row justify-center items-center rounded-full border-2 border-black bg-black text-yellow cursor-pointer transition-all duration-500 hover:lg:bg-transparent hover:lg:backdrop-blur hover:lg:text-black"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                </svg> 
              </div>
            </div>
          </div>

          <div class="flex flex-row justify-center items-center py-4">
            <div class="relative flex flex-row justify-start items-center text-sm bg-black rounded-full pl-6 pr-4">
              <div class="absolute -left-3">
                <div class="w-8 h-8">
                  <img src="/rank_performer.webp">
                </div>
              </div>
              <div class="flex flex-wrap justify-center items-center space-x-2">
                <div class="text-white">Rank:</div>
                <div class="text-yellow">Musical</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="w-full lg:w-4/6 mx-auto flex flex-col px-2">
          
          <div class="flex flex-row justify-between items-start pb-4">
            <div class="w-1/2 flex flex-col justify-start space-y-1 pr-4  lg:pr-8">
              <div class="font-bold">First Name</div>
              <div class="w-full">
                <input 
                  type="text"
                  placeholder="Your first name"
                  autocomplete="off"
                  class="w-full outline-none border border-gray-200 rounded-xl px-3 py-2"
                >
              </div>
            </div>
            <div class="w-1/2 flex flex-col justify-start space-y-1">
              <div class="font-bold">Last Name</div>
              <div class="w-full">
                <input 
                  type="text"
                  placeholder="Your last name"
                  autocomplete="off"
                  class="w-full outline-none border border-gray-200 rounded-xl px-3 py-2"
                >
              </div>
            </div>
          </div>

          <div class="flex flex-row justify-between items-start pb-4">
            <div class="w-1/2 flex flex-col justify-start space-y-1 pr-4  lg:pr-8">
              <div class="font-bold">Email</div>
              <div class="w-full">
                <input 
                  type="text"
                  placeholder="Your email"
                  autocomplete="off"
                  readonly
                  class="w-full outline-none border border-gray-200 rounded-xl px-3 py-2"
                >
              </div>
            </div>
            <div class="w-1/2 flex flex-col justify-start space-y-1">
              <div class="font-bold">Phone Number</div>
              <div class="w-full">
                <input 
                  type="text"
                  placeholder="Phone number"
                  autocomplete="off"
                  class="w-full outline-none border border-gray-200 rounded-xl px-3 py-2"
                >
              </div>
            </div>
          </div>

          <div class="flex flex-row justify-between items-start pb-4">
            <div class="w-full flex flex-col justify-start space-y-1">
              <div class="font-bold">Display Name</div>
              <div class="w-full">
                <input 
                  type="text"
                  placeholder="Your display name"
                  autocomplete="off"
                  readonly
                  class="w-full outline-none border border-gray-200 rounded-xl px-3 py-2"
                >
              </div>
            </div>
          </div>

          <div class="flex flex-row justify-between items-start pb-4">
            <div class="w-full flex flex-col justify-start space-y-1">
              <div class="font-bold">Music Genre</div>
              <div class="w-full">
                <input 
                  type="text"
                  placeholder="Your music genre"
                  autocomplete="off"
                  class="w-full outline-none border border-gray-200 rounded-xl px-3 py-2"
                >
              </div>
              <div>
                Genre List
              </div>
            </div>
          </div>

          <div class="flex flex-row justify-between items-start pb-4">
            <div class="w-full flex flex-col justify-start space-y-1">
              <div class="font-bold">Musical Instruments</div>
              <div class="w-full">
                <input 
                  type="text"
                  placeholder="Your musical instruments"
                  autocomplete="off"
                  class="w-full outline-none border border-gray-200 rounded-xl px-3 py-2"
                >
              </div>
              <div>
                Instruments List
              </div>
            </div>
          </div>
        </div>
      
      </div>

      <div class="flex flex-row justify-center items-center space-x-4 py-10 px-2">
        <div
          @click="showModal()"
          class="w-48 flex flex-wrap bg-yellow justify-center items-center py-3 rounded-xl font-bold border-2 border-yellow cursor-pointer transition-all duration-500 hover:lg:bg-yellow/20"
        >
          Change Password
        </div>
        <div
          @click="saveProfile()"
          class="w-48 flex flex-wrap bg-yellow justify-center items-center py-3 rounded-xl font-bold border-2 border-yellow cursor-pointer transition-all duration-500 hover:lg:bg-yellow/20"
        >
          Save Profile
        </div>
      </div>

    </div>

    <modal 
      name="password-modal" 
      width="100%"
      height="auto" 
      scrollable
      class="flex justify-center items-start py-6 px-4 lg:px-48 xl:px-96"
      v-show="visibleModal"
    >
      <div class="modal-content px-6 py-4">
        
        <div class="flex flex-row justify-between items-center">
          <div class="text-xl font-bold">Change Password</div>
          <div 
            @click="closeModal()"
            class="cursor-pointer text-2xl transition-all hover:text-yellow"
          >&#10005;</div>
        </div>

        <div class="w-full flex flex-col space-y-4 pt-4 pb-10">

          <div class="flex flex-row justify-between items-start pb-2">
            <div class="w-full flex flex-col justify-start space-y-1">
              <div class="font-bold">Current Password</div>
              <div class="w-full">
                <input 
                  type="password"
                  autocomplete="off"
                  class="w-full outline-none border border-gray-200 rounded-xl px-3 py-2"
                >
              </div>
            </div>
          </div>

          <div class="flex flex-row justify-between items-start pb-2">
            <div class="w-full flex flex-col justify-start space-y-1">
              <div class="font-bold">New Password</div>
              <div class="w-full">
                <input 
                  type="password"
                  placeholder="at least 8 characters"
                  autocomplete="off"
                  class="w-full outline-none border border-gray-200 rounded-xl px-3 py-2"
                >
              </div>
            </div>
          </div>

          <div class="flex flex-row justify-between items-start pb-2">
            <div class="w-full flex flex-col justify-start space-y-1">
              <div class="font-bold">Confirm Password</div>
              <div class="w-full">
                <input 
                  type="password"
                  placeholder="enter password again"
                  autocomplete="off"
                  class="w-full outline-none border border-gray-200 rounded-xl px-3 py-2"
                >
              </div>
            </div>
          </div>

          <div
            class="w-full sm:w-48 flex flex-wrap bg-yellow justify-center items-center py-3 rounded-xl font-bold border-2 border-yellow cursor-pointer transition-all duration-500 hover:lg:bg-yellow/20"
          >
            Change Password
          </div>
          
        </div>
        
      </div>
    </modal>



  </div>
</template>

<script>
export default {

  data() {
    return {

      visibleModal: false,

    }
  },

  mounted() {
    // this.showModal()
  },

  methods: {

    showModal() {
      this.visibleModal = true
      this.$modal.show('password-modal')
    },

    closeModal() {
      this.visibleModal = false
      this.$modal.hide('password-modal')
    },
 
    async saveProfile() {
      
      if (false) {
        this.$swal.fire(
          "",
          "Error Message",
          "error"
        )
      } else {
        this.$swal.fire({
          title: "",
          text: "ยืนยันข้อมูล",
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "ตกลง",
          cancelButtonText: "ยกเลิก",
        }).then(async(resSwal) => {
          if(resSwal.isConfirmed) {
            var params = {}
            this.$swal.fire(
              "",
              "บันทึกข้อมูลเรียบร้อย",
              "success"
            ).then(() => {
              window.location.reload()
            })
          }
        });
      }

    }

  }
}
</script>

<style>

</style>