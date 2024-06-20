import User from './User';

class Child extends User{
    constructor(id,gender,name,imageURL,
                parentID, PIN, birthDate,
                history, likes, dislikes, favourites, 
                prefs, screenTime){
        super(id,"child",gender,name,imageURL);
        this.parentID=parentID; 
        this.PIN=PIN;   
        this.birthDate=birthDate;
        this.history=history;
        this.likes=likes;
        this.dislikes=dislikes;
        this.favourites=favourites;
        this.prefs=prefs;
        this.screenTime=screenTime;
}


static fromFirestore(doc) {
    const data = doc.data();
    return new Child(
        doc.id,
        data.gender, 
        data.name,
        data.imageURL,
        data.parentID,
        data.PIN,
        data.birthDate,
        data.history,
        data.likes,
        data.dislikes,
        data.favourites,
        data.prefs,
        data.screenTime
    );
  }

}
export default Child;
