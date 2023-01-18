<script lang="ts">
  import aquaAvatar from "../../assets/Aquatixel Pixel Art 800x800.png";
  import meimeiAvatar from "../../assets/My Love Pixel Art 800x800.png";
  export let secretTheme;

  let clickCount = 0;

  const secretClick = () => {
    clickCount++;

    if(clickCount >= 5) {
      secretTheme = !secretTheme;
      clickCount = 0;
    }
  }
</script>

<div>
    <h1>{secretTheme ? "I'm in love with Meimei" : "Hi, I'm Aqua"}</h1>
    <img alt="Avatar" src={secretTheme ? meimeiAvatar : aquaAvatar} on:click={secretClick}/>
</div>

<style>
    div {
        text-align: center;
    }

    img {
        width: 120px;
    }

    @media screen and (max-width: 500px) {
        img {
            width: 100px;
        }
    }
</style>