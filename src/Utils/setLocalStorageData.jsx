export const fetchData =()=>{
    const userInfo = localStorage.getItem('user')!== 'undefined'
    // console.log(userInfo);
    ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    return userInfo;

}
export default fetchData;