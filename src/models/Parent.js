import User from './User';

class Parent extends User{
    constructor(id,gender,name,imageURL,plan,children,transactions, PIN){
        super(id,"parent",gender,name,imageURL);
        this.transactions=transactions; 
        this.children=children;
        this.plan=plan;
        this.PIN=PIN;
}


static fromFirestore(doc) {
    const data = doc.data();
    return new Parent(
        doc.id,
        // data.gender, 
        "male",   
        data.name,
        data.imageURL,
        data.plan,
        data.children,
        data.transactions,
        data.PIN
    
    );
  }

}
export default Parent;