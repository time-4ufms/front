# Analises iniciais

As seguintes analises fazem parte do programa pantanal.dev, um programa de capacitação imersiva em tecnologias inovadoras que tem como objetivo capacitar e apresentar oportunidades de trabalho remoto no mercado financeiro nacional 💼.
Nesse contexto este documento trata da analise exploratoria de dados cujo objetivo é responder perguntas além das mais obvias geralmente proferidas a este tipo de dado.
Buscamos também outras bases de dados cujo o contexto encontra-se em determinada parte da analise. Como é o caso da base ESTBAN.

# Tesouro direto
Este conjunto de dados reúne informações sobre os investidores registrados no programa Tesouro Direto. Ele apresenta detalhes do perfil de cada investidor, como a data em que aderiu ao programa, sua profissão, cidade onde reside, estado civil, entre outros dados relevantes. Também estão incluídas informações sobre a situação atual do investidor, indicando se ele ainda participa ativamente do programa e se realizou operações nos últimos 12 meses. Cada investidor é identificado por um código único. Caso um mesmo investidor tenha registros em mais de uma instituição financeira, esses cadastros adicionais são apresentados em linhas separadas, utilizando o mesmo código de identificação.
Esta base pode ser encontrada através do link: https://www.tesourotransparente.gov.br/ckan/dataset/investidores-do-tesouro-direto

# Problema
Identificar agrupamentos de investidores com base em informações dadas pela base de dados do tesouro direto.

# Justificativa
O numero de investidores em em ativos de baixo risco tem crescendo uma vez que o mercado de ativos de alto risco possui grande volatividade dado ao contexto atual de dinâmicas economicas a nivel mundial.
Nesse contexto, identificar perfis de investidores não somente pela justificativa de agrupa-los mas sim de trazer novos capitais ativos ja consolidados, como o caso do tesouro direto.
Por isso, entender o comportamento de pessoas que já investem no ativo, pode ajudar direcionar esforços para novos investidores.

# Perguntas a serem respondidas
* ✅ Quais são as idades e como esta distribuido o dataset com relação ao investimento em tesouro direto?
* ✅ Considerando apenas os investidores ativos, a distribuição de idade se conserva?
* ✅ Qual o estado com o maior numeros de pessoas que investem em tesouro direto? 
* ✅ Qual a distribuição de genero mais presente no dataset?
* Como os investidores estão agrupados?
* Existe alguma relação entre o IDH de um estado e o investimento em tesouro direto?

# ✅Dicionario de dados
| Nome da Coluna         | Descrição                                                     | Tipo de Dado       | Categoria     |
| ---------------------- | ------------------------------------------------------------- | ------------------ | ------------- |
| `Codigo do Investidor` | Identificador único de cada investidor                        | Numérico (inteiro) | Identificador |
| `Data de Adesao`       | Data em que o investidor aderiu à plataforma                  | Data (string)      | Temporal      |
| `Estado Civil`         | Estado civil do investidor (ex: Solteiro(a), Casado(a))       | Categórico         | Qualitativo   |
| `Genero`               | Gênero do investidor (`M` para masculino, `F` para feminino)  | Categórico         | Qualitativo   |
| `Profissao`            | Profissão declarada do investidor                             | Categórico         | Qualitativo   |
| `Idade`                | Idade do investidor no momento do registro                    | Numérico (inteiro) | Quantitativo  |
| `UF do Investidor`     | Unidade Federativa (estado) do investidor (ex: SP, RJ)        | Categórico         | Geográfico    |
| `Cidade do Investidor` | Cidade onde o investidor reside                               | Categórico         | Geográfico    |
| `Pais do Investidor`   | País onde o investidor reside (provavelmente sempre "BRASIL") | Categórico         | Geográfico    |
| `Situacao da Conta`    | Situação atual da conta (ex: "D" para desativada)             | Categórico         | Status/Flag   |
| `Operou 12 Meses`      | Indica se o investidor operou nos últimos 12 meses (S/N)      | Categórico         | Binário       |

