import style from "./Header.module.css"
import { LinkTo } from "./Header.styled"
import {CallCalling,MedalStar,BagHappy,Drop} from "iconsax-react"
const Header=()=>{
    return <header class={style.header}>
        <LinkTo to={"meals"}>Menu ovqatlar
        <BagHappy 
          size={25} 
          variant="Outline" 
       
        />

        </LinkTo>
        <LinkTo to={"drinks"}>Menu ichimliklar
        <Drop 
          size={25} 
          variant="Outline" 
     
        />
        </LinkTo>
        <LinkTo to={"ordery"}>Zakazlarim
        <MedalStar 
          size={25} 
          variant="Bold" 
        
        />
        </LinkTo>
        <LinkTo to={"support"} >Biz bilan aloqaga chiqing
        <CallCalling 
          size={25} 
          variant="Outline" 
         
        />
        </LinkTo>
        
        </header>
}
export default Header