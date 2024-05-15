<script setup>
  import { ref } from 'vue'
  import Category from '@/components/shoping/category.vue/'

  const productList = ref([])
  const product = ref({
    id: 0,
    name: '',
    price: 0,
    categoryId: 0,
    tag: [],
    deleted: false,
  })

  const orderList = ref([])
  const order = ref({
    id: 0,
    products: [],
    note: '',
    totleProce: 0,
    deleted: false,
  })
  const reviewsList = ref([])
  const reviews = {
    id: 0,
    content: '',
    rank: 0,
    productId: 0,
    deleted: false,
  }


</script>
<template>
  <!-- <div class="ts-select">
    <select v-model="product.categoryId">
      <option v-for="ca in categoryList" :value="ca.id">
        <div class="ts-text">{{ca.name}} <span v-if="ca.deleted">(已失效)</span></div>
      </option>
    </select>
  </div> -->
  <div class="ts-app-layout is-horizontal">
    <div class="cell has-dark mobile-:has-hidden" style="color: var(--ts-white)">
      <div class="ts-content is-center-aligned">
        <div class="ts-wrap is-vertical is-compact is-middle-aligned">
          <div class="ts-image is-tiny is-circular">
            <img src="">
          </div>
          <div class="ts-header">Yami Odymel</div>
        </div>
      </div>
      <div class="ts-divider"></div>
      <div class="ts-content is-dense">
        <div class="ts-grid">
          <div class="column is-fluid">
            <div class="ts-text is-bold">使用者管理</div>
          </div>
          <div class="column">
            <span class="ts-icon is-users-icon"></span>
          </div>
        </div>
      </div>
      <div class="ts-menu is-dense is-small" style="opacity: 0.8">
        <a href="#!" class="item">搜尋</a>
        <a href="#!" class="item">新增</a>
        <a href="#!" class="item">移除</a>
      </div>
      <div class="ts-divider has-top-spaced-small"></div>
      <div class="ts-content is-dense">
        <div class="ts-grid">
          <div class="column is-fluid">
            <div class="ts-text is-bold">網站管理</div>
          </div>
          <div class="column">
            <span class="ts-icon is-cogs-icon"></span>
          </div>
        </div>
      </div>
      <div class="ts-menu is-dense is-small" style="opacity: 0.8">
        <a href="#!" class="item">偏好設定</a>
        <a href="#!" class="item">系統最佳化</a>
        <a href="#!" class="item">安全防護</a>
      </div>
      <div class="ts-divider has-top-spaced-small"></div>
      <a href="#!" class="ts-content is-interactive is-dense">
        <div class="ts-grid">
          <div class="column is-fluid">
            <div class="ts-text is-bold">管理文章</div>
          </div>
          <div class="column">
            <span class="ts-icon is-newspaper-icon"></span>
          </div>
        </div>
      </a>
      <div class="ts-divider"></div>
      <a href="#!" class="ts-content is-interactive is-dense">
        <div class="ts-grid">
          <div class="column is-fluid">
            <div class="ts-text is-bold">回報處理</div>
          </div>
          <div class="column">
            <span class="ts-icon is-flag-icon"></span>
          </div>
        </div>
      </a>
    </div>
    <div class="cell is-fluid is-secondary">
      <div class="ts-container is-narrow has-vertically-padded-large">
        <div class="ts-header is-large is-heavy">儀表板</div>
        <div class="ts-text is-secondary">從這裡快速檢視您的網站狀態。</div>
        <div class="ts-grid is-relaxed is-3-columns has-top-spaced-large">
          <div class="column">
            <div class="ts-box">
              <div class="ts-content">
                <div class="ts-statistic">
                  <div class="value">42,689</div>
                  <div class="comparison is-increased">32</div>
                </div>
                本月拜訪次數
              </div>
              <div class="symbol">
                <span class="ts-icon is-eye-icon"></span>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ts-box">
              <div class="ts-content">
                <div class="ts-statistic">
                  <div class="value">8,652</div>
                  <div class="comparison is-increased">351</div>
                </div>
                總會員數
              </div>
              <div class="symbol">
                <span class="ts-icon is-users-icon"></span>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ts-box">
              <div class="ts-content">
                <div class="ts-statistic">
                  <div class="value">3</div>
                  <div class="comparison is-decreased">14</div>
                </div>
                平均在線分鐘數
              </div>
              <div class="symbol">
                <span class="ts-icon is-clock-icon"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="ts-divider is-section has-top-spaced-large"></div>
        <div class="ts-grid is-relaxed has-top-spaced-large">
          <div class="column is-10-wide">
            <div class="ts-box is-top-indicated">
              <div class="ts-content is-dense">
                <div class="ts-header is-heavy">會員清單</div>
              </div>
              <div class="ts-divider"></div>
              <table class="ts-table is-basic">
                <thead>
                  <tr>
                    <th>使用者名稱</th>
                    <th>電子郵件信箱</th>
                    <th>啟用日期</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="is-disabled">
                    <td>yamiodymel</td>
                    <td>yamiodymel@example.com</td>
                    <td>2013/09/14</td>
                  </tr>
                  <tr>
                    <td>karisu</td>
                    <td>superkari007@example.com</td>
                    <td>2020/11/03</td>
                  </tr>
                  <tr>
                    <td class="is-disabled">shiroteacat</td>
                    <td>shiroteacat@example.com</td>
                    <td>2009/07/15</td>
                  </tr>
                </tbody>
              </table>
              <div class="ts-divider"></div>
              <div class="ts-content">
                <div class="ts-pagination">
                  <a class="item is-back"></a>
                  <a class="item">1</a>
                  <a class="item is-active">2</a>
                  <a class="item">3</a>
                  <a class="item">4</a>
                  <a class="item is-next"></a>
                </div>
              </div>
            </div>
            <div class="ts-box is-top-indicated has-top-spaced-big">
              <div class="ts-content is-dense">
                <div class="ts-header is-heavy">留言板</div>
              </div>
              <div class="ts-divider"></div>
              <div class="ts-content">
                <div class="ts-conversation">
                  <div class="avatar">
                    <img src="">
                  </div>
                  <div class="content">
                    <div class="bubble">
                      <div class="text">
                        不要到處亂刪使用者的留言，<br>
                        你是組刻薄嗎 🥲
                      </div>
                      <div class="meta">
                        <div class="item">下午 11:58</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ts-conversation is-self">
                  <div class="avatar">
                    <img src="">
                  </div>
                  <div class="content">
                    <div class="bubble">
                      <div class="text">好喔 👀👌</div>
                      <div class="meta">
                        <div class="item">下午 11:59</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ts-divider"></div>
              <div class="ts-content">
                <div class="ts-input">
                  <textarea placeholder="輸入訊息…"></textarea>
                </div>
                <div class="ts-grid is-compact has-top-spaced">
                  <div class="column">
                    <div class="ts-wrap is-compact">
                      <div class="ts-chip is-circular">早安！</div>
                      <div class="ts-chip is-circular">知道了。</div>
                    </div>
                  </div>
                  <div class="column is-fluid is-end-aligned">
                    <button class="ts-button">送出</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-6-wide">
            <Category />

            <div class="ts-box is-collapsed is-top-indicated has-top-spaced-big">
              <div class="ts-content is-dense">
                <div class="ts-header is-heavy">其他功能</div>
              </div>
              <div class="ts-divider"></div>
              <div class="ts-menu is-collapsed">
                <a class="item">
                  <div class="ts-iconset is-outlined">
                    <span class="ts-icon is-bullhorn-icon"></span>
                    <div class="content">
                      <div class="title">發送公告</div>
                      <div class="text">傳送一個所有人都可見的訊息。</div>
                    </div>
                  </div>
                </a>
                <div class="ts-divider"></div>
                <a class="item">
                  <div class="ts-iconset is-outlined">
                    <span class="ts-icon is-ticket-icon"></span>
                    <div class="content">
                      <div class="title">建立優惠券</div>
                      <div class="text">向目前登入的使用者發送折價優惠代碼。</div>
                    </div>
                  </div>
                </a>
                <div class="ts-divider"></div>
                <a class="item">
                  <div class="ts-iconset is-outlined">
                    <span class="ts-icon is-hand-icon"></span>
                    <div class="content">
                      <div class="title">強制停機</div>
                      <div class="text">讓網站進入關機程序並逐一踢出已登入的使用者。</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped src="@/css/shoping.css"></style>