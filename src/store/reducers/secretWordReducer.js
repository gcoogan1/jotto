
//returning state so that if state is already set then the state will not be overrided to null and the reducer will just return the state as is
export default (state=null, action) => {
    return state;
}