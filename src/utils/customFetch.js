
let is_stock = true;

let customFetch = (timeout, task) => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            if(is_stock){
                resolve(task)
            }else{
                reject("error")
            }
        }, time);
    });
}

export default customFetch; 