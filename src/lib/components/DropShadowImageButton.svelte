<script>
  export let src;
  export let alt;
</script>

<img {src} {alt} on:click on:keypress/>

<style>
    img {
        filter: drop-shadow(4px 4px rgba(0, 0, 0, 0.7));
        width: var(--desktop-width, 20px);
    }

    @media (hover: hover) {
        img:hover {
            filter: drop-shadow(8px 8px rgba(0, 0, 0, 0.7));
            transform: translate(-2px, -2px);
        }
    }

    @media screen and (max-width: 512px) {
        img {
            width: var(--mobile-width);
        }
    }

    img:active {
        filter: drop-shadow(2px 2px rgba(0, 0, 0, 0.7));
        transform: translate(2px, 2px);
    }
</style>