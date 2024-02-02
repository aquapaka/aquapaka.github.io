<script lang="ts">
  import links from "../../datas/links";
  import DropShadowImageButton from "./DropShadowImageButton.svelte";
</script>

<div class="flex justify-center m-2 gap-2">
  {#each links as link}
    <a href={link.url} target="_blank" rel="noreferrer">
      <DropShadowImageButton
        src={link.image}
        alt={link.text}
        --desktop-width="55px"
        --mobile-width="40px"
      />
    </a>
    <span class="hidden">{link.text}</span>
  {/each}
</div>
