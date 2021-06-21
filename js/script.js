const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
  ];

const iconscolor = icons.map((element) =>{
  const name=element.name;
  const type=element.type;
  const family=element.family;
  const prefix=element.prefix;

  let color;
  switch(type){
    case 'user':
      color="#0000FF";
      break
    case 'animal':
      color="#FF0000";
      break
    case 'vegetable':
      color="#008000";
      break
  }

  return {
   ...element,
    color
  };
});

const type=[];

iconscolor.forEach((element)=>{
  if(!type.includes(element.type)){
    type.push(element.type)
    document.getElementById("type").innerHTML +=`
    <option value="${element.type}">${element.type}</option>
    `
  }
});

const select=document.getElementById("type");

select.addEventListener("change",function(){
  const valoreselect=select.value;
  console.log(valoreselect);
  const filtericons= iconscolor.filter((element)=>{
    return element.type == valoreselect;
  });

  stampa(filtericons);
  if(valoreselect=="all"){
    stampa(iconscolor);
  }
})

console.log(type);


  stampa(iconscolor)


function stampa(array){
  document.getElementById("icons").innerHTML="";
  array.forEach((element)=> {
    document.getElementById("icons").innerHTML +=`
    <div class="col">
     <div class="d-flex justify-content-center align-items-center flex-column p-5  bianco m-5 rounded">
     <i class="${element.family} ${element.prefix}${element.name}" style="color:${element.color}"></i>
       <div>${element.name}</div>
     </div>
    `
});
}
