

class Comment {
    constructor(text,profileID,date) {
        this.text = text;
        this.profileID = profileID;
        this.date = date;
    }

    static fromMap(map) {
        return new Comment(
          map['text'],
          map['profileID'],
          new Date(map['date'].toDate())
        );
      }

  }
  export default Comment;