<script setup>
  import { ref } from 'vue'
  const list = ref([])
  const category = ref({
    id: 0,
    name: '',
    deleted: false,
  })
  const isEdit = ref(false);
  const isAdd = ref(false);

  const start = () => {
    category.value.id = list.value.length + 1
    category.value.name = '';
  }

  const add = () => {
    if (category.value.name) {
      let _category = {}
      for (let i = 0; i < 600; i++) {
        _category = {
          id: i,
          name: category.value.name,
          deleted: false,
        }
        list.value.push(_category)
      }
      ctrlAdd()
    } else {
      notify.value.msg = '名稱不得為空'
      notify.value.show = true
      setTimeout(() => {
        notifyReset()
      }, 1000);
    }
  }
  const ctrlAdd = () => {
    start()
    isAdd.value = !isAdd.value
  }
  const opEdit = () => {

  }
  const edit = (id) => {
    isEdit.value = true
    const target = list.value.find(el => el.id == id)
    category.value.id = target.id
    category.value.name = target.name
  }
  const deleted = (id) => {
    if (window.confirm('確認要刪除嗎？')) {
      list.value.find(el => el.id == id).deleted = true
    }
  }

  const notifyReset = () => {
    notify.value.msg = ''
    notify.value.show = false
  }
  const notify = ref({
    msg: '',
    show: false
  })
  start()
</script>
<template>
  <div class="ts-box is-top-indicated">
    <div class="ts-content is-dense"
      style="display: flex;flex-direction: row;justify-content: space-between;align-items: center;">
      <div class="ts-header is-heavy">商品類別管理</div>
      <span class="ts-icon is-circular is-plus-icon" @click="ctrlAdd" :class="isAdd ? 'is-disabled':'' "></span>
    </div>
    <div class="ts-divider"></div>
    <div class="ts-content" id="category-add" v-if="isAdd">
      <div class="ts-wrap is-compact is-end-aligned">
        <input type="hidden" :value="category.id">
        <div class="ts-input" :class="notify.show?'is-disabled':''">
          <input type="text" v-model="category.name" placeholder="輸入類別名稱" @keyup.enter="add">
        </div>
        <span class="ts-icon is-check-icon" :class="notify.show?'is-disabled':''" @click="add"></span>
        <span class="ts-icon is-xmark-icon" @click="isAdd = !isAdd"></span>
      </div>
    </div>
    <div class="ts-wrap is-center-aligned" v-if="notify.show">
      <div class="ts-snackbar">
        <div class="content">名稱不能為空。</div>
        <button class="action">確認</button>
      </div>
    </div>
    <div class="ts-box is-squared" style="max-height:200px;overflow-y: auto;">
      <table class="ts-table is-truncated is-celled is-striped">
        <thead style="position: sticky;top: 0px;z-index: 1;">
          <tr>
            <th>名稱</th>
            <th>管理</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cat in list" v-show="!cat.deleted" :key="cat.id">
            <td>{{cat.name}}</td>
            <td>
              <div class="ts-wrap is-compact is-center-aligned">
                <span class="ts-icon is-circular is-pen-to-square-icon" @click="edit(cat.id)"
                  :class="isAdd ? 'is-disabled':'' "></span>
                <span class="ts-icon is-circular is-negative is-trash-icon" @click="deleted(cat.id)"
                  :class="isAdd ? 'is-disabled':'' "></span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>

</template>