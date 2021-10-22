<script lang="ts">
    import {v4 as uuidv4} from 'uuid'
    import {FeedbackStore} from '../stores'
    import Button from '../ui/Button.svelte'
    import Card from '../ui/Card.svelte';
    import RatingSelect from './RatingSelect.svelte';

    let text: string = ''
    let btnDisable: boolean = true;
    let min: number = 10;
    let message: string;
    let rating: number = 10;

    const handleInput = () : void => {
        if (text.trim().length <= min) {
            btnDisable = true;
            message = `Text must be at least ${min} characters long`;
        } else {
            message = null;
            btnDisable = false;
        }
    }

    const handleRating = (e: any) => rating = e.detail;
    
    const handleSubmit = () : void => {
        if(text.trim().length > min) {
            const newFeedback = {
                id: uuidv4(),
                text: text,
                rating: rating
            }

            FeedbackStore.update((currentFeedback) => [newFeedback, ...currentFeedback, ])
            text = ''
        }
    }
</script>
<Card>
    <header>
        <h2>How would you rate your service with us?</h2>
    </header>
    <form on:submit|preventDefault={handleSubmit}>
        <RatingSelect on:rating-select={handleRating} />
        <div class="input-group">
            <input bind:value={text} type="text" on:input={handleInput} placeholder="Tell us something that keeps you coming back">
            <Button type='submit' disabled={btnDisable}>Send</Button>
        </div>
        {#if message}
            <div class="message">
                {message}
            </div>
        {/if}
    </form>
</Card>


<style>
    header {
        max-width: 400px;
        margin: auto;
    }
    header h2 {
        font-size: 22px;
        font-weight: 600;
        text-align: center;
    }

    .input-group {
        display: flex;
        flex-direction: row;
        border: 1px solid #ccc;
        padding: 8px 10px;
        border-radius: 8px;
        margin-top: 15px;
    }

    input {
        flex-grow: 2;
        border: none;
        font-size: 16px;
    }

    input:focus {
        outline: none;
    }

    .message {
        padding-top: 10px;
        color: rebeccapurple;
        text-align: center;
    }
</style>

