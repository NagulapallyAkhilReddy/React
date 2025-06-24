// function fun ()
// {
//   if(true)
//   {
//     var a=5;let b=10;
//   }
//   console.log(a);
//   var a=6;
//   console.log(b);
// }
// fun()
let arr=[5,4,8,3,2];
arr.forEach(function(v,i)
{
  console.log(v*2);

});

let res=arr.forEach(function(v,i)
{
   return v-1;
});
console.log(res)//undefined , beacause for ecah loop does't return anything

let rse2=arr.map(function(v,i)
{
  return v-1;
});
console.log(rse2);

let rse3=arr.map(function(v,i)
{
  return v%2==0;
});
console.log(rse3);

let rse4=arr.filter(function(v,i)
{
  return v%2==0;
});
console.log(rse4);

//logical and
// let c=true, d=false;
// if(c&&d)
// {
//   console.log("success")
// }
// else
// {
//   console.log("fail")
// }
// if(c||d)
//   {
//     console.log("success")
//   }
//   else
//   {
//     console.log("fail")
//   }

// let c=(10>5)? "akhil":"kittu";
// console.log(c);

function sum(a,b)
{
  return a+b;
}
console.log(sum(3,4));


let sum2=(a,b)=>a+b;
console.log(sum2(3,4));


function sum(a,...b)
{
  let c=[5,...b];//[5,3,2,1,4]
  console.log(a,b);
}
console.log(sum(3,2,1,4));