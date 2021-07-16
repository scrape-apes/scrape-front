export function respond(chat){
    const slicedChat = chat.slice(-1)[0].split(' ').slice(0, 3).join(' ');
    if (slicedChat === 'I need a'){
      const response = `Looking for a ${chat.slice(-1)[0].split(' ').slice(-1)[0]}!`;
      return response;
    }
    return false;
    //I need a
  }