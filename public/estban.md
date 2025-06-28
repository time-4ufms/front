

# 📊 Análises Iniciais

Este repositório faz parte do **Pantanal.dev**, um programa de capacitação imersiva em tecnologias inovadoras, com foco na geração de oportunidades de trabalho remoto no mercado financeiro nacional 💼.

O objetivo deste projeto é realizar uma análise exploratória dos dados, buscando responder perguntas além das análises tradicionais normalmente feitas com este tipo de dado. Este repositório é destinado para a análise dos dados do **ESTBAN** (Estatística Bancária Mensal por município) com o foco em compreender as tendências do investidor brasileiro em relação à poupança e como isso se relaciona com o **Tesouro Direto**.

---

## 📈 Base de Dados: ESTBAN

O conjunto de dados utilizado contém informações sobre o padrão de invetimentos na Poupança por estado. Para a análise será levado em consideração informações como:

- Unidade federativa / Municipio da agência em que foi feito o depósito
- Valor total depositado na poupança
- Valor total de depósitos bancários

🔗 A base de dados está disponível em:  
[https://www.bcb.gov.br/estatisticas/estatisticabancariamunicipios](https://www.bcb.gov.br/estatisticas/estatisticabancariamunicipios)

A tabela utilizada na análise é o **Relatório por município de agência**

---

## 🎯 Problema

**Como identificar as tendências de investimento na Poupança e quais as implicações disso para o Tesouro Direto**  

---

## 💡 Justificativa
<!-- O número de investidores em ativos de baixo risco, como o Tesouro Direto, tem crescido significativamente. Isso se deve à alta volatilidade dos ativos de risco, influenciada pelas dinâmicas econômicas globais.

Diante desse cenário, entender o perfil dos investidores atuais é estratégico. Esse conhecimento não apenas permite agrupar perfis semelhantes, mas também auxilia na formulação de estratégias para atrair novos investidores e fortalecer o mercado. -->

O investimento em ativos de baixo risco, como a Poupança e Tesouro Direto , é muito comum por conta da dificuldade de operar com ativos de alto risco que podem gerar prejuízos em pouco tempo. Nesse contexto, investidores conservadores tendem a preferir investimentos mais seguros, com rendimento acima da inflação porém com o custo de mais tempo para render o mesmo que um ativo mais volátil.

Dessa forma, é importante considerar a escolha mais vantajosa a depender do que o investidor procura, e no geral, para investimentos de longo prazo, o Tesouro Direto é mais vantajoso do que a poupança.

Diante desse cenário, é importante compreender como identificar as UFs chave que podem conter futuros investidores do programa do Tesouro Direto em potencial.

---

## ❓ Perguntas a Serem Respondidas

- **Como estão distribuídos os investimentos na poupança e depósitos bancários no país?**
- **Quais são as UFs chave para um processo de captação de investidores para o Tesouro Direto?**

## 🗂️ Dicionário de Dados
| Nome da Coluna         | Descrição                                                     | Tipo de Dado       | Categoria     |
| ---------------------- | ------------------------------------------------------------- | ------------------ | ------------- |
| `index` | Indice para controle do banco de dados                        | Numérico (inteiro) | Identificador |
| `data_base`       | Data da tabela                  | Data (string)      | Temporal      |
| `UF`         | Estado da agência       | String         | Categórico   |
| `MUNICIPIO`               | Cidade da agência  | String         | Categórico   |
| `VERBETE_112_DEPOSITOS_BANCARIOS`            | Valor total depósito no ano | Numérico (inteiro)   | Quantitativo
| `VERBETE_420_DEPOSITOS_DE_POUPANCA`                | Valor total depósito no ano        | Numérico (inteiro) | Quantitativo  |


## 🔢 Resumo dos Dados
| Tipo de Dado  | Quantidade de Colunas | Colunas                                                                                                                                         |
| ------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Numérico      | 3                     | `Index`, `VERBETE_112_DEPOSITOS_BANCARIOS`, `VERBETE_420_DEPOSITOS_DE_POUPANCA`                                                                                                                 |
| Categórico    | 2                   | `UF` , `MUNICIPIO`|
| Data/Temporal | 1                     | `Data de Adesao`                                                                                                                                |

## 📊 Estatísticas da Base de Dados
Quantidade de Instâncias (linhas): 1056892 <br>
Quantidade de Características (colunas): 7


# EDA (Exploratory Data Analysis) dos dados



Agrupando os dados utilizando a seguinte logica com a biblioteca Pandas para obter o total do depósito de poupança correspondente a cada estado nos anos/meses correspondentes.

```python
df_aux = df_aux.groupby(['data_base', 'UF'])[['VERBETE_112_DEPOSITOS_BANCARIOS','VERBETE_420_DEPOSITOS_DE_POUPANCA']].sum().reset_index()
```
Dessa forma, também é possível aferir os valores totais correspondentes de cada ano. Durante as análises utilizaremos como referência as estatísticas de 12/2024.

<div align="center">
  <img src="/img/quantidade de investimentos.png" width="50%"><br>
</div>

Evidencia-se que São Paulo é o maior expoente nas atividades de depósitos de poupança e depósitos bancários. Através de um agrupamento utiliando aprendizado não supervisionado SP se isola como um grupo sozinho por conta de suas carcterísticas.

<table>
  <tr>
    <td align="center">
      <img src="/img/agrupamento kmeans.png" width="85%"><br>
      <sub>
        <b>Agrupamento KMeans</b><br>
      </sub>
    </td>
    <td align="center">
      <img src="/img/agrupamento hierarquico.png" width="100%"><br>
      <sub><b>Agrupamento Hierárquico</b></sub>
    </td>
  </tr>
</table>

É importante compreender que ainda que a poupança seja um investimento seguro e esteja concentrado em maior parte em São Paulo, não significa que a maior parte  dos novos investidores do Tesouro Direto virão dessas regiões.

Através de um agrupamento utilizando sem considerar São Paulo, que é o maior outlier, podemos encontrar 2 grupos:

<div align="center">
  <img src="imgs\agrupamento kmeans nsp.png" width="50%"><br>
</div>

- **Grupos de Estados por Cor no Gráfico:**

  - 🟨 **Amarelo**: 
    - Minas Gerais (MG)
    - Rio de Janeiro (RJ)
    - Rio Grande do Sul (RS)

  - 🟪 **Roxo** (Demais estados do Brasil):  
    - Acre (AC)  
    - Alagoas (AL)  
    - Amapá (AP)  
    - Amazonas (AM)  
    - Bahia (BA)  
    - Ceará (CE)  
    - Distrito Federal (DF)  
    - Espírito Santo (ES)  
    - Goiás (GO)  
    - Maranhão (MA)  
    - Mato Grosso (MT)  
    - Mato Grosso do Sul (MS)  
    - Pará (PA)  
    - Paraíba (PB)  
    - Paraná (PR)  
    - Pernambuco (PE)  
    - Piauí (PI)  
    - Rio Grande do Norte (RN)  
    - Rondônia (RO)  
    - Roraima (RR)  
    - Santa Catarina (SC)  
    - Sergipe (SE)  
    - Tocantins (TO)


Dessa forma, precisamos realizar comparações com o Tesouro Direto para identificar quais aspectos são cruciais para trazer novos investidores do grupo com menos investidores (**Roxo**) e como podemos mostrar novas possibilidades de investimento para os investidores já consolidados do grupo dos maiores investidores (**Amarelo**) tendo em vista as vantagens do Tesouro Direto em relação a Poupança.

