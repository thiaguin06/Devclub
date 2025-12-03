import UsersImage from '../../assets/users.png' //é assim que importa imagem no react,ai voce vai la na tag img e abre os {} e coloca a tag userimage
import { Background } from './style'
function TopBackground () {
  
  return (
   <Background> 
    <img src={UsersImage}/>   
   </Background>
  )
}
export default TopBackground