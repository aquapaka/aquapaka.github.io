<script>
  import {fade} from "svelte/transition";
</script>

<div class="loading-screen" transition:fade="{{delay: 1200, duration: 300}}">
  <div class="loading-icon">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>

<style>
    @-webkit-keyframes flip-to-square {
        0% {
            -webkit-transform: rotateX(-90deg);
            transform: rotateX(-90deg);
        }
        50%,
        75% {
            -webkit-transform: rotateX(0);
            transform: rotateX(0);
        }
        100% {
            opacity: 0;
            -webkit-transform: rotateX(0);
            transform: rotateX(0);
        }
    }

    @keyframes flip-to-square {
        0% {
            -webkit-transform: rotateX(-90deg);
            transform: rotateX(-90deg);
        }
        50%,
        75% {
            -webkit-transform: rotateX(0);
            transform: rotateX(0);
        }
        100% {
            opacity: 0;
            -webkit-transform: rotateX(0);
            transform: rotateX(0);
        }
    }

    .loading-screen {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 10;
        background: #08a8f3;
    }

    .loading-icon {
        /**
        * Flip to square
        *
        * @author jh3y - jheytompkins.com
        */

        display: grid;
        margin: 40vh auto;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        height: 120px;
        width: 120px;
    }

    .loading-icon div {
        -webkit-animation: flip-to-square 1.5s calc(var(--delay) * 1s) infinite backwards;
        animation: flip-to-square 1.5s calc(var(--delay) * 1s) infinite backwards;
        background-color: #fff;
    }

    .loading-icon div:nth-child(1) {
        --delay: 0.1;
    }

    .loading-icon div:nth-child(2) {
        --delay: 0.2;
    }

    .loading-icon div:nth-child(3) {
        --delay: 0.3;
    }

    .loading-icon div:nth-child(4) {
        --delay: 0.4;
    }

    .loading-icon div:nth-child(5) {
        --delay: 0.5;
    }

    .loading-icon div:nth-child(6) {
        --delay: 0.6;
    }

    .loading-icon div:nth-child(7) {
        --delay: 0.7;
    }

    .loading-icon div:nth-child(8) {
        --delay: 0.8;
    }

    .loading-icon div:nth-child(9) {
        --delay: 0.9;
    }
</style>