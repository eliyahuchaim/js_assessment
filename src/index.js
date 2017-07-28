const store = {comments: [], commentsList: []}


function render(html, into){
  document.getElementById(`${into}`).innerHTML = html
}


document.addEventListener('DOMContentLoaded', function() {

})



function inputFilter(){
  $('#filter-comments-input').keyup(function() {
    // console.log(event.target.value)
    let list = store.commentsList[0]
     var html = []
    store.comments.filter(function(comment){
      // debugger
      if (event.target.value !== 0 && comment.content.includes(event.target.value)){
            html.push(`
          <li>
            ${comment.content}
          </li>
          `)
        render(html, "comments-list")
      // console.log(comment.content)
    } else {
      // debugger
      list.listHTML()
    }
    })
});
}
