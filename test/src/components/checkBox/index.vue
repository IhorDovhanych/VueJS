<template>
    <div>
        <check-box v-for="item in checkBoxList"
        :key="item.id"
        :title="item.title"
        :checked="item.checked" />
    </div>
</template>

<script>


    import CheckBox from './checkBox.vue'

    export default {
        name: "checkBoxTable",

        components: {
            CheckBox
        },
        props: {
                checkBoxList: {
                    type: Array,
                    default: () => []
                },
            },
    }
</script>


<style lang="scss" scoped>

</style>