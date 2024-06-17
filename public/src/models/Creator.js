import User from './User';

class Creator extends User{
    constructor(id,gender,name,imageURL,transactions,videos){
        super(id,"creator",gender,name,imageURL);
        this.transactions=transactions; 
        this.videos=videos;

}


static fromFirestore(doc) {
    const data = doc.data();
    return new Creator(
        doc.id,
        // data.gender, 
        "male",   
        data.name,
        data.imageURL,
        // data.transactions,
        [],
        // data.videos
        []
    );
  }

}
export default Creator;