<script lang="ts">
  import aquaAvatar from "../../assets/Aquatixel Pixel Art 800x800.png";
  import meimeiAvatar from "../../assets/My Love Pixel Art 800x800.png";
  import DropShadowImageButton from "./DropShadowImageButton.svelte";

  export let secretTheme: boolean;

  let clickCount = 0;

  const secretClick = () => {
    clickCount++;

    if (clickCount >= 10) {
      secretTheme = !secretTheme;
      clickCount = 0;
    }
  };
</script>

<div class="text-center">
  <h1 class="text-[1.5rem] md:text-[2rem] font-bold">{secretTheme ? "I'm in love with Meimei" : "Hi, I'm Aqua"}</h1>
  <DropShadowImageButton
    src={secretTheme ? meimeiAvatar : aquaAvatar}
    alt="Avatar"
    on:click={secretClick}
    --desktop-width="120px"
    --mobile-width="100px"
  />
</div>