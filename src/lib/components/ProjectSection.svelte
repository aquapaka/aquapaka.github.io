<script lang="ts">
  import { slide } from "svelte/transition";
  import { bounceOut } from "svelte/easing";
  import DropShadowNormalButton from "./DropShadowNormalButton.svelte";
  import coralImage from "../../assets/coral-0.png";
  import projects from "../../datas/projects";
  import OpenIcon from "./icons/OpenIcon.svelte";
  import RepositoryIcon from "./icons/RepositoryIcon.svelte";

  export let isLoading: boolean;
  export let secretTheme: boolean;

  $: backgroundColor = secretTheme ? "#fcda96" : "#60c4f2";
</script>

{#if !isLoading}
  <div
    class="pixel-box"
    style:background={backgroundColor}
    transition:slide={{ delay: 2024, duration: 1000, easing: bounceOut }}
  >
    <img class="coral-image" src={coralImage} alt="coral" />
    <h2 class="font-bold pb-2">My Projects</h2>
    <ul class="list-[square] pl-4">
      {#each projects as project}
        <li>
          <div class="flex justify-between">
            <span class="project-item">
              {project.name}
            </span>
            <span
              class="mb-4 flex flex-col sm:flex-row gap-1 justify-end items-end"
            >
              <DropShadowNormalButton href={project.websiteUrl} target="_blank"
                ><OpenIcon class="w-4 h-4 text-gray-700" />View Page</DropShadowNormalButton
              >
              {#if project.downloadUrl.length > 0}
                <DropShadowNormalButton
                  href={project.downloadUrl}
                  target="_self">Download</DropShadowNormalButton
                >
              {/if}
              {#if project.repositoryUrl.length > 0}
                <DropShadowNormalButton
                  href={project.repositoryUrl}
                  target="_blank"
                  ><RepositoryIcon
                    class="w-4 h-4 text-gray-700"
                  />Repository</DropShadowNormalButton
                >
              {/if}
            </span>
          </div>
        </li>
      {/each}
    </ul>
  </div>
{/if}

<style>
  .coral-image {
    width: 100px;
    opacity: 0.5;
    position: absolute;
    bottom: 0;
    left: 0;
  }
</style>
