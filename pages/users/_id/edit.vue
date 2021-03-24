<template>
  <div>
    <h1>Edit Page</h1>
    <p>Editing {{ user.name }}</p>
    <nuxt-link :to="`/users/${user.id}`">
      <button>Back</button>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import type { PropType } from 'vue';
import type { Users } from '@/typings';

export default Vue.extend({
  props: { user: { type: Object as PropType<Users>, default: 'Nothing' } },
  head: { title: 'Editing' },
});
</script>

<style></style>
