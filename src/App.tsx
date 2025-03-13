
const data= [
  {
    id: 1,
    name: "Geudude",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png ",
    types: ["fire", "water"],
  },

  {
  id: 2,
  name: "PIKACHU",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png ",
  types: ["elettric"],
},
{
id: 3,
  name: "BUBS",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png ",
  types: ["fire", "water"],
},
{
id: 4,
  name: "BUBS",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png ",
  types: ["fire", "water"],
},
{
id: 5,
  name: "SQUITRLE",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png ",
  types: ["fire", "water"],
},
{
  id: 6,
    name: "CHARMANDER",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png ",
    types: ["fire", "poison"],
  },
];
const typeC: { [key: string]: string} = {
  fire: "bg-red-300",
  water: "bg-blue-300",
  elettric: "bg-yellow-300",
  poison: "bg-purple-300",
};

function getTypeColor(type: string){
  const color= typeC[type];
  return color;
}


export const App = () => {
  return <div>
    <div className= "flex flex-wrap bg-blue-200 ">
      {data.map((item,)=>{
   return (
    <div>
      {item.id} - {item.name} 
      <img src={item.image}/>

      <div className="flex flex-row gap-3 p-3">
      {item.types.map((type)=>{
          return(<div className={`p-1 mx-3 ${getTypeColor(type)}`}>{type}</div>)
      })}
      </div>
      </div>
   );
      })}
    </div>
  </div>
};

export const Detail = () => {
  return null
}