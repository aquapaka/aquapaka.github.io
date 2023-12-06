<script lang="ts">
  import { slide } from "svelte/transition";
  import { bounceOut } from "svelte/easing";

  import DropShadowNormalButton from "./DropShadowNormalButton.svelte";

  import coralImage from "../../assets/coral-0.png";

  import projects from "../../datas/projects";

  export let isLoading: boolean;
  export let secretTheme: boolean;
  $: backgroundColor = secretTheme ? "#fcda96" : "#60c4f2";
</script>

{#if !isLoading}
  <div
    style:background={backgroundColor}
    transition:slide={{ delay: 2023, duration: 1000, easing: bounceOut }}
  >
    <img class="coral-image" src={coralImage} alt="coral" />
    <h2>My Projects</h2>
    <ul>
      {#each projects as project}
        <li>
          <span class="project-item">
            {project.name}
            <span>
              <DropShadowNormalButton href={project.websiteUrl} target="_blank"
                >View</DropShadowNormalButton
              >
              <DropShadowNormalButton href={project.downloadUrl} target="_self"
                >Download</DropShadowNormalButton
              >
              <DropShadowNormalButton
                href={project.repositoryUrl}
                target="_blank">Repository</DropShadowNormalButton
              >
            </span>
          </span>
        </li>
      {/each}
    </ul>
  </div>
{/if}

<style>
  div {
    position: relative;
    background: var(--backgroundColor);
    max-width: 800px;
    margin: 24px auto;
    padding: 12px;
    -webkit-box-shadow: 0 3px #23313f, 0px -3px #23313f, 3px 0px #23313f,
      -3px 0px #23313f;
    box-shadow: 0 3px #23313f, 0px -3px #23313f, 3px 0px #23313f,
      -3px 0px #23313f;
  }

  ul {
    padding: 0 0 0 20px;
    margin: 12px 0;
  }

  li {
    list-style: square;
  }

  .project-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span {
    display: flex;
  }

  .project-item span {
    display: flex;
  }

  h2 {
    margin: 0;
  }

  @media screen and (max-width: 512px) {
    div {
      padding: 6px;
    }
  }

  .coral-image {
    width: 100px;
    opacity: 0.5;
    position: absolute;
    bottom: 0;
    left: 0;
  }
</style>
