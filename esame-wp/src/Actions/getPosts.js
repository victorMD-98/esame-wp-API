

export default function getPosts() {
return  function (dispatch, getsate){
    fetch("http://localhost/wordpress_1/wordpress/wp-json/wp/v2/posts").then(response=>response.json()).then(json=> {return dispatch({type: "GET_POSTS", payload: json})}).catch(err=>console.log(err))
  }
}
