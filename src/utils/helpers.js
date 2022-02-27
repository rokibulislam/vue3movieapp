export const serialize = (obj) => {
    let main = {
        'language': "en-US",
        "api_key": "4114af6f24404b5dadf01e6b07ca8c5d",
    };
    main = { ...main, ...obj,  }
    
    let str = [];
    
    for (var p in main )
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(main[p]));

    return str.join("&");  
}