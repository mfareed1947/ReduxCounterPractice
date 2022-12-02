export const increment = (newValue)=>{
    return {
        type: 'INCREMENT',
        payload: newValue
    }
}

export const decrement = ()=>{
    return {
        type: 'DECREMENT'
    }
}