<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <van-tabs
      v-model="active"
      background="#f2f4f8"
      color="#66ceab "
      type="card"
    >
      <van-tab title="1 请填写用户名">
        <div class="father_tab p">
          <span class="i">用户名</span>
          <input
            v-model="inputA.inp1"
            placeholder="请输入用户名"
            class="ipt"
            type="text"
          />
        </div>
        <div class="father_btn">
          <button @click="delOne" class="btn_1">重置</button>
          <button @click="next" class="btn_2">下一步</button>
        </div>
      </van-tab>
      <van-tab title="2 请填写手机号">
        <div class="father_tab p">
          <span class="i">手机号</span>
          <input
            v-model="inputA.inp2"
            placeholder="请输入手机号"
            class="ipt"
            type=""
          />
        </div>
        <div class="father_btn">
          <button @click="delTwo" class="btn_1">重置</button>
          <button @click="previous" class="btn_3">上一步</button>
          <button @click="next" class="btn_2">下一步</button>
        </div>
      </van-tab>
      <van-tab title="3 请填写密码">
        <div class="father_tab p">
          <span class="i">密码</span>
          <input
            v-model="inputA.inp3"
            placeholder="请输入密码"
            class="ipt"
            type="password"
          />
        </div>
        <div class="father_btn">
          <button @click="delThree" class="btn_1">重置</button>
          <button @click="previous" class="btn_3">上一步</button>
          <button @click="sub" class="btn_2">提交</button>
          <van-popup @close="padlock" class="van_popup" v-model="show">
            <span class="text">您的用户信息如下</span>
            <br />
            <span class="text">用户名</span>
            <input v-model="inputB.inp4" class="input" type="text" />
            <br />
            <span class="text">手机号</span>
            <input v-model="inputB.inp5" class="input" type="text" />
            <br />
            <span class="text">密码</span>
            <input v-model="inputB.inp6" class="input" type="text" />
          </van-popup>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      active: 0,
      show: false,
      inputA: {
        inp1: '',
        inp2: '',
        inp3: ''
      },
      inputB: {
        inp4: '',
        inp5: '',
        inp6: ''
      }
    }
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    delOne() {
      this.inputA.inp1 = ''
    },
    // eslint-disable-next-line space-before-function-paren
    delTwo() {
      this.inputA.inp2 = ''
    },
    // eslint-disable-next-line space-before-function-paren
    delThree() {
      this.inputA.inp3 = ''
    },
    // eslint-disable-next-line space-before-function-paren
    sub() {
      this.show = true
      this.inputB.inp4 = this.inputA.inp1
      this.inputB.inp5 = this.inputA.inp2
      this.inputB.inp6 = this.inputA.inp3
    },
    // eslint-disable-next-line space-before-function-paren
    padlock() {
      this.inputB = {
        inp4: '',
        inp5: '',
        inp6: ''
      }
    },
    // eslint-disable-next-line space-before-function-paren
    next() {
      this.active += 1
    },
    // eslint-disable-next-line space-before-function-paren
    previous() {
      this.active -= 1
    }
  }
}
</script>

<style lang="less" scoped>
.van_popup {
  width: 300px;
  height: 230px;
  padding: 20px;
}
.input {
  margin-top: 30px;
  width: 200px;
  height: 30px;
  border: 1px solid #ccc;
}
.text {
  font-weight: 700;
  margin-right: 10px;
}
.father_btn {
  padding: 15px;
  display: flex;
  justify-content: flex-end;
  .btn_1 {
    margin-right: 5px;
    background-color: #fff;
    border: 1px solid #ccc;
    width: 60px;
    height: 30px;
  }

  .btn_3 {
    margin-right: 5px;
    color: #66ceab;
    background-color: #fff;
    border: 1px solid #66ceab;
    width: 70px;
    height: 30px;
  }

  .btn_2 {
    color: #fff;
    background-color: #66ceab;
    border: 1px solid #ccc;
    width: 70px;
    height: 30px;
  }
}

.i {
  font-weight: 700;
  color: #000;
}
.p {
  padding: 15px;
}
.father_tab {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;

  .ipt {
    border: 1px solid #ccc;
    width: 500px;
    height: 25px;
  }
}
</style>
