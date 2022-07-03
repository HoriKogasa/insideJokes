const cmd = require('discord.js-commando');
const discord = require('discord.js');
//const { OpusEncoder } = require('@discordjs/opus');
const path = require('path');
const fs = require("fs");
const cron = require('node-cron');
const Keyv = require('keyv');
const ytdl = require('ytdl-core')
const config = require('./package.json')
const ytSearch = require('yt-search');
const queue = new Map();

let taan;let taan4;
let num = new Array(4);
let ans = new Array(4);

// Response for Uptime Robot
const http = require('http');
http.createServer(function(request, response)
{
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Discord bot is active now \n');
}).listen(3000);

// Discord bot implements
const client = new discord.Client();

client.on('ready', message =>
{
  client.user.setActivity("ID:INVADED",{type:'WATCHING'}); 
	console.log('bot is ready!');
});

// cron.schedule('秒 分 時間 日付 月 曜日', () => {
cron.schedule('0 0 0 * * *', () => {
     client.channels.cache.get('788385674209656902').send("しゃろほー");
})


// 以下メッセージ用~~~~~~~~~~~~~~~~~~~~~~~~~~

client.on('message', message =>
{
  if (message.author.id == client.user.id || message.author.bot){
    return;
  }
	if(message.content.match(/^慧/))
	{
    let react = '🤔';
    message.react(react);
    const embed = new discord.MessageEmbed()
    .setTitle('○○君のウェブサイト')
    .setURL('https://')
    .addField("○○",message.content)
    .setColor('RANDOM')
    .setTimestamp()
    message.channel.send(embed)
		return;
	}
  
  if(message.content === "keihelp" || message.content ==="!keihelp")
    {
      message.channel.send("<コマンド一覧>\n・`keihelp` <@773154208857063434>のヘルプを表示\n・`!nume` ヌメロンの説明が見れる\n・`!nume3` 三桁のヌメロンを開始する\n・`!nume4` 四桁のヌメロンを開始する\n・`慧から始まる言葉` 慧君のウェブサイトのリンクがもらえる\n・`!kei` BOTが少し考えながら罵倒する(2%でツンデレする）\n・`美少女が言いたいことがあるんだって！` 美少女が何か言いたげです\n・`!help` 客を他のBOTに取られないように対抗します。\n・`!typequick` 出されたお題をタイピングしましょう。反射神経とタイピング力が大事です\n・`!quiz1` １分以内に答えが１文字の問題を解くことができる。\n・`!ぴんぐ` このbotのping値を表示するよ。お前のじゃないよ。\n・`!空気` 通話の空気が悪くなったら洗浄します。\n・`!メニメニ` いい声の人がメニメニとかマニマニします。\n・`!hai` 挽きたてな大泉が歌います。\n・`!hai2` !hai2 0.8のようにして大泉の返事の音量をを変更します。(指定なしは0.6)\n・`!king` 怒られても知らないよ。\n・`!biyori` うえだゆうじがボディラインを歌うだけ。\n・`!じょいん` 通話に楽しそうに入ります。\n・`!うるさい` 通話から無言で抜けます。\n~ヌメロン中限定コマンドは`!nume`を参照してください~")
    }
  if(message.content === "!help")
    {
      message.channel.send("私のhelpコマンドは`keihelp`だよ！")
    }
  if(message.content ==="!nume")
    {
      message.channel.send("＜ヌメロンのコマンド一覧＞\n・`!nume3` で3桁のヌメロンを開始できます。\n・`!nume4` で4桁のヌメロンを開始できます。\n・`fnume`または`!fnume`など ヌメロンを強制終了させます。\n・`!taan` 現在のターン数を確認できます\n・`!kotae` 答えを表示します。\nまた、ヌメロン開始中に`!nume3`か`!nume4`を実行すると新しい乱数が生成され、ターン数が0になります\n・ヌメロンのルールはググってね")
    }
  if(message.content ==="美少女が言いたいことがあるんだって！")
    {
      message.channel.send("更新情報（最終更新日2021年1月7日）\n・`!quiz1` `!king` `!ぴんぐ` `!hai` `!hai2` `!biyori` `!じょいん`　コマンドの実装")
    }
  if(message.content ==="!flip")
    {
      var flip = Math.floor( Math.random() * 2 )
      console.log(flip)
      if(flip === 0){
      message.channel.send("表が出ました。")
      }else{
      message.channel.send("今回は裏です。")
      } 
    }
  if(message.content ==="!lobaslot")
    {
      const lobaemoji = ["<:loba:936490873347260436>","<:good_hair_loba:954389170208518184>","<:lobanaki:939465032499085312>"];
      var flips = [];
      flips.push(Math.floor( Math.random() * 3 ))
      flips.push(Math.floor( Math.random() * 3 ))
      flips.push(Math.floor( Math.random() * 3 ))
      var lobaresult;
      if(flips[0] === flips[1] & flips[1] === flips[2]){
        lobaresult = "🎉";
      }else{
        lobaresult = "Boo<:lobanaki:939465032499085312>";
      }
      message.channel.send(lobaemoji[flips[0]]+"|"+lobaemoji[flips[1]]+"|"+lobaemoji[flips[2]]+"|\n"+lobaresult)
    }
  if(message.content ==="!ro-basurotto"){
    message.channel.send("<:poG:743803057573462036>|<:poG:743803057573462036>|<:poG:743803057573462036>|\nYuubu Gotto JakkupoG poGpoGpoG Konguracchureishonzu<:mutsuPOGorou:953005887591678062>")
  }
  
  if(message.content ==="!hugslot")
    {
      const hugemoji = ["<:yajue_hugging:955495519797526528>","🫂"];
      var hugflips = [];
      hugflips.push(Math.floor( Math.random() * 2 ))
      hugflips.push(Math.floor( Math.random() * 2 ))
      hugflips.push(Math.floor( Math.random() * 2 ))
      var hugresult;
      if(hugflips[0] === hugflips[1] & hugflips[1] === hugflips[2]){
        hugresult = "<:yajue_hugging:955495519797526528>";
      }else{
        hugresult = "Boo🫂";
      }
      message.channel.send(hugemoji[hugflips[0]]+"|"+hugemoji[hugflips[1]]+"|"+hugemoji[hugflips[2]]+"|\n"+hugresult)
    }
  if(message.content ==="!hagusurotto"){
    message.channel.send("<:yajue_hugging:955495519797526528>🫂<:yajue_hugging:955495519797526528><:yajue_hugging:955495519797526528>🫂<:yajue_hugging:955495519797526528>🫂\n<:yajue_hugging:955495519797526528>🫂<:yajue_hugging:955495519797526528><:yajue_hugging:955495519797526528>🫂<:yajue_hugging:955495519797526528>🫂\n<:yajue_hugging:955495519797526528>🫂<:yajue_hugging:955495519797526528><:yajue_hugging:955495519797526528>🫂🫂<:yajue_hugging:955495519797526528>🫂<:yajue_hugging:955495519797526528>🫂\n🫂<:yajue_hugging:955495519797526528>🫂<:yajue_hugging:955495519797526528>🫂<:yajue_hugging:955495519797526528><:yajue_hugging:955495519797526528>🫂")
  }

  if(message.content ==="!vote")
    {
      message.addReaction('👍');
      message.addReaction(':-1:');
    }
// });

/*client.on('messageDelete', async message => {
   if (!message.guild) return // メッセージが送信された場所がサーバーでなければ処理しない。
   if (message.author.bot){
    return;}
 
   const log = (await message.guild.fetchAuditLogs({ type: 'MESSAGE_DELETE' })).entries.first()
   if (!log) return // メッセージが削除されたログが無ければ処理しない。
 
   const executor = log.executor // これがメッセージを削除したユーザーのオブジェクトです。
 
   client.channels.cache.get('788385674209656902').send(`${message.author.tag}のメッセージが削除されました。以下消されたメッセージ`)
   client.channels.cache.get('788385674209656902').send("**"+message.content+"**");
 })*/

/*
client.on('message', message =>
{
*/
    if (message.content=="!空気" && message.member.voice.channel)
    {
        message.member.voice.channel.join().then( connection => {
            const dispatcher = connection.play('https://cdn.glitch.com/500db5f4-7beb-41b5-be47-3ab3d186e4f6%2Fkuukion.mp3?v=1613127442383');
            dispatcher.setVolume(0.4);
            dispatcher.on('finish', ()=> {
                message.member.voice.channel.leave();
            });
        })
        .catch(console.log);
        return;
    }else if(message.content=="!空気")
      {
        message.channel.send("まず通話に入ってください")
      }
  
    if (message.content=="!メニメニ" && message.member.voice.channel)
    {
        message.member.voice.channel.join().then( connection => {
            const dispatcher = connection.play('https://cdn.glitch.com/500db5f4-7beb-41b5-be47-3ab3d186e4f6%2Fmenimeni.wav?v=1613127545556');
            dispatcher.setVolume(0.05);
          
            dispatcher.on('finish', ()=> {
                message.member.voice.channel.leave();
            });  
        })
        .catch(console.log);
        return;
    }else if(message.content=="!メニメニ")
      {
        message.channel.send("まず通話に入ってください")
      }
  
  if (message.content=="!hai" && message.member.voice.channel)
    {
        message.member.voice.channel.join().then( connection => {
            const dispatcher = connection.play('https://cdn.glitch.com/500db5f4-7beb-41b5-be47-3ab3d186e4f6%2Fhai.mp3?v=1613127457347');
            dispatcher.setVolume(0.1);
            dispatcher.on('finish', ()=> {
                message.member.voice.channel.leave();
            });
        })
        .catch(console.log);
        return;
    }else if(message.content=="!hai")
      {
        message.channel.send("まず通話に入ってください")
      }
  
  if (message.content=="!biyori" && message.member.voice.channel)
    {
        message.member.voice.channel.join().then( connection => {
            const dispatcher = connection.play('https://cdn.glitch.com/500db5f4-7beb-41b5-be47-3ab3d186e4f6%2Fy2mate.com%20-%20%E3%82%AE%E3%83%A3%E3%82%B0%E3%83%9E%E3%83%B3%E3%82%AC%E6%97%A5%E5%92%8C3%20%20%20%E3%83%9C%E3%83%87%E3%82%A3%E3%83%A9%E3%82%A4%E3%83%B3.mp3?v=1613127464153');
            dispatcher.setVolume(0.2);
            dispatcher.on('finish', ()=> {
                message.member.voice.channel.leave();
            });
        })
        .catch(console.log);
        return;
    }else if(message.content=="!biyori")
      {
        message.channel.send("まず通話に入ってください")
      }
  
  if (message.content=="!じょいん" && message.member.voice.channel)
    {
        message.member.voice.channel.join().then( connection => {
            const dispatcher = connection.play('https://cdn.glitch.com/500db5f4-7beb-41b5-be47-3ab3d186e4f6%2Fbandicam-2021-01-04-19-57-55-087.mp3?v=1613127792162');
            dispatcher.setVolume(1);
        })
        .catch(console.log);
        return;
    }else if(message.content=="!じょいん")
      {
        message.channel.send("まず通話に入ってください")
      }

  if (message.content=="!king" && message.member.voice.channel)
    {
      
        console.log("じょうずなking");
        message.member.voice.channel.join().then( connection => {
            const dispatcher = connection.play('https://cdn.glitch.com/500db5f4-7beb-41b5-be47-3ab3d186e4f6%2F2020_12_06_16_09_41.mp3?v=1613127528656');
            dispatcher.setVolume(0.5);
            dispatcher.on('finish', ()=> {
                message.member.voice.channel.leave();
            });
        })
        .catch(console.log);
        return;
    }else if(message.content=="!king")
      {
        message.channel.send("まず通話に入ってください")
      }
  
    if ((message.content=="!うるさい" || message.content=="！うるさい" || message.content=="うるさい"||message.content=="urusai" || message.content=="!urusai" || message.content=="<:urusai:795609322062086174>") && message.member.voice.channel)
    {
        message.member.voice.channel.leave();
        return;
    }

});

