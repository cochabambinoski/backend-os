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

router.get(`/api/pokemon/`, async (req,res) => {
   if(req.query.sprites.front_default || req.params.sprites.front_shiny){
        const s = await getPokemon(req.query.name);
        res.json(s.sprites.front_default);

   } else {
       res.send("Incorrect type");
   }   
});

/* router.post(`/api/post/:pokemon&:itype`,(req,res)=>{
    if (fs.existsSync('./assets/{pokemon}_{itype}')) {
        res.send('Pokemon already registered')
    } else {
        const s = getPokemon(req.params.pokemon);
        download(s.sprites.front_default,req.params.pokemon + "_"+req.params.itype,function(){
            console.log("pokemon saved")
        });
    }
}) */

module.exports = router;