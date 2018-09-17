const whosOnline = (friends) => {
    let who = {}
    
    for (var i=0; i<friends.length; i++){
      if (friends[i].status === "online" && friends[i].lastActivity <= 10){
        who.online = [];
        who.online.push(friends[i].username)
      } else if (friends[i].status === "online" && friends[i].lastActivity > 10){
        who.away = [];
        who.away.push(friends[i].username)    
      } else {
        who.offline = [];
        who.offline.push(friends[i].username)
      }
    }
  
    return who
  }

  