# 📁Resumo por Tipo de Dado
| Tipo de Dado  | Quantidade de Colunas | Colunas                                                                                                                                         |
| ------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Numérico      | 2                     | `Codigo do Investidor`, `Idade`                                                                                                                 |
| Categórico    | 8                     | `Estado Civil`, `Genero`, `Profissao`, `UF do Investidor`, `Cidade do Investidor`, `Pais do Investidor`, `Situacao da Conta`, `Operou 12 Meses` |
| Data/Temporal | 1                     | `Data de Adesao`                                                                                                                                |

# 📊 Estatísticas da Base de Dados
Quantidade de Instâncias (linhas): 100.000 <br>
Quantidade de Características (colunas): 11


# EDA (Exploratory Data Analysis) dos dados

Agrupando os dados utilizando a seguinte logica

```python
def classificar_idade(idade):
            if idade <= 11:
                return 'Infância <= 11'
            elif idade <= 17:
                return 'Adolescência 12 - 17'
            elif idade <= 29:
                return 'Adulto jovem 18 - 29'
            elif idade <= 59:
                return 'Adulto 30 - 59'
            else:
                return 'Idoso >= 60'
```
Obtemos a figura-1 mostrando a distribuição dos dados de idade. Como podemos notar pessoas entre 30 a 59 anos de dados são mais presentes no dataset 
<table>
  <tr>
    <td align="center">
      <img src="img/distribuicao_faixa_etária.png" width="100%"><br>
      <sub><b>Distribuição de idades de contas atividas</b></sub>
    </td>
    
  </tr>
  <tr>
</table>
<table>
<tr>
<td align="center">
      <img src="img/distribuicao_faixa_etária_contas_desativadas.png" width="100%"><br>
      <sub><b>Distribuição de idades de contas atividas</b></sub>
    </td>
  </tr>
</table>
<table>
<tr>
<td align="center">
      <img src="img/distribuicao_faixa_etária_total.png" width="100%"><br>
      <sub><b>Distribuição de idades no total</b></sub>
    </td>
    </tr>
</table>





O que também é constatado é que a distribuição se conserva mesmo se tratando de contas atividas ou desativadas

## Agrupando por estado podemos ver os que mais se destacam na participação da base de dados
<table width="100%">
  <tr>
    <td colspan="2" align="left">
      <h2><b>Quantidade de investidores vs IDH-M 2021</b></h2>
      <h3>
        Correlação de Pearson: 0.570 <br>
        P-valor: 0.00192 <br>
        Correlação de Spearman: 0.681325
      </h3>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <img src="img/mapa_regioes_brasil.png" width="80%"><br>
      <sub>
        <b>Regiões do Brasil</b><br>
        Fonte: https://www.todamateria.com.br/regioes-brasileiras/
      </sub>
    </td>
    <td align="center" width="50%">
      <img src="img/mapa_investidor_total.png" width="100%"><br>
      <sub><b>Distribuição de investidores por estado</b></sub>
    </td>
  </tr>
</table>




## 📊 Distribuição percentual das profissões por estado

Este gráfico mostra como as profissões estão distribuídas percentualmente em cada estado, com base nos dados dos investidores do Tesouro Direto.

<p align="center">
  <img src="img/distribuicao_profissoes_por_estado.png" alt="Distribuição das profissões por estado" width="100%">
</p>

O que indica um comportamento bem diferente para cada profissão por estado.
---
## Construção do macrogrupo de profissões

