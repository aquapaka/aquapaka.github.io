<script lang="ts">
  export let href;
  export let target;
  $: displayType = href ? "inline-block" : "none";
</script>

<a {href} {target} style:display={displayType}><slot /></a>

<style>
  a {
    color: #000;
    text-decoration: none;
    background: #fff;
    margin: 4px;
    padding: 4px 16px;
    filter: drop-shadow(4px 4px rgba(0, 0, 0, 0.5));
  }

  @media (hover: hover) {
    a:hover {
      filter: drop-shadow(8px 8px rgba(0, 0, 0, 0.5));
      transform: translate(-2px, -2px);
    }
  }

  a:active {
    filter: drop-shadow(2px 2px rgba(0, 0, 0, 0.5));
    transform: translate(2px, 2px);
  }

  @media screen and (max-width: 500px) {
    a {
      padding: 4px 8px;
    }
  }
</style>
