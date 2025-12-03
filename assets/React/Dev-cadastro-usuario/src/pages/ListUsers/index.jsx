import api from "../../services/api";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import { Container } from "../Home/style";
import Trash from '../../assets/trash.svg';
import DefaultAvatar from '../../assets/users.png';
import { PageHeading, Title, ContUser,AvatarImg, CardUser, TraImg } from "./style";
function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");
      console.log(data);

      setUsers(data);
    }
    getUsers();
  }, []);

  return (
    <Container>
      <TopBackground />
      <PageHeading>Listagem de  usuarios</PageHeading>

        <Title>Cadastro efetuado</Title>
        

      <ContUser>
        {users.map((user) => (        
          <CardUser key={user.id}>       

          <AvatarImg
            src={`https://avatar.iran.liara.run/public?username=${user.id}`}
            alt={`avatar-${user.id}`}
            onError={(e) => (e.currentTarget.src = DefaultAvatar)}
          />
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.age}</p>
          </div>
          <TraImg  src={Trash} alt='lata de lixo' / >
          </CardUser>
        ))}
      </ContUser>
      <Button type="Button"> voltar </Button>
    </Container>
  );
}
export default ListUsers;


// o key ele e importante usar toda vez que for fazer um map em react,ele ajuda o react a identificar cada elemento de forma unica