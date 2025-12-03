import api from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import { Container } from "../Home/style";
import Trash from '../../assets/trash.svg';
import DefaultAvatar from '../../assets/users.png';
import { PageHeading, Title, ContUser, AvatarImg, CardUser, TraImg, UserLeft, UserDetails } from "./style";
function ListUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");
      console.log(data);

      setUsers(data);
    }
    getUsers();
  }, []);

  async function deleteUser(id) {
    try {
      await api.delete(`/usuarios/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
    }
  }

  return (
    <Container>
      <TopBackground />
      <PageHeading>Listagem de  usuarios</PageHeading>

        <Title>Cadastro efetuado</Title>
        

      <ContUser>
        {users.map((user) => (        
          <CardUser key={user.id}>       
          <UserLeft>
            <AvatarImg
              src={`https://avatar.iran.liara.run/public?username=${user.id}`}
              alt={`avatar-${user.id}`}
              onError={(e) => (e.currentTarget.src = DefaultAvatar)}
            />
            <UserDetails>
              <p className="name">{user.name}</p>
              <p className="email">{user.email}</p>
              <p className="age">{user.age}</p>
            </UserDetails>
          </UserLeft>
          <TraImg src={Trash} alt='lata de lixo' onClick={() => deleteUser(user.id)} />
          </CardUser>
        ))}
      </ContUser>
      <Button type="button" onClick={() => navigate('/')}>voltar</Button>
    </Container>
  );
}
export default ListUsers;


// o key ele e importante usar toda vez que for fazer um map em react,ele ajuda o react a identificar cada elemento de forma unica