<template>
  <div>
    <h1>User Page</h1>
    <p>you are on {{ user.name }}</p>
    <nuxt-link to="/users">
      <button>User List</button>
    </nuxt-link>
    <nuxt-link :to="`/users/${user.id}/edit`">
      <button>Edit</button>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import type { PropType } from 'vue';
import type { Users } from '@/typings';

export default Vue.extend({
  props: { user: { type: Object as PropType<Users>, default: 'Nothing' } },
  head: { title: 'Viewing' },
});
</script>

<style></style>
