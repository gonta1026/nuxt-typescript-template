<template>
  <el-dialog
    :visible.sync="visible"
    :title="title"
    :before-close="handleClose"
    :width="width"
  >
    <slot />
  </el-dialog>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '30%'
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleClose () {
      this.$emit('handleClose', false)
    }
  }
})

</script>
