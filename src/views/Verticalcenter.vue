<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="father">
      <div class="son"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
//  第一种

// .father {
//   width: 500px;
//   height: 500px;
//   border: 1px solid #000;
//   display: flex;

//   .son {
//     margin: auto;
//     width: 200px;
//     height: 200px;
//     border: 1px solid #000;
//   }
// }

//  ==========================================
// 第二种

// .father {
//   width: 500px;
//   height: 500px;
//   border: 1px solid #000;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   .son {
//     width: 200px;
//     height: 200px;
//     border: 1px solid #000;
//   }
// }

// ===============================================

// 第三种
.father {
  width: 500px;
  height: 500px;
  border: 1px solid #000;
  position: relative;

  .son {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    border: 1px solid #000;
  }
}
</style>
