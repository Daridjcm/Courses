let dataResArr;
const dataResObj = {};

const uploadDatas = async() => {
    const res = await fetch('https://restcountries.com/v3.1/lang/spanish');
    let datas = await res.json();
    datas = datas.map(data => data.name.common);
    dataResArr = [...datas];
    let convertArrToObj = () => {
        for (let i = 0; i < dataResArr.length; i++) {
            dataResObj[i] = dataResArr[i];
        }
    };
    convertArrToObj();
    validateCountrie();
}

const validateCountrie = () => {
// Country validation, emoji will be added next to the object value    
    for (let key in dataResObj) {
        if (dataResObj[key] === 'Colombia') {
            dataResObj[key] += ' 🇨🇴';
        }
    }
    console.log(dataResObj);
}

uploadDatas();