client.on("message",async message=>
{
  if (message.author.id == client.user.id || message.author.bot){
    return;}
    
  if (message.content === '!typequick') {
    let ransuu; let mojiretu;
    ransuu=Math.floor(Math.random()*5);
    switch(ransuu)
      {
        case 0:
          mojiretu="私はタイピングが速いです。";
          break;
        case 1:
          mojiretu="柿の種カレー味が好き"
          break;
        case 2:
          mojiretu="貴重な水分です。黄色く濁っていますが今はこれを飲むしかありません。"
          break;
        case 3:
          mojiretu="回砂利水魚のあだ様と添い寝"
          break;
        case 4:
          mojiretu="赤いきつねと緑のたぬき"
          break;
      }
     message.channel.send(""+mojiretu+"と5秒以内に入力してください")
     const filter = msg => msg.author.id === message.author.id
     const collected = await message.channel.awaitMessages(filter, { max: 1, time: 5000 })
     const response = collected.first()
     if (!response) return message.channel.send('**失敗**：時間切れ')
     if (![mojiretu].includes(response.content)) return message.channel.send('**失敗**：入力された文字が正しくありません')
     message.channel.send("**成功！**https://krha0024.github.io/homepage/")
   }
  
  if (message.content === '!quiz1') {
    let ransuu; let mojiretu; let kotae;
    ransuu=Math.floor(Math.random()*5);
    switch(ransuu)
      {
        case 0:
          mojiretu="お き ❔ あ あ　（答えはひらがなで）";
          kotae="き";
          break;
        case 1:
          mojiretu="N + N + E = 1\nS + S + E = 5\n❔ = 9（答えは半角英大文字で）"
          kotae="W"
          break;
        case 2:
          mojiretu="ボールペンと消しゴム合わせて110円\nボールペンは消しゴムより100円高い\n消しゴム=❔円（答えは半角英数字で）"
          kotae="5"
          break;
        case 3:
          mojiretu="◆=〇×2\n★-◆=〇\n★=〇×❔(答えは半角英数字で)"
          kotae="3"
          break;
        case 4:
          mojiretu="大 小 大 小 大 小 大 ❔ 小 大 小 大 （答えは漢字一文字で）"
          kotae="大"
          break;
      }
     message.channel.send("||"+mojiretu+"||　←をクリックして表示\n❔に入る**1**文字を**1**分以内に答えてください")
     const filter = msg => msg.author.id === message.author.id
     const collected = await message.channel.awaitMessages(filter, { max: 1, time: 60000 })
     const response = collected.first()
     if (!response) return message.channel.send('**失敗**：時間切れ')
     if (![kotae].includes(response.content)) return message.channel.send('**失敗**：はずれです。')
     message.channel.send("**正解！**")
   }
  
  if(message.content == "!syutoku")
    {
      const kotoba = await message.channel.messages.fetch({ limit: 1 });
      client.channels.cache.get('528421629240410112').send(`
      fetchしたメッセージ:
      ${kotoba.map(m => m.content).join('\n')}
    `)
      //message.channel.send("実行はされた")
      
      if(message.content.match(/^予定/))
    {
      const tuki = message.content.split(' ')[1];
      const niti = message.content.split(' ')[2];
      const yotei = message.content.split(' ')[3];
      
      if(!tuki || !niti || !yotei)
        {
          message.channel.send("入力形式が間違っています。`予定 12 21 ○○生誕祭`のようにしてください。");
        }else
        {
          
        }
    }
    }
  
})//asyncのカッこ

