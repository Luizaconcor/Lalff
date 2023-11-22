import React from 'react';
import {App, AppBody, Button} from "./styleBotaoPesquisar"

function BotaoP() {

  return (
    <App> 
      <AppBody>
        <Button to={"/pesquisa"}>
          Pesquisar 
        </Button>
      </AppBody>
    </App>
  );
}

export default BotaoP;
