<template>
  <v-data-table :items="items" :headers="headers" disable-pagination hide-default-footer>

  </v-data-table>
</template>

<script>
export default {
    data:()=>({
        headers: [
            {
                text: 'Medical History',
                value: 'medHistory',
                divider: true
            },
            {
                text: 'Yes',
                value: 'yes',
                divider: true
            },
            {
                text: 'None',
                value: 'none',
                divider: true
            },

        ],
        items: [
            {
                medHistory: 'Diabetes',
                none: '-',
                yes: '-'
            },
            {
                medHistory: 'Bleeding Tendency',
                none: '-',
                yes: '-'
            },
            {
                medHistory: 'Drug Sensitivity',
                none: '-',
                yes: '-'
            },
            {
                medHistory: 'History of Hypertension',
                none: '-',
                yes: '-'
            },
            {
                medHistory: 'Asthma',
                none: '-',
                yes: '-'
            },
            {
                medHistory: 'Food Allergy',
                none: '-',
                yes: '-'
            },
            {
                medHistory: 'BP Systollic',
                none: '-',
                yes: '-'
            },
            {
                medHistory: 'Diastolic',
                none: '-',
                yes: '-'
            },

        ]
    })
}
</script>

<style>

</style>