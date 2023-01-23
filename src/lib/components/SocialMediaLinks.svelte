<script lang="ts">
  import emailIcon from "../../assets/Email.png";
  import linkedinIcon from "../../assets/Linkedin.png";
  import githubIcon from "../../assets/Github.png";
  import youtubeIcon from "../../assets/Youtube.png";
  import discordIcon from "../../assets/Discord.png";

  import DropShadowImageButton from "./DropShadowImageButton.svelte";

  const links = [
    {
      image: emailIcon,
      url: "mailto:aqua.tamlong@gmail.com",
      text: "aqua.tamlong@gmail.com",
    },
    {
      image: linkedinIcon,
      url: "https://www.linkedin.com/in/aquapaka/",
      text: "linkedin.com/in/aquapaka/",
    },
    {
      image: githubIcon,
      url: "https://github.com/aquapaka",
      text: "github.com/aquapaka",
    },
    {
      image: youtubeIcon,
      url: "https://www.youtube.com/aquapaka",
      text: "youtube.com/aquapaka",
    },
    {
      image: discordIcon,
      url: "https://discord.gg/ybu9ssM2PX",
      text: "Contact me on discord",
    },
  ];
</script>

<div>
  {#each links as link}
    <a href={link.url} target="_blank" rel="noreferrer">
      <DropShadowImageButton
        src={link.image}
        alt={link.text}
        --desktop-width="55px"
        --mobile-width="40px"
      />
    </a>
    <span>{link.text}</span>
  {/each}
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    margin: 16px;
    gap: 8px;
  }

  span {
    display: none;
  }
</style>