client.on("guildMemberRemove", member => {
   const period = Math.round((Date.now() - member.joinedAt) / 86400000) // サーバーに居た期間を日数にして計算
   
   client.channels.cache.get("528421629240410112").send(member.user.tag+"は"+member.guild.name+"に約"+period+"日間参加していました。/nご冥福をお祈り申し上げます。");
   console.log(`${member.user.tag}は${member.guild.name}に約${period}日間サーバーに参加していました。`)
 })

client.on('message',message =>
{
  if (message.author.id == client.user.id || message.author.bot){
    return;
  }
  
  if(message.content === "!kei")
    {
      let ransuu;
      ransuu=Math.floor(Math.random()*100);
      if(ransuu==1 || ransuu==10)
        {
          message.channel.startTyping()
          setTimeout(() => {
          message.channel.stopTyping()
          message.reply('うるさい！')},3000);
        }else
        {
            message.channel.startTyping()
            setTimeout(() => {
            message.channel.stopTyping()
            message.reply('うるさいな')
            }, 1000)
        }
    }
  
  if(message.content==="!ぴんぐ")
    {
      //message.channel.send("今のpingは"+client.ws.ping+"msです。");
      const embed = new discord.MessageEmbed()
      .addField(`͏	\n⌛ ${client.ws.ping}ms`,"͏	")
      .setColor('RANDOM')
      message.channel.send(embed)
    }
  
  if(message.author.id == 494806876249391105 && message.content=="メンテ")
    {
      //message.channel.send("メンテナンス中です。")
      client.channels.cache.get('788385674209656902').send('**メンテナンス中です**')
    }
  if(message.author.id == 494806876249391105 && message.content=="終わり")
    {
      client.channels.cache.get('788385674209656902').send('**メンテナンス終わりました**')
      //message.channel.send("メンテナンス終わりました。")
    }
  if(message.author.id == 494806876249391105 && message.content=="ほめて")
    {
      client.channels.cache.get("788385674209656902").send("`!quiz1`をやってほしい")
    }
  
  if(message.author.id == 507153065887924224)
    {
      message.channel.send("あなたは喋らないで、<@507153065887924224>");
      
      //message.author.send("お前は喋んなカス");
    }
  if(message.author.id == 366295277239533569 && message.content=="kei")
    {
      //message.channel.send("慧君がしゃべったあああああああ");
      let ransuu;
      ransuu=Math.floor( Math.random() * 5 );
      switch(ransuu)
      {
        case 0:
          message.author.send("突然のDM失礼します！○○さんですよね！\nこれから仲良くしてくれたらうれしいです！");
          break;
          
        case 1:
          message.author.send("やぁ、私だよ。そう、私はお前。");
          break;
          
        case 2:
          message.author.send("○○君勉強頑張らないと悲しくなっちゃうよ");
          break;
          
        case 3:
          message.author.send("お金欲しいね。");
          break;
          
        case 4:
          message.author.send("所詮君は○○君");
          break;
          
        case 5:
          message.author.send("○○君早く寝よう");
          break;
      }
    }
  
    if(taan>0 && message.content=="!nume4")
    {
      fs.writeFile("taan.txt", 0, (err) => {
      if (err) throw err;
      //console.log('正常に書き込みが完了しました');
      });
    }
  if(taan4>0 && message.content=="!nume3")
    {
      fs.writeFile("taan4.txt", 0, (err) => {
      if (err) throw err;
      //console.log('正常に書き込みが完了しました');
      });
    }
  
  if(message.content.match(/^!taan/) && taan>0 && taan4==0)
    {
      fs.readFile("taan.txt", "utf-8", (err, data) => {
      if (err) throw err;
      taan=Number(data);
      });
      message.channel.send(taan-1);
    }
  if(message.content.match(/^!taan/) && taan4>0 && taan==0)
      {
        fs.readFile("taan4.txt", "utf-8", (err, data) => {
        if (err) throw err;
        taan4=Number(data);
        });
      message.channel.send(taan4-1);
      }
  
  if(message.content.match(/fnume/))
    {
      message.channel.send("ヌメロンを終わります。");
      taan=0;taan4=0;
      fs.writeFile("taan.txt", taan, (err) => {
      if (err) throw err;
      //console.log('正常に書き込みが完了しました');
      });
      fs.writeFile("taan4.txt", taan4, (err) => {
      if (err) throw err;
      //console.log('正常に書き込みが完了しました');
      });
    }
  
  if(taan4>0 && message.content.match(/^!kotae/))
    {
      message.channel.send(`答えは${ans[3]}${ans[0]}${ans[1]}${ans[2]}だったりします`)
    }else if(taan>0 && message.content.match(/^!kotae/))
    {
      message.channel.send(`答えは${ans[0]}${ans[1]}${ans[2]}だったりします`)
    }
  
	if(message.content.match(/^!nume4/))
	{
    let react = '🤔';//一応リアクションはつける
    message.react(react);
    
    taan4=1;
    fs.writeFile("taan4.txt", taan4, (err) => {
    if (err) throw err;
    //console.log('taan正常に書き込みが完了しました'+Number(taan));
    });
    
    
      do{
        ans[0]=Math.floor( Math.random() * 10 );
        ans[1]=Math.floor( Math.random() * 10 );
        ans[2]=Math.floor( Math.random() * 10 );
        ans[3]=Math.floor( Math.random() * 10 );
      }while(ans[0]==ans[1] || ans[1]==ans[2] || ans[0] == ans[2] || ans[0] == ans[3] || ans[3] == ans[1] || ans[3] == ans[2])
    
    let data=(ans[3]*1000)+(ans[0]*100)+(ans[1]*10)+ans[2];
    
    fs.writeFile("ans.txt", data, (err) => {
    if (err) throw err;
    //console.log('正常に書き込みが完了しました');
    });
    
    //message.channel.send(Number(data));
    
    message.channel.send("被りのない四桁の乱数を生成しました。\nHITとBLOWを返すので当ててください。\n(注意：4桁以下の数字を宣言した場合宣言されていない桁は0になります。)")
    //message.channel.send(ans[0]+""+ans[1]+""+ans[2]);    
	}//!numeから始まるときの括弧
  
  if(message.content === "!nume3")
	{
    let react = '🤔';//一応リアクションはつける
    message.react(react);
    
    taan=1;
    fs.writeFile("taan.txt", taan, (err) => {
    if (err) throw err;
    //console.log('taan正常に書き込みが完了しました'+Number(taan));
    });
    
    
      do{
        ans[0]=Math.floor( Math.random() * 10 );
        ans[1]=Math.floor( Math.random() * 10 );
        ans[2]=Math.floor( Math.random() * 10 );
      }while(ans[0]==ans[1] || ans[1]==ans[2] || ans[0] == ans[2])
    
    let data=(ans[0]*100)+(ans[1]*10)+ans[2];
    
    fs.writeFile("ans.txt", data, (err) => {
    if (err) throw err;
    //console.log('正常に書き込みが完了しました');
    });
    
    message.channel.send("被りのない三桁の乱数を生成しました。\nHITとBLOWを返すので当ててください。\n(注意：3桁以下の数字を宣言した場合宣言されていない桁は0になります。)")
    //message.channel.send(ans[0]+""+ans[1]+""+ans[2]);    
	}//!numeから始まるときの括弧
  
  //message.channel.send(Number(message.content));
  
  fs.readFile("taan.txt", "utf-8", (err, data) => {
  if (err) throw err;
  taan=Number(data);
  });
  fs.readFile("taan4.txt", "utf-8", (err, data) => {
  if (err) throw err;
  taan4=Number(data);
  });
  
  if(taan!=0 && Number(message.content)<999 && Number(message.content)>0 &&taan4==0)
    {
      //message.channel.send("turai");
        let hit=0;
        let blow=0;
        num[0]=parseInt(Number(message.content)/100,10);
        num[1]=parseInt(Number(message.content)%100/10,10);
        num[2]=parseInt(Number(message.content)%10,10);
        
        fs.readFile("taan.txt", "utf-8", (err, data) => {
        if (err) throw err;
        taan=Number(data);
        });
        taan++;
        console.log("+1した時のtaanは"+taan+"です。");
        fs.writeFile("taan.txt", taan, (err) => {
        if (err) throw err;
        //console.log('taan正常に書き込みが完了しました:'+Number(taan));
        });
      
        fs.readFile("ans.txt", "utf-8", (err, data) => {
        if (err) throw err;
        //message.channel.send(data);
        ans[0]=parseInt(Number(data)/100,10);
        ans[1]=parseInt(Number(data)%100/10,10);
        ans[2]=parseInt(Number(data)%10,10);
        });
      
        if(num[0]==ans[0])
            {
              hit++;
            }
          if(num[1]==ans[1])
            {
              hit++;
            }
          if(num[2]==ans[2])
            {
              hit++;
            }
          if(num[0]==ans[1] || num[0]==ans[2])
            {
              blow++;
            }
          if(num[1]==ans[0] || num[1]==ans[2])
            {
              blow++;
            }
          if(num[2]==ans[0] || num[2]==ans[1])
            {
              blow++;
            }
          message.channel.send("HIT:"+hit+" BLOW:"+blow);
      
          if(hit==3)//終了処理
          {
            fs.readFile("taan.txt", "utf-8", (err, data) => {
              if(err) throw err;
            taan=Number(data);
            });
            message.channel.send("**正解**です。"+(Number(taan)-1)+"回かかりました。");
            if(Number(taan)==2)
              {
                message.channel.send("不正か？");
              }
            
            taan=0;
            fs.writeFile("taan.txt", taan, (err) => {
            if (err) throw err;
            //console.log('正常に書き込みが完了しました');
            });
            
          }
    }//数字だけ入力された際の
  
  if(taan4!=0 && Number(message.content)<9999 && Number(message.content)>0 && taan==0)
    {
      //message.channel.send("turai");
        let hit=0;
        let blow=0;
        num[3]=parseInt(Number(message.content)/1000,10);
        num[0]=parseInt(Number(message.content)%1000/100,10);
        num[1]=parseInt(Number(message.content)%100/10,10);
        num[2]=parseInt(Number(message.content)%10,10);
        
        fs.readFile("taan4.txt", "utf-8", (err, data) => {
        if (err) throw err;
        taan4=Number(data);
        });
        taan4++;
        console.log("+1した時のtaanは"+taan4+"です。");
        fs.writeFile("taan4.txt", taan4, (err) => {
        if (err) throw err;
        //console.log('taan正常に書き込みが完了しました:'+Number(taan));
        });
      
        fs.readFile("ans.txt", "utf-8", (err, data) => {
        if (err) throw err;
        //message.channel.send(data);
        ans[3]=parseInt(Number(data)/1000,10);
        ans[0]=parseInt(Number(data)%1000/100,10);
        ans[1]=parseInt(Number(data)%100/10,10);
        ans[2]=parseInt(Number(data)%10,10);
        });
      
        if(num[0]==ans[0])
            {
              hit++;
            }
          if(num[1]==ans[1])
            {
              hit++;
            }
          if(num[2]==ans[2])
            {
              hit++;
            }
          if(num[3]==ans[3])
            {
              hit++;
            }
          if(num[0]==ans[1] || num[0]==ans[2] || num[0]==ans[3])
            {
              blow++;
            }
          if(num[1]==ans[0] || num[1]==ans[2] || num[1]==ans[3])
            {
              blow++;
            }
          if(num[2]==ans[0] || num[2]==ans[1] || num[2]==ans[3])
            {
              blow++;
            }
          if(num[3]==ans[0] || num[3]==ans[1] || num[3]==ans[2])
            {
              blow++;
            }
          message.channel.send("HIT:"+hit+" BLOW:"+blow);
      
          if(hit==4)//終了処理
          {
            fs.readFile("taan4.txt", "utf-8", (err, data) => {
              if(err) throw err;
            taan4=Number(data);
            });
            message.channel.send("**正解**です。"+(Number(taan4)-1)+"回かかりました。");
            if(Number(taan4)==2)
              {
                message.channel.send("不正か？");
              }
            
            taan4=0;
            fs.writeFile("taan4.txt", taan4, (err) => {
            if (err) throw err;
            //console.log('正常に書き込みが完了しました');
            });
            
          }
    }//数字だけ入力された際の
  
});//messageの括弧

