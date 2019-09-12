export const count=state=>state.count
const limit=5;
export const recentHistory=state=>{
    const end=state.history.length
    const begin=end-limit<0?0:end-limit;
    console.log(state.history)
    return state.history
    .slice(begin,end)
    .join(', ')
}