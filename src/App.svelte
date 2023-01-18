<script lang="ts">
  import LoadingScreen from "./lib/components/LoadingScreen.svelte";
  import Avatar from "./lib/components/Avatar.svelte";
  import SocialMediaLinks from "./lib/components/SocialMediaLinks.svelte";
  import InformationSection from "./lib/components/InformationSection.svelte";
  import ProjectSection from "./lib/components/ProjectSection.svelte";

  let secretTheme = false;
  let isLoading = true;
  $: backgroundColor = secretTheme ? "#ffc207" : "#08a8f3";

  const onLoaded = () => {
    isLoading = false;
  };

  // Check if the page has already loaded
  if (document.readyState === 'complete') {
    onLoaded();
    window.removeEventListener('load', onLoaded);
  } else {
    window.addEventListener('load', onLoaded);
  }
</script>

<main style:background={backgroundColor}>
  {#if isLoading}
    <LoadingScreen />
  {/if}
  <Avatar bind:secretTheme={secretTheme}/>
  <SocialMediaLinks/>
  <InformationSection {isLoading} {secretTheme}/>
  <ProjectSection {isLoading} {secretTheme}/>
</main>

<style>
    @font-face {
        font-family: 'GnuUnifontFull';
        src: local('GnuUnifontFull'), url('./assets/fonts/GnuUnifontFull.woff2') format('woff2');
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

    * {
        font-family: GnuUnifontFull, sans-serif;
        font-size: 16px;
    }

    :global(body) {
        margin: 0;
    }

    :global(h1) {
        font-size: 28px;
    }

    :global(h2) {
        font-size: 22px;
    }

    @media screen and (max-width: 512px) {
        :global(h1) {
            font-size: 24px;
        }

        :global(h2) {
            font-size: 20px;
        }
    }
</style>