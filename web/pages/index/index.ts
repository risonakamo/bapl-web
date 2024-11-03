import {mount} from "svelte";
import Index from "./index.svelte";

function main():void
{
    mount(Index,{target:document.body});
}

window.onload=main;