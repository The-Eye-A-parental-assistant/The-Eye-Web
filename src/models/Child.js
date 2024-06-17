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
        // data.gender, 
        "male",   
        data.name,
        data.imageURL,
        "",
        "", 
        "",
        [],
        [],
        [],
        [],
        [],
        {}
    );
  }

}
export default Child;
