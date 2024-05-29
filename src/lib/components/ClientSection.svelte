<script lang="ts">
  import { cubicOut } from "svelte/easing";
  import { slide } from "svelte/transition";
  import pufferFish from "../../assets/pufferfish.png";
  import clients from "../../datas/clients";
  import DropShadowNormalButton from "./DropShadowNormalButton.svelte";
  import OpenIcon from "./icons/OpenIcon.svelte";
  import { secretTheme } from "../stores/mainstore";

</script>

<div
  class="pixel-box"
  transition:slide={{ delay: 1800, duration: 800, easing: cubicOut }}
>
  <img class="pufferfish" src={pufferFish} alt="pufferfish" draggable="false" />
  <h2 class="font-bold pb-2">My Clients</h2>
  <ul class="list-[square] pl-4 md:pl-6">
    {#each clients as client}
      <li>
        <div class="flex justify-between">
          <span class="project-item">
            {client.name}
          </span>
          <span
            class="mb-4 flex flex-col sm:flex-row gap-1 justify-end items-end"
          >
            {#if client.website.length}
              <DropShadowNormalButton href={client.website} target="_blank"
                ><OpenIcon class="w-4 h-4 text-gray-700" />View Site</DropShadowNormalButton
              >
            {/if}
          </span>
        </div>
      </li>
    {/each}
  </ul>
</div>

<style>
  @keyframes floating {
    from {
      transform: translateY(-2px);
    }
    to {
      transform: translateY(2px);
    }
  }

  .pufferfish {
    width: 32px;
    opacity: 0.7;
    position: absolute;
    bottom: 60%;
    left: 70%;
    animation-name: floating;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
</style>
