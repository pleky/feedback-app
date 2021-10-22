<script lang="ts">
    // import {onMount, onDestroy} from 'svelte'
    import {FeedbackStore} from '../stores'
    import {fade, scale} from 'svelte/transition'
    import type { IFeedback } from "../types";
    import FeedbackItem from "./FeedbackItem.svelte";
    // let feedback: Array<IFeedback>;

    // const unsubsribe = FeedbackStore.subscribe((data) => feedback = data);
    
    // onDestroy(() => unsubsribe());

</script>

{#each $FeedbackStore as item (item.id)}
<div in:scale={{duration: 500, delay: 200}} out:fade={{duration: 500}}>
    <FeedbackItem {item} on:delete-feedback />
</div>
     
{/each}