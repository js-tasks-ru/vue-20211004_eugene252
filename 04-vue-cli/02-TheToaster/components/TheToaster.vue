<template>
  <div class="toasts">
      <UiToast v-for="toast in toasts" :key="toast.id" v-bind="toast" @closeToast="closeToast"></UiToast>
  </div>
</template>

<script>
import UiToast from "./UiToast";

let id = 0;

export default {
  name: 'TheToaster',

  components: {
    UiToast
  },

  methods: {
    success(message) {
      let successToast = {
        id: id++,
        type: 'success',
        message: message,
        delayTime: 5000,
        closeButton: false
      }

      this.toasts.push(successToast);
      this.removeToastByTimer(successToast);
    },

    error(message) {
      let errorToast = {
        id: id++,
        type: 'error',
        message: message,
        delayTime: 5000,
        closeButton: true
      }

      this.toasts.push(errorToast);
      this.removeToastByTimer(errorToast);
    },

    defineIcon(toast) {
      switch(toast.type) {
        case 'success':
          return 'check-circle';

        case 'error':
          return 'alert-circle';
      }
    },

    removeToastByTimer(toast) {
      setTimeout(function() {
        this.toasts = this.toasts.filter((toastItem) => toast.id !== toastItem.id);
      }.bind(this), toast.delayTime)
    },

    closeToast(toastId) {
      this.toasts = this.toasts.filter((toastItem) => toastId !== toastItem.id);
    }
  },

  data() {
    return {
      toasts: [],
    };
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
