// Start client and resize app
let client = ZAFClient.init();

client.on("app.registered", (e) => {
  client.invoke("resize", { width: "100%", height: "130px" });
});

const dados = await client.get(['ticket.id'])


client.on('putAdress', (content) => {
  client.request({
    url: `/api/v2/tickets/${dados['ticket.id']}.json`, 
    type: 'PUT',
    data: {
      ticket: {
        comment: {
          body: content
        }
      }
    }
  })
})

// Create screen context
import Main from "./Main.js";
Main();
