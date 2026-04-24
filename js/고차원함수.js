//고차원함수1.js
const user =[
    {name:"웅냥뇽",pay:300},
    {name:"뽀잉봉", pay: 200},
    {name:"뿡빵뽕", pay: 350},
    {name:"우앙홍", pay: 100},
    {name:"훙잉잉", pay: 300},
        ];
console.log(user[3].pay);//100
//모든 직원의 급여를 100만원씩 인상하기
user.map((user)=>{return{name:user.name,pay: user.pay+100}};
console.log(인상급여);
//인상급여 배열에서 급여가 400만원 이상인 사람을 골라서 고급개발자 배열을 만들어라
const 고급개발자=인상급여.filter((급여=>급여.pay>=400));
console.log(고급개발자);
//인상급여 배열에서 급여 합계, 평균 구하기
인상급여.reduce((sum, 사원)=>sum+사원.pay,0)
let payavg=paytotall/5
console.log(paytotall); //1750만원
console.log(payavg); // 350만원
