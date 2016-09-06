"use strict"
const Fetch =({
                url,
                data,
                headers={ Authorization: "Bearer {" + localStorage.getItem("token") + "}" },
                type='POST',
                mode='no-cors',
                credentials,
                success=()=>{},
                error=()=>{}
            })=>{

    const header = new Headers();
    for (let i in headers){
        header.append(i,headers[i]);
    }

    const searchParams = new URLSearchParams();
    for (let i in data){
        searchParams.append(i,data[i]);
    }

    // credentials:'include'   Fetch 跨域请求时默认不会带 cookie, 需要时得手动指定 credentials: 'include'
    const fetch_options = {
        method:type,
        body:searchParams,
        mode: mode,
        headers:header
    };

    return fetch(url,fetch_options).then((res)=>{
        if (res.ok)  {
            success();
            return res.json()
        }else{
            error();
        }
        Promise.reject(new Error(res.status));
    });

};

export default Fetch;
