<script lang="ts">
  import Avatar from "./lib/components/Avatar.svelte";
  import SocialMediaLinks from "./lib/components/SocialMediaLinks.svelte";
  import InformationSection from "./lib/components/InformationSection.svelte";

  let secretTheme = false;
  let isLoading = false;
  $: backgroundColor = secretTheme ? "#ffc207" : "#08a8f3";
</script>

<main style:background={backgroundColor}>
  <!--  <LoadingScreen isLoading={loading}/>-->
  <Avatar bind:secretTheme={secretTheme}/>
  <SocialMediaLinks/>
  <InformationSection {isLoading} {secretTheme}/>
  <!--  <ProjectBox projects={projects} isLoading={loading} secretTheme={secretTheme}/>-->
</main>

<style>
    @font-face {
        font-family: 'GnuUnifontFull';
        src: local('GnuUnifontFull'), url('./assets/fonts/GnuUnifontFull.woff2') format('woff2');
    }

    main {
        position: absolute;
        width: 100%;
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