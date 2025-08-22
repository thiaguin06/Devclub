/*🔁 Iteração

forEach()
Executa uma função para cada item do array.
Ex:

array.forEach((item) => console.log(item));

🔍 Busca e Filtros

find()
Retorna o primeiro item que satisfaz a condição.

array.find(item => item > 10);


filter()
Retorna todos os itens que satisfazem a condição.

array.filter(item => item > 10);


includes()
Verifica se o array contém um valor.

array.includes(5); // true ou false

🔄 Transformação

map()
Cria um novo array com os resultados da função aplicada a cada item.

array.map(item => item * 2);

🔢 Redução

reduce()
Reduz o array a um único valor, acumulando os resultados.

array.reduce((acc, item) => acc + item, 0);
 
🔄 Ordem

sort()
Ordena o array. Pode precisar de função de comparação.

array.sort((a, b) => a - b); // crescente


reverse()
Inverte a ordem dos itens do array.

array.reverse();

➕ ➖ Modificação

push() / pop()
Adiciona / remove do final do array.

unshift() / shift()
Adiciona / remove do início do array.

splice()
Adiciona, remove ou substitui elementos em qualquer posição.

array.splice(1, 2); // remove 2 itens a partir do índice 1

🔗 Juntar ou Separar

join()
Junta os elementos com um separador.

array.join(", ");


split() (em strings, mas relacionado)
Divide uma string em partes e retorna como array.

concat()
Junta dois ou mais arrays.

array.concat(outroArray);
*/