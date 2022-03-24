const {Router} = require('express');
const router = Router();
const fetch = require('node-fetch');

const thisPoke = {}

const getPokemon = async (pokemonName) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`    
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)
    return data
}

router.get(`/api/pokemon/:pokemon`,(req,res) => {
    const s = getPokemon(req.params.pokemon);
    res.json(s);
});

module.exports = router;