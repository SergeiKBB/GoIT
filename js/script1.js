let  array  =  [ 
 { name : 'width' ,  value : 10 } ,{ name : 'height' ,  value : 20 } 
];

let result = array.reduce((acc, item) => {
  acc[item.name] = item;

  return acc;
}, {});
console.log(array);