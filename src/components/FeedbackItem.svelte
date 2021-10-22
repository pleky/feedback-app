<script lang="ts">
    import type { IFeedback } from "../types";
    import {FeedbackStore} from '../stores'
    import Card from "../ui/Card.svelte";

    export let item: IFeedback;

    const handleDelete = (itemId: number) : void => {
      FeedbackStore.update((currentItem) => currentItem.filter(item => item.id !== itemId));
    }
    
</script>

<Card>
   <div class="num-display">{item.rating}</div>
   <button class="close" on:click={() => handleDelete(item.id)}>X</button>
   <div class="text-display">{item.text}</div>
</Card>

<style>
    .num-display {
        padding: 10px;
        border-radius: 50%;
        background-color: #ff6a95;
        position: absolute;
        font-size: 19px;
        color: white;
        width: 50px;
        height: 50px;
        text-align: center;
        top: -10px;
        left: -10px;
    }
    .close {
        position: absolute;
        top: 10px;
        right: 20px;
        background: none;
        border: none;
        cursor: pointer;
    }
</style>