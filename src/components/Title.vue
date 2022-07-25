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
  <div v-if="!editMode" class="title-flex">
    <h1>{{ title || 'Title' }}</h1>
    <FontAwesomeIcon
      class="icon-button"
      icon="pencil"
      @click="enableTitleUpdate"
    />
  </div>
  <form v-else class="title-flex" @submit="enableTitleUpdate">
    <input ref="title" name="title" :value="title" />
    <button class="submit-button icon-button" type="submit">
      <FontAwesomeIcon icon="check" />
    </button>
  </form>
</template>

<style scoped>
.title-flex {
  display: flex;
  align-items: center;
}

.title-flex > input {
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  font-size: 32px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 600;
}

.title-flex > h1 + .icon-button {
  opacity: 0;
}

.title-flex > h1:hover + .icon-button,
.title-flex > h1 + .icon-button:hover {
  opacity: 1;
}

.submit-button {
  background: transparent;
  border: none;
  width: fit-content;
  font-size: 16px;
}
</style>
