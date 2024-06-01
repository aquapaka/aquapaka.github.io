<script lang="ts">
  import { spring } from "svelte/motion";
  import pufferFish from "../../assets/pufferfish.png";
  import { onMount } from "svelte";

  const OFFSET_POS = { x: 10, y: -40 };

  let coords = spring(
    { x: 400, y: 300 },
    {
      stiffness: 0.05,
      damping: 0.8,
    },
  );

  function handleOnMouseMove(e: MouseEvent) {
    coords.set({ x: e.clientX + window.scrollX, y: e.clientY + window.scrollY });
  }

  onMount(() => {
    window.addEventListener("mousemove", handleOnMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleOnMouseMove);
    };
  });
</script>

<img
  class="pufferfish absolute animate-bounce z-10"
  src={pufferFish}
  alt="pufferfish"
  draggable="false"
  style="--top: {OFFSET_POS.y + $coords.y + 'px'}; --left: {OFFSET_POS.x +
    $coords.x +
    'px'}"
/>

<style>
  @keyframes floating {
    from {
      transform: translateY(-8px);
    }
    to {
      transform: translateY(8px);
    }
  }

  .pufferfish {
    width: 32px;
    opacity: 0.7;
    position: absolute;
    top: var(--top);
    left: var(--left);
    animation-name: floating;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
</style>
