const formatData = (options={}) => {
    let defaults = {
        data: [],
        code: 200,
        msg:''
    }

    let res = { ...defaults, ...options }


    return res;
}

module.exports = formatData;