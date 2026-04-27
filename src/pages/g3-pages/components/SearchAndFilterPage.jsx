import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from '../SearchAndFilterPageS';
import Fragment from "../../../components/Fragment";

export default function SearchAndFilterPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilters, setActiveFilters] = useState([]);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Realiza a comunicação com o serviço externo para obter os resultados da pesquisa.
    const fetchData = async (query) => {
        setLoading(true);
        setError(null);
        try {
            // Configuração da requisição HTTP. É necessário substituir a URL pelo endpoint real da aplicação.
            const response = await axios.get(`https://nossa-api-aqui.com/search`, {
                params: { q: query },
                headers: {
                    // Cabeçalhos de autenticação necessários para o acesso à API privada.
                    'Authorization': `Bearer TOKEN_AQUI`,
                    'Content-Type': 'application/json'
                }
            });
            // Atualiza o estado com os dados retornados, adaptando conforme a estrutura de resposta do servidor.
            setResults(response.data);
        } catch (err) {
            setError('Não foi possível recuperar os dados no momento. Por favor, tente novamente mais tarde.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // Gerencia o atraso na execução da busca (debounce), evitando múltiplas requisições
    // desnecessárias enquanto o usuário ainda está digitando.
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchTerm.trim() !== '') {
                fetchData(searchTerm);
            } else {
                setResults([]); // Garante que a lista de resultados seja limpa quando o campo de busca estiver vazio.
            }
        }, 500); // Aguarda 500 milissegundos após a última interação do usuário.

        return () => clearTimeout(timer);
    }, [searchTerm]);

    // 5. Boas Práticas: Limpar tudo
    const clearAllFilters = () => {
        setSearchTerm('');
        setActiveFilters([]);
    };

    const removeFilter = (filter) => {
        setActiveFilters(activeFilters.filter(f => f !== filter));
    };

    return (
        <Fragment>
            <S.PageContainer>
                {/* Seção superior contendo o campo de entrada para pesquisa e ícones de suporte. */}
                <S.SearchHeader>
                    <S.SearchWrapper>
                        <span className="magnifier">🔍</span>
                        <input 
                            type="text" 
                            placeholder="Buscar produtos ou pets..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {searchTerm && (
                            <button className="clear-btn" onClick={() => setSearchTerm('')}>✕</button>
                        )}
                    </S.SearchWrapper>
                </S.SearchHeader>

                <S.MainContent>
                    {/* Barra lateral dedicada às opções de filtragem e refinamento da busca. */}
                    <S.Sidebar>
                        <h3>Filtros</h3>
                        
                        {/* Grupos de critérios de filtragem, como categorias de animais e faixas de preço. */}
                        <S.FilterGroup>
                            <h4>Categorias</h4>
                            <label className="checkbox-label">
                                <input type="checkbox" /> Cães <span>(15)</span>
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" /> Gatos <span>(10)</span>
                            </label>
                        </S.FilterGroup>

                        <S.FilterGroup>
                            <h4>Preço</h4>
                            <input type="range" min="0" max="500" />
                        </S.FilterGroup>

                        <button className="clear-all" onClick={clearAllFilters}>Limpar Tudo</button>
                    </S.Sidebar>

                    {/* Seção principal onde os resultados da busca são exibidos para o usuário. */}
                    <S.ResultsArea>
                        {/* Exibição visual dos filtros que estão atualmente aplicados. */}
                        <S.ActiveFiltersTags>
                            {activeFilters.map(filter => (
                                <S.Tag key={filter}>
                                    {filter} <button onClick={() => removeFilter(filter)}>x</button>
                                </S.Tag>
                            ))}
                        </S.ActiveFiltersTags>

                        {loading && <p>Buscando informações...</p>}
                        
                        {error && <p style={{ color: 'red' }}>{error}</p>}

                        {!loading && results.length > 0 ? (
                            <S.Grid role="list">
                                {results.map(item => (
                                    <S.Card key={item.id}>{item.name}</S.Card>
                                ))}
                            </S.Grid>
                        ) : !loading && (
                            /* Mensagem apresentada quando a busca não retorna nenhum registro correspondente. */
                            <S.NoResults>
                                <p>Nenhum resultado encontrado para "{searchTerm}".</p>
                                <button onClick={clearAllFilters}>Ver todos os produtos</button>
                            </S.NoResults>
                        )}
                    </S.ResultsArea>
                </S.MainContent>
            </S.PageContainer>
        </Fragment>
    );
}