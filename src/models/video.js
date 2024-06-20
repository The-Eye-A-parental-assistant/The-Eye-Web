import Comment from './comment';

class Video {
    constructor(id, title, thumbnail, videoURL, description, views, creatorID, status, comments, date, tags) {
      this.id = id;
      this.title = title;
      this.thumbnail = thumbnail;
      this.videoURL = videoURL; 
      this.description = description;
      this.views = views;
      this.creatorID = creatorID;
      this.status = status;
      this.comments = comments;
      this.date = date;
      this.tags = tags;
    }

    static fromFirestore(doc) {
        const data = doc.data();
        return new Video(
          doc.id,
          data.title,
          data.thumbnail,
          data.videoURL,
          data.description,
          data.views,
          data.creatorID,
          data.status,
          data.comments.map(commentData =>  Comment.fromMap(commentData)),
          data.date.toDate(),
          data.tags
        );
      }

  }

    export default Video;