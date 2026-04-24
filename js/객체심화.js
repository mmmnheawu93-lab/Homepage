//객체심화js
const user{
    name:"우오앙",
    age:20,
    email:"uoang@naver.com"
    //함수
    introduce: function(){
        return `안녕하세요 저는 ${this.name}입니다. ${this.age}살입니다
        이메일은 ${this.email}입니다`;}
}
//함수2
getage(){
    return`저는 ${this.age}살입니다`;
}


console.log(user.email);
console.log(user.introduce());
console.log(user.getage());
user.setage();
console.log(user.getage());