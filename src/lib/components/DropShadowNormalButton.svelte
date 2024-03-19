<script lang="ts">
  import type { HTMLAttributeAnchorTarget } from "svelte/elements";
  import { click_sound } from "../sounds/svelte-sound";

  export let href: string;
  export let target: HTMLAttributeAnchorTarget;
  $: displayType = href ? "flex" : "none";
</script>

<div class="group">
  <a
    class="
    w-[120px]
    text-nowrap
    px-2 py-1
    justify-center
    items-center
    gap-1
    bg-white
    drop-shadow-[4px_4px_rgba(0,0,0,0.5)]
    group-hover:drop-shadow-[8px_8px_rgba(0,0,0,0.5)]
    group-hover:-translate-x-[2px]
    group-hover:-translate-y-[2px]
    group-active:drop-shadow-[2px_2px_rgba(0,0,0,0.5)]
    group-active:translate-x-[2px]
    group-active:translate-y-[2px]
    "
    {href}
    {target}
    style:display={displayType}
    use:click_sound
  >
    <slot />
  </a>
</div>
