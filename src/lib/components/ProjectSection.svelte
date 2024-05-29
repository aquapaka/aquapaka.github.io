<script lang="ts">
  import { bounceOut } from "svelte/easing";
  import { slide } from "svelte/transition";
  import coralImage from "../../assets/coral-0.png";
  import projects from "../../datas/projects";
  import DropShadowNormalButton from "./DropShadowNormalButton.svelte";
  import OpenIcon from "./icons/OpenIcon.svelte";
  import RepositoryIcon from "./icons/RepositoryIcon.svelte";

</script>

<div
  class="pixel-box"
  transition:slide={{ delay: 2024, duration: 1000, easing: bounceOut }}
>
  <img class="coral-image" src={coralImage} alt="coral" draggable="false" />
  <h2 class="font-bold pb-2">My Projects</h2>
  <ul class="list-[square] pl-4 md:pl-6">
    {#each projects as project}
      <li>
        <div class="flex justify-between">
          <span class="project-item">
            {project.name}
          </span>
          <span
            class="mb-4 flex flex-col sm:flex-row gap-2 justify-end items-end"
          >
            {#if project.websiteUrl}
              <DropShadowNormalButton href={project.websiteUrl} target="_blank"
                ><OpenIcon class="w-4 h-4 text-gray-700" />View Page</DropShadowNormalButton
              >
            {/if}

            {#if project.downloadUrl}
              <DropShadowNormalButton href={project.downloadUrl} target="_self"
                >Download</DropShadowNormalButton
              >
            {/if}
            {#if project.repositoryUrl}
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

<style>
  .coral-image {
    width: 100px;
    opacity: 0.5;
    position: absolute;
    bottom: 0;
    left: 0;
  }
</style>
