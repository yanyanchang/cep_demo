<template>
  <div class="test-container">
    <div type="flex">
      <span>画布调整</span>
    </div>
    <el-form ref="form" :rules="rules" :model="form" label-width="80px">
      <el-form-item label="宽" prop="width">
        <el-input v-model="form.width"></el-input>
      </el-form-item>
      <el-form-item label="高" prop="height">
        <el-input v-model="form.height"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="test1">提交</el-button>
      </el-form-item>
    </el-form>
    <!-- <a-form :form="test1Form" :labelCol="{span: 2}" :wrapperCol="{span: 22}" @submit="test1">
      <a-form-item label="宽">
        <a-input
          v-decorator="['width', { rules: [{ required: true, message: '请输入宽度' }] }]"
          placeholder="单位:px"
        />
      </a-form-item>
      <a-form-item label="高">
        <a-input
          v-decorator="['height', { rules: [{ required: true, message: '请输入高度' }] }]"
          placeholder="单位:px"
        />
      </a-form-item>
      <a-form-item align="center" :wrapperCol="{span: 24}">
        <a-button type="primary" html-type="submit" block>提交</a-button>
      </a-form-item>
    </a-form>
    <a-row type="flex" v-if="test1Result">
      <a-col>结果:{{test1Result}}</a-col>
    </a-row> -->
    <!-- <a-row type="flex">
      <a-col>获取psd json</a-col>
    </a-row>
    <a-row type="flex">
      <a-col :span="24"> <a-button type="primary" html-type="submit" @click="test2" block>提交</a-button></a-col>
    </a-row>
    <a-row type="flex" v-if="test2Result">
      <a-col>
        结果:
        <a-textarea placeholder :rows="4" v-model="test2Result" />
      </a-col>
    </a-row> -->
    <!-- <div type="flex">
      <span>获取字体列表</span>
    </div>
    <div type="flex">
      <span> <button @click="test3">提交</button></span>
    </div>
    <div>
      {{fontList}}
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      width: '',
      height: '',
      fontList: '',
      test1Result: '',
      test2Result: '',
      form: {
        width: '',
        height: ''
      },
      rules: {
        width: [
          { required: true, message: '请输入宽', trigger: 'blur' }
        ],
        height: [
          { required: true, message: '请输入高', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {},
  methods: {
    test1 (e) {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$cep.resizeCanvas_byActive(this.form.width, this.form.height)
        }
      })
    }
    // async test2 (e) {
    //   debugger
    //   console.log(this.$cep)
    //   const res = await this.$cep.getDocumentInfoJson_byActive()
    //   this.test2Result = JSON.stringify(res)
    // },
    // async test3 (e) {
    //   const res = await this.$cep.getFontList()
    //   this.fontList = JSON.stringify(res)
    // }
  }
}
</script>
<style>
html,body{
  background: #fff;
}
.test-container {
  padding: 20px;
}
</style>
