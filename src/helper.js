export function checkSession(){
      if(localStorage.getItem('issetSession')=='' || localStorage.getItem('issetSession')==null){
            localStorage.removeItem('issetSession')
            localStorage.removeItem("userName")
            window.location.assign('/')
      }
}