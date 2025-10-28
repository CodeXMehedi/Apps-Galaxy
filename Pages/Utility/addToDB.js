

const getStoredInfo = () => {
    
    const storeInfo = localStorage.getItem("Installation");

    if (storeInfo) {
        const storedInstalledData = JSON.parse(storeInfo);
        return storedInstalledData;
    }
    else {
        return [];
    }

}

const addToStoredDB = (id) => {
    
    const storedInstalledData = getStoredInfo();

    if (storedInstalledData.includes(id)) {
        
        console.log('hello')
        
    }
    else {
        storedInstalledData.push(id);
        const data = JSON.stringify(storedInstalledData);
        localStorage.setItem("Installation",data)

    }

}

export { addToStoredDB ,getStoredInfo };