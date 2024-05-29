<script lang="ts">
  import { slide } from "svelte/transition";
  import { sineOut } from "svelte/easing";
  import coralImage from "../../assets/coral-1.png";
  import skills from "../../datas/skills";
  import { secretTheme } from "../stores/mainstore";

  $: backgroundColor = $secretTheme.isActive ? "#fcda96" : "#60c4f2";
</script>

<div
  class="pixel-box"
  style:background={backgroundColor}
  transition:slide={{ delay: 1500, duration: 800, easing: sineOut }}
>
  <img class="coral-image" src={coralImage} alt="coral" draggable="false" />
  <h2 class="font-bold pb-2">My Skills</h2>
  <ul class="list-[square] pl-4 md:pl-6">
    {#each skills as skill}
      <li>
        {#if Array.isArray(skill)}
          <span class="underline">{skill[0]}</span>
          <ul class="pl-0">
            {#each skill.slice(1) as ski}
              <li>- {ski}</li>
            {/each}
          </ul>
        {:else}
          {skill}
        {/if}
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
    right: 0;
  }
</style>
