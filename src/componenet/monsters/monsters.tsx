import { Monster } from "../../App"

type monsterscard={
    monsters:Monster[];
}


const MonsterCards=({monsters}:monsterscard)=>{

    console.log(monsters);
return( <div>
    {monsters.map((mon)=>{return(<div>{mon.name}</div>)})}

</div>
)


}
export default MonsterCards