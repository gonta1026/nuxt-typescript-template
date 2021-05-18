<template>
  <div class="container">
    <div>
      <Logo />
      <el-button @click="open">
        Button
      </el-button>
      <h1 class="title">
        nuxt-ts-sample
      </h1>
      <basic-dialog
        title="タイトルです"
        :visible="visible"
        width="50%"
        @handleClose="handleClose"
      >
        slotで渡している。コンテンツ
      </basic-dialog>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BasicDialog from '../components/atoms/BasicDialog.vue'

export default Vue.extend({
  components: {
    BasicDialog
  },
  data () {
    return {
      visible: false,
      visible02: false,
      text: '' as string // 試しに as で型を明示した。
    }
  },
  mounted () {
    (async () => {
      const data = await axios.get('https://jsonplaceholder.typicode.com/photos')// サンプル実装
      console.log(data)
    }
    )()
  },
  methods: {
    open () {
      this.visible = true
    },
    handleClose () {
      this.visible = false
    }
  }
})

</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
