import React, { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import styles from './FavoriteRepositorie.module.css'
import StarIcon from '@material-ui/icons/Star';

export default function FavoriteRepositorie() {

	// Desestruturação do vetor para melhor ser manipulado, recebendo a lista de repositorios
	// repositories: valor do estado 
	// setRepositories: função que permite atualizar o valor do estado
	const [repositories, setRepositories] = useState([])


	// Carrega a informação assim que o componente for montado em tela, disparando apenas no inicio
	// Recebe dois parametros: o primeiro é uma função e o segundo são em quais circunstâncias esta 
	// função deverá ser executada, de acordo com qual variavel será excecutada a função
	useEffect(() => {
		async function fetchData() {
			const response = await fetch("https://api.github.com/users/VeronicaFrota/repos");
			const data = await response.json();				// Converte meus dados para json para conseguir enviar para a variavel setRepositories

			setRepositories(data)								// atualiza o setRepositories com os novos dados recebidos
		}
		fetchData();
	}, []);


	// A função dispara toda vez que a propriedade/estado repositories mudar
	useEffect(() => {
		const filtered = repositories.filter(repo => repo.favorite)			// Filtra no repositório quais estão como favoritos

		document.title = `Você tem ${filtered.length} favorito(s)`
	}, [repositories])



	// Para favoritar o repositorio assim que o botão for clicado
	function handleFavorite(id) {
		const newRepositories = repositories.map(repo => {
			return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo
		})

		setRepositories(newRepositories)					// atualiza o estados do repositorie
	}


	return (
		<>
			<ul className={styles.ulItems}>
				{repositories.map(repo => (
					<li key={repo.id}>
						{repo.name}
						{repo.favorite ? (
							<Button className={styles.buttonDesFav} onClick={() => handleFavorite(repo.id)}>
								<StarIcon className={styles.starIconDes} />
								Desfavoritar
							</Button>
						) :
							(
								<Button className={styles.buttonDesFav} onClick={() => handleFavorite(repo.id)}>
									<StarIcon className={styles.starIconFav} />
									Favoritar
							</Button>
							)
						}
					</li>
				))
				}
			</ul >
		</>
	);
}
