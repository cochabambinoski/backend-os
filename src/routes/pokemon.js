const {Router} = require('express');
const router = Router();
const fetch = require('node-fetch');

const download = require('../image-download')

const getPokemon = async (pokemonName) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`    
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)    
    return data
}

router.get(`/api/pokemon/:pokemon&:itype`,(req,res) => {
    if(req.params.itype==="front_default" || req.params.itype==="front_shiny"){
        const s = getPokemon(req.params.pokemon);
        download(s.sprites.front_default,req.params.pokemon + "_"+req.params.itype,function(){
            console.log("image saved")
        });
        res.json(s);

    } else {
        res.send("Incorrect type");
    }

});

module.exports = router;