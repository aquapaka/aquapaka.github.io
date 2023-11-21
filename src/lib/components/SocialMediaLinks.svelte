<script lang="ts">
  import links from "../../datas/links";

  import DropShadowImageButton from "./DropShadowImageButton.svelte";
</script>

<div>
  {#each links as link}
    <a href={link.url} target="_blank" rel="noreferrer">
      <DropShadowImageButton
        src={link.image}
        alt={link.text}
        --desktop-width="55px"
        --mobile-width="40px"
      />
    </a>
    <span>{link.text}</span>
  {/each}
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    margin: 16px;
    gap: 8px;
  }

  span {
    display: none;
  }
</style>
