<script lang="ts">
  import aquaAvatar from "../../assets/Aquatixel Pixel Art 800x800.png";
  import meimeiAvatar from "../../assets/My Love Pixel Art 800x800.png";

  import DropShadowImageButton from "./DropShadowImageButton.svelte";

  export let secretTheme;

  let clickCount = 0;

  const secretClick = () => {
    clickCount++;

    if (clickCount >= 8) {
      secretTheme = !secretTheme;
      clickCount = 0;
    }
  };
</script>

<div>
  <h1>{secretTheme ? "I'm in love with Meimei" : "Hi, I'm Aqua"}</h1>
  <DropShadowImageButton
    src={secretTheme ? meimeiAvatar : aquaAvatar}
    alt="Avatar"
    on:click={secretClick}
    --desktop-width="120px"
    --mobile-width="100px"
  />
</div>

<style>
  div {
    text-align: center;
  }
</style>
