export const loadState = () =>{
    try{
        const serializedData = localStorage.getItem('state');
        if(serializedData == null){
            return undefined;
        }
        return JSON.parse(serializedData)
    } catch(err){
        return undefined;
    }
}

export const saveState = (state)=>{
    try{
        const serializedData = JSON.stringify(state);
        localStorage.setItem('state', serializedData)
    } catch(err){
        console.log(err);
    }
}