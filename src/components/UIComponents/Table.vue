<template>
  <table class="table">
    <thead>
      <slot name="columns">
        <th v-for="key in columnKeys">{{ columns[key] }}</th>
      </slot>
    </thead>
    <tbody>
    <tr v-for="item in data">
      <slot :row="item">
        <td v-for="key in columnKeys">{{  item[key] }}</td>
      </slot>
    </tr>
    </tbody>
  </table>
</template>
<script>
  export default {
    name: 'l-table',
    props: {
      columns: Object,
      data: Array
    },
    computed: {
      columnKeys () {
        return Object.keys(this.columns)
      }
    }
  }
</script>
<style>
</style>
