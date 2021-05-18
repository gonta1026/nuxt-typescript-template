<template>
  <div class="container">
    <div>
      <div>
        <label for="name">
          name
        </label>
        <input id="name" v-model="name" type="text">
      </div>
      <div class="">
        <label for="email">
          email
        </label>
        <input id="email" v-model="email" type="email">
      </div>

      <div>
        <label for="company">
          company
        </label>
        <input id="company" v-model="company" type="text">
      </div>

      <div>
        <label for="password">
          password
        </label>
        <input id="password" v-model="password" type="text">
      </div>

      <div>
        <label for="passwordConfirmation">
          passwordConfirmation
        </label>
        <input id="passwordConfirmation" v-model="passwordConfirmation" type="text">
      </div>

      <button @click="signup">
        登録
      </button>
      <button @click="change">
        変更
      </button>
      <!-- <button @click="handleTabChange('Top')">TOPへ変更</button> -->
      <!-- <button @click="handleTabChange('Bottom')">Bottomへ変更</button> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import camelcaseKeys from 'camelcase-keys'
import snakecaseKeys from 'snakecase-keys'
import APIClient from '../network/ApiClient'

export default Vue.extend({
  components: {
  },
  data () {
    return {
      name: '',
      email: '',
      company: '',
      password: '',
      passwordConfirmation: ''
    }
  },
  mounted () {
    (async () => {
      const res: any = await axios.get('https://jsonplaceholder.typicode.com/photos')// サンプル実装
      const data = snakecaseKeys({ ...res.data })
      const normalizeResponse = { ...res, data }
      console.log(normalizeResponse)
    })()
  },
  methods: {
    change () {
      console.log(camelcaseKeys({ hoge_a: 'aaaaa', sss: 'awe' }))
      console.log(snakecaseKeys({ fooBar: 'baz' }))
    },
    async signup () {
      const url = '/'
      const { name, email, company, password, passwordConfirmation } = this
      const params = {
        name,
        email,
        company,
        password,
        passwordConfirmation,
        nickname: 'nicknameだよ'
      }
      const res: any = await APIClient.postRequest(url, params)
      console.log(res)
      // NOTE header情報をセット
      // if (res.headers?.client) {
      //   const client = res.headers.client
      //   const accessToken = res.headers['access-token']
      //   const uid = res.headers.uid
      //   localStorage.setItem('client', client)
      //   localStorage.setItem('accessToken', accessToken)
      //   localStorage.setItem('uid', uid)
      // }
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
