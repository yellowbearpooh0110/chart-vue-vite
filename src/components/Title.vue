<script>
export default {
  data() {
    return {
      editMode: false,
      title: 'Title',
    };
  },
  methods: {
    enableTitleUpdate(event) {
      event.preventDefault();
      if (this.editMode) {
        this.editMode = false;
        this.title = event.target.title.value;
      } else {
        this.editMode = true;
        this.$refs.input.focus();
      }
    },
  },
};
</script>

<template>
  <div v-if="!editMode" class="group flex items-center">
    <h1 class="text-[32px] font-[Roboto] font-semibold">
      {{ title || 'Title' }}
    </h1>
    <FontAwesomeIcon
      class="opacity-0 group-hover:opacity-100 icon-button"
      icon="pencil"
      @click="enableTitleUpdate"
    />
  </div>
  <form v-else class="flex items-center" @submit="enableTitleUpdate">
    <input
      ref="title"
      class="outline-none border-b border-b-black text-[32px] font-['Roboto'] font-semibold"
      name="title"
      :value="title"
    />
    <button
      class="bg-transparent border-none w-fit text-[16px] icon-button"
      type="submit"
    >
      <FontAwesomeIcon icon="check" />
    </button>
  </form>
</template>
<style scoped></style>
