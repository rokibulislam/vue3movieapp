export const serialize = (obj) => {
    let main = {
        'language': "en-US",
        "api_key": process.env.VUE_APP_APIKEY
    };

    console.log(main);
    main = { ...main, ...obj,  }
    
    let str = [];
    
    for (var p in main )
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(main[p]));

    return str.join("&");  
}