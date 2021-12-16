Requisitos
# Carros
## RF
* Deve ser possível cadastrar um novo carro
* Deve ser possível listar todos os carros disponíveis
* Deve ser possível listar todos os carros pela categoria
* Deve ser possível listar todos os carros pela marca
* Deve ser possível listar todos os carros pela nome do carro
* Deve ser possível cadastrar uma especificação para um carro
* Deve ser possível cadastrar imagens para o carro
* Deve ser possível cadastrar um aluguel

## RNF
* Utilizar o Multer para o upload de arquivos
## RN
* Não deve ser possível cadastrar um carro com uma placa já existente
* Nào deve ser possível alterar a placa de um carro já cadastrado
* O carro deve ser cadastrado com a disponibilidade por padrão
* Somente um administrador pode cadastrar um carro e demais detalhes
* O usuário não precisa estar logado para listar os carros disponíveis
* * Não deve ser possível cadastrar uma especificação para carro não cadastrado
* Não deve ser possível cadastrar uma especificação já existente para o mesmo carro
* O Aluguel deve ter duração mínima de 24 horas
* Nao deve ser possivel cadastrar um novo aluguel casa existe em aberto para o mesmo usuário ou carro
