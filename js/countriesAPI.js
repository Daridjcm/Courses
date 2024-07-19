let dataResArr;
const dataResObj = {};

const uploadDatas = async() => {
    const res = await fetch('https://restcountries.com/v3.1/lang/spanish')
    let datas = await res.json();
    datas = datas.map(data => data.name.common);
    dataResArr = [...datas];
    let convertArrToObj = () => {
        for (let i = 1; i < dataResArr.length; i++) {
            dataResObj[i] = dataResArr[i];
        };
    };
    convertArrToObj();
    validateCountrie();
}

const validateCountrie = () => {
// Validación de paises, se agregará emojis al lado del valor del objeto
    // dataResObj === 'Colombia' ? dataResObj.join('🇨🇴') : undefined
    console.log(dataResObj)
}

uploadDatas();