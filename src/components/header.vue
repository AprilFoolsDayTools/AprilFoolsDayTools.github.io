<script setup>
  import { routeList } from '@/route.js'
  import moment from 'moment';
  const time = moment();
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  const closeDetails = (id) => {
    const target = id - 3
    const details = document.querySelectorAll('details')
    details.forEach(de => {
      if (de !== details[target]) {
        de.removeAttribute('open')
      }
    })
  }
</script>

<template>
  <div class="ts-grid tablet+:is-evenly-divided mobile-:is-center-aligned mobile-:is-1-columns mobile-:has-hidden is-middle-aligned has-vertically-spaced">
    <div class="column">
      <div class="ts-text"> © {{time.format('YYYY')}}</div>
    </div>
    <div class="column tablet+:is-fluid is-center-aligned">
      <div class="ts-header is-heavy">愚人節玩具</div>
    </div>
    <div class="column"> </div>
  </div>

  <div class="navbar head tablet+:has-vertically-padded">
    <div class="ts-grid is-center-aligned mobile-:has-hidden">
      <div class="column" v-for="ro in routeList">
        <router-link class="ts-text is-undecorated" v-if="ro.pathlist == undefined" :to="ro.url"
          @click="scrollTop">{{ro.category}}</router-link>
        <button v-if="ro.pathlist != undefined" class="ts-text is-undecorated" :data-dropdown="ro.type">
          {{ro.category}} <span class="ts-icon is-chevron-down-icon"></span>
        </button>
        <div v-if="ro.pathlist !=undefined" class="ts-dropdown" :data-name="ro.type">
          <router-link class="item" v-for="p in ro.pathlist" :to="p.url" @click="scrollTop">{{p.title}}</router-link>
        </div>
      </div>
    </div>

    <div class="ts-app-topbar tablet+:has-hidden">
      <div class="star">
        <div class="ts-header is-heavy">愚人節玩具</div>
      </div>
      <div class="end">
        <button class="item" data-toggle="app-menu:is-visible">
          <span class="ts-icon is-bars-icon"></span>
        </button>
      </div>
    </div>
  </div>

  <div class="ts-app-drawer is-right is-small" data-name="app-menu">
    <div class="content">
      <div class="ts-content">
        <div class="ts-wrap is-end-aligned">
          <button class="ts-close is-big" data-toggle="app-menu:is-visible"></button>
        </div>
        <div class="ts-divider is-section"></div>
        <div class="ts-wrap is-vertical is-end-aligned">
          <div v-for="(ro,index) in routeList">
            <router-link class="ts-text is-undecorated is-main-color" v-if="ro.pathlist == undefined" :to="ro.url"
              @click="scrollTop" data-toggle="app-menu:is-visible">{{ro.category}}</router-link>
            <div class="" v-if="ro.pathlist !=undefined">
              <details class="ts-accordion" @click="closeDetails(index)">
                <summary class="is-main-color">{{ro.category}}</summary>
                <div class="ts-wrap is-end-aligned is-vertical">
                  <div v-for="p in ro.pathlist">
                    <router-link class="ts-text is-undecorated" :to="p.url" @click="scrollTop"
                      data-toggle="app-menu:is-visible">{{p.title}}</router-link>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <button class="ts-button is-icon is-circular top-btn" @click="scrollTop()">
    <span class="ts-icon is-chevron-up-icon"></span>
  </button>
</template>

<style src="@/css/header.css" scoped></style>