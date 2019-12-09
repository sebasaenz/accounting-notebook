<template>
  <div>
    <b-button v-b-toggle="`${item.id}`" variant="warning">Type: <strong>{{ item.type }}</strong>, Amount: <strong>{{ item.amount }}</strong></b-button>
    <b-collapse :id="`${item.id}`" class="mt-2">
      <b-card>
        <p class="card-text">ID: {{ item.id }}</p>
        <p class="card-text">Type: {{ item.type }}</p>
        <p class="card-text">Amount: {{ item.amount }}</p>
        <p class="card-text">Effective date: {{ item.effectiveDate }}</p>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    item: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
