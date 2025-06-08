// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
//

function addToLocalStorage (arrayName,objToAdd){
    let getItem = JSON.getItem(arrayName);
    if(!getItem){
        throw new Error('not array')
    }

    let objAdding = JSON.parse(getItem);
    if(typeof objToAdd === "object"){
    objAdding.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(objAdding));
}
addToLocalStorage('', {});