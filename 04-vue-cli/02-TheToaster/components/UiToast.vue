<template>
    <div class="toast" :class="`toast_${type}`">
      <ui-icon class="toast__icon"  :icon="defineIcon(type)"/>
      <span v-text="message"></span>
<!--      <button v-if="closeButton" @click="$emit('closeToast', id)">closeMe</button>-->
    </div>
</template>

<script>
import UiIcon from './UiIcon';

export default {
  name: 'UiToast',

  components: {
    UiIcon
  },

  props: {
    id: {
      type: Number
    },

    type: {
      type: String
    },

    message: {
      type: String
    },

    closeButton: {
      type: Boolean
    }
  },

  methods: {
    defineIcon(type) {
      switch(type) {
        case 'success':
          return 'check-circle';

        case 'error':
          return 'alert-circle';
      }
    },
  },

  emits: ['closeToast'],
}
</script>

<style scoped>
.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
