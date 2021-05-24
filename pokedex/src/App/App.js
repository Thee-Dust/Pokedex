import React, { Component } from 'react';
import { getPokemonData } from '../API/api'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
    }
  }

  componentDidMount = async () => {
    try {
      const pokemonData = await getPokemonData();
      console.log(pokemonData)
    } catch (e) {
      console.log(e.message);
    }
  }
  render() {
    return (
      null
    )
  }
}

