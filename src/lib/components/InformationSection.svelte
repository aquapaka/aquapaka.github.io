<script lang="ts">
  import { slide } from "svelte/transition";
  import { sineOut } from "svelte/easing";

  const skills = [
    "Frontend: React, Svelte, HTML5/CSS3, Javascript, Typescript",
    "Backend: Java, Spring framework, JavaEE",
    "Desktop: JavaFX",
    "Database: MySql, Sql Server, Postgresql",
  ];

  export let isLoading;
  export let secretTheme;
  $: backgroundColor = secretTheme ? "#fcda96" : "#60c4f2";
</script>

{#if !isLoading}
  <div
    style:background={backgroundColor}
    transition:slide={{ delay: 1500, duration: 800, easing: sineOut }}
  >
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
</style>
