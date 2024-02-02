<script lang="ts">
  import { click_sound } from "../sounds/svelte-sound";

  export let src: string;
  export let alt: string;
</script>

<button class="group" on:click on:keypress use:click_sound>
  <img
    class="
    drop-shadow-[4px_4px_rgba(0,0,0,0.5)]
    group-hover:drop-shadow-[8px_8px_rgba(0,0,0,0.5)]
    group-hover:-translate-x-[2px]
    group-hover:-translate-y-[2px]
    group-active:drop-shadow-[2px_2px_rgba(0,0,0,0.5)]
    group-active:translate-x-[2px]
    group-active:translate-y-[2px]
    "
    {src}
    {alt}
  />
</button>

<style>
  img {
    width: var(--desktop-width, 20px);
  }

  @media screen and (max-width: 512px) {
    img {
      width: var(--mobile-width);
    }
  }
</style>
