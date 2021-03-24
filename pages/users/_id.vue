<template>
  <nuxt-child :user="user" />
</template>

<script lang="ts">
import Vue from 'vue';
import type { MetaInfo } from 'vue-meta';
import type { AxiosResponse } from 'axios';
import type { Users } from '@/typings';

export default Vue.extend({
  async asyncData({ $axios, params }) {
    const response: AxiosResponse<Users> = await $axios.get(
      `/users/${params.id}`
    );
    const user = response.data;

    return { user };
  },

  data() {
    return {
      user: {} as Users,
    };
  },

  head(): MetaInfo {
    return {
      title: '',
      titleTemplate: `%s ${this.user.name}`,
    };
  },
});
</script>

<style></style>
