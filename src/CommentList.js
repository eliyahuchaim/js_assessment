function createCommentList(){

  return class List{
  constructor(){
    this.id = 0
    store.commentsList.push(this)
  }

  comments(){
    return store.comments.filter((comment) => {
      return comment.listID === this.id
    })
  }

  listHTML(){
  let commentsHMTL = this.comments().map(function(comment){
    return `
      <li>
        ${comment.content}
        <div class="delete-button">
        <botton type="delete" value="delete comment" id=${comment.id}> --Delete Comment</button>
        </div>
       </li>
       `
      }).join(" ")
      render(commentsHMTL, "comments-list")
    }




}
};



let List = createCommentList()

new List()
