import { useSound } from "svelte-sound";
import hoverSound from "../../assets/audios/userinterface-hover.mp3";
import clickSound from "../../assets/audios/userinterface-click.mp3";

export const hover_sound = useSound(hoverSound, ["mouseover"], { volume: 0.2 });
export const click_sound = useSound(clickSound, ["mousedown"], { volume: 0.2 });
