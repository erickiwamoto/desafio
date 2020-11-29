  #language: pt
  
  Funcionalidade: Buscar produto
  
  Contexto: Acessar site
  Dado que acesso o site
  
  Esquema do Cenário: Buscar produto
  Quando eu pesquiso pelo o <produto>
  E seleciono o primeito item encontrado
  Então vejo o <valor> à vista do produto
  E vejo o valor do <cashBack> do produto
  
  Exemplos:
      | produto             | valor       | cashBack | 
      | Samsung Galaxy A70  | R$ 2.099,00 | R$ 41,98 | 
      | Motorola One Vision | R$ 1.399,00 | R$ 27,98 | 
      | Xiaomi Redmi Note 7 | R$ 2.659,99 | R$ 53,20 | 
  
  Esquema do Cenário: Buscar produto sem resultado
  Quando eu pesquiso pelo o <produto>
  Então vejo a mensagem "Ops! nenhum resultado encontrado"
  
  Exemplos:
      | produto                | 
      | aaasdadascascdasaaaaaa | 
  