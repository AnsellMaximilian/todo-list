const appController = (function(){
    const saveToStorage = (todoItems) => {
        localStorage.setItem("todoItems", JSON.stringify(todoItems));
    }

    const getFromStorage = () => {
        if(localStorage.getItem("todoItems")) {
            return JSON.parse(localStorage.getItem("todoItems"));
        }else {
            return [];
        }
    }

    const getId = () => {
        let id;
        if(localStorage.getItem("uniqueId")){
            id = parseInt(localStorage.getItem("uniqueId"));
            localStorage.setItem("uniqueId", (id + 1))
            return id;

        }else{
            id = 0;
            localStorage.setItem("uniqueId", (id + 1));
            return id;
        }
    }

    return {
        saveToStorage,
        getFromStorage,
        getId,
    }
})();

export default appController;