<template>
    <div>
        <div class="logo">
            <img :src="logoImg">
        </div>
        <div class="main">
        <a href="/Home">Home</a>
        <a href="/About">About</a>
        </div> 
    </div>
</template>

<script>
    export default {
        name: "HeaderElements",
        props: {
            logoImg: {
                type: String,
                default: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png"
            },
        },
    }
</script>

<style lang="css" scoped>

</style>