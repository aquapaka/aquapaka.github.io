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
    style:background={backgroundColor}
    transition:slide={{ delay: 1500, duration: 800, easing: sineOut }}
  >
    <img class="coral-image" src={coralImage} alt="coral" />
    <h2>My Skills</h2>
    <ul>
      {#each skills as skill}
        <li>{skill}</li>
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
    right: 0;
  }
</style>
