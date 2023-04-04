<template>
  <v-data-table :items="items" :headers="headers"  hide-default-footer>

  </v-data-table>
</template>

<script>
export default {
    data:()=>({
        headers: [
            {
                text: 'Current Health Condition (e.g. Diabetic, Hypertensive)' ,
                value: 'currentHealth',
                divider: true
            },
            {
                text: 'History of Mental Health Condition (e.g. Depression Insomnia, Anxiety)',
                value: 'mentalHistory',
                divider: true
            },
            {
                text: 'Current Mental Health Condition (Indicate if consulting professional or with medication otherwise indicate None)',
                value: 'mentalHealth',
                divider: true
            },
        ],
        items: [
            {
                currentHealth: '-',
                mentalHistory: '-',
                mentalHealth: '-'
            },
            {
                currentHealth: '-',
                mentalHistory: '-',
                mentalHealth: '-'
            },
            {
                currentHealth: '-',
                mentalHistory: '-',
                mentalHealth: '-'
            },
            {
                currentHealth: '-',
                mentalHistory: '-',
                mentalHealth: '-'
            },
        ]
        
    })
}
</script>

<style>

</style>