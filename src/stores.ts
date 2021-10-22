import {writable} from 'svelte/store'
import type { TFeedback } from './types'

export const FeedbackStore = writable<Array<TFeedback>>([
    {
        id: 1,
        text: 'Иванов Иван Иванович',
        rating: 2,
    },
    {
        id: 2,
        text: 'Петров Петр Петрович',
        rating: 3,
    },
    {
        id: 3,
        text: 'Сидоров Сидр Сидорович',
        rating: 4,
    },
])