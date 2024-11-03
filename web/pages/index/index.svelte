<script lang="ts">
import {onMount} from "svelte";

import Bapple from "@/assets/bapple.mp4";

onMount(()=>{
    videoElement.click();
    videoElement.play();
});

var videoElement:HTMLVideoElement;
</script>

<video autoplay loop muted bind:this={videoElement}>
    <source src={Bapple}/>
</video>