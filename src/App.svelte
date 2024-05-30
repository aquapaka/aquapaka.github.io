<script lang="ts">
  import "./App.css";
  import Avatar from "./lib/components/Avatar.svelte";
  import ClientSection from "./lib/components/ClientSection.svelte";
  import InformationSection from "./lib/components/InformationSection.svelte";
  import LoadingScreen from "./lib/components/LoadingScreen.svelte";
  import ProjectSection from "./lib/components/ProjectSection.svelte";
  import PufferFish from "./lib/components/PufferFish.svelte";
  import SocialMediaLinks from "./lib/components/SocialMediaLinks.svelte";
  import { secretTheme } from "./lib/stores/mainstore";

  let isLoading: boolean = true;

  const onLoaded = () => {
    isLoading = false;
  };

  // Check if the page has already loaded
  if (document.readyState === "complete") {
    onLoaded();
    window.removeEventListener("load", onLoaded);
  } else {
    window.addEventListener("load", onLoaded);
  }
</script>

<main class={`background ${$secretTheme.isActive && "secret"}`}>
  {#if isLoading}
    <LoadingScreen />
  {/if}
  <div class="relative z-20">
    <Avatar />
    {#if !isLoading}
      <SocialMediaLinks />
      <InformationSection />
      <ClientSection />
      <ProjectSection />
    {/if}
  </div>
  <PufferFish />
</main>

<style>
  @font-face {
    font-family: "GnuUnifontFull";
    src:
      local("GnuUnifontFull"),
      url("./assets/fonts/GNUUnifontFull-Minimal.woff2") format("woff2");
  }

  * {
    font-family: GnuUnifontFull, sans-serif;
    touch-action: manipulation;
  }

  main {
    position: absolute;
    padding: 6px;
    width: 100%;
    box-sizing: border-box;
    max-width: 100%;
    min-height: 100%;
    overflow: hidden;
  }

  :global(img) {
    image-rendering: optimizeSpeed; /* STOP SMOOTHING, GIVE ME SPEED  */
    image-rendering: -moz-crisp-edges; /* Firefox                        */
    image-rendering: -o-crisp-edges; /* Opera                          */
    image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
    image-rendering: pixelated; /* Universal support since 2021   */
    image-rendering: optimize-contrast; /* CSS3 Proposed                  */
    -ms-interpolation-mode: nearest-neighbor;
  }
</style>
