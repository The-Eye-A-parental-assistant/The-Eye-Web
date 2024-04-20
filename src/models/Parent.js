import User from './User';

class Parent extends User{
    constructor(id,gender,name,imageURL,plan,children,transactions){
        super(id,"parent",gender,name,imageURL);
        this.transactions=transactions; 
        this.children=children;
        this.plan=plan;
}


static fromFirestore(doc) {
    const data = doc.data();
    return new Parent(
        doc.id,
        // data.gender, 
        "male",   
        data.name,
        data.imageURL,
        // data.transactions,
        "",
        [],
        // data.videos
        []
    );
  }

}
export default Parent;