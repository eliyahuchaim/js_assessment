const comments = []

document.addEventListener('DOMContentLoaded', function() {

  $('body').on('click', '.delete-button', function(event){
    comment = event.target
    debugger
    Comments.deleteComment(comment)
  })

  document.getElementById('comment-form').addEventListener('submit', function(){
    event.preventDefault();
    let comment = document.getElementById('add-comments-input').value
    new Comments(comment)
    let list = store.commentsList[0]
    list.listHTML()
    // comments.push(comment)
    // render(comments, "comments-list")

    inputFilter()
  })
});


// function render(comments,into){
//   commentsHMTL = comments.map(function(comment){
//     return `
//     <li>
//       ${comment}
//       <div class="delete-button">
//       <botton type="delete" value="delete comment" id=${comment}> --Delete Comment</button>
//       </div>
//      </li>
//      `
//     }).join(" ")
//     document.getElementById(`${into}`).innerHTML = commentsHMTL
//   }


  // function deleteComment(comment){
  //   let index = comments.indexOf(comment)
  //   comments.splice(index, 1)
  //   render(comments, "comments-list" )
  // }


// function deleteButtonAction(){
//   $('body').on('click', '.delete-button', function(event){
//     debugger
//   	comment = event.target.id
//     Comments.deleteComment(comment)
//   })
// }
