import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticaded } from './auth'

import './App.css';
import FavoriteRepositorie from './components/favorite-repositories/FavoriteRepositorie';
import EventListenerLocation from './components/event-listener-location/EventListenerLocation';
import Header from './components/header/Header';
import Error from './components/error/Error';

// Acessa a rota somente se estiver autenticado
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		/* Se autenticação ok, então reinderiza o componente para ser exibido, se não, redireciona para a página inicial sem perder o hostórico de navegação */
		isAuthenticaded() ? <Component {...props} /> : (<Redirect to={{ pathname: '/', state: { from: props.location } }} />)
	)}
	/>
)

class App extends Component {
	render() {
		return (
			<BrowserRouter>														{/* Para trabalhar com o navigate state do browser, manipula as URL's */}
				<div>
					<Header />
					<Switch>                                                     {/* Não deixa mais de uma rota ser aberta, abrindo somente uma rota */}
						<Route exact path="/" component={FavoriteRepositorie} />
						<PrivateRoute path="/location" component={EventListenerLocation} />
						<Route component={Error}/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
