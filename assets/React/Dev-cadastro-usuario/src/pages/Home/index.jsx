import {
  Container,
  Form,
  ContainerInputs,
  Input,
  InputLabel,
  Title,
} from "./style";
import { useRef } from "react";
import UsersImage from "../../assets/users.png"; //é assim que importa imagem no react,ai voce vai la na tag img e abre os {} e coloca a tag userimage
import api from "../../services/api";
import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import { useNavigate } from "react-router-dom";

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();
  const navigate = useNavigate();

  async function registrarUsuario() {
    await api.post("/usuarios", {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value,
    });
    navigate("/lista-de-usuarios");
  }

  return (
    <Container>
      <TopBackground />

      <Form>
        <Title>Cadastro de Usuários</Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input
              type="number"
              placeholder="Idade do usuário"
              ref={inputAge}
            />
          </div>
        </ContainerInputs>

        <div style={{ width: "100%" }}>
          <InputLabel>
            Email<span> *</span>
          </InputLabel>
          <Input type="email" placeholder="Email do usuário" ref={inputEmail} />
        </div>

        <Button type="button" onClick={registrarUsuario} tema="principal">
          Cadastrar Usuários
        </Button>
      </Form>
      <Button type="button" onClick={() => navigate("/lista-de-usuarios")}>
        Ver lista de usuarios
      </Button>
    </Container>
  );
}

export default Home;
// toda vez que for coloca um função dentro do onclick tem que passar uma função anonima ex: onClick={() => minhaFuncao()}  assim ele vai executar a função quando clicar no botão
// <> e </> esse aqui e pai de todo ele voce colocando pode substituir a div.e não pode ter mais de um pai.
//quando for pra importa varias coisa usa o export antes da function ex: export function App
//export function App2 assim ta importando as funções
// agora se for pra exporta uma função só usa o export default bem assim pra exporta uma função export default App. assim ele ta importando uma função só.
// se eu quiser coloca alguma coisa dentro do meu html eu coloco dentro de chaves {} e dps coloco a variavel se for o caso. ex: h1{variavel} ai ele vai mostra o que tem no js pelo html.

// ex de como colocar variavel dentro do html
/*function App() {
  const mytext = 'voce vai conseguir em nome de Jesus'./ esse mytext e uma variavel

  return (
   <div>
    <h1>{ mytext}</h1>  meu h1 ele pode ta escrito qualquer coisa mais ai se eu quiser colocar a variave do meu js, so eu abri {} e coloca a variavel.
   </div> 
  )
}

export default App */
