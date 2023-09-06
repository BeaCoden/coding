<template>
	<img
		alt="Vue logo"
		src="./assets/logo.png"
	/>
	<HelloWorld msg="Welcome to Your Vue.js App" />
	<MyFirstComponent />
</template>

<script>
	import HelloWorld from "./components/HelloWorld.vue";
	import MyFirstComponent from "./components/MyFirstComponent.vue";

	export default {
		name: "App",
		components: {
			HelloWorld,
			MyFirstComponent,
		},
	};
</script>
