<script lang="ts">
  import { slide } from "svelte/transition";
  import { sineOut } from "svelte/easing";
  import coralImage from "../../assets/coral-1.png";
  import skills from "../../datas/skills";

  export let isLoading: boolean;
  export let secretTheme: boolean;

  $: backgroundColor = secretTheme ? "#fcda96" : "#60c4f2";
</script>

{#if !isLoading}
  <div
    class="pixel-box"
    style:background={backgroundColor}
    transition:slide={{ delay: 1500, duration: 800, easing: sineOut }}
  >
    <img class="coral-image" src={coralImage} alt="coral" draggable="false" />
    <h2 class="font-bold pb-2">My Skills</h2>
    <ul class="list-[square] pl-4">
      {#each skills as skill}
        <li>
          {#if Array.isArray(skill)}
            <span class="underline">{skill[0]}</span>
            <ul class="pl-3">
              {#each skill.slice(1) as ski}
                <li>{ski}</li>
              {/each}
            </ul>
          {:else}
            {skill}
          {/if}
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
    right: 0;
  }
</style>
