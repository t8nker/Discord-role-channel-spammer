const { Client } = require('discord.js');
const token = 'your_token_here';
const client = new Client();
const Prefix = '-'

//Bot needs admin to work


client.on('message', async msg => {
  if (msg.content === Prefix + 'channel')
  {
    msg.delete();
    var i;
    for ( i=0  ; i <= 250; i++) // makes 250 channels named ' channel '
    {
    var channel = await msg.guild.createChannel('channel'); // change ('channel')  to what you want

    }

  }
  if (msg.content === Prefix + 'role')
  {
    msg.delete();

    for ( i=0  ; i <= 300; i++) // makes 250 roles named 'role'
    {

    await msg.guild.createRole({name:'role'}) // Change ({name:'role'}) to what you want

  }
}

});
client.login(token).catch(console.error);