/*
client.on('message', async message => {
  
  if(message.content=="nukero")
    {
      const channel=message.member.voice.channel
      channel.leave();
    }
   // メッセージが "!yt" からはじまっていてサーバー内だったら実行する
   if (message.content.startsWith('!yt') && message.guild) {
     // メッセージから動画URLだけを取り出す
     const url = message.content.split(' ')[1]
     // まず動画が見つからなければ処理を止める
     if (!ytdl.validateURL(url)) return message.reply('動画が存在しません！')
     // コマンドを実行したメンバーがいるボイスチャンネルを取得
     const channel = message.member.voice.channel
     // コマンドを実行したメンバーがボイスチャンネルに入ってなければ処理を止める
     if (!channel) return message.reply('先にボイスチャンネルに参加してください！')
     // チャンネルに参加
     const connection = await channel.join()
     // 動画の音源を取得
     const stream = ytdl(ytdl.getURLVideoID(url), { filter: 'audioonly' })
     // 再生
     const dispatcher = connection.play(stream)
     dispatcher.once()
   }
 })
*/

if(process.env.DISCORD_BOT_TOKEN == undefined)
{
	console.log('please set ENV: DISCORD_BOT_TOKEN');
	process.exit(0);
}

client.login( process.env.DISCORD_BOT_TOKEN );
