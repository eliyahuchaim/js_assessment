function createComment(){
  let commentID = 0

  return class Comment{
    constructor(content){
      this.content = content
      this.id = ++commentID
      this.listID = 0
      store.comments.push(this)
    }

    static deleteComment(comment){
      let list = store.commentsList[0]
      let index = store.comments.indexOf(comment)
      store.comments.splice(index, 1)
      list.listHTML()
    }
  };





}


let Comments = createComment()
