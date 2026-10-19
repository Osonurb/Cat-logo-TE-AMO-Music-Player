# Te amo! Music Player

Player estático em HTML, CSS e JavaScript. O catálogo padrão é publicado com o site e usa os players oficiais incorporados do Suno.

## Arquivos

- `index.html`: estrutura da biblioteca e do aplicativo.
- `styles.css`: temas, componentes e regras responsivas.
- `catalog.js`: catálogo permanente, com os IDs e endereços oficiais das faixas.
- `app.js`: renderização da biblioteca, criação sob demanda dos players, idiomas, frases e temas.

## Testar no navegador

Abra `index.html` em um navegador com acesso à internet. A primeira faixa aparece selecionada; as outras oito aparecem na biblioteca. Escolher uma faixa cria o iframe oficial correspondente e substitui o player anterior. O link **Abrir no Suno** abre a página oficial daquela música.

As incorporações usam `loading="lazy"` e só é criado o iframe da faixa atual. O áudio continua hospedado e servido pelo Suno; o aplicativo não baixa nem copia o áudio. A disponibilidade depende de cada faixa e das permissões definidas no Suno.

Os títulos provisórios estão em português no campo `title` de `catalog.js`. A interface apresenta os números traduzidos como `Track 1` em inglês e `音楽 1` em japonês. Para editar um título, altere o campo correspondente e publique a atualização.

## Adicionar faixas ao catálogo

Edite `catalog.js` e acrescente um objeto com `id`, `title`, `artist`, `embedUrl` e `externalUrl`. Os dois endereços devem seguir os URLs oficiais de incorporação e de página da faixa no Suno. Cada ID deve aparecer uma única vez como registro. O player valida os IDs e URLs antes de exibi-los.

Como não há backend, novos registros exigem uma alteração e uma nova publicação do site. O catálogo não depende do `localStorage`; idioma, tema, tema personalizado e sequência das mensagens continuam salvos localmente no navegador.

## Publicar no GitHub Pages

Envie `index.html`, `styles.css`, `app.js` e `catalog.js` juntos para a pasta publicada pelo GitHub Pages. Os quatro arquivos precisam permanecer no mesmo diretório porque os links e scripts são relativos. Se a origem do Pages for a raiz da branch, publique esses arquivos na raiz; se usar `/docs`, coloque-os dentro de `/docs`. Para uma publicação por GitHub Actions, configure o diretório enviado como artefato do Pages para conter esses quatro arquivos.

Depois de enviar as mudanças, abra a URL do Pages, recarregue a página e teste a seleção de faixas, a abertura do link externo, a troca de tema e os idiomas. Faixas privadas, removidas ou sem permissão de incorporação podem não reproduzir no iframe.