### Para a criação desses grupos foram utilizadas modelos de linguagem generativas (LLMs) com o auxilio humano conferindo e supervisionando o processo acelerando a discretização dos dados.
#### Segue o exemplo a seguir
```python
profissoes_agrupadas = {
    "Não CLTs": ["PROFISSIONAL LIBERAL", 'TRABALHADOR AUTÔNOMO'],
    "Outros": [
        "OUTROS", "Não se aplica", "FALECIDO"
    ],
    "Aposentados e Pensionistas": [
        "APOSENTADO (EXCETO FUNCIONÁRIO PÚBLICO)",
        "FUNCIONÁRIO PÚBLICO CIVIL APOSENTADO",
        "MILITAR REFORMADO", "PENSIONISTA"
    ],
    "Estudantes e Bolsistas": [
        "BOLSISTA, ESTAGIÁRIO E ASSEMELHADOS", "ESTUDANTE"
    ],
    "Funcionários Públicos": [
        "SERVIDOR PÚBLICO FEDERAL", "SERVIDOR PÚBLICO MUNICIPAL", "SERVIDO PÚBLICO ESTADUAL",
        "FUNCIONÁRIO PÚBLICO CIVIL APOSENTADO",
        "OCUPANTE DE CARGO DE DIREÇAO E ASSESSORAMENTO SUPERIOR",
        "OCUPANTE DE CARGO DE DIREÇAO E ASSESSORAMENTO INTERMEDIÁRIO",
        "MEMBRO DO PODER JUDICIÁRIO: MINISTRO DE TRIB. SUPERIOR",
        "MEMBRO DO PODER LEGISLATIVO: SENADOR, DEP.FED.E ESTADUAL",
        "MEMBRO DO PODER EXECUTIVO: PRES.REPÚBLICA, MINISTRO ETC.",
        "DELEGADO DE POLÍCIA", "FISCAL"
    ]
}
...
```
### Com esses grupos criados, foram criados os macrogrupos de profissoes
#### Segue o exemplo a seguir
```python
macrogrupo_para_grupos = {
    'Economia, Negócios e Administração': [
        'Contabilidade e Finanças',
        'Administração e Negócios',
        'Comércio e Vendas',
        'Proprietários e Renda Passiva',
        'Direção e Liderança'
    ],
    'Serviços Públicos e Segurança': [
        'Funcionários Públicos',
        'Forças de Segurança e Defesa',
        'Religião e Assistência Social',
        'Direito e Justiça'
    ],
    'Educação, Ciência e Pesquisa': [
        'Educação e Pesquisa',
        'Ciências Naturais e Exatas',
        'Ciências Exatas e Humanas',
        'Estudantes e Bolsistas'
    ]
}
...
```

## Classificador

### Foram utilizadas algumas tecnicas para a classificação que corroboram com os agrupamentos montados 
A principio é esperado que seja criado um modelo que prediza a profissao do individuo a cerca dos incadores
A tabela a seguir mostra os resultados obtidos a cerca dessa discussão
<table>
  <tr>
    <td align="left">
      <!-- <img src="images/mapa_investidor_total.png" width="100%"><br> -->
      <h3><b>Quantidade de investidores vs IDH-M 2021</b></h3>
      <p>
      Acurácia Decision Tree: 0.15306122448979592 <br>
      Acurácia Random Forest: 0.16326530612244897 <br>
      Acurácia XGBoost: 0.22448979591836735 <br>
      Acurácia CatBoost: 0.2653061224489796 <br>
      Obs.: a acuracia baixa pode ser explicada pela quantidade dos dados: 12 macrogrupos × 27 estados = 324 amostras 
      </p>
    </td>
  </tr>
</table>
    <td align="center">
      <img src="img/classification_report_xgb_human_density_vs_work.png" width="100%"><br>
      <sub>
        Relatorio de classficação utilizando xgb (melhor desempenho) tendo como alvo macroprofissoes 
      </sub>
    </td>
    <td align="center">
      <img src="img/classification_report_xgb_density_vs_work_confusion_matrix.png" width="100%"><br>
      <sub><b>Matrix de confusão para macrogrupos de profissoes</b></sub>
    </td>


