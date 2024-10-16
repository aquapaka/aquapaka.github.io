<script lang="ts">
  import aquaAvatar from "../../assets/Aquatixel Pixel Art 800x800.png";
  import myLoveAvatar from "../../assets/My Queen Pixel Art 800x800.png";
  import { secretTheme } from "../stores/mainstore";
  import DropShadowImageButton from "./DropShadowImageButton.svelte";

  let clickCount = 0;

  const secretClick = () => {
    clickCount++;

    if (clickCount >= 20) {
      $secretTheme.isActive = !$secretTheme.isActive;
      clickCount = 0;
    }
  };
</script>

<div class="text-center mb-2">
  <h1 class="text-[1.5rem] md:text-[2rem] font-bold mb-2">
    {$secretTheme.isActive
      ? "I'm at my happiest when Shuri is by my side, no matter where we are"
      : "Hi, I'm Aqua"}
  </h1>
  <DropShadowImageButton
    hidden={$secretTheme.isActive}
    src={aquaAvatar}
    alt="Avatar"
    on:click={secretClick}
    --desktop-width="120px"
    --mobile-width="100px"
  />
  <DropShadowImageButton
    hidden={!$secretTheme.isActive}
    src={myLoveAvatar}
    alt="Avatar"
    on:click={secretClick}
    --desktop-width="120px"
    --mobile-width="100px"
  />
</div>
